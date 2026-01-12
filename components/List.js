
import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, StyleSheet, FlatList } from 'react-native';
import style from '../Style';

export default function List({ route }) {
  const city = route.params?.city;
  const [forecast, setForecast] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchForecast() {
      if (!city) return;
      setLoading(true);
      try {
        const geoRes = await fetch(
          `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1`
        );
        const geoData = await geoRes.json();
        if (!geoData.results || geoData.results.length === 0) {
          throw new Error('Ville non trouvée');
        }
        const { latitude, longitude, name } = geoData.results[0];

        const metRes = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=temperature_2m_max,temperature_2m_min,weathercode&timezone=Europe/Paris`
        );
        const metData = await metRes.json();

        setForecast({ city: name, ...metData.daily });
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    }
    fetchForecast();
  }, [city]);

  if (loading) return <ActivityIndicator style={style.loader} />;
  if (error) return <Text style={style.text}>Erreur : {error}</Text>;
  if (!forecast) return <Text style={style.text}>Aucune prévision disponible.</Text>;

  return (
    <View style={style.list}>
      <Text style={style.title}>Prévisions pour {forecast.city}</Text>
      <FlatList
        data={forecast.time}
        keyExtractor={(item, index) => index.toString()}

        renderItem={({ item, index }) => {
            const dateObj = new Date(item);
            const formattedDate = new Intl.DateTimeFormat('fr-FR', {
                weekday: 'long',
                day: 'numeric',
                month: 'long',
            }).format(dateObj);

            return (
                <View style={style.day}>
                <Text style={style.date}>{formattedDate}</Text>
                <Text style={style.temp}>
                    {forecast.temperature_2m_min[index]}°C / {forecast.temperature_2m_max[index]}°C
                </Text>
                </View>
            );
        }}

      />
    </View>
  );
}

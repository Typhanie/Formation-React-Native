import { Image } from 'react-native';
import About from './components/About';
import Search from './components/Search';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function App() {
  return (  
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen 
          name="Search" 
          component={Search} 
          options={{
            title: 'Search',
            tabBarIcon: () => (
              <Image
                source={require('./components/icons/search.png')}
                style={{ width: 24, height: 24 }}
                resizeMode="contain"
              />
            ),
          }}
        />

        <Tab.Screen
          name="About"
          component={About}
          options={{
            title: 'About',
            tabBarIcon: () => (
              <Image
                source={require('./components/icons/about.png')}
                style={{ width: 24, height: 24 }}
                resizeMode="contain"
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

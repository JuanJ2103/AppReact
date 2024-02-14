import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Icon } from '@rneui/base';
import HomeStack from '../stack/HomeStack';
import NewsStack from '../stack/NewsStack';
import ProfileStack from '../stack/ProfileStack';
import SportsStack from '../stack/SportsStack';

const Tab = createBottomTabNavigator();

export default function Navigation() {


    return (

        <NavigationContainer>

            <Tab.Navigator 
             screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            const { iconName, iconType } = getIconName(route.name, focused);
            // Retornar un Icon de React Native Elements
            return <Icon name={iconName} type={iconType} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
        
        >
                
            <Tab.Screen
                    name='HomeStack'
                    component={HomeStack}
                    options={{ title: "Home" }} />
            
            <Tab.Screen
                    name='NewsStack'
                    component={NewsStack}
                    options={{ title: "News" }} />
            
            <Tab.Screen
                    name='ProfileStack'
                    component={ProfileStack}
                    options={{ title: "Profile" }} />

            <Tab.Screen
                    name='SportsStack'
                    component={SportsStack}
                    options={{ title: "Sports" }} />

                    
            </Tab.Navigator>

        </NavigationContainer>



    )
}

const getIconName = (routeName, focused) => {
  let iconName = '';
  let iconType = 'material-community';

  switch (routeName) {
    case 'HomeStack':
      iconName = focused ? 'home' : 'home-outline';
      
      break;
    case 'NewsStack':
      iconName = focused ? 'newspaper' : 'newspaper-variant-outline';
   
      break;
    case 'ProfileStack':
        iconName = focused ? 'account' : 'account-outline';
      
      break;
    case 'SportsStack':
            iconName = focused ? 'football' : 'basketball';
            
            break; 

  }

  return { iconName, iconType };
};
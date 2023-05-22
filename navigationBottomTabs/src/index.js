import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Tela1 from "./telas/tela1";
import Tela2 from "./telas/tela2";
import Tela3 from "./telas/tela3";

const Tab = createBottomTabNavigator();
function MyTabs() {
        return (
        <Tab.Navigator
        initialRouteName="Tela 1"
        tabBarOptions={{
        activeTintColor: '#e91e63',
        showIcon: true 
        }}
        >
        <Tab.Screen
        name="Tela 1"
        component={Tela1}
        options={{
            showIcon: true, 
            tabBarLabel: 'Tela 1',
            tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="numeric-1-box-multiple" color={color} size={size} />
            ),
        }}
        />
        <Tab.Screen
        name="Tela 2"
        component={Tela2}
        options={{
            tabBarLabel: 'Tela 2',
            tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="numeric-2-box-multiple" color={color} size={size} />
            ),
            tabBarBadge: 3,
        }}
        />
        <Tab.Screen
        name="Tela 3"
        component={Tela3}
        options={{
            tabBarLabel: 'Tela 3',
            tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="numeric-3-box-multiple" color={color} size={size} />
            ),
        }}
        />
        </Tab.Navigator>
  );
}

export default function Telas(){
  return(
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  )
}
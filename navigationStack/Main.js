import 'react-native-gesture-handler';
import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Tela1 from './src/telas/tela1';
import Tela2 from './src/telas/tela2';


const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
      initialRouteName="Tela 1"
      screenOptions={{
        headerMode: 'screen',
        headerTintColor: 'white',
        headerStyle: { backgroundColor: 'tomato' },
      }}
    >
      <Stack.Screen
        name="Tela 1"
        component={Tela1}
        options={{
          title: 'Tela 1',
        }}
      />
      <Stack.Screen
        name="Tela 2"
        component={Tela2}
        options={{
          title: 'Tela 2',
        }}
      />
    </Stack.Navigator>
  );
}
const Main = () => {
  return(
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  )
} 

export default Main;
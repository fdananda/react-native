import React from 'react';
import {Text, View} from 'react-native';

const App = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>Hello, world!</Text>
      <Text style={{padding: 15}}>Referência: https://reactnative.dev/docs/getting-started?syntax=functional</Text>
    </View>
  );
};

export default App;
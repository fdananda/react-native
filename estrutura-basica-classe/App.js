import React, {Component} from 'react';
import {Text, View} from 'react-native';

class App extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>Hello, world!</Text>
        <Text style={{padding: 15}}>Referência: https://reactnative.dev/docs/getting-started?syntax=classical</Text>
      </View>
    );
  }
}

export default App;
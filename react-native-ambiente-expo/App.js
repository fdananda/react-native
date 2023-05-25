import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Instalar expo: https://docs.expo.dev/get-started/installation/</Text>
      <Text>npx install expo --global expo-cli</Text>
      <Text></Text>
      <Text>Criar o projeto: https://docs.expo.dev/get-started/create-a-project/</Text>
      <Text>npx create-expo-app nome-do-projeto</Text>
      <Text>cd nome-do-projeto</Text>
      <Text>npx expo start</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
});

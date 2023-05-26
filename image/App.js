import React  from 'react';
import {
  SafeAreaView,
  Image,
  StyleSheet,
  Text,
  StatusBar
} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Imagem local:</Text>
      <Image source={require('./src/images/fernanda.jpg')} style={styles.imagemLocal}/>

      <Text style={styles.title}>Imagem Internet:</Text>
      <Image source={{uri: 'https://1.bp.blogspot.com/-4sGs-Et2uqU/XgdcDTecy-I/AAAAAAABz40/1_6YCA501EQgMFMb9zsZbo4-ksiObS7QQCLcBGAsYHQ/s1600/02-3.jpg'}} style={styles.imagemInternet}/>

      <Text style={styles.referencia}>Referência: https://reactnative.dev/docs/image</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  title: {
    fontSize: 20,
    color: 'grey',
    fontWeight: 'bold',
    paddingLeft: 20
  },
  imagemLocal: {
    width: 200,
    height: 200,
    margin: 20,
    borderRadius: 200
  },
  imagemInternet: {
    width: 200,
    height: 200,
    margin: 20,
    borderRadius: 20
  },
  referencia: {
    padding: 15
  }
});

export default App;
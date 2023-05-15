import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
  
const Main = () => {
  return(
    <View style={styles.container}>
      <Text style={styles.text}>Hello World!</Text>
      <Text style={styles.referencia}>Referência: https://reactnative.dev/docs/stylesheet</Text>
    </View>
  )
} 
const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    text: {
        fontSize: 30,
        fontWeight: 'bold',
        fontFamily: 'Arial',  
        backgroundColor: '#CCC',
        padding: 20,
        borderRadius: 15
    },
    referencia: {
        fontSize: 12,
        fontFamily: 'Arial',  
        color: '#000',
        marginTop: 12,
    }
})

export default Main;
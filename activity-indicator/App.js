import React, {useState} from 'react';
import {ActivityIndicator, StyleSheet, View, Text, Button, TouchableOpacity} from 'react-native';

const App = () => {

  const [mostrar, alterarMostrar] = useState(false)

  const alterarCarregamento = () => {
    alterarMostrar(!mostrar);
  };

  return(
    <View style={styles.container}>
      <View style={styles.horizontal}>
        <ActivityIndicator />
        <ActivityIndicator size="large" />
        <ActivityIndicator size="small" color="#0000ff" />
        <ActivityIndicator size="large" color="#00ff00" />
      </View>
      <ActivityIndicator animating={mostrar} color='#999999' hidesWhenStopped={false} size={100} style={styles.vertical}/>
      <Button title="Mostrar" disabled={mostrar} onPress={() => alterarMostrar(true)}/>
      <Button title="ESconder" disabled={!mostrar} onPress={() => alterarMostrar(false)} />

      <TouchableOpacity onPress={alterarCarregamento}>
        <View
          style={{...styles.botao, backgroundColor: mostrar ? "gray" : "dodgerblue",
          }}
        >
          {mostrar && <ActivityIndicator size="large" color="white" /> }
          <Text style={styles.textoBotao}>
            {mostrar ? "  ....CARREGANDO" : "MOSTRAR (ActivityIndicator no botão)"}
          </Text>
        </View>
      </TouchableOpacity>
       <Text style={styles.referencia}>Referência: https://reactnative.dev/docs/activityindicator</Text>
    </View>    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  vertical: {
    justifyContent: 'center',
    padding: 10,
    margin: 20
  },
  botao: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 15
  },
  textoBotao: {
    color: "#fff",
    fontSize: 18,
    fontWeight: 'bold'
  },
  referencia: {
    padding: 15,
  }

});

export default App;
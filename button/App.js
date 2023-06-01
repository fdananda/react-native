import React from 'react';
import {StyleSheet, Button, View, SafeAreaView, Text, Alert,} from 'react-native';

const Separator = () => <View style={styles.separator} />;

const App = () => (
  <SafeAreaView style={styles.container}>
    <View>
      <Text style={styles.title}>
        Botão habilitado e com cores personalizadas
      </Text>
      <Button
        title="Clique aqui"
        color="tomato"
        onPress={() => Alert.alert('Botão habilitado e com cores personalizadas')}
      />
    </View>
    <Separator />
    <View>
      <Text style={styles.title}>
        Botão desabilitado (não clicável)
      </Text>
      <Button
        title="Clique aqui"
        disabled
        onPress={() => Alert.alert('Botão desabilitado')}
      />
    </View>
    <Separator />
    <View>
      <Text style={styles.title}>
        Estilo em linha para organizar botões lado a lado
      </Text>
      <View style={styles.fixToText}>
        <Button
          title="Botão esquerdo"
          color="tomato"
          onPress={() => Alert.alert('Botão esquerdo')}
        />
        <Button
          title="Botão direito"
          color="tomato"
          onPress={() => Alert.alert('Botão direito')}
        />
      </View>
    </View>
    <Text style={styles.referencia}>Referência:https://reactnative.dev/docs/button</Text>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  referencia: {
    padding: 30,
  }
});

export default App;
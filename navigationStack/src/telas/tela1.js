import React, { Component } from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
  
export default class Tela1 extends Component{

  constructor(props){
    super(props)
    this.abrirTela2 = this.abrirTela2.bind(this)
  }

  abrirTela2(){
    this.props.navigation.navigate("Tela 2")
  }

  render(){
    return(
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Instalar pacotes/dependências de React Navigation: https://reactnavigation.org/docs/getting-started/:</Text>
        <Text>1. npm install @react-navigation/native</Text>
        <Text>2. npm install react-native-screens react-native-safe-area-context</Text>
        <Text>Instalar pacotes/dependências de Stack Navigation: https://reactnavigation.org/docs/stack-navigator</Text>
        <Text>3. npm install @react-navigation/stack</Text>
        <Text>4. npm install react-native-gesture-handler</Text>
        <TouchableOpacity style={{backgroundColor:'tomato', padding: 20, margin: 20, borderRadius: 20}} onPress={this.abrirTela2}>
          <Text style={{color: 'white'}}>Abrir tela 2</Text>
        </TouchableOpacity>
      </View>
    )
  
  }
};
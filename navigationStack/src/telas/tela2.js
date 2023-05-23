import React, { Component }  from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

export default class Tela2 extends Component{

  constructor(props){
    super(props)
    this.abrirTela1 = this.abrirTela1.bind(this)
  }

  abrirTela1(){
    this.props.navigation.navigate("Tela 1")
  }

  render(){
    return(
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Tela 2</Text>
      <TouchableOpacity style={{backgroundColor:'tomato', padding: 20, margin: 20, borderRadius: 20}} onPress={this.abrirTela1}>
        <Text style={{color: 'white'}}>Voltar para tela 1</Text>
      </TouchableOpacity>
    </View>
    )
  }
};

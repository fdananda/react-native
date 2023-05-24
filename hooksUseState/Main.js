import React, {useState} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
  
const Main = () => {

    const [nome, novoNome] = useState("Fernanda")

    function alterarNome(){

       if(nome == "Fernanda"){
        novoNome("Helena")
       }else if(nome == "Helena"){
        novoNome("Fernanda")
       }
    }

  return(
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Olá, {nome}!</Text>
      <TouchableOpacity style={{backgroundColor:'tomato', padding: 15, margin: 20, borderRadius: 15}} onPress={alterarNome}>
          <Text style={{color: 'white'}}>Alterar nome</Text>
        </TouchableOpacity>
    </View>
    
  )
} 

export default Main;
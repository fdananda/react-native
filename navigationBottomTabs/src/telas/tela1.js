import React from 'react';
import {Text, View} from 'react-native';

const Tela1 = () => {
  return(
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Instalar pacotes/dependências de React Navigation: https://reactnavigation.org/docs/getting-started/:</Text>
      <Text>1. npm install @react-navigation/native</Text>
      <Text>2. npm install react-native-screens react-native-safe-area-context</Text>
      <Text>Instalar pacotes/dependências da Bottom Tabs: https://reactnavigation.org/docs/bottom-tab-navigator/:</Text>
      <Text>3. npm install @react-navigation/bottom-tabs</Text>
      <Text>Instalar pacotes/dependências do vector icons: https://reactnavigation.org/docs/material-bottom-tab-navigator</Text>
      <Text>4. npm install @react-navigation/material-bottom-tabs react-native-paper react-native-vector-icons</Text>
      <Text>Configurar os arquivos do Android conforme o site: https://github.com/oblador/react-native-vector-icons#installation</Text>
      <Text>5. No arquivo android/app/build.gradle, incluir: apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"
e nas dependências incluir: implementation project(':react-native-vector-icons')</Text>
      <Text>6. No arquivo android/settings.gradle, incluir: include ':react-native-vector-icons'
project(':react-native-vector-icons').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-vector-icons/android')</Text>
      <Text>7. No arquivo android/app/src/main/java/MainApplication.java, incluir: import com.oblador.vectoricons.VectorIconsPackage;
        @Override citado na página do link
  </Text>
    </View>
  )
} 

export default Tela1;

import React, {useState}  from 'react';
import {
  SafeAreaView,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  TouchableOpacity
} from 'react-native';

const DATA = [
  {
    id: '1',
    title: 'Item Um',
  },
  {
    id: '2',
    title: 'Item Dois',
  },
  {
    id: '3',
    title: 'Item Três',
  },
];

/* FLATLIST SIMPLES
const Item = ({title}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);
*/

//FLATLIST SELECIONÁVEL
const Item = ({item, onPress, backgroundColor, textColor}) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, {backgroundColor}]}>
    <Text style={[styles.title, {color: textColor}]}>{item.title}</Text>
  </TouchableOpacity>
);


const App = () => {

  const [selectedId, setSelectedId] = useState();

  const renderItem = ({item}) => {
    const backgroundColor = item.id === selectedId ? 'coral' : 'tomato';
    const color = item.id === selectedId ? 'black' : 'white';
    
    return (
      <Item
        item={item} 
        onPress={() => setSelectedId(item.id)}
        backgroundColor={backgroundColor}
        textColor={color}
      />
    );
  };


  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        //renderItem={({item}) => <Item title={item.title} />}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData={selectedId}
        //horizontal
      />
      <Text style={styles.referencia}>Referência: https://reactnative.dev/docs/flatlist?language=javascript</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: 'tomato',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 15
  },
  title: {
    fontSize: 20,
    color: 'white'
  },
  referencia: {
    padding: 15
  }
});

export default App;
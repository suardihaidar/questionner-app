import React, {useContext} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import {GlobalContext} from '../../context/globalState';

const Result = ({navigation}) => {
  const {dataResult} = useContext(GlobalContext);

  // flatlist item
  const Item = ({item, onPress}) => (
    <TouchableOpacity onPress={onPress} style={styles.item}>
      <View style={{flex: 1}}>
        <Text
          style={{
            padding: 5,
            fontSize: 16,
            fontWeight: 'bold',
            color: '#333333',
          }}>
          {item.name}
        </Text>
        <Text style={{padding: 5, fontSize: 14, color: '#333333'}}>
          {item.address}
        </Text>
      </View>
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        {/* <Text style={{padding: 5, fontSize: 18, color: '#333333'}}>hasil</Text> */}
        <Text
          style={{
            padding: 5,
            fontSize: 18,
            color: '#333333',
            fontWeight: 'bold',
          }}>
          {item.category}
        </Text>
      </View>
    </TouchableOpacity>
  );

  const renderItem = ({item}) => {
    return (
      <Item
        item={item}
        onPress={() =>
          navigation.navigate('resultDetail', {questions: item.questions})
        }
      />
    );
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      {!dataResult.length && (
        <Text
          style={{
            alignSelf: 'center',
            marginTop: 50,
            fontWeight: 'bold',
            color: '#333333',
          }}>
          Data belum tersedia, silahkan mengisi lembar observasi
        </Text>
      )}
      <FlatList
        data={dataResult}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
  );
};

export default Result;

const styles = StyleSheet.create({
  item: {
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
    borderRadius: 10,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 32,
  },
});

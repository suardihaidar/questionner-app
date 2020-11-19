import React from 'react';
import {SafeAreaView, Text, FlatList, TouchableOpacity} from 'react-native';

const Observation = ({navigation}) => {
  return (
    <SafeAreaView
      style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontWeight: 'bold', margin: 30, fontSize: 14}}>
        Panduan Pengisian
      </Text>
      <FlatList
        data={[{key: '1. Ya diberi nilai 1'}, {key: '2. Tidak diberi nilai 0'}]}
        renderItem={({item}) => (
          <Text style={{padding: 5, fontSize: 14}}>{item.key}</Text>
        )}
      />
      <TouchableOpacity
        style={{
          backgroundColor: '#31326f',
          margin: 50,
          borderRadius: 25,
          padding: 10,
          width: 150,
          height: 40,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onPress={() => navigation.navigate('form')}>
        <Text style={{color: 'white'}}>Selanjutnya</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Observation;

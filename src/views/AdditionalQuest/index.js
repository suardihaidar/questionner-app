import React from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';

const AdditionalQuest = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, alignItems: 'center'}}>
      <View style={{alignItems: 'center', flex: 1}}>
        <Text style={{fontWeight: '500', margin: 30, fontSize: 14}}>
          Informasi Pendukung
        </Text>
        <Text style={{fontWeight: '400', margin: 30, fontSize: 36}}>
          Pertanyaan
        </Text>
        <TouchableOpacity
          style={{
            borderRadius: 10,
            padding: 10,
            width: 191,
            height: 69,
            alignItems: 'center',
            justifyContent: 'center',
            borderColor: 'rgba(0, 0, 0, 0.13)',
            borderWidth: 1,
          }}
          onPress={() => {}}>
          <Text>Ya</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            marginTop: 10,
            borderColor: 'rgba(0, 0, 0, 0.13)',
            borderWidth: 1,
            borderRadius: 10,
            padding: 10,
            width: 191,
            height: 69,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={() => {}}>
          <Text>Tidak</Text>
        </TouchableOpacity>
      </View>
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
        onPress={() => navigation.navigate('done')}>
        <Text style={{color: 'white'}}>Selanjutnya</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default AdditionalQuest;

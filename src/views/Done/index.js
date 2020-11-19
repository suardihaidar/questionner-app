import React from 'react';
import {SafeAreaView, Text, TouchableOpacity, Image, View} from 'react-native';

import {Assets} from '@/assets';

const AdditionalQuest = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, alignItems: 'center'}}>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image source={Assets.checked} style={{width: 77, height: 77}} />
        <Text style={{fontWeight: '500', marginTop: 20, fontSize: 14}}>
          Hasil :
        </Text>
        <Text style={{fontWeight: 'bold', fontSize: 14}}>Tidak Beresiko</Text>
      </View>
      <Text style={{fontWeight: '400', fontSize: 36}}>Terima Kasih</Text>
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
        onPress={() => navigation.navigate('home')}>
        <Text style={{color: 'white'}}>Halaman Awal</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default AdditionalQuest;

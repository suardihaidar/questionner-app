import React from 'react';
import {SafeAreaView, Text, TouchableOpacity} from 'react-native';

const Result = ({navigation}) => {
  return (
    <SafeAreaView
      style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Coming Soon</Text>
      <TouchableOpacity onPress={() => navigation.navigate('home')}>
        <Text style={{fontWeight: 'bold'}}>Kembali ke Halaman Utama</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Result;

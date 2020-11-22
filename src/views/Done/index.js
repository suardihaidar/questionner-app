import React, {useEffect, useState} from 'react';
import {SafeAreaView, Text, TouchableOpacity, Image, View} from 'react-native';

import {Assets} from '@/assets';

const AdditionalQuest = ({route, navigation}) => {
  const {totalPoint} = route.params;

  const [result, setResult] = useState('');
  const [icon, setIcon] = useState(null);

  useEffect(() => {
    if (totalPoint === 18) {
      setResult('Tidak Beresiko');
      setIcon(Assets.checked);
    } else if (totalPoint > 0 && totalPoint < 18) {
      setResult('Beresiko');
      setIcon(Assets.warn);
    } else {
      setResult('Sangat beresiko');
      setIcon(Assets.danger);
    }
  }, [totalPoint]);

  return (
    <SafeAreaView style={{flex: 1, alignItems: 'center'}}>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {icon && <Image source={icon} style={{width: 100, height: 100}} />}
        <Text style={{fontWeight: '500', marginTop: 20, fontSize: 14}}>
          Hasil :
        </Text>
        <Text
          style={{
            fontWeight: 'bold',
            margin: 10,
            fontSize: 24,
            color: '#333333',
          }}>
          {result}
        </Text>
      </View>
      <Text style={{fontSize: 16, fontStyle: 'italic'}}>
        Terima kasih atas partisipasi anda
      </Text>
      <TouchableOpacity
        style={{
          backgroundColor: '#31326f',
          margin: 50,
          borderRadius: 25,
          padding: 10,
          width: 150,
          height: 50,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onPress={() => navigation.navigate('home')}>
        <Text style={{color: 'white', fontWeight: 'bold'}}>Halaman Awal</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default AdditionalQuest;

import React, {useContext, useState} from 'react';
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  TextInput,
  View,
  Keyboard,
  Alert,
} from 'react-native';

import {GlobalContext} from '../../context/globalState';

const Form = ({navigation}) => {
  const {setName, setAddress} = useContext(GlobalContext);
  const [valName, setValName] = useState('');
  const [valAddress, setValAddress] = useState('');

  const handleNext = () => {
    if (valName && valAddress) {
      setName(valName);
      setAddress(valAddress);
      navigation.navigate('mainQuest');
      Keyboard.dismiss();
    } else {
      Alert.alert('', 'Nama dan Alamat harus diisi!');
    }
  };

  return (
    <SafeAreaView style={{flex: 1, alignItems: 'center'}}>
      <View style={{marginTop: 35, flex: 1}}>
        <Text style={{marginVertical: 10, fontSize: 14, alignSelf: 'baseline'}}>
          Nama Rumah Makan/Restoran dan sejenisnya :
        </Text>
        <TextInput
          style={{
            height: 40,
            width: 300,
            borderRadius: 10,
            backgroundColor: '#dbf6e9',
            paddingHorizontal: 15,
          }}
          onChangeText={(val) => setValName(val)}
          autoFocus
        />
        <Text style={{marginVertical: 10, fontSize: 14, alignSelf: 'baseline'}}>
          Alamat :
        </Text>
        <TextInput
          style={{
            height: 40,
            width: 300,
            borderRadius: 10,
            backgroundColor: '#dbf6e9',
            paddingHorizontal: 15,
          }}
          onChangeText={(val) => setValAddress(val)}
        />
      </View>
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
        onPress={handleNext}>
        <Text style={{color: 'white', fontWeight: 'bold'}}>Selanjutnya</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Form;

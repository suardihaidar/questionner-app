import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  TextInput,
  View,
  Keyboard,
} from 'react-native';

const Form = ({navigation}) => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');

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
          onChangeText={(val) => setName(val)}
          value={name}
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
          onChangeText={(val) => setAddress(val)}
          value={address}
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
        onPress={() => {
          navigation.navigate('mainQuest');
          Keyboard.dismiss();
        }}>
        <Text style={{color: 'white', fontWeight: 'bold'}}>Selanjutnya</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Form;

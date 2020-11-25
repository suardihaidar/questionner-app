import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import styles from './style';
import {Assets} from '../../assets';

const SharedHeader = ({title, button}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{alignSelf: 'center', padding: 12}}
        onPress={() => navigation.goBack()}>
        <Image
          source={Assets.back}
          resizeMode="contain"
          style={{width: 20, height: 20}}
        />
      </TouchableOpacity>
      <Text style={styles.textTitle}>{title}</Text>
      {button && (
        <TouchableOpacity
          style={{
            backgroundColor: '#31326f',
            borderRadius: 25,
            padding: 10,
            width: 100,
            height: 30,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={() => {}}>
          <Text style={{color: 'white', fontWeight: 'bold'}}>Download</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default SharedHeader;

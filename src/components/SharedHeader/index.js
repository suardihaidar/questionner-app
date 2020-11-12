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
      {!button ? (
        <Image
          source={Assets.logoFulfill}
          resizeMode="contain"
          style={{width: 30, height: 30, alignSelf: 'center'}}
        />
      ) : (
        <View style={{flex: 1}}>{button}</View>
      )}
    </View>
  );
};

export default SharedHeader;

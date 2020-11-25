import React from 'react';
import {SafeAreaView, View, FlatList, Image, Dimensions} from 'react-native';

import {Assets} from '@/assets';

const Info = () => {
  const image = [Assets.E, Assets.D, Assets.C, Assets.B, Assets.A];

  const renderItem = ({item}) => {
    const {width, height} = Dimensions.get('window');

    return (
      <View
        style={{
          marginHorizontal: 10,
          marginTop: 5,
          marginBottom: -70,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image
          source={item}
          style={{
            height: height * 0.9,
            width: width * 0.9,
            resizeMode: 'contain',
          }}
        />
      </View>
    );
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <FlatList
        data={image}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
  );
};

export default Info;

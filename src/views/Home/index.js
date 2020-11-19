import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
  // Alert,
} from 'react-native';

import {Assets} from '@/assets';

const Home = ({navigation}) => {
  const goToInfo = () => {
    navigation.navigate('info');
  };
  const goToQuest = () => {
    navigation.navigate('observation');
    // Alert.alert('', 'Lembar Observasi');
  };
  const goToResult = () => {
    navigation.navigate('result');
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{width: 350, textAlign: 'center'}}>
          INSTRUMEN PENILAIAN PROTOKOL KESEHATAN ADAPTASI KEBIASAAN BARU DI
          RUMAH MAKAN/RESTORAN, JASA BOGA, SENTRA PANGAN JAJANAN DAN SEJENISNYA
        </Text>
      </View>
      <View
        style={{
          flex: 2,
          alignItems: 'center',
          justifyContent: 'flex-start',
        }}>
        <View style={{flexDirection: 'row', marginBottom: 20}}>
          {/* info */}
          <TouchableOpacity
            style={{alignItems: 'center', flex: 1}}
            onPress={() => goToInfo()}>
            <Image source={Assets.info} style={{width: 77, height: 77}} />
            <Text>Info</Text>
          </TouchableOpacity>
          {/* lembar observasi */}
          <TouchableOpacity
            style={{alignItems: 'center', flex: 1}}
            onPress={() => goToQuest()}>
            <Image source={Assets.qa} style={{width: 77, height: 77}} />
            <Text>Lembar</Text>
            <Text>Observasi</Text>
          </TouchableOpacity>
        </View>
        {/* Hasil */}
        <TouchableOpacity
          style={{alignItems: 'center'}}
          onPress={() => goToResult()}>
          <Image source={Assets.result} style={{width: 77, height: 77}} />
          <Text>Hasil</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Home;

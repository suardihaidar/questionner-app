import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import {Assets} from '@/assets';

const Home = ({navigation}) => {
  const goToInfo = () => {
    navigation.navigate('info');
  };
  const goToGuide = () => {
    navigation.navigate('guide');
  };
  const goToResult = () => {
    navigation.navigate('result');
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.containerHeader}>
        <Text style={styles.txtHeader}>
          INSTRUMEN PENILAIAN PROTOKOL KESEHATAN ADAPTASI KEBIASAAN BARU DI
          RUMAH MAKAN/RESTORAN, JASA BOGA, SENTRA PANGAN JAJANAN DAN SEJENISNYA
        </Text>
      </View>
      <View style={styles.containerContent}>
        <View style={{flexDirection: 'row', marginBottom: 20}}>
          {/* info */}
          <TouchableOpacity
            style={{alignItems: 'center', flex: 1}}
            onPress={() => goToInfo()}>
            <Image source={Assets.info} style={{width: 77, height: 77}} />
            <Text style={styles.txtBold}>Info</Text>
          </TouchableOpacity>
          {/* lembar observasi */}
          <TouchableOpacity
            style={{alignItems: 'center', flex: 1}}
            onPress={() => goToGuide()}>
            <Image source={Assets.qa} style={{width: 77, height: 77}} />
            <Text style={styles.txtBold}>Lembar</Text>
            <Text style={styles.txtBold}>Observasi</Text>
          </TouchableOpacity>
        </View>
        {/* Hasil */}
        <TouchableOpacity
          style={{alignItems: 'center'}}
          onPress={() => goToResult()}>
          <Image source={Assets.result} style={{width: 77, height: 77}} />
          <Text style={styles.txtBold}>Hasil</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  containerHeader: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtHeader: {
    width: 350,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#333333',
    fontSize: 16,
  },
  containerContent: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  txtBold: {
    fontWeight: 'bold',
    color: 'rgba(0,0,0,0.5)',
  },
});

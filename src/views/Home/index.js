import React, {useEffect} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
  // Alert,
} from 'react-native';

import {Assets} from '@/assets';
// import firebase from '@/services/Firebase';

const Home = ({navigation}) => {
  const goToInfo = () => {
    navigation.navigate('info');
  };
  const goToGuide = () => {
    navigation.navigate('guide');
    // Alert.alert('', 'Lembar Observasi');
  };
  const goToResult = () => {
    navigation.navigate('result');
  };

  useEffect(() => {
    // firebase
    //   .database()
    //   .ref('MainQuest')
    //   .on('value', (snapshot) => {
    //     const databaseObservasi = snapshot.val();
    //     console.log('cek data base', databaseObservasi);
    //   });
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            width: 350,
            textAlign: 'center',
            fontWeight: 'bold',
            color: '#333333',
            fontSize: 16,
          }}>
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
            <Text style={{fontWeight: 'bold', color: 'rgba(0,0,0,0.5)'}}>
              Info
            </Text>
          </TouchableOpacity>
          {/* lembar observasi */}
          <TouchableOpacity
            style={{alignItems: 'center', flex: 1}}
            onPress={() => goToGuide()}>
            <Image source={Assets.qa} style={{width: 77, height: 77}} />
            <Text style={{fontWeight: 'bold', color: 'rgba(0,0,0,0.5)'}}>
              Lembar
            </Text>
            <Text style={{fontWeight: 'bold', color: 'rgba(0,0,0,0.5)'}}>
              Observasi
            </Text>
          </TouchableOpacity>
        </View>
        {/* Hasil */}
        <TouchableOpacity
          style={{alignItems: 'center'}}
          onPress={() => goToResult()}>
          <Image source={Assets.result} style={{width: 77, height: 77}} />
          <Text style={{fontWeight: 'bold', color: 'rgba(0,0,0,0.5)'}}>
            Hasil
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Home;

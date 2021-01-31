import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  Alert,
  PermissionsAndroid,
  Image,
  Dimensions,
} from 'react-native';
import {writeFile, DownloadDirectoryPath} from 'react-native-fs';
import XLSX from 'xlsx';

import firebase from '@/services/Firebase';
import {Assets} from '../../assets';

const {width, height} = Dimensions.get('window');

const Result = ({navigation}) => {
  const [result, setResult] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    // get data from db
    firebase
      .database()
      .ref('Result')
      .on('value', (snapshot) => {
        // set property of firebase object as array
        const data = snapshot.val();
        const arrData = [];
        for (let id in data) {
          arrData.push({id, ...data[id]});
        }

        setResult(arrData);
        setIsLoading(false);
      });
  }, []);

  const askPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
          title: 'Izin untuk Penggunaan Memori',
          message:
            'Aplikasi ini butuh izin untuk menyimpan data pada memori perangkat',
          // buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Batal',
          buttonPositive: 'Izinkan',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        return true;
      } else {
        console.log('Camera permission denied');
        return false;
      }
    } catch (err) {
      console.warn(err);
      return false;
    }
  };

  const exportFile = async () => {
    if (await askPermission()) {
      const data = result.map((res, i) => ({
        No: i + 1,
        Nama: res.name,
        Alamat: res.address,
        P1: res.questions.main[0].point,
        P2: res.questions.main[1].point,
        P3: res.questions.main[2].point,
        P4: res.questions.main[3].point,
        P5: res.questions.main[4].point,
        P6: res.questions.main[5].point,
        P7: res.questions.main[6].point,
        P8: res.questions.main[7].point,
        P9: res.questions.main[8].point,
        P10: res.questions.main[9].point,
        P11: res.questions.main[10].point,
        P12: res.questions.main[11].point,
        P13: res.questions.main[12].point,
        P14: res.questions.main[13].point,
        P15: res.questions.main[14].point,
        P16: res.questions.main[15].point,
        P17: res.questions.main[16].point,
        P18: res.questions.main[17].point,
        P19: res.questions.additional[0].answer === 'yes' ? 'ya' : 'tidak',
        P20: res.questions.additional[1].answer === 'yes' ? 'ya' : 'tidak',
        P21: res.questions.additional[2].answer === 'yes' ? 'ya' : 'tidak',
        P22: res.questions.additional[3].answer === 'yes' ? 'ya' : 'tidak',
        P23: res.questions.additional[4].answer === 'yes' ? 'ya' : 'tidak',
        TotalPoint: res.totalPoint,
        Kategori: res.category,
      }));
      const DDP = DownloadDirectoryPath + '/';
      const output = (str) => str;
      /* convert json to worksheet */
      const ws = XLSX.utils.json_to_sheet(data);
      /* build new workbook */
      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, 'SheetJs');
      /* write file */
      const wbout = XLSX.write(wb, {type: 'binary', bookType: 'xlsx'});
      const file = DDP + 'Hasil_Observasi.xlsx';
      writeFile(file, output(wbout), 'ascii')
        .then((res) => {
          Alert.alert(
            'Export Berhasil',
            'File disimpan di folder Download dengan nama Hasil_Observasi.xlsx',
          );
        })
        .catch((e) => {
          Alert.alert('Export Gagal', 'Silahkan coba lagi');
          console.log('gagal', e);
        });
    } else {
      Alert.alert('Export Gagal', 'Penggunaan memori tidak diizinkan');
    }
  };

  const deleteItem = (id) => {
    const itemRef = firebase.database().ref('Result').child(id);
    Alert.alert('Hapus Item', 'Apakah anda yakin ingin menghapus item ini?', [
      {
        text: 'Cancel',
        onPress: () => {},
        style: 'cancel',
      },
      {text: 'OK', onPress: () => itemRef.remove()},
    ]);
  };

  // flatlist item
  const Item = ({item, onPress}) => (
    <TouchableOpacity onPress={onPress} style={styles.item}>
      <View style={{flex: 1}}>
        <Text style={[styles.txtBold, {fontSize: 16}]}>{item.name}</Text>
        <Text style={{padding: 5, fontSize: 14, color: '#333333'}}>
          {item.address}
        </Text>
      </View>
      <View style={{flexDirection: 'row', flex: 1}}>
        <Text style={[styles.txtBold, {fontSize: 17, alignSelf: 'center'}]}>
          {item.category}
        </Text>
        <View
          style={{flex: 1, alignItems: 'flex-end', justifyContent: 'center'}}>
          <TouchableOpacity onPress={() => deleteItem(item.id)}>
            <Image
              source={Assets.xbtn}
              resizeMode="contain"
              style={{width: width * 0.08, height: height * 0.08}}
            />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );

  const renderItem = ({item}) => {
    return (
      <Item
        item={item}
        onPress={() =>
          navigation.navigate('resultDetail', {questions: item.questions})
        }
      />
    );
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      {isLoading ? (
        <View style={{marginTop: 50}}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      ) : (
        !result.length && (
          <Text style={styles.txtNoData}>
            Data belum tersedia, silahkan mengisi lembar observasi
          </Text>
        )
      )}
      {result.length ? (
        <TouchableOpacity style={styles.btnExport} onPress={() => exportFile()}>
          <Text style={{color: 'white', fontWeight: 'bold'}}>
            Export ke Excel
          </Text>
        </TouchableOpacity>
      ) : null}
      <FlatList
        data={result}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
  );
};

export default Result;

const styles = StyleSheet.create({
  item: {
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
    borderRadius: 10,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 32,
  },
  btnExport: {
    backgroundColor: '#31326f',
    margin: 20,
    borderRadius: 25,
    padding: 10,
    width: 150,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  txtNoData: {
    alignSelf: 'center',
    marginTop: 50,
    fontWeight: 'bold',
    color: '#333333',
  },
  txtBold: {
    padding: 5,
    fontWeight: 'bold',
    color: '#333333',
  },
});

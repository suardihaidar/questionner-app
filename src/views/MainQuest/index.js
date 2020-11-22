import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native';

// import firebase from '@/services/Firebase';
import {mainQuest, additionalQuest} from '@/utils/dataQuestion';

const MainQuest = ({navigation}) => {
  const [currentQuest, setCurrentQuest] = useState(0);
  const [quest, setQuest] = useState([]);
  const [dataMainQuest, setDataMainQuest] = useState([]);
  // const [dataAdditionalQuest, setDataAdditionalMainQuest] = useState([]);
  const [isQuestDone, setIsQuestDone] = useState(false);
  // const dataRef = firebase.database().ref('data');
  // const newDataKey = firebase.database().ref().child('data').push().key;

  const handleAnswerPress = (val) => {
    let newArr = [...quest];
    newArr[currentQuest].point = val;
    setQuest(newArr);

    // next handler
    if (currentQuest + 1 !== quest.length) {
      setCurrentQuest(currentQuest + 1);
    } else if (currentQuest + 1 === quest.length && isQuestDone) {
      const totalPoint = dataMainQuest.reduce(function (total, arr) {
        // return the sum with previous value
        return total + arr.point;
        // set initial value as 0
      }, 0);
      navigation.navigate('done', {totalPoint});
      // console.log('cek data', totalPoint);
    } else {
      // firebase
      // .database()
      // .ref('MainQuest')
      // .set('value', (snapshot) => {
      //   const databaseObservasi = snapshot.val();
      //   console.log('cek data base', databaseObservasi);
      // });

      // !isQuestDone
      //   ? setDataMainQuest(quest)
      //   : setDataAdditionalMainQuest(quest);
      setDataMainQuest(quest);
      setCurrentQuest(0);
      setQuest(additionalQuest);
      setIsQuestDone(true);
    }
  };

  useEffect(() => {
    setQuest(mainQuest);
  }, []);

  return (
    <SafeAreaView style={{flex: 1, alignItems: 'center'}}>
      {/* {console.log('cek quest', quest)} */}
      <View style={{alignItems: 'center', flex: 1}}>
        <Text style={styles.txtTitle}>
          {!isQuestDone
            ? 'Observasi Penerapan Protokol Kesehatan'
            : 'Informasi Pendukung'}
        </Text>
        <View style={{flex: 1, justifyContent: 'center'}}>
          <Text style={styles.txtQuest}>
            {quest.length && quest[currentQuest].question}
          </Text>
        </View>
        <TouchableOpacity
          style={styles.yesBtn}
          onPress={() => handleAnswerPress(1)}>
          <Text style={{color: '#547F2D', fontWeight: 'bold', fontSize: 25}}>
            Ya
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.noBtn}
          onPress={() => handleAnswerPress(0)}>
          <Text style={{color: '#FCFAFD', fontWeight: 'bold', fontSize: 25}}>
            Tidak
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default MainQuest;

const styles = StyleSheet.create({
  noBtn: {
    marginTop: 20,
    borderRadius: 10,
    padding: 10,
    width: 191,
    height: 69,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FE6464',
    marginBottom: 100,
  },
  yesBtn: {
    borderRadius: 10,
    padding: 10,
    width: 191,
    height: 69,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#A6FF4D',
  },
  txtQuest: {
    fontWeight: 'bold',
    margin: 30,
    fontSize: 24,
    color: '#333333',
  },
  txtTitle: {
    fontWeight: 'bold',
    marginTop: 30,
    fontSize: 16,
    color: 'rgba(0,0,0,0.5)',
  },
});

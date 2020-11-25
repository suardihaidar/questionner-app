import React, {useState, useEffect, useContext} from 'react';
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native';

// import firebase from '@/services/Firebase';
import {mainQuest, additionalQuest} from '@/utils/dataQuestion';
import {GlobalContext} from '../../context/globalState';

const MainQuest = ({navigation}) => {
  const [currentQuest, setCurrentQuest] = useState(0);
  const [quest, setQuest] = useState([]);
  const [dataMainQuest, setDataMainQuest] = useState([]);
  // const [dataAdditionalQuest, setDataAdditionalMainQuest] = useState([]);
  const [isQuestDone, setIsQuestDone] = useState(false);
  // const dataRef = firebase.database().ref('data');
  // const newDataKey = firebase.database().ref().child('data').push().key;
  const {setDataResult, name, address} = useContext(GlobalContext);

  const handleAnswerPress = (val) => {
    // set point / answer
    let newArr = [...quest];
    if (typeof val === 'number') {
      newArr[currentQuest].point = val;
      setQuest(newArr);
    } else {
      newArr[currentQuest].answer = val;
      setQuest(newArr);
    }

    // next handler
    if (currentQuest + 1 !== quest.length) {
      setCurrentQuest(currentQuest + 1);
    } else if (currentQuest + 1 === quest.length && isQuestDone) {
      // set total point
      const totalPoint = dataMainQuest.reduce(function (total, arr) {
        // return the sum with previous value
        return total + arr.point;
        // set initial value as 0
      }, 0);

      // set category
      let category;
      if (totalPoint === 18) {
        category = 'Tidak Beresiko';
      } else if (totalPoint > 0 && totalPoint < 18) {
        category = 'Beresiko';
      } else {
        category = 'Sangat beresiko';
      }

      // set data
      setDataResult({
        questions: {main: dataMainQuest, additional: quest},
        name: name,
        address: address,
        totalPoint: totalPoint,
        category: category,
      });

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
          onPress={() => handleAnswerPress(!isQuestDone ? 1 : 'yes')}>
          <Text style={{color: '#547F2D', fontWeight: 'bold', fontSize: 25}}>
            Ya
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.noBtn}
          onPress={() => handleAnswerPress(!isQuestDone ? 0 : 'no')}>
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

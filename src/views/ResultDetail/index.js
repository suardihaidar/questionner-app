import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const ResultDetail = ({route, navigation}) => {
  const {questions} = route.params;
  // flatlist item
  const Item = ({item, onPress}) => (
    <TouchableOpacity onPress={onPress} style={styles.item}>
      <View style={{flex: 1}}>
        <Text
          style={{
            padding: 5,
            fontSize: 16,
            fontWeight: 'bold',
            color: '#333333',
          }}>
          {item.question}
        </Text>
        <Text style={{padding: 5, fontSize: 14, color: '#333333'}}>
          {item.answer ? 'Jawaban : ' : 'Point : '}
          <Text style={{fontWeight: 'bold', textTransform: 'capitalize'}}>
            {item.answer || item.point}
          </Text>
        </Text>
      </View>
    </TouchableOpacity>
  );

  const renderItem = ({item}) => {
    return <Item item={item} onPress={() => {}} />;
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      {/* main quest */}
      <Text
        style={{
          alignSelf: 'center',
          margin: 10,
          fontWeight: 'bold',
          color: 'rgba(0,0,0,0.5)',
        }}>
        Observasi Penerapan Protokol Kesehatan
      </Text>
      <FlatList
        data={questions.main}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
      {/* additional quest */}
      <Text
        style={{
          alignSelf: 'center',
          margin: 10,
          fontWeight: 'bold',
          color: 'rgba(0,0,0,0.5)',
        }}>
        Informasi Pendukung
      </Text>
      <FlatList
        data={questions.additional}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
  );
};

export default ResultDetail;

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
});

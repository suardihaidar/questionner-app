import {StyleSheet, Dimensions} from 'react-native';
import {Color} from '../../assets';

const {height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    height: height * 0.08,
    backgroundColor: Color.white,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 12,
  },
  textTitle: {
    flex: 1,
    fontWeight: 'bold',
    fontSize: 16,
    color: Color.black,
    marginLeft: 12,
    alignSelf: 'center',
  },
});

export default styles;

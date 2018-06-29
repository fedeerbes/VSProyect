import {
  StyleSheet,
  Dimensions
} from 'react-native';

const {width, height} = Dimensions.get('window');

export default styles = StyleSheet.create({
  tab: {
    backgroundColor: 'grey',
    margin: 5,
    padding: 5
  },
  tabSelected: {
    backgroundColor: 'blue',
    margin: 5,
    padding: 5
  },
  button: {
    backgroundColor: 'grey',
    margin: 5,
    padding: 5
  },
  event: {
    margin: 5,
    borderRadius: 5,
    borderWidth: 1
  },
  form: {
    margin: 5
  }
});

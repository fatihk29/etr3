import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    marginTop: 10,
    marginLeft: 10,
  },
  titleText: {
    fontSize: 17,
    fontWeight: '100',
  },
  textinputName: {
    width: width - 20,
    height: 50,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
  },
  textinputJob: {
    width: width - 20,
    height: 50,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
  },
  textinputAbout: {
    width: width - 20,
    height: 110,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    textAlignVertical: 'top',
    textAlign: 'left',
  },
  textinputLink: {
    width: width - 20,
    height: 50,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
  },
  addNewCharBtn: {
    width: width - 20,
    height: 35,
    marginVertical: 20,
    borderRadius: 10,
    backgroundColor: '#6495ED',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addNewCharBtnText: {
    fontSize: 20,
  },
});
export default styles;

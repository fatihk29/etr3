import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  addBtnContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  addBtn: {
    width: 45,
    height: 45,
    borderRadius: 22,
    backgroundColor: '#6495ED',
    position: 'absolute',
    bottom: 10,
    zIndex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default style;

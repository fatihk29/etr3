import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    flexDirection: 'row',
    height: 70,
    marginHorizontal: 10,
    marginVertical: 5,
    borderBottomWidth: 0.5,
    borderBottomColor: '#6495ED',
  },
  itemLeftContainer: {
    flex: 13,
    flexDirection: 'row',
  },
  itemRightContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemImageContainer: {
    flex: 2,
    borderRightWidth: 0.8,
    borderRightColor: '#6495ED',
  },
  nameContainer: {
    flex: 8,
    justifyContent: 'center',
    marginLeft: 5,
  },
  name: {
    marginLeft: 3,
    fontSize: 22,
  },
  image: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
  },
});
export default styles;

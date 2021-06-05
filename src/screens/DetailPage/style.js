import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nameContainer: {
    marginBottom: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    fontSize: 24,
  },
  jobContainer: {
    marginBottom: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  job: {
    fontSize: 18,
    color: 'gray',
  },
  aboutContainer: {
    marginVertical: 10,
    marginHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  about: {
    fontSize: 18,
    color: 'gray',
  },
});
export default styles;

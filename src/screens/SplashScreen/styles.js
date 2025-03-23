import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#013064', 
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    flexDirection:'row',
  },
  logo: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  appName: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginTop: 1,
  },
  tagline: {
    fontSize: 16,
    color: '#FFFFFF',
    position: 'absolute',
    bottom: 300,
    width:150,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign:'center'
  },
});

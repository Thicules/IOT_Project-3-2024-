import { COLORS } from '../../assets';
import { StyleSheet } from 'react-native';

export const styleWelcome = StyleSheet.create ({
    headerContainer : {
        height: 90,
        right: 20,
        marginTop: -20,
     },
     imageHeader: {
      zIndex: -1,
     },
    titleContainer: {
      padding: 15,
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'center',
    },
    titleText: {
      flex: 1, 
      textAlign: 'center', 
      fontSize: 30,
      fontWeight: 'bold',
      color: COLORS.ORANGE,
    },
    titleImage: {
      alignSelf: 'flex-end',
      width: 170,
      height: 170,
      right: 15,
      zIndex: -1,
    },

    mainImage: {
      width: 300,
      height: 300,
      alignSelf: 'center',
      marginTop: -70,
    },

    
  //signup button
  fixedButton: {
    alignSelf: 'center',
    backgroundColor: COLORS.ORANGE_TEXT,
    paddingHorizontal: 35,
    borderRadius: 20,
  },
  buttonText: {
    padding: 10,
    fontSize: 16,
    fontWeight: '700',
    color: COLORS.white,
  },

  //signin text
  signinText: {
    fontSize: 16,
    fontWeight: '500',
    marginTop: 10,
    color: COLORS.ORANGE_TEXT,
    alignSelf: 'center',
  },

  //image footer
  footerContainer : {
    width: 100,
    height: 100,
    zIndex: 1,
    right: 50,
 },

})

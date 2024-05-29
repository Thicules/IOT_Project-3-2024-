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
      color: '#ffb923',
    },
    titleImage: {
      alignSelf: 'flex-end',
      width: 170,
      height: 170,
      zIndex: -1,
      bottom: 5,
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
    backgroundColor: '#FFA100',
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
    color: "#FFA100",
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

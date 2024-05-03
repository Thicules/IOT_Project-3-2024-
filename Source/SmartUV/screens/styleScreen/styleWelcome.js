import { COLORS } from '../../assets';
import { StyleSheet } from 'react-native';

export const styleWelcome = StyleSheet.create ({
    headerContainer : {
        alignItems: 'center',
        justifyContent: 'center',
        height: 70,
     },
    titleContainer: {
        alignItems: 'center',
        justifyContent: 'center',        
    },
    mainTitle: {
        fontSize: 25,
        fontWeight: 'bold',
        alignSelf: 'center',
        color: COLORS.white,
    },
    
  //logout button
  fixedButton: {
    position: 'absolute',
    alignSelf: 'center',
    backgroundColor: COLORS.ORANGE_TEXT,
    paddingHorizontal: 35,
    borderRadius: 10,
    top: '110%'
  },
  buttonlogoutText: {
    padding: 10,
    fontSize: 16,
    fontWeight: '700',
    color: COLORS.white,
},
})

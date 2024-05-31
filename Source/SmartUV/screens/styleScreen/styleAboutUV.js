import { COLORS } from '../../assets';
import { StyleSheet } from 'react-native';

export const styleAboutUV = StyleSheet.create ({
    titleContainer: {
      alignItems: 'center',
    },
    titleImage: {
      width: 250,
      height: 250,
      top: -30,
      zIndex: -1,
    },
    infoContainer: {
      padding: 15,
      zIndex: 1,
      top: -90
    },
    title1: {
      fontWeight: '600',
      fontSize: 20,
      color: COLORS.ORANGE
    },
    imageinfo: {
      width: 350,
      height: 190,
      alignSelf: 'center'
    },
    info1: {
      marginTop: 5,
      fontSize: 17,
      marginBottom: 10,
    }

    
  

})

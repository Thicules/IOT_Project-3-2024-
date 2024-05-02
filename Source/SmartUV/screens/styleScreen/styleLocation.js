import { COLORS } from '../../assets';
import { StyleSheet } from 'react-native';

export const styleLocation = StyleSheet.create({
    container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#401F71",
  },
  headerContainer: {
    alignItems: 'center',
    justifyContent: 'center',     
  },      
  mainTitle: {
    fontSize: 25,
    zIndex:1,
    color: COLORS.white,
    fontWeight: '600',
    alignSelf: 'flex-start',
  },
  buttonContainer: {
    alignSelf: 'flex-end',
    position: 'absolute',
    flexDirection: 'row',
    
  },
  button: {
    width: 22,
    height: 22,
    tintColor: COLORS.WHITE,
    marginLeft: 15,
  },

  //locations
  locationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  cityName: {
    fontSize: 18,
    fontWeight: '500'
  },
  localTime: {
    fontSize: 18,
    fontWeight: '500',
  },
  line: {
    height: 0.7,
    width: 500,
    alignSelf: 'center',
    backgroundColor: COLORS.GRAY_LIGHT,        
  },

  //fixed button
  fixedButton: {
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
    backgroundColor: COLORS.ORANGE,
    paddingHorizontal: 50,
    paddingVertical: 15,
    borderRadius: 25,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '700',
  },
})
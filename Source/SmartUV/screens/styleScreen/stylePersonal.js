import { COLORS } from '../../assets';
import { StyleSheet } from 'react-native';

export const stylePersonal = StyleSheet.create({
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
    fontWeight: '600'
  },
  skinchosenStyles: {
    width: 100,
    fontSize: 15, 
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  optionchosenStyles: {
    fontSize: 15, 
    height: 30,
    top: 6,
  },
  skinChosenTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    padding: 10,
  },
  subTitle: {
    fontSize: 20,
    zIndex: 1,
    marginTop:10,
    color: COLORS.white,
    fontWeight: '500'
  },
  skinMainTitle: {
    flexDirection: 'row',
    marginLeft: 10,
    marginTop: 10,
  },
  skinMainTitle1: {
    fontSize: 17,
    alignSelf: 'flex-start',
    color: COLORS.ORANGE_TEXT,    
  },
  skinMainTitle2: {
    fontSize: 17,
    fontWeight: '600',
    alignSelf: 'flex-start',
    color: COLORS.ORANGE_TEXT, 
  },
  skinFrame: {
    position: 'relative',
    padding: 13,
  },
  skinTypesContainer: {
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginHorizontal: -15,
  },
  skinContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    alignSelf: 'center',
    width: 115,
    borderColor: COLORS.ORANGE,
    borderRadius: 10,
    borderWidth: 1,
    padding: 4,
  },
  skinText: {
    marginTop: 5,
    fontWeight: '500',
  },

  skinInfoContainer: {
    padding: 15,
    top: -10,
  },
  skinInfoTextContainer: {
    flexDirection: 'row',
  },
  skinInfoMainText: {
    fontSize: 18,
    alignSelf: 'flex-start',
    fontWeight: '700',  
  },
  skinInfoSubText: {
    fontSize: 14,
    fontStyle: 'italic',
    alignSelf: 'flex-start',  
  },
  skinInfoSubText1: {
    fontSize: 15,
    alignSelf: 'flex-start',
    fontWeight: '700',   
  },
  skinInfoSubText2: {
    fontSize: 15,
    alignSelf: 'flex-start',
    overflow: 'hidden' 
  }

})
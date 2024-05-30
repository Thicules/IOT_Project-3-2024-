import { COLORS } from '../../assets';
import { StyleSheet } from 'react-native';

export const styleHome = StyleSheet.create({
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
        fontSize: 29,
        zIndex:1,
        marginTop:10,
        color: COLORS.white,
        fontWeight: '500'
      },
      subTitle: {
        fontSize: 20,
        zIndex: 1,
        marginTop:10,
        color: COLORS.white,
        fontWeight: '500'
      },
      //circular
      circularProgressbar: {
        alignSelf: 'center',
        marginTop: 30,
        zIndex: -1,
        alignItems: 'center',
      },
      circularUVIndex: {
        alignContent: 'center',
        fontSize: 45,
        color: COLORS.white,
        marginBottom: 45,
      },
      circularIndexText:{
        position: 'relative',
        flexDirection: 'row',
        marginTop: -50,
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        marginBottom: 20,
        marginHorizontal: 40,
      },
      circularRightIndex: {
        fontSize: 16,
        color: COLORS.white,
        marginLeft: 15,
        alignSelf: 'flex-start',
      },
      cirrcularLeftIndex: {
        fontSize: 16,
        color: COLORS.white,
        alignSelf: 'flex-end',
      },

      line: {
        height: 0.3,
        marginTop:2,
        marginBottom:10,
        backgroundColor: COLORS.white,
      },

      
      // Title UV
      UVIndexContainer: {
        position: 'relative',
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        marginBottom: 5,
        marginTop: 10,
      },
      UVTitle1: {
        fontSize: 16,
        fontWeight: 'bold',
        alignSelf: 'flex-start',
        marginRight: 50,
        color: COLORS.white,
      },

      UVTitle2: {
        fontSize: 16,
        fontWeight: 'bold',
        alignSelf: 'flex-end',
        color: COLORS.white,
      },
      UVIndex: {
        fontSize: 16,
        fontWeight: 500,
        alignSelf: 'flex-end',
        color: COLORS.white,
      },

      //weather container
      WeatherContainer: {
        position: 'relative',
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        marginBottom: 5,
        marginTop: 10,
      },
      WTTitle1: {
        fontSize: 16,
        fontWeight: 'bold',
        alignSelf: 'flex-start',
        marginRight: 50,
        color: COLORS.white,
      },

      WTTitle2: {
        width: 20,
        height: 20,
        tintColor: COLORS.WHITE,
        fontWeight: 'bold',
        alignSelf: 'flex-end',
        color: COLORS.white,
      },

      WTIndex: {
        fontSize: 16,
        fontWeight: 500,
        alignSelf: 'flex-end',
        color: COLORS.white,
        marginRight: 20,
      },

      //chart
      chartContainer: {
        flex: 1,
        padding: 10,
      },

      //next day prediction
      predictionFrame: {
        position: 'relative',
        padding: 13,
      },
      predictionContainer: {
        borderWidth: 1,
        padding: 10,
        borderColor: COLORS.ORANGE,
        borderRadius: 13,
      },
      predictionSubTitleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        marginHorizontal: -50,
      },
      predictionContentContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        marginHorizontal: -50,
        
      },
      predictionTextContainer: {
        flexDirection: 'column',
        alignItems: 'center', 
            
      },
      predictionMainTitle: {
        fontSize: 17,
        fontWeight: 'bold',
        alignSelf: 'flex-start',
        top: -5,
        color: '#3a39d4',
        marginBottom: 5,
        marginTop: 5,
      },
      predictionSubTitle: {
        fontSize: 13,
        fontWeight: 'bold',
        color: '#3a39c4',
        marginTop: 5,
        marginBottom: 5,
      },
      predictionText: {
        fontSize: 13,
        fontWeight: 500,        
        color: COLORS.BLACK,
        marginVertical: 5,
      },
      line1: {
        height: 0.7,
        marginTop: 10,
        width: 340,
        alignSelf: 'center',
        backgroundColor: COLORS.GRAY_LIGHT,        
      },
      


})

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
        height: 1,
        marginVertical: 10,
        marginTop:2,
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

      //chart
      chartContainer: {
        flex: 1,
        padding: 20,
      }

})

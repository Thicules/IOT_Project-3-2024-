import { COLORS } from '../../assets';
import { StyleSheet } from 'react-native';

export const styleSetting = StyleSheet.create ({
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
    notificationContainer: {
        position: 'absolute',
        alignItems: 'flex-start',
    },
    buttonNotification: {
        width: 22,
        height: 22,
        alignSelf: 'flex-start',
        left: 20,
    },
    profileContainer: {
        padding: 10,
        flexDirection: 'row',
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        borderWidth: 1,
        borderColor: COLORS.ORANGE_TEXT,
        borderRadius: 5,
        width: '95%',
        marginBottom:10,
    },
    avatarImage: {
        alignSelf: 'flex-start',
        width: 80,
        height: 80,
    },
    infoUserContainer: {
        marginLeft: 20,
        flexDirection: 'column',
        alignItems: 'flex-start',
        alignSelf: 'flex-end',
    },
    infoLine: {
        flexDirection: 'row',
    },
    infoTitle: {
        color: COLORS.BLACK,
        fontSize: 16,
        fontWeight: '700',
    },
    infoUser: {
        color: COLORS.BLACK,
        fontSize: 16,
    },
    //button edit
    buttonEdit: {
        alignSelf: 'center',
        alignItems: 'center',
        marginBottom: 30,
        backgroundColor: COLORS.white_gray,
        width: '30%',
        borderRadius:20,
        borderWidth: 0.2,
        borderColor: COLORS.GRAY_LIGHT,
    },
    buttonText: {
        padding: 10,
        fontSize: 16,
        fontWeight: '500',
        color: COLORS.BLACK,
    },

    //information 
   settinginfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: COLORS.white_gray,  
    width: '95%',
    alignSelf: 'center',  
  },
    settingTitle: {
    fontSize: 16,
    top: 2,
    fontWeight: '500'
  },
  iconMore: {
    height: 25,
    width: 25,
  },
  line: {
    height: 0.7,
    width: '95%',
    alignSelf: 'center',
    backgroundColor: COLORS.GRAY_LIGHT,        
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

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
  //modal
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    width: '80%',
    height: '50%',
    marginBottom: 90,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  searchInput: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  cityList: {
    maxHeight: 200,
  },
  cityItem: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  cityText: {
    fontSize: 16,
  },
  closeButton: {
    backgroundColor: COLORS.ORANGE,
    marginTop: 10,
    paddingVertical: 10,
    borderRadius: 25,
  },
  closeButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
})
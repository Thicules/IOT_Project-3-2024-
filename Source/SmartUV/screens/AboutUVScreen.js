import {ScrollView, SafeAreaView,Image, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import { styleAboutUV } from './styleScreen/styleAboutUV';
import { useNavigation } from '@react-navigation/native';
export const AboutUVScreen = () => {
  
  return (
    <ScrollView style={{ flex: 1 }}>    
        <View style={styleAboutUV.titleContainer}>
            <Image style={[styleAboutUV.titleImage, {resizeMode: 'contain'}]} source={require('../assets/logo.png')} />        
        </View> 
        <View style={styleAboutUV.infoContainer}>
          <Text style={styleAboutUV.title1}>
          What are UV rays?
          </Text>
          <Image style={[styleAboutUV.imageinfo,{resizeMode: 'contain'}] }source={require('../assets/uvrays.jpg')} />
          <Text style={styleAboutUV.info1}>
          Ultraviolet (UV) radiation is a type of electromagnetic radiation emitted by the sun. It is invisible to the human eye and has a shorter wavelength than visible light. UV radiation is categorized into three types based on wavelength: UVA, UVB, and UVC. UVC is mostly absorbed by the Earth's atmosphere and does not reach the surface, while UVA and UVB radiation can penetrate the atmosphere and affect our skin and eyes.
          </Text>
          <Text style={styleAboutUV.title1}>
          How do UV rays affect health?
          </Text>
          <Image style={[styleAboutUV.imageinfo,{resizeMode: 'contain'}] }source={require('../assets/uvaffect.jpg')} />

          <Text style={styleAboutUV.info1}>
          UV exposure has both beneficial and harmful effects. On the positive side, UV radiation helps our bodies produce vitamin D, which is essential for bone health. However, overexposure to UV radiation can lead to various health risks. The most common and immediate concern is sunburn, which occurs when the skin is damaged by excessive UVB radiation. Prolonged or repeated exposure to UV radiation can also increase the risk of skin cancer, premature aging, cataracts, and other eye conditions.
          </Text>
          <Text style={styleAboutUV.title1}>
          UV Index
          </Text>

          <Text style={styleAboutUV.info1}>
          To measure the intensity of UV radiation and raise awareness about its potential risks, the concept of the UV Index was introduced. The UV Index is an international standard measurement that indicates the strength of UV radiation at a particular location and time. It provides a numerical value on a scale ranging from 0 to 11 or higher. The higher the UV Index value, the greater the potential for skin damage and the need for protective measures.          </Text>
          <Image style={[styleAboutUV.imageinfo,{resizeMode: 'contain'}] }source={require('../assets/uvindex.png')} />

        </View>
    </ScrollView>
  )}
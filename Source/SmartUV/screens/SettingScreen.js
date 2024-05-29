import {ScrollView, SafeAreaView,Image, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import { styleSetting } from './styleScreen/styleSetting';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

const SettingScreen = () => {
  const navigation = useNavigation();
  const handleAboutUV = () => {
    navigation.navigate('AboutUV');
  }
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView style={{flex: 1}}>
        <LinearGradient colors={['#fb8c00', '#FFC36B']} style={styleSetting.headerContainer}>
          <Text style={styleSetting.mainTitle}>
              Profile
          </Text>       
        </LinearGradient>
        <View style={styleSetting.profileContainer}>
          <Image style={styleSetting.avatarImage} source={require('../assets/avatarUser.png')} />
          <View style={styleSetting.infoUserContainer}>
            <View style={styleSetting.infoLine}>
              <Text style={styleSetting.infoTitle}>Name: </Text>
              <Text style={styleSetting.infoUser}>Nguyen Tra Bao Ngan</Text>
            </View>
            <View style={styleSetting.infoLine}>
              <Text style={styleSetting.infoTitle}>Age: </Text>
              <Text style={styleSetting.infoUser}>20</Text>
            </View>
            <View style={styleSetting.infoLine}>
              <Text style={styleSetting.infoTitle}>Gender: </Text>
              <Text style={styleSetting.infoUser}>Female</Text>
            </View>
            <View style={styleSetting.infoLine}>
              <Text style={styleSetting.infoTitle}>Skin type: </Text>
              <Text style={styleSetting.infoUser}>Type III</Text>
            </View>            
          </View>
        </View>
        <TouchableOpacity style={styleSetting.buttonEdit}>
          <Text style={styleSetting.buttonText}>Edit</Text>
        </TouchableOpacity>
        <View style={styleSetting.settinginfoContainer}>
          <Text style={styleSetting.settingTitle}>Your Location</Text>
          <TouchableOpacity>
            <Image style={styleSetting.iconMore} source={require('../assets/more.png')}/>
          </TouchableOpacity>
          
        </View>
        <View style={styleSetting.line}/>
        <View style={styleSetting.settinginfoContainer}>
          <Text style={styleSetting.settingTitle}>About UV</Text>
          <TouchableOpacity onPress={handleAboutUV}>
            <Image style={styleSetting.iconMore} source={require('../assets/more.png')}/>
          </TouchableOpacity>
          
        </View>
        <View style={styleSetting.line}/>
        <View style={styleSetting.settinginfoContainer}>
          <Text style={styleSetting.settingTitle}>Sun Protection</Text>
          <Image style={styleSetting.iconMore} source={require('../assets/more.png')}/>
        </View>
        <View style={styleSetting.line}/>
        <View style={styleSetting.settinginfoContainer}>
          <Text style={styleSetting.settingTitle}>About Us</Text>
          <Image style={styleSetting.iconMore} source={require('../assets/more.png')}/>
        </View>
        <TouchableOpacity style={styleSetting.fixedButton}>
          <Text style={styleSetting.buttonlogoutText}>LOG OUT</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
    
  );
};

export default SettingScreen;
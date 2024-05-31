import {Image, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import { styleWelcome } from './styleScreen/styleWelcome';
import { useNavigation } from '@react-navigation/native';

export const WelcomeScreen = () => {
  const navigation = useNavigation();
  const handleSignup = () => {
    navigation.navigate('HomeTab');
  }
  return (
    <View>
      <View style={styleWelcome.headerContainer}>
        <Image source={require('../assets/1.png')} style={{resizeMode: 'contain'}} />
      </View>
      <View style={styleWelcome.titleContainer}>
        <Text style={styleWelcome.titleText}>Welcome to</Text>
        <Image style={[styleWelcome.titleImage, {resizeMode: 'contain'}]} source={require('../assets/logo.png')} />
        
      </View>
      <Image source={require('../assets/3.png')} style={styleWelcome.mainImage} />
      <TouchableOpacity onPress={handleSignup} style={styleWelcome.fixedButton}>
        <Text style={styleWelcome.buttonText}>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styleWelcome.signinText}>Already have an account? Log in</Text>
      </TouchableOpacity>
      <View style={styleWelcome.footerContainer}>
        <Image source={require('../assets/2.png')} style={{resizeMode: 'contain'}} />
      </View>
    </View>
    
  )}
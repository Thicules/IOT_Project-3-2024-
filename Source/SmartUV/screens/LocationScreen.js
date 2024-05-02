import { View, Text, SafeAreaView, ScrollView, Image, TouchableOpacity, StyleSheet } from 'react-native';
import React,  {useState, useEffect}  from 'react';
import { styleLocation } from './styleScreen/styleLocation';
import { LinearGradient } from 'expo-linear-gradient';
import { COLORS } from '../assets';
const LocationScreen = () => {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      setCurrentTime(currentTime);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView style= {{flex: 1}}> 
      <LinearGradient colors={['#fb8c00', '#FFC36B']} style={styleLocation.container}>
      <View style={styleLocation.headerContainer}>
          <Text style={styleLocation.mainTitle}>Locations</Text>
          <View style={styleLocation.buttonContainer}>
          <TouchableOpacity>
            <Image style={styleLocation.button} source={require('../assets/add.png')}/>            
          </TouchableOpacity>
          <TouchableOpacity>
            <Image style={styleLocation.button} source={require('../assets/edit.png')}/>            
          </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
      <View style={styleLocation.locationContainer}>
        <Text style={styleLocation.cityName}>TP. Hồ Chí Minh</Text>
        <Text style={styleLocation.localTime}>{currentTime}</Text>
      </View>
      <View style={styleLocation.line}></View>
      <View style={styleLocation.locationContainer}>
        <Text style={styleLocation.cityName}>TP. Dĩ An</Text>
        <Text style={styleLocation.localTime}>{currentTime}</Text>
      </View>
      <View style={styleLocation.line}></View>
      
      </ScrollView>
      <TouchableOpacity style={styleLocation.fixedButton}>
        <Text style={styleLocation.buttonText}>+ Add a new location</Text>
      </TouchableOpacity>
    </SafeAreaView>
    
  );
};

export default LocationScreen;
import { View, Text, SafeAreaView, ScrollView, Image, TouchableOpacity, Modal, TextInput, FlatList } from 'react-native';
import React,  {useState, useEffect}  from 'react';
import { styleLocation } from './styleScreen/styleLocation';
import { LinearGradient } from 'expo-linear-gradient';
import { cities } from '../assets/cities';
const LocationScreen = () => {
  const [currentTime, setCurrentTime] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredCities, setFilteredCities] = useState([]);  
  const [addedCities, setAddedCities] = useState([]);

  const handleSearch = (query) => {
    setSearchQuery(query);
    const filtered = cities.filter(city =>
      city.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredCities(filtered);
  };

  const handleAddCity = (city) => {
    // Add your logic to handle adding the city to the list
    console.log("Adding city:", city);
    setAddedCities([...addedCities, city]);
    setModalVisible(false);
  };

  const renderCityItem = ({ item }) => (
    <TouchableOpacity style={styleLocation.cityItem} onPress={() => handleAddCity(item)}>
      <Text style={styleLocation.cityText}>{item}</Text>
    </TouchableOpacity>
  );

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
      {addedCities.map((city, index) => (
        <View key={index}>
          <View style={styleLocation.locationContainer}>
            <Text style={styleLocation.cityName}>{city}</Text>
            <Text style={styleLocation.localTime}>{currentTime}</Text>
          </View>
          <View style={styleLocation.line}></View>
        </View>
      ))}
      </ScrollView>
      <TouchableOpacity style={styleLocation.fixedButton} onPress={() => setModalVisible(true)}>
        <Text style={styleLocation.buttonText}>+ Add a new location</Text>
      </TouchableOpacity>
      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styleLocation.modalContainer}>
          <View style={styleLocation.modalContent}>
            <Text style={styleLocation.modalTitle}>Add City</Text>
            <TextInput
              style={styleLocation.searchInput}
              placeholder="Search city"
              value={searchQuery}
              onChangeText={handleSearch}
            />
            <FlatList
              data={filteredCities}
              renderItem={renderCityItem}
              keyExtractor={(item) => item}
              style={styleLocation.cityList}
            />
            <TouchableOpacity
              style={styleLocation.closeButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styleLocation.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
    
  );
};

export default LocationScreen;

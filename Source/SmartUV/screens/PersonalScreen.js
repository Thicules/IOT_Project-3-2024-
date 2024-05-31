import { View, Text, SafeAreaView, ScrollView, Image, TouchableOpacity, StyleSheet } from 'react-native';
import React,  {useState, useEffect}  from 'react';
import { stylePersonal } from './styleScreen/stylePersonal';
import { LinearGradient } from 'expo-linear-gradient';
import { Dropdown } from 'react-native-element-dropdown';
import { COLORS } from '../assets';

const PersonalScreen = () => {
  const [selectedSkinType, setSelectedSkinType] = useState(null);
  const [selectedWork, setSelectedWork] = useState(null);
  const handleSkinTypePress = (type) => {
    setSelectedSkinType(type);
  };
  const skinData = [
    { label: 'Type I', value: 'Type I' },
    { label: 'Type II', value: 'Type II' },
    { label: 'Type III', value: 'Type III' },
    { label: 'Type IV', value: 'Type IV' },
    { label: 'Type V', value: 'Type V' },
    { label: 'Type VI', value: 'Type VI' },
  ];
  
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1 }}>
        <LinearGradient colors={['#fb8c00', '#FFC36B']} style={stylePersonal.container}>
          <View style={stylePersonal.headerContainer}>
            <Text style={stylePersonal.mainTitle}>
              Skin with UV
            </Text>
          </View>
        </LinearGradient>
        <View style={stylePersonal.skinMainTitle}>
          <Text style={stylePersonal.skinMainTitle1}>WHAT'S YOUR </Text>
          <Text style={stylePersonal.skinMainTitle2}>FITZPATRICK SKIN TYPE</Text>
          <Text style={stylePersonal.skinMainTitle1}>?</Text>          
        </View>        
        <View style={stylePersonal.skinChosenTextContainer}>
            <Text style={[stylePersonal.skinInfoMainText, {marginTop: 5, fontSize: 16, fontWeight: '500', marginBottom: 20,}]}>Choose your skin type: </Text>
            <Dropdown
                style={[stylePersonal.skinchosenStyles]}
                selectedTextStyle={stylePersonal.optionchosenStyles}
                data={skinData}
                labelField="label"
                valueField="value"
                value={selectedWork} 
                onChange={item => {
                setSelectedWork(item.value); 
                }}
                />
        </View>
        
        <View style={stylePersonal.skinMainTitle}>
          <Text style={stylePersonal.skinMainTitle2}>FITZPATRICK SKIN TYPES</Text>
        </View>
        <View style={stylePersonal.skinFrame}>
          <View style={stylePersonal.skinTypesContainer}>
            <TouchableOpacity
              style={[stylePersonal.skinContainer, { backgroundColor: "#FFF5EE" }]}
              onPress={() => handleSkinTypePress("Type I")}
            >
              <Image
                source={require('../assets/typeI.png')}
                style={{ width: 75, height: 100, resizeMode: 'contain', borderRadius: 10 }}
              />
              <Text style={[stylePersonal.skinText, { color: "#4D4B44" }]}>SKIN TYPE I</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[stylePersonal.skinContainer, { backgroundColor: "#F9EBE0" }]}
              onPress={() => handleSkinTypePress("Type II")}
            >
              <Image
                source={require('../assets/typeII.png')}
                style={{ width: 75, height: 100, resizeMode: 'contain', borderRadius: 10 }}
              />
              <Text style={[stylePersonal.skinText, { color: "#4D4B44" }]}>SKIN TYPE II</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[stylePersonal.skinContainer, { backgroundColor: "#F5D6B4" }]}
              onPress={() => handleSkinTypePress("Type III")}
            >
              <Image
                source={require('../assets/typeIII.png')}
                style={{ width: 75, height: 100, resizeMode: 'contain', borderRadius: 10 }}
              />
              <Text style={[stylePersonal.skinText, { color: "#4D4B44" }]}>SKIN TYPE III</Text>
            </TouchableOpacity>
          </View>
          <View style={stylePersonal.skinTypesContainer}>
            <TouchableOpacity
              style={[stylePersonal.skinContainer, { backgroundColor: "#D69E77" }]}
              onPress={() => handleSkinTypePress("Type IV")}
            >
              <Image
                source={require('../assets/typeIV.png')}
                style={{ width: 75, height: 100, resizeMode: 'contain', borderRadius: 10 }}
              />
              <Text style={[stylePersonal.skinText, { color: "#FFFFFF" }]}>SKIN TYPE IV</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[stylePersonal.skinContainer, { backgroundColor: "#754842" }]}
              onPress={() => handleSkinTypePress("Type V")}
            >
              <Image
                source={require('../assets/typeV.png')}
                style={{ width: 75, height: 100, resizeMode: 'contain', borderRadius: 10 }}
              />
              <Text style={[stylePersonal.skinText, { color: "#FFFFFF" }]}>SKIN TYPE V</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[stylePersonal.skinContainer, { backgroundColor: "#624D47" }]}
              onPress={() => handleSkinTypePress("Type VI")}
            >
              <Image
                source={require('../assets/typeVI.png')}
                style={{ width: 75, height: 100, resizeMode: 'contain', borderRadius: 10 }}
              />
              <Text style={[stylePersonal.skinText, { color:"#FFFFFF" }]}>SKIN TYPE VI</Text>
            </TouchableOpacity>
          </View>
        </View>

        {selectedSkinType && (
        <View style={stylePersonal.skinInfoContainer}>
            <Text style={stylePersonal.skinInfoMainText}>
            Fitzpatrick skin {selectedSkinType}
            </Text>
            {selectedSkinType === "Type I" && (
            <>
                <Text style={stylePersonal.skinInfoSubText}>People with Type I skin have very fair or pale skin that burns easily and rarely tans. They often have freckles and light-colored eyes. This skin type is highly sensitive to the sun and is at a high risk of sunburn and skin damage.</Text>
                <Text style={stylePersonal.skinInfoSubText1}>Notes: </Text>
                <Text style={stylePersonal.skinInfoSubText2}>Use sunscreen, avoid intense sunlight, wear a hat and protective clothing.</Text>
                <View style={stylePersonal.skinInfoTextContainer}>
                    <Text style={stylePersonal.skinInfoSubText1}>Sun Exposure Time: </Text>
                    <Text style={stylePersonal.skinInfoSubText2}>10-15 minutes</Text>
                </View>
                <View style={stylePersonal.skinInfoTextContainer}>
                    <Text style={stylePersonal.skinInfoSubText1}>Sunscreen: </Text>
                    <Text style={stylePersonal.skinInfoSubText2}>SPF 30+</Text>
                </View>
            </>
            )}
            {selectedSkinType === "Type II" && (
            <>
            <Text style={stylePersonal.skinInfoSubText}>Individuals with Type II skin have fair skin that burns easily but can eventually develop a light tan. They may have light or blue eyes and blonde or light brown hair. This skin type is also prone to sunburn and requires protection from excessive sun exposure.</Text>
                <Text style={stylePersonal.skinInfoSubText1}>Notes: </Text>
                <Text style={stylePersonal.skinInfoSubText2}>Use sunscreen, avoid intense sunlight, wear a hat and protective clothing.</Text>
                <View style={stylePersonal.skinInfoTextContainer}>
                    <Text style={stylePersonal.skinInfoSubText1}>Sun Exposure Time: </Text>
                    <Text style={stylePersonal.skinInfoSubText2}>15-20 minutes</Text>
                </View>
                <View style={stylePersonal.skinInfoTextContainer}>
                    <Text style={stylePersonal.skinInfoSubText1}>Sunscreen: </Text>
                    <Text style={stylePersonal.skinInfoSubText2}>SPF 30+</Text>
                </View>
            </>
            )}
            {selectedSkinType === "Type III" && (
            <>
            <Text style={stylePersonal.skinInfoSubText}>Type III skin is moderately fair and can tan gradually. It usually belongs to individuals with a mix of European and Asian ancestry. People with Type III skin may have hazel or brown eyes and dark blonde to brown hair. While they have a lower risk of sunburn compared to Types I and II, they still need sun protection.</Text>
                <Text style={stylePersonal.skinInfoSubText1}>Notes: </Text>
                <Text style={stylePersonal.skinInfoSubText2}>Use sunscreen, follow other skin protection measures.</Text>
                <View style={stylePersonal.skinInfoTextContainer}>
                    <Text style={stylePersonal.skinInfoSubText1}>Sun Exposure Time: </Text>
                    <Text style={stylePersonal.skinInfoSubText2}>20-30 minutes</Text>
                </View>
                <View style={stylePersonal.skinInfoTextContainer}>
                    <Text style={stylePersonal.skinInfoSubText1}>Sunscreen: </Text>
                    <Text style={stylePersonal.skinInfoSubText2}>SPF 15-30</Text>
                </View>
            </>
            )}
            {selectedSkinType === "Type IV" && (
            <>
            <Text style={stylePersonal.skinInfoSubText}>Individuals with Type IV skin have olive or light brown skin that tans easily and rarely burns. They often have dark brown eyes and dark hair. This skin type has a relatively lower risk of sunburn but still requires protection from prolonged sun exposure.</Text>
                <Text style={stylePersonal.skinInfoSubText1}>Notes: </Text>
                <Text style={stylePersonal.skinInfoSubText2}>Use sunscreen, protect the skin from the negative effects of UV rays.</Text>
                <View style={stylePersonal.skinInfoTextContainer}>
                    <Text style={stylePersonal.skinInfoSubText1}>Sun Exposure Time: </Text>
                    <Text style={stylePersonal.skinInfoSubText2}>30-40 minutes</Text>
                </View>
                <View style={stylePersonal.skinInfoTextContainer}>
                    <Text style={stylePersonal.skinInfoSubText1}>Sunscreen: </Text>
                    <Text style={stylePersonal.skinInfoSubText2}>SPF 15-30</Text>
                </View>
            </>
            )}
            {selectedSkinType === "Type V" && (
            <>
            <Text style={stylePersonal.skinInfoSubText}>Type V skin is moderately dark and naturally tans easily. People with Type V skin usually have brown eyes and dark hair. While they have a lower risk of sunburn, they should still protect their skin from excessive sun exposure.</Text>
                <Text style={stylePersonal.skinInfoSubText1}>Notes: </Text>
                <Text style={stylePersonal.skinInfoSubText2}>Use sunscreen, protect the skin from the negative effects of UV rays.</Text>
                <View style={stylePersonal.skinInfoTextContainer}>
                    <Text style={stylePersonal.skinInfoSubText1}>Sun Exposure Time: </Text>
                    <Text style={stylePersonal.skinInfoSubText2}>40-60 minutes</Text>
                </View>
                <View style={stylePersonal.skinInfoTextContainer}>
                    <Text style={stylePersonal.skinInfoSubText1}>Sunscreen: </Text>
                    <Text style={stylePersonal.skinInfoSubText2}>SPF 15-30</Text>
                </View>
            </>
            )}
            {selectedSkinType === "Type VI" && (
            <>
            <Text style={stylePersonal.skinInfoSubText}>This skin type is deeply pigmented and rarely burns. People with Type VI skin have dark eyes and black hair. They have the lowest risk of sunburn but should still take precautions in the sun.</Text>
                <Text style={stylePersonal.skinInfoSubText1}>Notes: </Text>
                <Text style={stylePersonal.skinInfoSubText2}>Use sunscreen, protect the skin from the negative effects of UV rays.</Text>
                <View style={stylePersonal.skinInfoTextContainer}>
                    <Text style={stylePersonal.skinInfoSubText1}>Sun Exposure Time: </Text>
                    <Text style={stylePersonal.skinInfoSubText2}>60-90 minutes</Text>
                </View>
                <View style={stylePersonal.skinInfoTextContainer}>
                    <Text style={stylePersonal.skinInfoSubText1}>Sunscreen: </Text>
                    <Text style={stylePersonal.skinInfoSubText2}>SPF 15-30</Text>
                </View>
            </>
            )}
        </View>
        )}

      </ScrollView>
    </SafeAreaView>
  );
};

export default PersonalScreen;
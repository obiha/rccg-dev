import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, Text, View, StyleSheet, SafeAreaView } from 'react-native';
import { ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import introImg from '../data/testimg/intro.jpg'

const styles = StyleSheet.create({
  headerImage: {
    width: '100%', height: 460
  },
  headerText: {
    color: 'white',
    fontSize: 25,
    lineHeight: 130,
    textAlign: 'center',
    backgroundColor: '#2a3753c0',
    height: 460,

  },
  topcard: {
    borderRadius: '5%',
    marginLeft:"2%", 
    marginTop:'6%',
    marginBottom:'2%',
    width: '96%', 
    height: 170, 
    backgroundColor: '#f0f0f0', 
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,

  },
  card: {
    borderRadius: '5%',
    marginLeft:"2%", 
    marginTop:'2%',
    marginBottom:'2%',
    width: '96%', 
    height: 170, 
    backgroundColor: '#f0f0f0', 
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,

  },
  shadowProp: {
   

  },
});


export default function HomeScreen() {
  return (

    <ScrollView style={{ flex: 3, backgroundColor: '#FFFFFF' }}>

      <View style={{ width: '100%', height: 450, backgroundColor: '#FFFFFF' }}>
        <ImageBackground source={introImg} style={styles.headerImage}>

          <Text style={styles.headerText}> RoyalHouse</Text>

        </ImageBackground>

      </View>

      {/* <LinearGradient
        // Button Linear Gradient
        colors={['#2a3753', '#ffffff']}
      >
        <Text style={styles.text}></Text>
      </LinearGradient> */}


      <View style={styles.topcard}>

      </View>

      <View style={styles.card}>

      </View>

      <View style={styles.card}>

      </View>

      <View style={styles.card}>

      </View>


      {/* 

<View style={{ width: '100%', height: 200, backgroundColor: '#000000' }}>

</View>
<View style={{ width: '100%', height: 200, backgroundColor: '#00C0A0' }}>

</View>
<View style={{ width: '100%', height: 200, backgroundColor: '#000000' }}>

</View>

<View style={{ width: '100%', height: 200, backgroundColor: '#00C0A0' }}>

</View> */}





    </ScrollView>




  );


}
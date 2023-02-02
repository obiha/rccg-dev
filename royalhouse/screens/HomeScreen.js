import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, Text, View, StyleSheet, SafeAreaView } from 'react-native';
import { ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import introImg from '../data/testimg/intro.jpg'
import newImg from '../data/testimg/new.jpg'

const styles = StyleSheet.create({
  headerImage: {
    width: '100%', height: 350
  },
  headerText: {
    color: 'white',
    fontSize: 25,
    lineHeight: 140,
    textAlign: 'center',
    backgroundColor: '#0a0a0ac0',
    height: 350,

  },
  topcard: {
    borderRadius: '10%',
    marginLeft:"2%", 
    marginTop:'0%',
    marginBottom:'2%',
    width: '96%', 
    height: 175, 
    backgroundColor: '#2D4F61', 
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,

  },
  card: {
    borderRadius: '10%',
    marginLeft:"2%", 
    marginTop:'2%',
    marginBottom:'2%',
    width: '96%', 
    height: 175, 
    backgroundColor: '#2D4F61', 
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

    <ScrollView style={{ flex: 3, backgroundColor: '#000000', borderTopLeftRadius:'20%', borderTopRightRadius:'20%' }}>

      <View style={{ width: '100%', height: 350, backgroundColor: '#FFFFFF', borderTopLeftRadius:'20%', borderTopRightRadius:'20%' }}>
        <ImageBackground source={introImg} style={styles.headerImage} imageStyle={{ borderTopLeftRadius:'20%', borderTopRightRadius:'20%'}}>

          <Text style={styles.headerText}> RoyalHouse</Text>

        </ImageBackground>

      </View>

      <LinearGradient
        // Button Linear Gradient
        colors={['#000000c0', '#000000']}
      >
        <Text style={styles.text}></Text>
      </LinearGradient>


      <View style={styles.topcard}>
        <ImageBackground source={newImg} style={{height: '100%', width: '100%'}} imageStyle={{ borderRadius:'10%'}}>
           <Text>Events</Text>
        </ImageBackground>
       
      </View>

      <View style={styles.card}>
        <Text>Watch Live</Text>
      </View>

      <View style={styles.card}>
        <Text>Sermons</Text>
      </View>

      <View style={styles.card}>
        <Text>Destiny Group</Text>
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
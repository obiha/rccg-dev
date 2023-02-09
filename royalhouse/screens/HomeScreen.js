import * as React from 'react';
import { useState } from 'react';
import { ScrollView, Text, View, StyleSheet, SafeAreaView, Button, TouchableOpacity, Dimensions } from 'react-native';
import { Image, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
// import introImg from '../data/testimg/intro.jpg'
// import introImgTwo from '../data/testimg/intro2.jpg'
import newImg from '../data/testimg/new.jpg'

const images = [
  'https://images.pexels.com/photos/1666816/pexels-photo-1666816.jpeg',
  'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg',
  'https://images.pexels.com/photos/2351722/pexels-photo-2351722.jpeg'
]

const { width } = Dimensions.get("window")
const height = width * 100 / 110;


const styles = StyleSheet.create({
  headerImage: {
    width, height: 480
  },
  headerText: {
    color: 'white',
    fontSize: 25,
    lineHeight: 140,
    textAlign: 'center',
    backgroundColor: '#2E3B565C',
    height: 480,

  },
  topcard: {
    borderRadius: '10%',
    marginLeft: "2%",
    marginTop: '0%',
    marginBottom: '2%',
    width: '96%',
    height: 175,
    backgroundColor: '#2D4F61',
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,

  },
  card: {
    borderRadius: '10%',
    marginLeft: "2%",
    marginTop: '2%',
    marginBottom: '2%',
    width: '96%',
    height: 175,
    backgroundColor: '#2D4F61',
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,

  },
  shadowProp: {


  },
});

export default function HomeScreen() {
  return (
    <ScrollView style={{ flex: 3, backgroundColor: '#000000', borderTopLeftRadius: '20%', borderTopRightRadius: '20%' }}>
      <View style={{ width: '100%', height: 480, backgroundColor: '#000000', borderTopLeftRadius: '20%', borderTopRightRadius: '20%' }} >
        <ScrollView horizontal={true} pagingEnabled style={{ width, height }}>
          {images.map((image, index) => (
            <ImageBackground
              key={index}
              source={{ uri: image }}
              style={styles.headerImage} imageStyle={{ borderTopLeftRadius: '0%', borderTopRightRadius: '0%' }}
            >

              <Text style={styles.headerText}> RoyalHouse</Text>
            </ImageBackground>
          ))}

        </ScrollView>
      </View>

      <LinearGradient
        // Button Linear Gradient
        colors={['#000000c0', '#000000']}
      >
        <Text style={styles.text}></Text>
      </LinearGradient>

      <View style={styles.topcard}>
        <ImageBackground source={newImg} style={{ height: '100%', width: '100%' }} imageStyle={{ borderRadius: '10%' }}>
          <TouchableOpacity style={{ height: '100%', width: '100%', borderRadius: '10%', backgroundColor: '#00000033' }} onPress={() => { console.log('You tapped the button!') }}>
          <Text>Destiny Group</Text>

          </TouchableOpacity>
        </ImageBackground>

      </View>

      <View style={styles.card}>
        <ImageBackground source={newImg} style={{ height: '100%', width: '100%' }} imageStyle={{ borderRadius: '10%' }}>
          <TouchableOpacity style={{ height: '100%', width: '100%', borderRadius: '10%', backgroundColor: '#00000033' }} onPress={() => { console.log('You tapped the button!') }}>
          <Text>Destiny Group</Text>
          </TouchableOpacity>
        </ImageBackground>

      </View>

      <View style={styles.card}>
        <ImageBackground source={newImg} style={{ height: '100%', width: '100%' }} imageStyle={{ borderRadius: '10%' }}>
          <TouchableOpacity style={{ height: '100%', width: '100%', borderRadius: '10%', backgroundColor: '#00000033' }} onPress={() => { console.log('You tapped the button!') }}>
          <Text>Destiny Group</Text>
          </TouchableOpacity>
        </ImageBackground>

      </View>

      <View style={styles.card}>
        <ImageBackground source={newImg} style={{ height: '100%', width: '100%' }} imageStyle={{ borderRadius: '10%' }}>
          <TouchableOpacity style={{ height: '100%', width: '100%', borderRadius: '10%', backgroundColor: '#00000033' }} onPress={() => { console.log('You tapped the button!') }}>
          <Text>Destiny Group</Text>
          </TouchableOpacity>
        </ImageBackground>

      </View>

      <View style={styles.card}>
        
          <TouchableOpacity style={{ height: '100%', width: '100%', borderRadius: '10%', backgroundColor: '#FFFFFF' }} onPress={() => { console.log('You tapped the button!') }}>
          <Text>Destiny Group</Text>
          </TouchableOpacity>
        

      </View>

    </ScrollView>






  );
}
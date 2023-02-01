import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, Text, View, StyleSheet, SafeAreaView } from 'react-native';
import { ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import introImg from '../data/testimg/intro.jpg'

const styles = StyleSheet.create({
  heading: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 13,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    paddingVertical: 45,
    paddingHorizontal: 25,
    width: '100%',
    marginVertical: 10,
  },
  shadowProp: {
    shadowColor: '#171717',
    // shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
});


export default function HomeScreen() {
  return (

    <ScrollView style={{ flex: 3, backgroundColor: '#FFFFFF' }}>

      <View style={{ width: '100%', height: 500, backgroundColor: '#000000' }}>

      </View>

      <View style={{ width: '100%', height: 500, backgroundColor: '#0101F0' }}>

      </View>
      <View style={{ width: '100%', height: 200, backgroundColor: '#000000' }}>

      </View>
      <View style={{ width: '100%', height: 200, backgroundColor: '#00C0A0' }}>

      </View>
      <View style={{ width: '100%', height: 200, backgroundColor: '#000000' }}>

      </View>

      <View style={{ width: '100%', height: 200, backgroundColor: '#00C0A0' }}>

      </View>

    </ScrollView>




  );


}
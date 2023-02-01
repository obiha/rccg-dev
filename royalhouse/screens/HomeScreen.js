import * as React from 'react';
import { ScrollView, Text, View, StyleSheet, SafeAreaView } from 'react-native';
import { Image } from 'react-native';
import introImg from '../data/testimg/intro.jpg'
export default function HomeScreen() {
  return (
    // <SafeAreaView style={{styles.container}}>
    //    <Image source={{uri: 'https://reactjs.org/logo-og.png'}}
    //         style={{width: 400, height: 400}} />
    //   <ScrollView>
    //     <View  style={{width: '100%',
    //       // height: 100,
    //       backgroundColor: '#F5FBFF'}}>


    //       {/* SCREEN TITLE */}
    //       <Text style={{margin:20, fontSize: 40, }}>
    //         Home
    //       </Text>
    //     </View>

    //     <Text>
    //       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do

    //     </Text>

    //     <View style={{ flex: 3, backgroundColor: 'green' }}>

    //     <View style={{
    //       width: 100,
    //       height: 100,
    //       backgroundColor: 'skyblue'
    //     }}>

    //     </View>

    //       <Text>
    //         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    //         eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
    //         minim veniam, quis nostrud exercitation ullamco laboris nisi ut
    //         aliquip ex ea commodo consequat. Duis aute irure dolor in
    //         reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
    //         pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
    //         culpa qui officia deserunt mollit anim id est laborum.
    //         eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
    //       minim veniam, quis nostrud exercitation ullamco laboris nisi ut
    //       aliquip ex ea commodo consequat. Duis aute irure dolor in
    //       reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
    //       pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
    //       culpa qui officia deserunt mollit anim id est laborum.
    //       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    //       eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
    //       minim veniam, quis nostrud exercitation ullamco laboris nisi ut
    //       aliquip ex ea commodo consequat. Duis aute irure dolor in
    //       reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
    //       pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
    //       culpa qui officia deserunt mollit anim id est laborum.
    //       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    //       eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
    //       minim veniam, quis nostrud exercitation ullamco laboris nisi ut
    //       aliquip ex ea commodo consequat. Duis aute irure dolor in
    //       reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
    //       pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
    //       culpa qui officia deserunt mollit anim id est laborum.
    //       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    //       eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
    //       minim veniam, quis nostrud exercitation ullamco laboris nisi ut
    //       aliquip ex ea commodo consequat. Duis aute irure dolor in
    //       reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
    //       pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
    //       culpa qui officia deserunt mollit anim id est laborum.
    //       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    //       eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
    //       minim veniam, quis nostrud exercitation ullamco laboris nisi ut
    //       aliquip ex ea commodo consequat. Duis aute irure dolor in
    //       reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
    //       pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
    //       culpa qui officia deserunt mollit anim id est laborum.
    //       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    //       eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
    //       minim veniam, quis nostrud exercitation ullamco laboris nisi ut
    //       aliquip ex ea commodo consequat. Duis aute irure dolor in
    //       reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
    //       pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
    //       culpa qui officia deserunt mollit anim id est laborum.
    //       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    //       eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
    //       minim veniam, quis nostrud exercitation ullamco laboris nisi ut
    //       aliquip ex ea commodo consequat. Duis aute irure dolor in
    //       reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
    //       pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
    //       culpa qui officia deserunt mollit anim id est laborum.
    //       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    //       eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
    //       minim veniam, quis nostrud exercitation ullamco laboris nisi ut
    //       aliquip ex ea commodo consequat. Duis aute irure dolor in
    //       reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
    //       pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
    //       culpa qui officia deserunt mollit anim id est laborum.

    //       </Text>

    //     </View>

    //     <View style={{
    //       width: '100%',
    //       height: 200,
    //       backgroundColor: 'skyblue'
    //     }}>

    //     </View>

    //   </ScrollView>
    // </SafeAreaView>

    // <ScrollView style={{ margin: 0, flex: 700 }}>
    //   <View style={{ margin: 0 }}>
    //     <Image source={{ uri: 'https://reactjs.org/logo-og.png' }}
    //       style={{ width: '100%', height: 300 }} />
    //   </View>

    //   <SafeAreaView>
    //     <View style={{ width: '100%', backgroundColor: '#000000', }}>
     
    //       <View style={{ width: '95%', height: '40%', marginTop: '10%', marginBottom: '2%', borderRadius: '9%', backgroundColor: '#FFFFFF' }}>
     
    //       </View>

    //     </View>


    //   </SafeAreaView>



    // </ScrollView>

    <SafeAreaView style={{flex:1, backgroundColor:'#000000'}}>
      <Image source={{ uri: 'https://reactjs.org/logo-og.png' }}
          style={{ width: '100%', height: 300 }} />
          <View style={{ margin: 0 }}>
         
      </View>




    </SafeAreaView>


  );
}
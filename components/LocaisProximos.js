import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Image, Button } from 'react-native';
import theme from '../assets/theme'
import Local from './Local';

export default function LocaisProximos({ navigation }) {

  return (
    <View style={styles.backgroud}>
      <Text style={styles.title}>Locais Próximos</Text>
      <View style={styles.cards}>
        <Local data={{ image: require('../assets/images/shop3.png') }} navigation={navigation}/>
        <Local data={{ image: require('../assets/images/shop4.png') }} navigation={navigation}/>
        <Local data={{ image: require('../assets/images/shop5.png') }} navigation={navigation}/>
        <Local data={{ image: require('../assets/images/shop2.png') }} navigation={navigation}/>
        
        <Local data={{ image: require('../assets/images/shop3.png') }} navigation={navigation}/>
        <Local data={{ image: require('../assets/images/shop4.png') }} navigation={navigation}/>
        <Local data={{ image: require('../assets/images/shop5.png') }} navigation={navigation}/>
        <Local data={{ image: require('../assets/images/shop2.png') }} navigation={navigation}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    color: theme.colors.textPrimary,
    fontFamily: 'Lexend',
    fontSize: 40,
    lineHeight: 41,
    marginLeft: 20,
    marginVertical: 5,
    fontWeight: 'bold'
  },
  cards: {
    flexDirection: 'column',
    justifyContent: 'center',
  }
});
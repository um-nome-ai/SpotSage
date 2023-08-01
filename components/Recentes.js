import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Image, Button, TouchableOpacity } from 'react-native';
import theme from '../assets/theme'
import Local from './Local';

export default function Recentes({ navigation }) {
  const [inputText, setInputText] = useState("")

  return (
    <View style={styles.backgroud}>
      <View style={styles.header}>
        <Text style={styles.title}>Recentes</Text>
        <TouchableOpacity>
          <Image
            source={require('../assets/images/plus.png')}
            style={{}}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.cards}>
        <Local data={{ image: require('../assets/images/shop1.png') }} navigation={navigation} />
        <Local data={{ image: require('../assets/images/shop2.png') }} navigation={navigation} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  backgroud: {
    height: 268,
    flexShrink: 0,
    borderRadius: 12,
    backgroundColor: '#8C33FF',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 19,
    marginBottom: 11
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 11,
    marginLeft: 10,
    marginRight: 10
  },
  title: {
    color: theme.colors.white,
    fontFamily: 'Lexend',
    fontSize: 40,
    lineHeight: 41,
    fontWeight: 'bold'
  },
  cards: {
    flexDirection: 'column',
    justifyContent: 'center',
  }
});
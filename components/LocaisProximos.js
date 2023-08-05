import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import theme from '../assets/theme'
import Local from './Local';

export default function LocaisProximos({ navigation }) {
  const locais = require('../data/locais.json')

  return (
    <View style={styles.backgroud}>
      <Text style={styles.title}>Locais Próximos</Text>
      <View style={styles.cards}>
        {locais.map((local, index) => <Local key={index} local={local} navigation={navigation}/>)}
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
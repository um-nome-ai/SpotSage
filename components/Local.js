import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Image, Button, TouchableOpacity } from 'react-native';
import theme from '../assets/theme'

export default function Local({ navigation, data }) {
  return (
    <TouchableOpacity style={styles.background} onPress={() => navigation.navigate('Estacionamento')}>
      <View style={styles.info}>
        <Text style={styles.title}>Local</Text>
        <Text style={styles.subtext}>Endereço</Text>
        <Text style={styles.subtext}>Outra informação</Text>
        <Text style={styles.subtext}>Ultima coisa</Text>
      </View>
      <Image
        source={data.image}
        style={{width: 135, height: 90}}
      />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  background: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 90,
    backgroundColor: theme.colors.white,
    borderRadius: 8,
    flexShrink: 0,
    marginHorizontal: 10,
    marginVertical: 5
  },
  info: {
    marginLeft: 8,
    marginBottom: 12
  }, 
  title: {
    display: 'flex',
    height: 26,
    flexDirection: 'column',
    justifyContent: 'center',
    flexShrink: 0,
    color: '#000',
    fontFamily: 'Roboto',
    fontSize: 20,
    fontStyle: 'normal',
    letterSpacing: 0.41
  },
  subtext: {
    display: 'flex',
    height: 16,
    flexDirection: 'column',
    justifyContent: 'center',
    flexShrink: 0,
    color: theme.colors.textSecondary,
    fontFamily: 'Roboto',
    fontSize: 15,
    fontStyle: 'normal',
    letterSpacing: 0.41
  }
});
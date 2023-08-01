import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Image, Button, Dimensions, TouchableOpacity } from 'react-native';
import theme from '../assets/theme'

const { width, height } = Dimensions.get('window')

export default function Estacionado() {
  return (
    <View style={styles.background}>
      <View style={styles.text}>
        <Text style={styles.title}>Seu carro está estacionado em:</Text>
        <Text style={styles.subtitle}>Local</Text>
        <Text style={styles.subtitle}>Prédio/Andar</Text>
        <Text style={styles.subtitle}>Vaga</Text>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>SAIR</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  background: {
    width: width,
    height: 110,
    backgroundColor: theme.colors.selectedViolet,
    top: height - 65,
    position: 'absolute',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    marginLeft: 8,
    marginTop: 4
  },
  title: {
    color: theme.colors.white,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontSize: 16
  },
  subtitle: {
    color: theme.colors.white,
    fontFamily: 'Roboto',
    fontSize: 15
  },
  button: {
    display: 'flex',
    width: 134,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: theme.colors.primaryButton,
    marginTop: 27,
    marginRight: 20
  },
  buttonText: {
    color: theme.colors.white,
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontSize: 32,
    fontWeight: 'bold'
  }
});
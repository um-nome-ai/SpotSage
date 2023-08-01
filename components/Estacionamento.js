import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Image, Button, ScrollView, TouchableOpacity } from 'react-native';
import SearchBar from './SearchBar';
import theme from '../assets/theme';
import Recentes from './Recentes';
import LocaisProximos from './LocaisProximos'
import Estacionado from './Estacionado';

export default function Estacionamento({ navigation }) {
  return (
    <View style={styles.background}>
      <View style={styles.mainFlex}>
        <View style={styles.predio}>
          <Text style={styles.text}>Prédio 1</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.insideText}>5</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.predio}>
          <Text style={styles.text}>Prédio 1</Text>
          <TouchableOpacity style={{...styles.button, backgroundColor: '#F88282'}}>
            <Text style={styles.insideText}>0</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.predio}>
          <Text style={styles.text}>Prédio 1</Text>
          <TouchableOpacity style={{...styles.button, backgroundColor: '#F8F482'}}>
            <Text style={styles.insideText}>2</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: theme.colors.background,
    display: 'flex'
  },
  mainFlex: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 28,
    marginHorizontal: 20,
    justifyContent: 'center'
  },
  predio: {
    marginHorizontal: 5
  },
  text: {
    color: '#000',
    fontFamily: 'Roboto',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  button: {
    width: 118,
    height: 118,
    backgroundColor: "#93F882",
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8
  },
  insideText: {
    fontFamily: 'Roboto',
    fontSize: 64,
    fontWeight: 'bold'
  }
});
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import theme from '../assets/theme'

export default function Predio({ selecionado, numPredio, seleciona }) {

  return (
    <View style={styles.predio}>
      <Text style={styles.text}>Prédio {numPredio}</Text>
      <TouchableOpacity style={{ ...styles.button, backgroundColor: (selecionado === (numPredio - 1)) ? '#7519EB' : '#93F882' }} onPress={() => seleciona((numPredio - 1))} activeOpacity={1}>
        <Text style={{ ...styles.insideText, color: (selecionado === (numPredio - 1)) ? theme.colors.white : '#000' }}>5</Text>
      </TouchableOpacity>
      {(selecionado === (numPredio - 1)) ? <View style={styles.ponte} /> : <></>}
    </View>
  )
}

// Background Color:
//  #BA85FF
//  #7029CC
//  #541F99

const styles = StyleSheet.create({
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
  },
  ponte: {
    position: 'absolute',
    bottom: -59,
    width: 118,
    height: 118,
    backgroundColor: '#7519EB',
    zIndex: -1
  }
});
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import theme from '../assets/theme'

export default function Secao({ selecionado, id, name, seleciona, vagas }) {
  let backColor = '#F8F482'

  if(vagas === 0)
    backColor = '#F88282'
  else if(vagas > 4)
    backColor = '#93F882'

  return (
    <View style={styles.predio}>
      <Text style={styles.text}>{name}</Text>
      <TouchableOpacity style={{ ...styles.button, backgroundColor: (selecionado === id) ? '#7519EB' : backColor }} onPress={() => seleciona(id)} activeOpacity={1}>
        <Text style={{ ...styles.insideText, color: (selecionado === id) ? theme.colors.white : '#000' }}>{vagas}</Text>
      </TouchableOpacity>
      {(selecionado === id) ? <View style={styles.ponte} /> : <></>}
    </View>
  )
}

// Background Color:
//  #BA85FF
//  #7029CC
//  #541F99

const styles = StyleSheet.create({
  predio: {
    marginHorizontal: 5,
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
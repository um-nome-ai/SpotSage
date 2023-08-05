import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import theme from '../assets/theme'

export default function Andar({ numAndares, andar, numPredios, predio, vagas }) {
  const bottomLeft = ((numAndares === (andar + 1)) || (predio !== 0)) ? 8 : 0
  const bottomRight = ((numAndares === (andar + 1)) || (predio !== (numPredios - 1))) ? 8 : 0
  const topLeft = ((predio !== 0)) ? 8 : 0
  const topRight = (predio !== (numPredios - 1)) ? 8 : 0

  return (
    <TouchableOpacity
      style={{
        ...styles.background,
        borderBottomLeftRadius: bottomLeft,
        borderBottomRightRadius: bottomRight,
        borderTopLeftRadius: topLeft,
        borderTopRightRadius: topRight
      }}
      activeOpacity={1}>
      <View style={styles.flex}>
        <Text style={styles.text}>{andar}º Andar</Text>
        <Text style={styles.text}>{vagas}</Text>
      </View>
    </TouchableOpacity>
  )
}

// Background Color:
//  #BA85FF
//  #7029CC
//  #541F99

const styles = StyleSheet.create({
  background: {
    marginHorizontal: 10,
    marginVertical: 10,
    height: 60,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    backgroundColor: '#8C33FF'
  },
  flex: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 15,
    marginRight: 48
  },
  text: {
    color: theme.colors.white,
    fontFamily: 'Roboto',
    fontSize: 36,
    fontWeight: 'bold'
  }
});
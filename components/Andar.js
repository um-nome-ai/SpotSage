import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import theme from '../assets/theme'

import Map from './Map';
import Context from '../context';
import Collapsible from 'react-native-collapsible';

export default function Andar({ localId, navigation, numAndares, andar, numPredios, predio, predioName, vagas, tamBehind, selecionado, selecionar }) {
  const bottomLeft = ((numAndares === (andar + 1)) || (predio !== 0)) ? 8 : 0
  const bottomRight = ((numAndares === (andar + 1)) || (predio !== (numPredios - 1))) ? 8 : 0
  const topLeft = ((predio !== 0)) ? 8 : 0
  const topRight = (predio !== (numPredios - 1)) ? 8 : 0

  const indexMargin = (predio === 0) ? 20 : ((predio === (numPredios - 1)) ? 35 : 25)

  return (
    <View>
      <TouchableOpacity
        style={{
          ...styles.background,
          borderBottomLeftRadius: bottomLeft,
          borderBottomRightRadius: bottomRight,
          borderTopLeftRadius: topLeft,
          borderTopRightRadius: topRight
        }}
        activeOpacity={1}
        onPress={() => {
          //navigation.navigate('Map', {navigation: navigation, id:0, sectorName: predioName, sector:predio, floorNumber:andar})
          selecionar(andar)
        }}
        >
        <View style={styles.flex}>
          <Text style={styles.text}>{(andar === 0) ? 'Térreo' : andar + 'º Andar'}</Text>
          <Text style={styles.text}>{vagas}</Text>
        </View>
      </TouchableOpacity>
      { selecionado && <View style={{left: tamBehind.left + 10}}>
        <Map 
          navigation={navigation}
          id={localId}
          sectorName={predioName}
          sector={predio}
          floorNumber={andar}
        />
      </View>}
    </View>
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
  },
  behind: {
    borderRadius: 8,
    marginLeft: 20,
    width: 340,
    height: 100,
    backgroundColor: '#000'
  },
  map: {
    width: '100%'
  }
});
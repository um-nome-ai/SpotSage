import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Image } from 'react-native';
import theme from '../assets/theme'

export default function SearchBar() {
  const [inputText, setInputText] = useState("")

  return (
    <View style={styles.background}>
      <View style={styles.searchfield}>
        <TextInput
          placeholder="Pesquisar"
          value={inputText}
          onChangeText={setInputText}
          style={styles.textField}
        />
        {inputText === "" ? (
          <Image
            source={require('../assets/images/search.png')}
            style={{ zIndex: 4, flexDirection: "row", marginRight: 22 }}
          />) : (<></>)}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  background: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 414,
    height: 90,
    backgroundColor: theme.colors.selectedViolet,
    flexShrink: 0
  },
  textField: {
    width: 303,
    height: 24,
    flexShrink: 0,
    color: theme.colors.textSecondary,
    fontFamily: 'Lexend',
    fontSize: 17,
    lineHeight: 22,
    marginLeft: 16
  },
  searchfield: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 374,
    height: 48,
    flexShrink: 0,
    borderRadius: 27,
    borderWidth: 1,
    borderColor: theme.colors.border,
    backgroundColor: theme.colors.white,
    marginRight: 20
  }
});
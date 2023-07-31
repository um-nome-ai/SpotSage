import { View, TextInput } from 'react-native';
import React, { useState } from 'react';
import IconSearch from '../../assets/vectors/IconSearch.svg';
import EStyleSheet from 'react-native-extended-stylesheet'
import theme from '../../theme'

export function NavigationBar() {
  const [inputText, setInputText] = useState("")

  return (
    <View style={styles.root}>
      <View style={styles.searchfield}>
        <TextInput
          placeholder="Pesquisar"
          value={inputText}
          onChangeText={setInputText}
          style={styles.textField}
        />
        {inputText === "" ? (<IconSearch style={{zIndex:4, flexDirection: "row"}}/> ) : ([])}
      </View>
      <View style={styles.background} />
    </View>
  );
}

const styles = EStyleSheet.create({
  $scale: 0.06,
  root: {
    flex: 1,
    width: '414rem',
    height: '96rem',
    lineHeight: 260,
    fontSize: 260,
    backgroundColor: theme.colors.selectedViolet,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
  },
  background: {
    flex: 1,
    width: '414rem',
    height: '96rem',
    flexShrink: 0,
    lineHeight: 260,
    fontSize: 260,
    backgroundColor: theme.colors.selectedViolet,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
  },
  textField: {
    marginLeft: '20rem',
    marginRight: '20rem',
    flex: 1,
    width: '150rem',
    height: '35rem',
    alignSelf: "center",
    flexShrink: 0,
    lineHeight: 260,
    fontSize: 260,
    backgroundColor: theme.colors.white,
    flexDirection: "row",
    justifyContent: "space-around",
    zIndex: 4,
  },
  searchfield: {
    marginTop: '24rem',
    width: '374rem',
    height: '48rem',
    flexShrink: 0,
    borderWidth: 1,
    lineHeight: 260,
    fontSize: 260,
    borderStyle: 'solid',
    flexDirection: "row",
    backgroundColor: '#FFF',
    borderRadius: '27rem',
    alignItems: "center",
    justifyContent: "space-around",
    zIndex: 2,
  },
});

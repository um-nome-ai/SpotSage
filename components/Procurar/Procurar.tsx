import {View, Text} from 'react-native';
import { Image } from 'expo-image'
import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet'
import {NavigationBar} from '../../components/NavigationBar';
import IconSearch from '../../assets/vectors/IconSearch.svg';
import imagem from '../../assets/images/imagem.png';
import imagem2 from '../../assets/images/imagem2.png';
import imagem3 from '../../assets/images/imagem3.png';
import imagem4 from '../../assets/images/imagem4.png';
import imagem5 from '../../assets/images/imagem5.png';
import imagem6 from '../../assets/images/imagem6.png';
import imagem7 from '../../assets/images/imagem7.png';
import imagem8 from '../../assets/images/imagem8.png';
import imagem9 from '../../assets/images/imagem9.png';
import imagem10 from '../../assets/images/imagem10.png';
import Polygon1 from '../../assets/vectors/Polygon1.svg';
import theme from '../../theme';

export function Procurar() {
  return (
    <View style={styles.root}>
      <NavigationBar/>
      <View style={styles.search}>
        <View style={styles.searchfield}/>
        <Text style={styles._Text}>
          Procurar
        </Text>
        <IconSearch/>
      </View>
      <View style={styles.cards}>
        <View style={styles.localCard}>
          <View style={styles.rectangle46}/>
          <Text style={styles.local}>
            Local
          </Text>
          <Text style={styles.info3}>
            Ultima coisa
          </Text>
          <Text style={styles.info2}>
            Outra informação
          </Text>
          <Text style={styles.info1}>
            Endereço
          </Text>
          <Image source={{uri: imagem}} style={{width: 135, height: 90}} contentFit="cover"/>
        </View>
        <View style={styles.localCard2}>
          <View style={styles.background}/>
          <Text style={styles.local2}>
            Local
          </Text>
          <Text style={styles.info32}>
            Ultima coisa
          </Text>
          <Text style={styles.info22}>
            Outra informação
          </Text>
          <Text style={styles.info12}>
            Endereço
          </Text>
          <Image source={{uri: imagem2}} style={{width: 135, height: 90}} contentFit="cover"/>
        </View>
        <View style={styles.localCard3}>
          <View style={styles.rectangle462}/>
          <Text style={styles.local3}>
            Local
          </Text>
          <Text style={styles.info33}>
            Ultima coisa
          </Text>
          <Text style={styles.info23}>
            Outra informação
          </Text>
          <Text style={styles.info13}>
            Endereço
          </Text>
          <Image source={{uri: imagem3}} style={{width: 135, height: 90}} contentFit="cover"/>
        </View>
        <View style={styles.localCard4}>
          <View style={styles.background2}/>
          <Text style={styles.local4}>
            Local
          </Text>
          <Text style={styles.info34}>
            Ultima coisa
          </Text>
          <Text style={styles.info24}>
            Outra informação
          </Text>
          <Text style={styles.info14}>
            Endereço
          </Text>
          <Image source={{uri: imagem4}} style={{width: 135, height: 90}} contentFit="cover"/>
        </View>
        <View style={styles.localCard5}>
          <View style={styles.rectangle463}/>
          <Text style={styles.local5}>
            Local
          </Text>
          <Text style={styles.info35}>
            Ultima coisa
          </Text>
          <Text style={styles.info25}>
            Outra informação
          </Text>
          <Text style={styles.info15}>
            Endereço
          </Text>
          <Image source={{uri: imagem5}} style={{width: 135, height: 90}} contentFit="cover"/>
        </View>
        <View style={styles.localCard6}>
          <View style={styles.background3}/>
          <Text style={styles.local6}>
            Local
          </Text>
          <Text style={styles.info36}>
            Ultima coisa
          </Text>
          <Text style={styles.info26}>
            Outra informação
          </Text>
          <Text style={styles.info16}>
            Endereço
          </Text>
          <Image source={{uri: imagem6}} style={{width: 135, height: 90}} contentFit="cover"/>
        </View>
        <View style={styles.localCard7}>
          <View style={styles.background4}/>
          <Text style={styles.local7}>
            Local
          </Text>
          <Text style={styles.info37}>
            Ultima coisa
          </Text>
          <Text style={styles.info27}>
            Outra informação
          </Text>
          <Text style={styles.info17}>
            Endereço
          </Text>
          <Image source={{uri: imagem7}} style={{width: 135, height: 90}} contentFit="cover"/>
        </View>
        <View style={styles.localCard8}>
          <View style={styles.background5}/>
          <Text style={styles.local8}>
            Local
          </Text>
          <Text style={styles.info38}>
            Ultima coisa
          </Text>
          <Text style={styles.info28}>
            Outra informação
          </Text>
          <Text style={styles.info18}>
            Endereço
          </Text>
          <Image source={{uri: imagem8}} style={{width: 135, height: 90}} contentFit="cover"/>
        </View>
        <View style={styles.localCard9}>
          <View style={styles.background6}/>
          <Text style={styles.local9}>
            Local
          </Text>
          <Text style={styles.info39}>
            Ultima coisa
          </Text>
          <Text style={styles.info29}>
            Outra informação
          </Text>
          <Text style={styles.info19}>
            Endereço
          </Text>
          <Image source={{uri: imagem9}} style={{width: 135, height: 90}} contentFit="cover"/>
        </View>
        <View style={styles.localCard10}>
          <View style={styles.rectangle464}/>
          <Text style={styles.local10}>
            Local
          </Text>
          <Text style={styles.info310}>
            Ultima coisa
          </Text>
          <Text style={styles.info210}>
            Outra informação
          </Text>
          <Text style={styles.info110}>
            Endereço
          </Text>
          <Image source={{uri: imagem10}} style={{width: 135, height: 90}} contentFit="cover"/>
          <View style={styles.nevoa}/>
        </View>
      </View>
      <Polygon1/>
    </View>
  );
}

const styles = EStyleSheet.create({
  root: {
    width: '414rem',
    height: '896rem',
    backgroundColor: theme.colors.background,
  },
  searchfield: {
    width: '374rem',
    height: '48rem',
    flexShrink: 0,
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderStyle: 'solid',
    backgroundColor: '#FFF',
    borderRadius: '27rem',
  },
  _Text: {
    width: '303rem',
    height: '24rem',
    flexShrink: 0,
    color: theme.colors.textSecondary,
    fontFamily: 'Lexend',
    fontSize: '17rem',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '22rem /* 129.412% */',
    letterSpacing: '-0.41rem',
  },
  iconSearch: {
    width: '24rem',
    height: '24rem',
    flexShrink: 0,
  },
  search: {
    width: '374rem',
    height: '48rem',
    flexShrink: 0,
  },
  rectangle46: {
    width: '374rem',
    height: '90rem',
    flexShrink: 0,
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderStyle: 'solid',
    backgroundColor: '#FFF',
    borderRadius: '8rem',
  },
  local: {
    width: '51rem',
    height: '26rem',
    flexDirection: 'column',
    justifyContent: 'center',
    flexShrink: 0,
    color: '#000',
    fontFamily: 'Roboto',
    fontSize: '20rem',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: '41rem /* 205% */',
    letterSpacing: '0.41rem',
  },
  info3: {
    width: '356rem',
    height: '16rem',
    flexDirection: 'column',
    justifyContent: 'center',
    flexShrink: 0,
    color: theme.colors.textSecondary,
    fontFamily: 'Roboto',
    fontSize: '15rem',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '41rem /* 273.333% */',
    letterSpacing: '0.41rem',
  },
  info2: {
    width: '356rem',
    height: '16rem',
    flexDirection: 'column',
    justifyContent: 'center',
    flexShrink: 0,
    color: theme.colors.textSecondary,
    fontFamily: 'Roboto',
    fontSize: '15rem',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '41rem /* 273.333% */',
    letterSpacing: '0.41rem',
  },
  info1: {
    width: '356rem',
    height: '16rem',
    flexDirection: 'column',
    justifyContent: 'center',
    flexShrink: 0,
    color: theme.colors.textSecondary,
    fontFamily: 'Roboto',
    fontSize: '15rem',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '41rem /* 273.333% */',
    letterSpacing: '0.41rem',
  },
  imagem: {
    width: '135rem',
    height: '90rem',
    flexShrink: 0,
    borderTopLeftRadius: '0rem',
    borderTopRightRadius: '8rem',
    borderBottomRightRadius: '8rem',
    borderBottomLeftRadius: '0rem',
  },
  cards: {
    width: '414rem',
    height: '807rem',
    flexShrink: 0,
  },
  localCard: {
    width: '374rem',
    height: '90rem',
    flexShrink: 0,
  },
  background: {
    width: '374rem',
    height: '90rem',
    flexShrink: 0,
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderStyle: 'solid',
    backgroundColor: '#FFF',
    borderRadius: '8rem',
  },
  local2: {
    width: '51rem',
    height: '26rem',
    flexDirection: 'column',
    justifyContent: 'center',
    flexShrink: 0,
    color: '#000',
    fontFamily: 'Roboto',
    fontSize: '20rem',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: '41rem /* 205% */',
    letterSpacing: '0.41rem',
  },
  info32: {
    width: '356rem',
    height: '16rem',
    flexDirection: 'column',
    justifyContent: 'center',
    flexShrink: 0,
    color: theme.colors.textSecondary,
    fontFamily: 'Roboto',
    fontSize: '15rem',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '41rem /* 273.333% */',
    letterSpacing: '0.41rem',
  },
  info22: {
    width: '356rem',
    height: '16rem',
    flexDirection: 'column',
    justifyContent: 'center',
    flexShrink: 0,
    color: theme.colors.textSecondary,
    fontFamily: 'Roboto',
    fontSize: '15rem',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '41rem /* 273.333% */',
    letterSpacing: '0.41rem',
  },
  info12: {
    width: '356rem',
    height: '16rem',
    flexDirection: 'column',
    justifyContent: 'center',
    flexShrink: 0,
    color: theme.colors.textSecondary,
    fontFamily: 'Roboto',
    fontSize: '15rem',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '41rem /* 273.333% */',
    letterSpacing: '0.41rem',
  },
  imagem2: {
    width: '135rem',
    height: '90rem',
    flexShrink: 0,
    borderTopLeftRadius: '0rem',
    borderTopRightRadius: '8rem',
    borderBottomRightRadius: '8rem',
    borderBottomLeftRadius: '0rem',
  },
  localCard2: {
    width: '374rem',
    height: '90rem',
    flexShrink: 0,
  },
  rectangle462: {
    width: '374rem',
    height: '90rem',
    flexShrink: 0,
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderStyle: 'solid',
    backgroundColor: '#FFF',
    borderRadius: '8rem',
  },
  local3: {
    width: '51rem',
    height: '26rem',
    flexDirection: 'column',
    justifyContent: 'center',
    flexShrink: 0,
    color: '#000',
    fontFamily: 'Roboto',
    fontSize: '20rem',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: '41rem /* 205% */',
    letterSpacing: '0.41rem',
  },
  info33: {
    width: '356rem',
    height: '16rem',
    flexDirection: 'column',
    justifyContent: 'center',
    flexShrink: 0,
    color: theme.colors.textSecondary,
    fontFamily: 'Roboto',
    fontSize: '15rem',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '41rem /* 273.333% */',
    letterSpacing: '0.41rem',
  },
  info23: {
    width: '356rem',
    height: '16rem',
    flexDirection: 'column',
    justifyContent: 'center',
    flexShrink: 0,
    color: theme.colors.textSecondary,
    fontFamily: 'Roboto',
    fontSize: '15rem',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '41rem /* 273.333% */',
    letterSpacing: '0.41rem',
  },
  info13: {
    width: '356rem',
    height: '16rem',
    flexDirection: 'column',
    justifyContent: 'center',
    flexShrink: 0,
    color: theme.colors.textSecondary,
    fontFamily: 'Roboto',
    fontSize: '15rem',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '41rem /* 273.333% */',
    letterSpacing: '0.41rem',
  },
  imagem3: {
    width: '135rem',
    height: '90rem',
    flexShrink: 0,
    borderTopLeftRadius: '0rem',
    borderTopRightRadius: '8rem',
    borderBottomRightRadius: '8rem',
    borderBottomLeftRadius: '0rem',
  },
  localCard3: {
    width: '374rem',
    height: '90rem',
    flexShrink: 0,
  },
  background2: {
    width: '374rem',
    height: '90rem',
    flexShrink: 0,
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderStyle: 'solid',
    backgroundColor: '#FFF',
    borderRadius: '8rem',
  },
  local4: {
    width: '51rem',
    height: '26rem',
    flexDirection: 'column',
    justifyContent: 'center',
    flexShrink: 0,
    color: '#000',
    fontFamily: 'Roboto',
    fontSize: '20rem',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: '41rem /* 205% */',
    letterSpacing: '0.41rem',
  },
  info34: {
    width: '356rem',
    height: '16rem',
    flexDirection: 'column',
    justifyContent: 'center',
    flexShrink: 0,
    color: theme.colors.textSecondary,
    fontFamily: 'Roboto',
    fontSize: '15rem',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '41rem /* 273.333% */',
    letterSpacing: '0.41rem',
  },
  info24: {
    width: '356rem',
    height: '16rem',
    flexDirection: 'column',
    justifyContent: 'center',
    flexShrink: 0,
    color: theme.colors.textSecondary,
    fontFamily: 'Roboto',
    fontSize: '15rem',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '41rem /* 273.333% */',
    letterSpacing: '0.41rem',
  },
  info14: {
    width: '356rem',
    height: '16rem',
    flexDirection: 'column',
    justifyContent: 'center',
    flexShrink: 0,
    color: theme.colors.textSecondary,
    fontFamily: 'Roboto',
    fontSize: '15rem',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '41rem /* 273.333% */',
    letterSpacing: '0.41rem',
  },
  imagem4: {
    width: '135rem',
    height: '90rem',
    flexShrink: 0,
    borderTopLeftRadius: '0rem',
    borderTopRightRadius: '8rem',
    borderBottomRightRadius: '8rem',
    borderBottomLeftRadius: '0rem',
  },
  localCard4: {
    width: '374rem',
    height: '90rem',
    flexShrink: 0,
  },
  rectangle463: {
    width: '374rem',
    height: '90rem',
    flexShrink: 0,
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderStyle: 'solid',
    backgroundColor: '#FFF',
    borderRadius: '8rem',
  },
  local5: {
    width: '51rem',
    height: '26rem',
    flexDirection: 'column',
    justifyContent: 'center',
    flexShrink: 0,
    color: '#000',
    fontFamily: 'Roboto',
    fontSize: '20rem',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: '41rem /* 205% */',
    letterSpacing: '0.41rem',
  },
  info35: {
    width: '356rem',
    height: '16rem',
    flexDirection: 'column',
    justifyContent: 'center',
    flexShrink: 0,
    color: theme.colors.textSecondary,
    fontFamily: 'Roboto',
    fontSize: '15rem',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '41rem /* 273.333% */',
    letterSpacing: '0.41rem',
  },
  info25: {
    width: '356rem',
    height: '16rem',
    flexDirection: 'column',
    justifyContent: 'center',
    flexShrink: 0,
    color: theme.colors.textSecondary,
    fontFamily: 'Roboto',
    fontSize: '15rem',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '41rem /* 273.333% */',
    letterSpacing: '0.41rem',
  },
  info15: {
    width: '356rem',
    height: '16rem',
    flexDirection: 'column',
    justifyContent: 'center',
    flexShrink: 0,
    color: theme.colors.textSecondary,
    fontFamily: 'Roboto',
    fontSize: '15rem',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '41rem /* 273.333% */',
    letterSpacing: '0.41rem',
  },
  imagem5: {
    width: '135rem',
    height: '90rem',
    flexShrink: 0,
    borderTopLeftRadius: '0rem',
    borderTopRightRadius: '8rem',
    borderBottomRightRadius: '8rem',
    borderBottomLeftRadius: '0rem',
  },
  localCard5: {
    width: '374rem',
    height: '90rem',
    flexShrink: 0,
  },
  background3: {
    width: '374rem',
    height: '90rem',
    flexShrink: 0,
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderStyle: 'solid',
    backgroundColor: '#FFF',
    borderRadius: '8rem',
  },
  local6: {
    width: '51rem',
    height: '26rem',
    flexDirection: 'column',
    justifyContent: 'center',
    flexShrink: 0,
    color: '#000',
    fontFamily: 'Roboto',
    fontSize: '20rem',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: '41rem /* 205% */',
    letterSpacing: '0.41rem',
  },
  info36: {
    width: '356rem',
    height: '16rem',
    flexDirection: 'column',
    justifyContent: 'center',
    flexShrink: 0,
    color: theme.colors.textSecondary,
    fontFamily: 'Roboto',
    fontSize: '15rem',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '41rem /* 273.333% */',
    letterSpacing: '0.41rem',
  },
  info26: {
    width: '356rem',
    height: '16rem',
    flexDirection: 'column',
    justifyContent: 'center',
    flexShrink: 0,
    color: theme.colors.textSecondary,
    fontFamily: 'Roboto',
    fontSize: '15rem',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '41rem /* 273.333% */',
    letterSpacing: '0.41rem',
  },
  info16: {
    width: '356rem',
    height: '16rem',
    flexDirection: 'column',
    justifyContent: 'center',
    flexShrink: 0,
    color: theme.colors.textSecondary,
    fontFamily: 'Roboto',
    fontSize: '15rem',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '41rem /* 273.333% */',
    letterSpacing: '0.41rem',
  },
  imagem6: {
    width: '135rem',
    height: '90rem',
    flexShrink: 0,
    borderTopLeftRadius: '0rem',
    borderTopRightRadius: '8rem',
    borderBottomRightRadius: '8rem',
    borderBottomLeftRadius: '0rem',
  },
  localCard6: {
    width: '374rem',
    height: '90rem',
    flexShrink: 0,
  },
  background4: {
    width: '374rem',
    height: '90rem',
    flexShrink: 0,
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderStyle: 'solid',
    backgroundColor: '#FFF',
    borderRadius: '8rem',
  },
  local7: {
    width: '51rem',
    height: '26rem',
    flexDirection: 'column',
    justifyContent: 'center',
    flexShrink: 0,
    color: '#000',
    fontFamily: 'Roboto',
    fontSize: '20rem',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: '41rem /* 205% */',
    letterSpacing: '0.41rem',
  },
  info37: {
    width: '356rem',
    height: '16rem',
    flexDirection: 'column',
    justifyContent: 'center',
    flexShrink: 0,
    color: theme.colors.textSecondary,
    fontFamily: 'Roboto',
    fontSize: '15rem',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '41rem /* 273.333% */',
    letterSpacing: '0.41rem',
  },
  info27: {
    width: '356rem',
    height: '16rem',
    flexDirection: 'column',
    justifyContent: 'center',
    flexShrink: 0,
    color: theme.colors.textSecondary,
    fontFamily: 'Roboto',
    fontSize: '15rem',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '41rem /* 273.333% */',
    letterSpacing: '0.41rem',
  },
  info17: {
    width: '356rem',
    height: '16rem',
    flexDirection: 'column',
    justifyContent: 'center',
    flexShrink: 0,
    color: theme.colors.textSecondary,
    fontFamily: 'Roboto',
    fontSize: '15rem',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '41rem /* 273.333% */',
    letterSpacing: '0.41rem',
  },
  imagem7: {
    width: '135rem',
    height: '90rem',
    flexShrink: 0,
    borderTopLeftRadius: '0rem',
    borderTopRightRadius: '8rem',
    borderBottomRightRadius: '8rem',
    borderBottomLeftRadius: '0rem',
  },
  localCard7: {
    width: '374rem',
    height: '90rem',
    flexShrink: 0,
  },
  background5: {
    width: '374rem',
    height: '90rem',
    flexShrink: 0,
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderStyle: 'solid',
    backgroundColor: '#FFF',
    borderRadius: '8rem',
  },
  local8: {
    width: '51rem',
    height: '26rem',
    flexDirection: 'column',
    justifyContent: 'center',
    flexShrink: 0,
    color: '#000',
    fontFamily: 'Roboto',
    fontSize: '20rem',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: '41rem /* 205% */',
    letterSpacing: '0.41rem',
  },
  info38: {
    width: '356rem',
    height: '16rem',
    flexDirection: 'column',
    justifyContent: 'center',
    flexShrink: 0,
    color: theme.colors.textSecondary,
    fontFamily: 'Roboto',
    fontSize: '15rem',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '41rem /* 273.333% */',
    letterSpacing: '0.41rem',
  },
  info28: {
    width: '356rem',
    height: '16rem',
    flexDirection: 'column',
    justifyContent: 'center',
    flexShrink: 0,
    color: theme.colors.textSecondary,
    fontFamily: 'Roboto',
    fontSize: '15rem',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '41rem /* 273.333% */',
    letterSpacing: '0.41rem',
  },
  info18: {
    width: '356rem',
    height: '16rem',
    flexDirection: 'column',
    justifyContent: 'center',
    flexShrink: 0,
    color: theme.colors.textSecondary,
    fontFamily: 'Roboto',
    fontSize: '15rem',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '41rem /* 273.333% */',
    letterSpacing: '0.41rem',
  },
  imagem8: {
    width: '135rem',
    height: '90rem',
    flexShrink: 0,
    borderTopLeftRadius: '0rem',
    borderTopRightRadius: '8rem',
    borderBottomRightRadius: '8rem',
    borderBottomLeftRadius: '0rem',
  },
  localCard8: {
    width: '374rem',
    height: '90rem',
    flexShrink: 0,
  },
  background6: {
    width: '374rem',
    height: '90rem',
    flexShrink: 0,
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderStyle: 'solid',
    backgroundColor: '#FFF',
    borderRadius: '8rem',
  },
  local9: {
    width: '51rem',
    height: '26rem',
    flexDirection: 'column',
    justifyContent: 'center',
    flexShrink: 0,
    color: '#000',
    fontFamily: 'Roboto',
    fontSize: '20rem',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: '41rem /* 205% */',
    letterSpacing: '0.41rem',
  },
  info39: {
    width: '356rem',
    height: '16rem',
    flexDirection: 'column',
    justifyContent: 'center',
    flexShrink: 0,
    color: theme.colors.textSecondary,
    fontFamily: 'Roboto',
    fontSize: '15rem',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '41rem /* 273.333% */',
    letterSpacing: '0.41rem',
  },
  info29: {
    width: '356rem',
    height: '16rem',
    flexDirection: 'column',
    justifyContent: 'center',
    flexShrink: 0,
    color: theme.colors.textSecondary,
    fontFamily: 'Roboto',
    fontSize: '15rem',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '41rem /* 273.333% */',
    letterSpacing: '0.41rem',
  },
  info19: {
    width: '356rem',
    height: '16rem',
    flexDirection: 'column',
    justifyContent: 'center',
    flexShrink: 0,
    color: theme.colors.textSecondary,
    fontFamily: 'Roboto',
    fontSize: '15rem',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '41rem /* 273.333% */',
    letterSpacing: '0.41rem',
  },
  imagem9: {
    width: '135rem',
    height: '90rem',
    flexShrink: 0,
    borderTopLeftRadius: '0rem',
    borderTopRightRadius: '8rem',
    borderBottomRightRadius: '8rem',
    borderBottomLeftRadius: '0rem',
  },
  localCard9: {
    width: '374rem',
    height: '90rem',
    flexShrink: 0,
  },
  rectangle464: {
    width: '374rem',
    height: '90rem',
    flexShrink: 0,
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderStyle: 'solid',
    backgroundColor: theme.colors.white,
    borderRadius: '8rem',
  },
  local10: {
    width: '51rem',
    height: '26rem',
    flexDirection: 'column',
    justifyContent: 'center',
    flexShrink: 0,
    color: '#000',
    fontFamily: 'Roboto',
    fontSize: '20rem',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: '41rem /* 205% */',
    letterSpacing: '0.41rem',
  },
  info310: {
    width: '356rem',
    height: '16rem',
    flexDirection: 'column',
    justifyContent: 'center',
    flexShrink: 0,
    color: theme.colors.textSecondary,
    fontFamily: 'Roboto',
    fontSize: '15rem',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '41rem /* 273.333% */',
    letterSpacing: '0.41rem',
  },
  info210: {
    width: '356rem',
    height: '16rem',
    flexDirection: 'column',
    justifyContent: 'center',
    flexShrink: 0,
    color: theme.colors.textSecondary,
    fontFamily: 'Roboto',
    fontSize: '15rem',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '41rem /* 273.333% */',
    letterSpacing: '0.41rem',
  },
  info110: {
    width: '356rem',
    height: '16rem',
    flexDirection: 'column',
    justifyContent: 'center',
    flexShrink: 0,
    color: theme.colors.textSecondary,
    fontFamily: 'Roboto',
    fontSize: '15rem',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '41rem /* 273.333% */',
    letterSpacing: '0.41rem',
  },
  imagem10: {
    width: '135rem',
    height: '90rem',
    flexShrink: 0,
    borderTopLeftRadius: '0rem',
    borderTopRightRadius: '8rem',
    borderBottomRightRadius: '8rem',
    borderBottomLeftRadius: '0rem',
  },
  nevoa: {
    width: '374rem',
    height: '90rem',
    flexShrink: 0,
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderStyle: 'solid',
    backgroundColor: 'rgba(246, 245, 245, 0.50)',
    borderRadius: '8rem',
  },
  localCard10: {
    width: '374rem',
    height: '90rem',
    flexShrink: 0,
    filter: 'blur(0.25px)',
  },
});

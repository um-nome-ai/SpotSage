import { View, Text} from 'react-native';
import { Image } from 'expo-image'
import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet'
import {NavigationBar} from '../../components/NavigationBar';
import {ButtonPrimary} from '../../components/ButtonPrimary';
import {IconPlus} from '../../components/IconPlus';
import IconSearch from '../../assets/vectors/IconSearch.svg';
import imagem from '../../assets/images/imagem.png';
import imagem2 from '../../assets/images/imagem2.png';
import imagem3 from '../../assets/images/imagem3.png';
import imagem4 from '../../assets/images/imagem4.png';
import imagem5 from '../../assets/images/imagem5.png';
import imagem6 from '../../assets/images/imagem6.png';
import Polygon1 from '../../assets/vectors/Polygon1.svg';
import theme from '../../theme';

export function Estacionado() {
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
      <View style={styles.locais}>
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
          <View style={styles.nevoa}/>
        </View>
        <View style={styles.localCard2}>
          <View style={styles.rectangle462}/>
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
          <View style={styles.rectangle463}/>
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
          <View style={styles.rectangle464}/>
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
        <Text style={styles.locaisProximos}>
          Locais Próximos
        </Text>
      </View>
      <View style={styles.estacionado}>
        <View style={styles.rectangle47}/>
        <ButtonPrimary/>
        <Text style={styles.seuCarroEstaEstacionadoEm}>
          Seu carro está estacionado em:
        </Text>
        <Text style={styles.info35}>
          Vaga
        </Text>
        <Text style={styles.info25}>
          Prédio/Andar
        </Text>
        <Text style={styles.info15}>
          Local
        </Text>
      </View>
      <View style={styles.recentes}>
        <View style={styles.background}/>
        <View style={styles.cards}>
          <View style={styles.localCard5}>
            <View style={styles.rectangle465}/>
            <Text style={styles.local5}>
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
            <Image source={{uri: imagem5}} style={{width: 135, height: 90}} contentFit="cover"/>
          </View>
          <View style={styles.localCard6}>
            <View style={styles.background2}/>
            <Text style={styles.local6}>
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
            <Image source={{uri: imagem6}} style={{width: 135, height: 90}} contentFit="cover"/>
          </View>
        </View>
        <Text style={styles.recentes2}>
          Recentes
        </Text>
        <IconPlus/>
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
    backgroundColor: theme.colors.white,
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
  nevoa: {
    width: '374rem',
    height: '90rem',
    flexShrink: 0,
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderStyle: 'solid',
    backgroundColor: 'rgba(246, 245, 245, 0.80)',
    borderRadius: '8rem',
  },
  locais: {
    width: '414rem',
    height: '502rem',
    flexShrink: 0,
  },
  localCard: {
    width: '374rem',
    height: '90rem',
    flexShrink: 0,
    filter: 'blur(0.75px)',
  },
  rectangle462: {
    width: '373rem',
    height: '89rem',
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
  rectangle463: {
    width: '374rem',
    height: '90rem',
    flexShrink: 0,
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderStyle: 'solid',
    backgroundColor: theme.colors.white,
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
  rectangle464: {
    width: '373rem',
    height: '89rem',
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
  locaisProximos: {
    color: theme.colors.textPrimary,
    fontFamily: 'Lexend',
    fontSize: '40rem',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: '41rem /* 102.5% */',
    letterSpacing: '0.41rem',
  },
  rectangle47: {
    width: '414rem',
    height: '90rem',
    flexShrink: 0,
    backgroundColor: '#7519EB',
  },
  seuCarroEstaEstacionadoEm: {
    width: '239rem',
    height: '26rem',
    flexDirection: 'column',
    justifyContent: 'center',
    flexShrink: 0,
    color: theme.colors.white,
    fontFamily: 'Roboto',
    fontSize: '16rem',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: '41rem /* 256.25% */',
    letterSpacing: '0.41rem',
  },
  info35: {
    width: '356rem',
    height: '16rem',
    flexDirection: 'column',
    justifyContent: 'center',
    flexShrink: 0,
    color: theme.colors.white,
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
    color: theme.colors.white,
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
    color: theme.colors.white,
    fontFamily: 'Roboto',
    fontSize: '15rem',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '41rem /* 273.333% */',
    letterSpacing: '0.41rem',
  },
  estacionado: {
    width: '414rem',
    height: '90rem',
    flexShrink: 0,
  },
  background: {
    width: '394rem',
    height: '268rem',
    flexShrink: 0,
    backgroundColor: '#8C33FF',
    borderRadius: '12rem',
  },
  rectangle465: {
    width: '374rem',
    height: '90rem',
    flexShrink: 0,
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
  imagem5: {
    width: '135rem',
    height: '90rem',
    flexShrink: 0,
    borderTopLeftRadius: '0rem',
    borderTopRightRadius: '8rem',
    borderBottomRightRadius: '8rem',
    borderBottomLeftRadius: '0rem',
  },
  recentes: {
    width: '414rem',
    height: '305rem',
    flexShrink: 0,
  },
  cards: {
    width: '394rem',
    height: '200rem',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    gap: '10rem',
    flexShrink: 0,
    paddingVertical: '5rem',
    paddingHorizontal: '10rem',
  },
  localCard5: {
    width: '374rem',
    height: '90rem',
    flexShrink: 0,
  },
  background2: {
    width: '374rem',
    height: '90rem',
    flexShrink: 0,
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
  recentes2: {
    color: '#FFF',
    fontFamily: 'Lexend',
    fontSize: '40rem',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: '41rem /* 102.5% */',
    letterSpacing: '0.41rem',
  },
});

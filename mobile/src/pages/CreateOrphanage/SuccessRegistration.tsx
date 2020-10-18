import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, View, Text, StyleSheet } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import successImg from '../../images/success-registration.png';

export default function SuccessRegistration() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image style={styles.successImg} source={successImg} />
      <Text style={styles.title}>Ebaaa!</Text>
      <Text style={styles.description}>O cadastro deu certo e foi enviado ao administrador para ser aprovado. Agora é só esperar :)</Text>
      <RectButton onPress={() => navigation.navigate('OrphanagesMap')} style={styles.button}>
        <Text style={styles.buttonText}>Ok</Text>
      </RectButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#39CC83'
  },

  successImg:{
    maxWidth: 200,
    resizeMode: 'contain',
    marginTop: 80,
  },

  title: {
    fontFamily: 'Nunito_800ExtraBold',
    fontSize: 40,
    textAlign: 'center',
    color: '#FFF',
    marginTop: 32,
  },

  description: {
    maxWidth: 300,
    fontFamily: 'Nunito_600SemiBold',
    fontSize: 20,
    textAlign: 'center',
    color: '#FFF',
    marginTop: 18,
  },

  button: {
    width: 120,
    height: 56,
    backgroundColor: '#19C06D',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    marginTop: 24,
  },

  buttonText: {
    fontFamily: 'Nunito_800ExtraBold',
    fontSize: 15,
    color: '#FFF',
  },
});
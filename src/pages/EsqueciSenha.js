import React, {useState} from "react";
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

import logo from '../assets/logo.png';
import Login from "./Login";

export default function EsqueciSenha( {navigation} ) {

  const[email, setEmail] = useState('');

  function singin(){
    console.log(email)
    if(email === 'jesse.zorzela4242@gmail.com'){
          navigation.navigate('Index')
      }else{
        alert('a senha esta errada');
      }  
  }
  
  function cadastro(){
    console.log(email)
          navigation.navigate('Cadastro')
  }
  function voltar(){
    console.log(email)
          navigation.navigate('Login')
  }
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#0E5CBB', '#2E75E7']}
        style={styles.background}>
        <Image source={logo} style={styles.logo} />
        <View style={styles.formGroup}>
          <Text style={styles.label}>Redefina sua Senha</Text>
          <TextInput style={styles.input}
            secureTextEntry={true}
            keyboardType="visible-password"
            placeholder="Redefina sua Senha:"
            placeholderTextColor="#999"
            autoCapitalize='none'
            autoCorrect={false}
            name='email'
            onChangeText={setEmail}
            value={email}
          ></TextInput>
        </View>

        <TouchableOpacity 
        style={[styles.button, styles.backgroundButton]}
        >
          <Text style={styles.text}>Redefinir</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.voltar}
        onPress={voltar}>
          <Text style={styles.text}>Voltar</Text>
          <Text>{email}</Text>
          </TouchableOpacity>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  formGroup: {
    width: '70%',
    justifyContent: 'center',
    alignItems: 'baseline',
  },
  label: {
    color: '#fff',
    fontSize: 10,
    backgroundColor: "#4DCFE0",
    paddingHorizontal: 15,
    paddingVertical: 0,
    lineHeight: 20,
    borderRadius: 5,
    zIndex:10,
    marginLeft: 10,
  },
  input: {
    marginTop:-10,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: '#DDD',
    paddingHorizontal: 20,
    marginBottom: 10,
    fontSize: 14,
    height: 45,
    width: '100%',
    borderRadius: 5
  }, 
  button: {
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#DDD',
    paddingHorizontal: 20,
    marginBottom: 10,
    fontSize: 14,
    height: 45,
    width: '70%',
    textAlign: 'center',
    alignItems: 'center',
    borderRadius: 5
  },
  backgroundButton: {
    backgroundColor: "#4DCFE0",
    borderColor : 'transparent',
    marginTop: 30,
  },
  text: {
    backgroundColor: 'transparent',
    color: '#fff',
  },
  voltar: {
    position: 'absolute',
    bottom: 10,
  }
});
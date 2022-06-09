import React, {useState} from "react";
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import api from '../services/api'
import logo from '../assets/logo.png';
import EsqueciSenha from "./EsqueciSenha"

export default function Login( {navigation} ) {
  const[email, setEmail] = useState('cedrick07@example.net');
  const[password, setPassword] = useState('password');

  useState(() => {
    console.log(localStorage.getItem('token'));
    if(localStorage.getItem('token') !== null){
      navigation.navigate('Index')
    }
  },[localStorage]);
  function singin(){
    api.post('login', {
     email: email,
     password : password
    }).then( async response => {
      console.log(response.data);
      const token  = response.data.acess_token;
      localStorage.setItem('token', token);
      //api.headers.Authorization = `Bearer ${token}`;
      navigation.navigate('Index');
    }).catch(err => {
      alert ('Usuario ou senha incorretos');
    });
  }
  
  function cadastro(){
    console.log(email)
          navigation.navigate('Cadastro')
  }
  function esquecisenha(){
    console.log(email)
          navigation.navigate('EsqueciSenha')
  }
  
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#0E5CBB', '#2E75E7']}
        style={styles.background}>
        <Image source={logo} style={styles.logo} />
        <View style={styles.formGroup}>
          <Text style={styles.label}>E-mail</Text>
          <TextInput style={styles.input}
            keyboardType="email-address"
            placeholder="E-mail"
            placeholderTextColor="#999"
            autoCapitalize='none'
            autoCorrect={false}
            name='email'
            onChangeText={setEmail}
            value={email}
          ></TextInput>
        </View>
        <View style={styles.formGroup}>
          <Text style={styles.label}>Senha</Text>
          <TextInput style={styles.input}
            secureTextEntry={true}
            keyboardType="visible-password"
            placeholder="Digite sua Senha:"
            placeholderTextColor="#999"
            autoCapitalize='none'
            autoCorrect={false}
            name='password'
            onChangeText={setPassword}
            value={password}
          ></TextInput>
        </View>

        <TouchableOpacity 
        style={[styles.button, styles.backgroundButton]}
        onPress={singin}
        >
          <Text style={styles.text}>Logar</Text>
        </TouchableOpacity>
        <TouchableOpacity
         style={styles.button}
         onPress={cadastro}
         >
          <Text style={styles.text}>Faça seu cadastro!</Text>
        </TouchableOpacity >
        <TouchableOpacity style={styles.esqueci}>
          <Text style={styles.text}
          onPress={esquecisenha}
          >Esqueci minha senha</Text>
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
  esqueci: {
    position: 'absolute',
    bottom: 10,
  }
});
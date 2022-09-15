import React, {useState} from "react";
import { ScrollView, View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

import logo from '../assets/logo.png';
import Login from "./Login";

export default function Cadastro( {navigation} ) {

  const[nome, setNome] = useState('');
  const[sobrenome, setSobrenome] = useState('');
  const[email, setEmail] = useState('');
  const[rg, setRg] = useState('');
  const[cpf, setCpf] = useState('');
  const[data, setData] = useState('');
  const[sexo, setSexo] = useState('');
  const[password, setPassword] = useState('');
  const[repassword, setRepassword] = useState('');
  

  function cadastrado(){
    console.log(email)
    if(email === 'jesse.zorzela4242@gmail.com'){
      if(password === '21062002'){
          navigation.navigate('Index')
      }else{
        alert('a senha esta errada');
      }  
    }else{
      alert('email nao cadastrado')
    }
  }
  function cada(){
    console.log(email)
          navigation.navigate('Login')
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
          <ScrollView style={styles.scrollView}>
        <Image source={logo} style={styles.logo} />
        <View style={styles.formGroup}>
          <Text style={styles.label}>Nome</Text>
          <TextInput style={styles.input}
            keyboardType="default"
            placeholder="Nome"
            placeholderTextColor="#999"
            autoCapitalize='none'
            autoCorrect={false}
            name='nome'
            onChangeText={setNome}
            value={nome}
          ></TextInput>
        </View>
        <View style={styles.formGroup}>
          <Text style={styles.label}>Sobrenome</Text>
          <TextInput style={styles.input}
            keyboardType="default"
            placeholder="Sobrenome"
            placeholderTextColor="#999"
            autoCapitalize='none'
            autoCorrect={false}
            name='sobrenome'
            onChangeText={setSobrenome}
            value={sobrenome}
          ></TextInput>
        </View>
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
          <Text style={styles.label}>RG</Text>
          <TextInput style={styles.input}
            placeholder="RG"
            placeholderTextColor="#999"
            autoCapitalize='none'
            autoCorrect={false}
            name='rg'
            onChangeText={setRg}
            value={rg}
          ></TextInput>
        </View>
        <View style={styles.formGroup}>
          <Text style={styles.label}>CPF</Text>
          <TextInput style={styles.input}
            placeholder="CPF"
            placeholderTextColor="#999"
            autoCapitalize='none'
            autoCorrect={false}
            name='cpf'
            onChangeText={setCpf}
            value={cpf}
          ></TextInput>
        </View>
        <View style={styles.formGroup}>
          <Text style={styles.label}>Data de Nascimento</Text>
          <TextInput style={styles.input}
            keyboardType="default"
            placeholder="Data de Nascimento"
            placeholderTextColor="#999"
            autoCapitalize='none'
            autoCorrect={false}
            name='data'
            onChangeText={setData}
            value={data}
          ></TextInput>
        </View>
        <View style={styles.formGroup}>
          <Text style={styles.label}>Sexo</Text>
          <TextInput style={styles.input}
            keyboardType="default"
            placeholder="Sexo"
            placeholderTextColor="#999"
            autoCapitalize='none'
            autoCorrect={false}
            name='sexo'
            onChangeText={setSexo}
            value={sexo}
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
        <View style={styles.formGroup}>
          <Text style={styles.label}>Repita sua Senha</Text>
          <TextInput style={styles.input}
            secureTextEntry={true}
            keyboardType="visible-password"
            placeholder="Repita sua Senha:"
            placeholderTextColor="#999"
            autoCapitalize='none'
            autoCorrect={false}
            name='password'
            onChangeText={setRepassword}
            value={repassword}
          ></TextInput>
        </View>

        <TouchableOpacity 
        style={[styles.button, styles.backgroundButton]}
        onPress={cada}
        >
          <Text style={styles.text}>Cadastrar</Text>
        </TouchableOpacity>
          <TouchableOpacity style={styles.voltar}
           onPress={voltar}
          >
          <Text style={styles.text}>Voltar</Text>
          <Text>{email}</Text>
          </TouchableOpacity>
          </ScrollView>
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
  scrollView: {
    flex: 1,
    position: 'absolute',
    top: 0,
    bottom: 0,
    backgroundColor: 'transparent',
    marginHorizontal: 20,
    left: 0,
    right: 0
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
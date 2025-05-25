import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';

export default function Cadastrar({ navigation }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');

  return (
    <View style={styles.container}>
      {/* Topo */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Cadastro</Text>
      </View>

      {/* Formulário */}
      <View style={styles.formBox}>
        <Text style={styles.logo}>COMPASS</Text>

        {/* Logo */}
        <Image
          source={require('../../assets/logo.png')} // 
          style={styles.logoImage}
        />

        <TextInput
          placeholder="Nome de Usuário"
          placeholderTextColor="#000"
          style={styles.input}
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          placeholder="E-mail"
          placeholderTextColor="#000"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <TextInput
          placeholder="Senha"
          placeholderTextColor="#000"
          secureTextEntry
          style={styles.input}
          value={senha}
          onChangeText={setSenha}
        />
        <TextInput
          placeholder="Confirmar Senha"
          placeholderTextColor="#000"
          secureTextEntry
          style={styles.input}
          value={confirmarSenha}
          onChangeText={setConfirmarSenha}
        />

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('PopOut')}>
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>
      </View>

      {/* Link Login */}
      <Text style={styles.loginText}>
        Já possui uma conta?{' '}
        <Text style={styles.loginLink} onPress={() => navigation.navigate('Login')}>
          Login
        </Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2b2d42',
  },
  header: {
    backgroundColor: '#4951a1',
    paddingVertical: 40,
    alignItems: 'center',
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  headerText: {
    fontSize: 28,
    color: '#fff',
    fontWeight: 'bold',
  },
  formBox: {
    backgroundColor: '#3f4a83',
    margin: 30,
    padding: 25,
    borderRadius: 20,
    alignItems: 'center',
  },
  logo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
    letterSpacing: 2,
  },
  logoImage: {
    width: 60,
    height: 60,
    marginBottom: 20,
    resizeMode: 'contain',
  },
  input: {
    backgroundColor: '#d9d9d9',
    width: '100%',
    padding: 12,
    borderRadius: 30,
    marginVertical: 6,
  },
  button: {
    backgroundColor: '#7b8cf7',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 30,
    marginTop: 15,
  },
  buttonText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 16,
  },
  loginText: {
    color: '#ccc',
    textAlign: 'center',
    marginTop: 20,
  },
  loginLink: {
    color: '#a3b5ff',
    textDecorationLine: 'underline',
  },
});

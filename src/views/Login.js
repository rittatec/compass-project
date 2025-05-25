import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image,StyleSheet } from 'react-native';

export default function Login({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Cabeçalho  */}
      <View style={styles.header}>
        <Text style={styles.loginTitle}>Login</Text>
      </View>

      {/* Card de login */}
      <View style={styles.card}>
        <Text style={styles.logoText}>COMPASS</Text>

        {/* Logo */}
               <Image
                 source={require('../../assets/logo.png')} // 
                 style={styles.logoImage}
               />

        <TextInput
          placeholder="E-mail"
          style={styles.input}
          placeholderTextColor="#000"
        />
        <TextInput
          placeholder="Senha"
          style={styles.input}
          secureTextEntry
          placeholderTextColor="#000"
        />

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Menu')}
        >
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
      </View>

      {/* Link de cadastro */}
      <Text style={styles.registerText}>
        Não possui uma conta?{' '}
      <Text
       style={styles.registerLink}
       onPress={() => navigation.navigate('Cadastrar')}
      >
      Cadastre-se
    </Text>
  </Text>
      {/* <Text style={styles.registerText}>
        Não possui uma conta? <Text style={styles.registerLink}>Cadastre-se</Text>
      </Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2E354F',
    alignItems: 'center',
  },
  header: {
    backgroundColor: '#4054B2',
    width: '100%',
    paddingVertical: 40,
    borderBottomLeftRadius: 60,
    borderBottomRightRadius: 60,
    alignItems: 'center',
  },
  loginTitle: {
    fontSize: 30,
    color: '#fff',
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: '#3C4C8D',
    width: '85%',
    borderRadius: 10,
    alignItems: 'center',
    paddingVertical: 30,
    paddingHorizontal: 20,
    marginTop: 30,
  },
  logoText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
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
    backgroundColor: '#D9D9D9',
    width: '100%',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginVertical: 10,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#8EA6F4',
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 20,
    marginTop: 20,
  },
  buttonText: {
    fontSize: 18,
    color: '#000',
  },
  registerText: {
    color: '#fff',
    marginTop: 20,
  },
  registerLink: {
    color: '#8EA6F4',
    textDecorationLine: 'underline',
  },
});
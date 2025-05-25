import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';

export default function Login({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image
        source={require('../../assets/logo.png')} // Substitua pela sua imagem
        style={styles.logoImage}
      />

      {/* Título */}
      <Text style={styles.loginTitle}>Login</Text>
      <Text style={styles.subTitle}>Bem vindo(a) de volta!</Text>

      {/* Campos de entrada */}
      <TextInput
        placeholder="User"
        style={styles.input}
        placeholderTextColor="#999"
      />
      <TextInput
        placeholder="Senha"
        style={styles.input}
        secureTextEntry
        placeholderTextColor="#999"
      />

      {/* Botão */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Menu')}
      >
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  logoImage: {
    width: 100,
    height: 100,
    marginBottom: 30,
    resizeMode: 'contain',
  },
  loginTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
  },
  subTitle: {
    fontSize: 16,
    color: '#555',
    marginBottom: 30,
    marginTop: 5,
  },
  input: {
    backgroundColor: '#F0F0F0',
    width: '100%',
    borderRadius: 20,
    paddingVertical: 12,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  button: {
    backgroundColor: '#3B55A1',
    paddingVertical: 15,
    width: '100%',
    borderRadius: 15,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    fontSize: 18,
    color: '#FFF',
    fontWeight: 'bold',
  },
});
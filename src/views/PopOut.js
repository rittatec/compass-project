import React from "react"
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native"

export default function PopOut({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Logo no topo */}
      <Image
        source={require("../../assets/logo.png")}
        style={styles.logo}
        resizeMode="contain"
      />

      {/* Mensagem de sucesso */}
      <View style={styles.messageBox}>
        <Text style={styles.successText}>Você se registrou com sucesso!</Text>
        <Text style={styles.instructions}>
          Verifique o seu e-mail para confirmar a sua conta.
          {"\n"}Depois disso realize o login no nosso aplicativo!
        </Text>
      </View>

      {/* Botão de entrar */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
    </View>
  )
}

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAFAFA",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 24,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 30,
  },
  messageBox: {
    backgroundColor: "#F4F4F4",
    padding: 20,
    borderRadius: 20,
    marginBottom: 30,
    width: "100%",
  },
  successText: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 12,
  },
  instructions: {
    fontSize: 16,
    textAlign: "center",
    color: "#333",
  },
  button: {
    backgroundColor: "#3C4DBD",
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 16,
  },
  buttonText: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 16,
  },
})

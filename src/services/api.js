import axios from "axios"
import { Alert } from "react-native"

export const api = axios.create({
  baseURL: "http://localhost:8080/",
})

// Função para cadastrar usuários

export async function cadastrarUsuario({ nome, email, senha }) {
  try {
    const response = await api.post("/cadastrar", {
      nome,
      email,
      senha,
    })

    console.log(response.data)
  } catch (error) {
    console.error(error)
  }
}

export async function verificarUsuario({ nome, senha }, navigation) {
  try {
    const response = await api.get("/verificar_usuario", {
      params: {
        nome,
        senha,
      },
    })

    if (response.data) {
      console.log("Esse usuário existe!")
      navigation.navigate("Menu")
    } else {
      console.log("Usuário ou senha inválidos!")
    }
  } catch (error) {
    console.error(error)
  }
}

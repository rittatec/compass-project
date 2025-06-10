import axios from "axios"
import { Alert } from "react-native"

// Para poder armazenar localmente os valores consumidos das APIs
import AsyncStorage from "@react-native-async-storage/async-storage"

export const api = axios.create({
  baseURL: "http://localhost:8080/",
})

// Função para cadastrar usuários

export async function cadastrarUsuario({ nome, email, senha }) {
  try {
    const response = await api.post("/cadastrar_usuario", {
      nome,
      email,
      senha,
    })

    console.log(response.data)
  } catch (error) {
    console.error(error)
  }
}

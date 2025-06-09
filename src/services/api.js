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

export async function verificarUsuario({ nome, senha }, navigation) {
  try {
    const response = await api.post("/verificar_usuario", {
      nome,
      senha,
    })

    const responseUsuario = await api.get(`/usuario/${response.data}`)

    if (response.data) {
      await AsyncStorage.setItem("@asyncStorage:idUsuario", response.data)

      navigation.navigate("Menu")
    }
  } catch (error) {
    console.error(error)
  }
}

export async function salvarRenda(idConta, nome, renda) {
  try {
    const response = await api.put(`/atualizar_conta/${idConta}`, {
      nome,
      renda,
    })
  } catch (error) {
    console.error(error)
  }
}

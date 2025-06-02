import axios from "axios"

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

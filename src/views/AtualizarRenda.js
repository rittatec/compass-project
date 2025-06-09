import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from "react-native"
import { useState } from "react"

import { salvarRenda } from "../services/api"

export default function AtualizarRenda() {
  const [renda, setRenda] = useState("")
  const [editando, setEditando] = useState(false)

  // Formata o valor para R$ 0,00
  const formatarValor = (valor) => {
    const num = parseFloat(valor.replace(/\D/g, "")) / 100
    if (isNaN(num)) return "R$ 0,00"
    return num.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <Text style={styles.title}>Atualize sua Renda{"\n"}Mensal</Text>

      <View style={styles.cardRenda}>
        <Text style={styles.labelCard}>Renda Mensal</Text>
        <Text style={styles.valorCard}>{formatarValor(renda)}</Text>
        <TouchableOpacity
          style={styles.alterarButton}
          onPress={() => setEditando(true)}
        >
          <Text style={styles.alterarText}>Alterar</Text>
        </TouchableOpacity>
      </View>

      {/* Card de edição */}
      {editando && (
        <View style={styles.cardEdit}>
          <Text style={styles.labelEdit}>Renda Mensal</Text>
          <Text style={styles.subLabelEdit}>Insira o valor:</Text>
          <TextInput
            style={styles.inputValor}
            placeholder="R$ 0,00"
            value={renda}
            onChangeText={setRenda}
            keyboardType="numeric"
            autoFocus
          />
          <TouchableOpacity
            style={styles.salvarButton}
            onPress={() => {
              setEditando(false)
              salvarRenda(1, "arthur", renda)
            }}
          >
            <Text style={styles.salvarText}>Salvar</Text>
          </TouchableOpacity>
        </View>
      )}
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafbfc",
    paddingHorizontal: 24,
    paddingTop: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 28,
    color: "#222",
  },
  cardRenda: {
    backgroundColor: "linear-gradient(90deg, #4464D9 0%, #5A97A7 100%)",
    backgroundColor: "#4464D9",
    borderRadius: 18,
    padding: 24,
    marginBottom: 32,
    alignItems: "flex-start",
    position: "relative",
    minHeight: 100,
    justifyContent: "center",
  },
  labelCard: {
    color: "#fff",
    fontSize: 16,
    marginBottom: 6,
    fontWeight: "500",
  },
  valorCard: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 8,
  },
  alterarButton: {
    position: "absolute",
    right: 18,
    top: 24,
    backgroundColor: "#fff",
    borderRadius: 16,
    paddingVertical: 6,
    paddingHorizontal: 22,
    elevation: 2,
  },
  alterarText: {
    color: "#4464D9",
    fontWeight: "bold",
    fontSize: 16,
  },
  cardEdit: {
    backgroundColor: "#fff",
    borderRadius: 18,
    padding: 28,
    alignItems: "center",
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    marginBottom: 24,
  },
  labelEdit: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#222",
    marginBottom: 4,
  },
  subLabelEdit: {
    fontSize: 15,
    color: "#888",
    marginBottom: 18,
  },
  inputValor: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#b0b8be",
    borderRadius: 8,
    padding: 12,
    fontSize: 22,
    color: "#1a7f37",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 18,
    backgroundColor: "#f5f5f5",
  },
  salvarButton: {
    backgroundColor: "#5AC37E",
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 40,
    alignItems: "center",
    marginTop: 8,
  },
  salvarText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },
})

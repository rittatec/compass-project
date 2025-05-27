import { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

export default function CustomPaymentScreen() {
  const [amount, setAmount] = useState('');

  const handleSave = () => {
    alert(`Valor salvo: R$ ${amount}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Personalize seus pagamentos</Text>

      <View style={styles.card}>
        <Text style={styles.subtitle}>Renda Mensal</Text>
        <View style={styles.incomeBox}>
          <Text style={styles.income}>R$ 0,00</Text>
          <TouchableOpacity style={styles.editButton}>
            <Text style={styles.editText}>Alterar</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.paymentBox}>
        <Text style={styles.paymentTitle}>Água</Text>
        <Text style={styles.paymentLabel}>Insira o valor:</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="R$ 0,00"
          value={amount}
          onChangeText={setAmount}
        />
        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Text style={styles.saveText}>Salvar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#3A53A4',
    borderRadius: 12,
    padding: 20,
    marginBottom: 30,
  },
  subtitle: {
    color: '#fff',
    fontSize: 14,
    marginBottom: 5,
  },
  incomeBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  income: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
  editButton: {
    backgroundColor: '#fff',
    paddingVertical: 6,
    paddingHorizontal: 15,
    borderRadius: 15,
  },
  editText: {
    color: '#3A53A4',
    fontWeight: 'bold',
  },
  paymentBox: {
    backgroundColor: '#F7F7F7',
    borderRadius: 20,
    padding: 25,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  paymentTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  paymentLabel: {
    textAlign: 'center',
    marginBottom: 5,
  },
  input: {
    borderBottomWidth: 2,
    borderBottomColor: '#4CAF50',
    fontSize: 22,
    fontWeight: 'bold',
    color: '#4CAF50',
    textAlign: 'center',
    marginBottom: 20,
  },
  saveButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    borderRadius: 25,
    alignItems: 'center',
  },
  saveText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

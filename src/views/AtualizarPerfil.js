import { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function AtualizarPerfil() {
  const navigation = useNavigation();

  // Estados para possíveis usos futuros
  const [nome, setNome] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Atualize seu perfil</Text>

      {/* icon de perfil */}
      <View style={styles.fotoCircle} />

      <View style={styles.fieldContainer}>
        <Text style={styles.fieldLabel}>Nome</Text>
        <View style={styles.fieldRow}>
          <Text style={nome ? styles.fieldValue : styles.fieldValuePlaceholder}>
            {nome || 'Digite seu nome'}
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('EditarNome')}>
            <Text style={styles.alterar}>Alterar</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.fieldContainer}>
        <Text style={styles.fieldLabel}>Data de Nascimento</Text>
        <View style={styles.fieldRow}>
          <Text style={dataNascimento ? styles.fieldValue : styles.fieldValuePlaceholder}>
            {dataNascimento || 'DD/MM/AAAA'}
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('EditarDataNascimento')}>
            <Text style={styles.alterar}>Alterar</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.fieldContainer}>
        <Text style={styles.fieldLabel}>Email</Text>
        <View style={styles.fieldRow}>
          <Text style={email ? styles.fieldValue : styles.fieldValuePlaceholder}>
            {email || 'seu@email.com'}
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('EditarEmail')}>
            <Text style={styles.alterar}>Alterar</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.fieldContainer}>
        <Text style={styles.fieldLabel}>Adicionar número de telefone</Text>
        <View style={styles.fieldRow}>
          <Text style={telefone ? styles.fieldValue : styles.fieldValuePlaceholder}>
            {telefone || 'Digite seu telefone'}
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('AdicionarTelefone')}>
            <Text style={styles.alterar}>Adicionar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafbfc',
    paddingHorizontal: 24,
    paddingTop: 40,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 18,
  },
  fotoCircle: {
    alignSelf: 'center',
    width: 200,
    height: 200,
    borderRadius: 150,
    backgroundColor: '#ddd',
    marginBottom: 24,
  },
  fieldContainer: {
    marginBottom: 18,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    paddingBottom: 8,
  },
  fieldLabel: {
    fontSize: 13,
    color: '#888',
    marginBottom: 2,
  },
  fieldRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  fieldValuePlaceholder: {
    fontSize: 16,
    color: '#bbb',
    fontStyle: 'italic',
  },
  fieldValue: {
    fontSize: 16,
    color: '#222',
  },
  alterar: {
    color: '#5A97A7',
    fontWeight: 'bold',
    fontSize: 15,
    marginLeft: 10,
  },
});
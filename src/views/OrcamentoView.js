import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function Orçamento() {
  const historico = [
    {
      valor: 'R$ 0,00',
      descricao: 'Reservado para Alimento',
      data: '05 de MAIO de 2025',
    },
    {
      valor: 'R$ 0,00',
      descricao: 'Reservado para Investir',
      data: '05 de MAIO de 2025',
    },
    {
      valor: 'R$ 0,00',
      descricao: 'Reservado para Poupança',
      data: '05 de MAIO de 2025',
    },
    {
      valor: 'R$ 0,00',
      descricao: 'Reservado para Energia',
      data: '05 de MAIO de 2025',
    },
    {
      valor: 'R$ 0,00',
      descricao: 'Reservado para Saúde',
      data: '05 de MAIO de 2025',
    },
    {
      valor: 'R$ 0,00',
      descricao: 'Reservado para Wifi',
      data: '05 de MAIO de 2025',
    },

  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Histórico</Text>

      <ScrollView>
        {historico.map((item, idx) => (
          <View key={idx} style={styles.card}>
            <Text style={styles.valor}>{item.valor}</Text>
            <View style={styles.row}>
              <Text style={styles.descricao}>{item.descricao}</Text>
              <Text style={styles.data}>{item.data}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 18,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 18,
    color: '#222',
  },
  card: {
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    paddingVertical: 16,
  },
  valor: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 2,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  descricao: {
    color: '#bbb',
    fontSize: 13,
  },
  data: {
    color: '#bbb',
    fontSize: 13,
  },
});
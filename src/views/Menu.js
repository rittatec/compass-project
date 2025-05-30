import { View, Text, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

export default function Menu() {
  const navigation = useNavigation();

  const pagamentos = [
    { title: 'Água', screen: 'Agua', color: '#49B2FF', icon: 'water'},
    { title: 'Energia', screen: 'Energia', color: '#1DB954', icon: 'flash-on' },
    { title: 'Wi–Fi', screen: 'Wifi', color: '#B497FF', icon: 'wifi' },
    { title: 'Alimento', screen: 'Alimento', color: '#FF7F7F', icon: 'fastfood' },
  ];

  const categorias = [
    { title: 'Extra', screen: 'Extra', color: '#B46DFF', icon: 'star' },
    { title: 'Poupança', screen: 'Poupanca', color: '#5AC9C7', icon: 'savings' },
    { title: 'Investido', screen: 'Investido', color: '#F7C744', icon: 'trending-up' },
    { title: 'Receber', screen: 'Receber', color: '#FA8145', icon: 'attach-money' },
    { title: 'Saúde', screen: 'Saude', color: '#FF6B81', icon: 'favorite' },
  ];

  const renderButtons = (items) =>
    items.map(({ title, screen, color, icon }) => (
      <TouchableOpacity
        key={screen}
        style={[styles.card, { backgroundColor: color }]}
        onPress={() => navigation.navigate(screen)}
      >
        <MaterialIcons name={icon} size={28} color="#fff" />
        <Text style={styles.cardText}>{title}</Text>
      </TouchableOpacity>
    ));

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.greeting}>Bem vindo(a), Cliente.</Text>

        <View style={styles.balanceCard}>
          <View>
            <Text style={styles.balanceLabel}>Renda Mensal</Text>
            <Text style={styles.balanceValue}>R$ 0,00</Text>
          </View>
          <TouchableOpacity 
          onPress={() => navigation.navigate('AtualizarRenda')}
          style={styles.editButton}>
            <Text style={styles.editButtonText}>Alterar</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.sectionTitle}>Pagamentos mensais</Text>
        <View style={styles.grid}>{renderButtons(pagamentos)}</View>

        <Text style={styles.sectionTitle}>Categorias</Text>
        <View style={styles.grid}>{renderButtons(categorias)}</View>
      </ScrollView>

        <View style={styles.footer}>
          <TouchableOpacity style={styles.footerItem} onPress={() => navigation.navigate('Menu')}>
            <Ionicons name="home" size={36} color="#5A97A7" />
            <Text style={[styles.footerLabel, { color: '#5A97A7' }]}>Menu</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.footerItem} onPress={() => navigation.navigate('Perfil')}>
            <Ionicons name="person-outline" size={32} color="#B0B8BE" />
            <Text style={styles.footerLabel}>Perfil</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.footerItem} onPress={() => navigation.navigate('Orcamento')}>
            <Ionicons name="stats-chart-outline" size={32} color="#B0B8BE" />
            <Text style={styles.footerLabel}>Orçamento</Text>
          </TouchableOpacity>
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    padding: 16,
    paddingBottom: 80,
  },
  greeting: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  balanceCard: {
    backgroundColor: '#4464D9',
    borderRadius: 16,
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    height: 95,
  },
  balanceLabel: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  balanceValue: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  editButton: {
    backgroundColor: '#fff',
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 20,
  },
  editButtonText: {
    color: '#4464D9',
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontSize: 23,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  grid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap:'wrap',
  },
  card: {
    width: '30%',
    aspectRatio: 1,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  cardText: {
    color: '#fff',
    fontWeight: 'bold',
    marginTop: 8,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    height: 80,
    backgroundColor: '#fff',
    width: '100%',
    borderTopWidth: 1,
    borderColor: '#eee',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingBottom: 10,
  },
  footerItem: {
    alignItems: 'center',
    flex: 1,
  },
  footerLabel: {
    fontSize: 16,
    color: '#B0B8BE',
    marginTop: 2,
    fontWeight: '600',
  },

});

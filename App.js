// imports necessarios para a navegação (tem que baixar essas dependencias)
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Importando as telas (views)
import Inicio from './src/views/Inicio'; // primeira tela 
import Login from './src/views/Login'; // tela Login
import Cadastrar from './src/views/Cadastrar'; // tela de cadastro
import Menu from './src/views/Menu'; // tela de Menu
import PopOut from './src/views/PopOut'; // tela PopOut de registro com sucesso
import Agua from './src/views/AguaView'; // tela para add o valor reservado para a agua - nome = agua - nome da tela = CategoriaView
import EnergiaView from './src/views/EnergiaView';
import Alimento from './src/views/AlimentoView'; // tela para add o valor reservado para o alimento - nome = alimento - nome da tela = CategoriaView
import Wifi from './src/views/WifiView'; // tela para add o valor reservado para o wifi - nome = wifi - nome da tela = CategoriaView

const Stack = createNativeStackNavigator();

// Funcao para ir adicionando as telas e config das rotas
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Inicio">
        <Stack.Screen name="Inicio" component={Inicio} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name= 'Cadastrar' component={Cadastrar}/>
        <Stack.Screen name= 'Menu' component={Menu}/>
        <Stack.Screen name='PopOut' component={PopOut}/>
        <Stack.Screen name='Agua' component={Agua}/>
        <Stack.Screen name='Energia' component={EnergiaView}/> 
        <Stack.Screen name='Alimento' component={Alimento}/>
        <Stack.Screen name='Wifi' component={Wifi}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

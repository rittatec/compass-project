// imports necessarios para a navegação (tem que baixar essas dependencias)
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Importando as telas (views)
import Inicio from './src/views/Inicio'; // primeira tela 
import Login from './src/views/Login'; // tela Login
import Cadastrar from './src/views/Cadastrar'; // tela de cadastro
import Menu from './src/views/Menu'; // tela de Menu
import PopOut from './src/views/PopOut'; // tela PopOut de registro com sucesso

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
      </Stack.Navigator>
    </NavigationContainer>
  );
}

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
import Extra from './src/views/ExtraView'; // tela para add o valor para o extra ganho pelo user - nome = extra - nome da tela = CategoriaView
import Poupanca from './src/views/PoupancaView'; // tela para add o valor reservado para a poupanca - nome = poupanca - nome da tela = CategoriaView
import Investido from './src/views/InvestidoView'; // tela para add o valor reservado para o investido - nome = investido - nome da tela = CategoriaView
import Receber from './src/views/ReceberView'; // tela para add o valor que o user tem para receber - nome = receber - nome da tela = CategoriaView
import Saude from './src/views/SaudeView'; // tela para add o valor reservado para a saude - nome = saude - nome da tela = CategoriaView
import Perfil from './src/views/PerfilView'; // tela de perfil do usuario
import Notificacoes from './src/views/NotificacoesView'; // tela de notificações
import Orcamento from './src/views/OrcamentoView'; // tela de orcamento do usuario
import AtualizarPerfil from './src/views/AtualizarPerfil'; // tela para atualizar o perfil do usuario
import Sair from './src/views/Sair'; // tela para sair do app
import EditarNome from './src/views/EditarNome'; // tela para editar o nome do usuario
import EditarDataNascimento from './src/views/EditarDataNascimento'; // tela para editar a data de nascimento do usuario
import EditarEmail from './src/views/EditarEmail'; // tela para editar o email do usuario
import AdicionarTelefone from './src/views/AdicionarTelefone';

const Stack = createNativeStackNavigator();

// Funcao para ir adicionando as telas e config das rotas
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Inicio">
        <Stack.Screen name="Inicio" component={Inicio} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name='Cadastrar' component={Cadastrar}/>
        <Stack.Screen name= 'Menu' component={Menu}/>
        <Stack.Screen name='PopOut' component={PopOut}/>
        <Stack.Screen name='Agua' component={Agua}/>
        <Stack.Screen name='Energia' component={EnergiaView}/> 
        <Stack.Screen name='Alimento' component={Alimento}/>
        <Stack.Screen name='Wifi' component={Wifi}/>
        <Stack.Screen name='Extra' component={Extra}/>
        <Stack.Screen name='Poupanca' component={Poupanca}/>
        <Stack.Screen name='Investido' component={Investido}/>
        <Stack.Screen name='Receber' component={Receber}/>
        <Stack.Screen name='Saude' component={Saude}/>
        <Stack.Screen name='Perfil' component={Perfil}/>
        <Stack.Screen name='Notificacoes' component={Notificacoes}/>
        <Stack.Screen name='Orcamento' component={Orcamento}/>
        <Stack.Screen name='AtualizarPerfil' component={AtualizarPerfil}/>
        <Stack.Screen name='Sair' component={Sair}/>
        <Stack.Screen name='EditarNome' component={EditarNome}/>
        <Stack.Screen name='EditarDataNascimento' component={EditarDataNascimento}/>
        <Stack.Screen name='EditarEmail' component={EditarEmail}/>
        <Stack.Screen name='AdicionarTelefone' component={AdicionarTelefone}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}

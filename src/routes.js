import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import Login from './pages/Login';
import Index from './pages/Index';
import Cadastro from './pages/Cadastro';
import EsqueciSenha from './pages/EsqueciSenha';

const Routes = createAppContainer(
  createSwitchNavigator({
    Login,
    Index,
    Cadastro,
    EsqueciSenha,
  })
);

export default Routes;
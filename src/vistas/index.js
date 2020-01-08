import { divVistaLogin } from './login.js';
import { divVistaRegistro } from './registro.js';
import vistaMuro from './muro.js';
import Different from './404.js';


const components = {
  login: divVistaLogin,
  createAccount: divVistaRegistro,
  home: vistaMuro,
  different: Different,
};

export { components };

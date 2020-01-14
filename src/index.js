import { divVistaLogin } from './vistas/login.js';
import { divVistaRegistro } from './vistas/registro.js';
import divVistaHome from './vistas/home.js';
import Different from './vistas/404.js';


const components = {
  login: divVistaLogin,
  createAccount: divVistaRegistro,
  home: divVistaHome,
  different: Different,
};

export { components };

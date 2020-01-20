import { divVistaRegistro } from '../vistas/registro-vistas.js';
import { divVistaLogin } from '../vistas/login-vistas.js';
import viewHome from '../vistas/home-vistas.js';
import Different from '../vistas/404-vistas.js';

export const components = {
  createAccount: divVistaRegistro,
  login: divVistaLogin,
  home: viewHome,
  different: Different,

};

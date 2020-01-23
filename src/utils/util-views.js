import divVistaRegistro from '../vistas/registro-vistas.js';
import divVistaLogin from '../vistas/login-vistas.js';
import viewHome from '../vistas/home-vistas.js';
import headerView from '../vistas/header-vistas.js';
import profileView from '../vistas/profile-vistas.js';
import commentView from '../vistas/comments-vistas.js';
import Different from '../vistas/404-vistas.js';

export const components = {
  createAccount: divVistaRegistro,
  login: divVistaLogin,
  home: viewHome,
  header: headerView,
  profile: profileView,
  comment: commentView,
  different: Different,

};

import {
  signInUserEmail,
  signInUserGoogle,
  signInUserFacebook,
  registerUserEmail,
  signOut,
  currentUser,
} from '../src/model/autenticar-usuario.js';


const firebasemock = require('firebase-mock');

const mockAuth = new firebasemock.MockAuthentication();
mockAuth.autoFlush();
global.firebase = firebasemock.MockFirebaseSdk(
  () => null,
  () => mockAuth,
);

describe('Sign In User', () => {
  it('Debería poder iniciar sesión', () => signInUserEmail('jennifersu2059@gmail.com', '123456')
    .then((user) => {
      expect(user.isAnonymous).toBe(false);
    }));
});

describe('Sign In User with google', () => {
  it('Debería poder iniciar sesión', () => signInUserGoogle()
    .then((user) => {
      expect(user.isAnonymous).toBe(false);
    }));
});

describe('Sign In User with facebook', () => {
  it('Debería poder iniciar sesión', () => signInUserFacebook()
    .then((user) => {
      expect(user.isAnonymous).toBe(false);
    }));
});

describe('Register User with email', () => {
  it('Debería poder registrarse', () => signInUserEmail('jennifersu2059@gmail.com', '123456')
    .then((user) => {
      expect(user.isAnonymous).toBe(false);
    }));
});

describe('Sign out user', () => {
  it('Debería poder cerrar sesión', () => signOut()
    .then((user) => {
      expect(user).toBe(undefined);
    }));
});

describe('Register user', () => {
  it('Debería registrar un usuario', () => registerUserEmail('jennifersu2059@gmail.com', '123456')
    .then((user) => {
      expect(user.isAnonymous).toBe(false);
    }));
});

describe('Current User', () => {
  it('Should show current user', () => {
    signInUserEmail('jennifersu2059@gmail.com', '123456')
      .then(() => {
        const user = currentUser();
        expect(user.email).toBe('jennifersu2059@gmail.com.com');
      });
  });
});

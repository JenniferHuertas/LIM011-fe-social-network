import { inicioSesion, registro } from '../src/controller/firebase-controller';


const firebasemock = require('firebase-mock');

const mockauth = new firebasemock.MockFirebase();
const mockfirestore = new firebasemock.MockFirestore();
mockfirestore.autoFlush();
mockauth.autoFlush();

global.firebase = firebasemock.MockFirebaseSdk(
  // use null if your code does not use RTDB
  () => null,
  () => mockauth,
  () => mockfirestore,
);

describe('inicioSesion', () => {
  it('Debería poder iniciar sesion', () => inicioSesion('front@end.la', '123456')
    .then((user) => {
      expect(user.email).toBe('front@end.la');
    }));
});

describe('registro', () => {
  it('Debería poder registrarse', () => registro('front@end.la', '123456')
    .then((user) => {
      expect(user.email).toBe('front@end.la');
    }));
});

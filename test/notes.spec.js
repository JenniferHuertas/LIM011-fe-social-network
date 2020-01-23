import MockFirebase from 'mock-cloud-firestore';
import {
  addPost,
  getPosts,
  updatePost,
  deletePost,
  updateTypePost,
} from '../src/model/publicar-post.js';

const fixtureData = {
  __collection__: {
    posts: {
      __doc__: {
        post001: {
          post: 'probando mocks',
          idUser: 'user001',
          name: 'jennifer miranda',
          email: 'jennifersu2059@gmail.com',
          date: '22/01/2020',
          numlikes: 0,
          type: '1',
        },
        post002: {
          post: 'probando mocks 3',
          idUser: 'user002',
          name: 'jennifer miranda',
          email: 'jennifersu2059@gmail.com',
          date: '22/01/2020',
          numlikes: 0,
          type: '1',
        },
      },
    },
  },
};

global.firebase = new MockFirebase(fixtureData, { isNaiveSnapshotListenerEnabled: true });
const objectPost = {
  post: 'probando mocks 2',
  idUser: 'user001',
  name: 'jennifer miranda',
  email: 'jennifersu2059@gmail.com',
  date: '22/01/2020',
  numlikes: 0,
  type: '1',
};

describe('addPost', () => {
  it('deberia agregar un post', done => addPost(objectPost).then(() => {
    const callback = (post) => {
      const result = post.find(elem => elem.post === 'probando mocks 2');
      expect(result.post).toBe('probando mocks 2');
      done();
    };
    getPosts(callback);
  }));
});

describe('getPost', () => {
  it('deberia retornar un post', done => getPosts((data) => {
    const result = data.filter(elem => elem.idUser === 'user001');
    expect(result).toHaveLength(2);
    done();
  }));
});

describe('updatePost', () => {
  it('deberia retornar un post', done => updatePost('post001', 'modificando mocks').then(() => {
    const callback = (post) => {
      const result = post.find(elem => elem.post === 'modificando mocks');
      expect(result.post).toBe('modificando mocks');
      done();
    };
    getPosts(callback);
  }));
});

describe('delete post', () => {
  it('deberia retornar un post', done => deletePost('post002').then(() => {
    const callback = (post) => {
      const result = post.find(elem => elem.id === 'post002');
      expect(result).toBe(undefined);
      done();
    };
    getPosts(callback);
  }));
});

describe('updatePosttype', () => {
  it('deberia retornar un post', done => updateTypePost('post001', '0').then(() => {
    const callback = (post) => {
      const result = post.find(elem => elem.type === '0');
      expect(result.type).toBe('0');
      done();
    };
    getPosts(callback);
  }));
});

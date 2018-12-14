import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAggEfYAX5hTsYegxj7PcaDsJez4wKfzIs',
  authDomain: 'blog-b2fda.firebaseapp.com',
  databaseURL: 'https://blog-b2fda.firebaseio.com',
  projectId: 'blog-b2fda',
  storageBucket: 'blog-b2fda.appspot.com',
  messagingSenderId: '238091125488',
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

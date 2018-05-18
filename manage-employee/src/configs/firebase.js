import firebase from 'firebase';

const config = {
  apiKey: '',
  authDomain: '',
  databaseURL: '',
  projectId: '',
  storageBucket: '',
  messagingSenderId: '',
};

const firebaseConfig = firebase.initializeApp(config);
const database = firebaseConfig.database();

export default firebaseConfig;
export {
  database,
};
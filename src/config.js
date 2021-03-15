import Firebase from 'firebase';
let config = {
  apiKey: 'AIzaSyBIJ-EhB_BpjYQ1STLFv0khxJmgO2j_SYY',
  authDomain: 'vitalizeapp-ad28e.firebaseapp.com',
  databaseURL: 'https://vitalizeapp-ad28e-default-rtdb.firebaseio.com',
  projectId: 'vitalizeapp-ad28e',
  storageBucket: 'vitalizeapp-ad28e.appspot.com',
  messagingSenderId: '448394061758'
};
let app = Firebase.initializeApp(config);
export const db = app.database();
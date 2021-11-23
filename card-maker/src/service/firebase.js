import firebase from 'firebase'

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_API_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_API_DB_URL ,
  projectId: process.env.REACT_APP_FIREBASE_API_PROJECT_ID, 
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
export default firebaseApp
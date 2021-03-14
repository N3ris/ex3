import fbAppli from 'firebase/app';
import 'firebase/firestore';

/******* Ex#3 - Étape B ********************************/ 
// Ajouter votre objet de configuration Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDnXajbfgzNepT-pl0k-Tea5e7bCYDRbYc",
  authDomain: "ex3-produits-d952f.firebaseapp.com",
  databaseURL: "https://ex3-produits-d952f-default-rtdb.firebaseio.com",
  projectId: "ex3-produits-d952f",
  storageBucket: "ex3-produits-d952f.appspot.com",
  messagingSenderId: "979179680045",
  appId: "1:979179680045:web:2478318e3160d73b20e3a4",
  measurementId: "G-X1TG1V2J8W"
};

// Initialiser Firebase
if(!fbAppli.apps.length) {
  fbAppli.initializeApp(firebaseConfig);
}

// Initialiser Firestore
const bd = fbAppli.firestore();
/******* Ex#3 - Étape C ********************************/ 
// Exporter (par défaut) la référence à "bd" pour pouvoir l'utiliser dans le composant ListeProduits
export const BD = bd;
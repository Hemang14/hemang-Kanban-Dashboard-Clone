import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

var config = {
  // apiKey: "AIzaSyABSnlsNgrPzL0bxXFmm3lYmGyqa6jrDCk",
  // authDomain: "hemang-kanban-dashboard-clone.firebaseapp.com",
  // projectId: "hemang-kanban-dashboard-clone",
  // storageBucket: "hemang-kanban-dashboard-clone.appspot.com",
  // messagingSenderId: "867795570994",
  // appId: "1:867795570994:web:32b1bd2c2092b9d649472b",
  // databaseURL:"https://hemang-kanban-dashboard-clone-default-rtdb.firebaseio.com/",
  // measurementId: "G-6Y2680J9NJ"
  apiKey: "AIzaSyDAQtgANL13sJGwONLs3H-BB_aOI3DCIpY",
  authDomain: "react-trello-clone-42c7f.firebaseapp.com",
  projectId: "react-trello-clone-42c7f",
  storageBucket: "react-trello-clone-42c7f.appspot.com",
  messagingSenderId: "652768543378",
  appId: "1:652768543378:web:56a191aca122cf4e495c4b",
  databaseURL:
    "https://react-trello-clone-42c7f-default-rtdb.europe-west1.firebasedatabase.app/",
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const auth = firebase.auth();
const db = firebase.database();

export { auth, db };

import firebase from "firebase";

// export const firebaseConfig = {
//   apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
//   authDomain: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID + ".firebaseapp.com",
//   databaseURL:
//     "https://" +
//     process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID +
//     ".firebaseio.com",
//   projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID + ".appspot.com",
//   messagingSenderId: "327750059870",
//   appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
// };
const firebaseConfig = {
  apiKey: "AIzaSyDImxW4foJ4iBYGrKJuwmx7e8x76LHUytc",
  authDomain: "makeup-65aa8.firebaseapp.com",
  projectId: "makeup-65aa8",
  storageBucket: "makeup-65aa8.appspot.com",
  messagingSenderId: "68817471073",
  appId: "1:68817471073:web:dc5064245f0930589d0c20",
  measurementId: "G-XKQ141GX5H"
};


try {
  firebase.initializeApp(firebaseConfig);
} catch (err) {
  if (!/already exists/.test(err.message)) {
    console.error("Firebase initialization error", err.stack);
  }
}

const app = firebase.app();
const auth = firebase.auth();
const db = firebase.firestore();

export { firebase, auth, db };
console.log(app.name ? "Firebase Mode Activated!" : "Firebase not working :(");

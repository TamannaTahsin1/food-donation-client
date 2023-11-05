// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0-9H28yw4ujQyUHL3IUV06X2UFrPMxsI",
  authDomain: "food-donation-client.firebaseapp.com",
  projectId: "food-donation-client",
  storageBucket: "food-donation-client.appspot.com",
  messagingSenderId: "344120419017",
  appId: "1:344120419017:web:edd37a3fb7efb7a58c6318"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app
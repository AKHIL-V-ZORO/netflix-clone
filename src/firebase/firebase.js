
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import{getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAND1SCBjTFJRYpuDj7BBJvTBhkjocKTpg",
  authDomain: "netflix-react-a5c7c.firebaseapp.com",
  projectId: "netflix-react-a5c7c",
  storageBucket: "netflix-react-a5c7c.appspot.com",
  messagingSenderId: "262959378448",
  appId: "1:262959378448:web:bab9446485890ccff35a95"
};
const app = initializeApp(firebaseConfig); 
const auth=getAuth(app)
const db=getFirestore(app)
export {app,auth,db}
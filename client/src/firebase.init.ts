import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider, getAuth } from 'firebase/auth';
import { FacebookAuthProvider } from 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyDfuL9y5qcN_v-95kQQwJBLJd5VrAaAook',
	authDomain: 'trippal-c64a7.firebaseapp.com',
	projectId: 'trippal-c64a7',
	storageBucket: 'trippal-c64a7.appspot.com',
	messagingSenderId: '447046320128',
	appId: '1:447046320128:web:d4af89a057bb6a7a23d8e5',
	measurementId: 'G-WPZ824E5WP',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
export const googleProvider = new GoogleAuthProvider();
export const faceBookProvider = new FacebookAuthProvider();

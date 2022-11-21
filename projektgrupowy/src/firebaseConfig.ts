import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: 'AIzaSyBLuVbYS5KHQmtpz8HoF0LwK1qiAKT4lt4',
  authDomain: 'nbpapi-df700.firebaseapp.com',
  projectId: 'nbpapi-df700',
  storageBucket: 'nbpapi-df700.appspot.com',
  messagingSenderId: '1067553117332',
  appId: '1:1067553117332:web:a169c614ed491910db5081',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

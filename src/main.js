import { createApp } from 'vue';
import './index.css';
import App from './App.vue';
import router from './router';
import { initializeApp } from 'firebase/app';
import { getAuth, connectAuthEmulator } from 'firebase/auth';
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import { createPinia } from 'pinia';

/* code from our Firebase console */
const firebaseConfig = {
	apiKey: 'AIzaSyBDXsXnSHrm7Hx18U-65azWwm39ysyOQqc',

	authDomain: 'vue-project-cdbd2.firebaseapp.com',

	projectId: 'vue-project-cdbd2',

	storageBucket: 'vue-project-cdbd2.appspot.com',

	messagingSenderId: '304466838430',

	appId: '1:304466838430:web:d9f766f08f5256a63f8c8f',
};

// Initialize Firebase
initializeApp(firebaseConfig);

if (location.hostname === 'localhost') {
	connectAuthEmulator(getAuth(), 'http://localhost:9099');
}
const pinia = createPinia();
const app = createApp(App);

app.use(VueSweetalert2);
app.use(pinia);
app.use(router);

app.mount('#app');

<template>
	<div>
		<nav class="nav p-2 flex justify-between text-whites fixed w-full top-0">
			<div class="m-1">
				<span class="px-2 py-1 rounded text-lg btn mx-2 my-0">
					<router-link to="/"> Home </router-link>
				</span>
				<span v-if="isLoggedIn" class="px-2 py-1 rounded text-lg btn mx-2 my-0">
					<router-link to="/profile"> Profile </router-link>
				</span>
			</div>
			<div class="p-1 text-white text-lg">
				Vue.js login authentication project
			</div>
			<div class="m-1">
				<span v-if="isLoggedIn" class="px-2 py-1 rounded text-lg btn mx-2 my-0">
					<button @click="handleSignOut" class="text-white">Logout</button>
				</span>
				<span v-else>
					<span class="px-2 py-1 rounded text-lg btn mx-2 my-0">
						<router-link to="/register"> Register </router-link>
					</span>
					<span class="px-2 py-1 rounded text-lg btn mx-2 my-0">
						<router-link to="/sign-in"> Login </router-link>
					</span>
				</span>
			</div>
		</nav>
		<router-view />
	</div>
</template>

<script setup>
import { ref, watchEffect } from 'vue'; // used for conditional rendering
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { useRouter } from 'vue-router';

const router = useRouter();

const isLoggedIn = ref(true);

// runs after firebase is initialized
onAuthStateChanged(getAuth(), function (user) {
	if (user) {
		isLoggedIn.value = true; // if we have a user
	} else {
		isLoggedIn.value = false; // if we do not
	}
});

const handleSignOut = () => {
	signOut(getAuth());
	router.push('/sign-in');
};
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */

.nav {
	background-color: #6c63ff;
}

.btn {
	background-color: #4c44da;
}
</style>

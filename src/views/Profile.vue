<template>
	<div class="h-screen">
		<div class="float-left mt-40">
			<img src="../assets/profile.png" />
		</div>
		<div class="float-right mt-80 mr-10 text-left flex flex-col gap-2">
			<h1 class="text-4xl">Current User Details</h1>
			<h3 class="text-2xl">Email: {{ userDetails.email }}</h3>
			<h3 class="text-2xl">UserId: {{ userDetails.uid }}</h3>
		</div>
	</div>
</template>

<script setup>
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useRouter } from 'vue-router';
import { onBeforeUnmount } from 'vue';

const router = useRouter();
const userDetails = getAuth().currentUser;
const authListener = onAuthStateChanged(getAuth(), async function (user) {
	if (!user) {
		// not logged in
		alert('you must be logged in to view this. redirecting to the home page.');
		router.push('/');
	}
});

onBeforeUnmount(() => {
	// clear up listener
	authListener();
});
</script>

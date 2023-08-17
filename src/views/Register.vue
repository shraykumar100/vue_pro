<template>
	<div class="flex items-center justify-center flex-col gap-5 float-left m-10">
		<div>
			<img
				class="illust"
				src="../assets/sign-up.png"
				style="mix-blend-mode: multiply" />
		</div>
		<div class="mt-52 ml-20 flex items-center justify-center flex-col gap-3">
			<div class="w-20">
				<img src="../assets/logo.png" />
			</div>

			<form @submit="submitHandler">
				<div class="flex gap-8 flex-col">
					<div class="text-5xl">Create an Account</div>
					<div>
						<label for="email" class="block mb-2 text-lg font-medium text-black"
							>Email</label
						>
						<input
							type="text"
							id="email"
							v-model="email"
							class="bg-gray-50 border border-blue-600 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:focus:ring-blue-500 dark:focus:border-blue-500"
							placeholder="example@example.com"
							required />
					</div>
					<div>
						<label for="pass" class="block mb-2 text-lg font-medium text-black"
							>Password</label
						>
						<input
							type="password"
							id="pass"
							v-model="password"
							class="bg-gray-50 border border-blue-600 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:focus:ring-blue-500 dark:focus:border-blue-500"
							placeholder="password min 8 characters"
							required />
					</div>
					<button
						@click="register"
						type="submit"
						class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-3lg font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
						Submit
					</button>
				</div>
			</form>
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'vue-router'; // import router

const email = ref('');
const password = ref('');

const router = useRouter(); // get a reference to our vue router

const submitHandler = (e) => {
	e.preventDefault();
};

const register = () => {
	createUserWithEmailAndPassword(getAuth(), email.value, password.value) // need .value because ref()
		.then((data) => {
			console.log('Successfully registered!');
			router.push('/profile'); // redirect to the profile
		})
		.catch((error) => {
			console.log(error.code);
			alert(error.message);
		});
};
</script>

<style>
.illust {
	position: absolute;
	bottom: 0;
	right: 0;
}
</style>

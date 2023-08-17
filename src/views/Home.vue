<template>
	<div class="h-screen bg-gradient-to-tr from-white to-indigo-500">
		<div class="float-left illust3">
			<img class="w-4/5" src="../assets/welcome.png" />
		</div>
		<div class="float-right mt-52 text-right flex flex-col gap-2">
			<h1 class="text bg-indigo-500 p-10 text-6xl inline-block">
				Welcome to my project
			</h1>
			<h1 class="text bg-indigo-500 p-10 text-2xl inline-block">
				Please register yourself first then login
			</h1>
		</div>
		<div class="absolute bottom-0 right-0">
			<h1 class="p-10 text-2xl inline-block">Made by Shray Kumar</h1>
		</div>
	</div>
</template>

<style>
.illust3 {
	position: absolute;
	bottom: 0;
	left: 0;
	mix-blend-mode: multiply;
}

.text {
	/* mix-blend-mode: multiply; */
	color: white;
	border-top-left-radius: 35px;
	border-bottom-left-radius: 35px;
}
</style>

<template>
	<div class="container">
		<h3>Home page</h3>
		<button v-on:click="toggleNavbar">Toggle menu</button>
	</div>
</template>

<script>
	import { EventBus } from '../main.js';

	export default {
		data() {
			return {
			}
		},
		methods: {
			toggleNavbar() {
				EventBus.$emit('navbar-toggleVisibile');
			}
		}
	}
</script>
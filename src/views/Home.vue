<template>
	<div class="container">
		<zero-md src="https://raw.githubusercontent.com/TheCherno/Hazel/master/README.md"></zero-md>
	</div>
</template>

<script>
	import { EventBus } from '@/main.js';

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

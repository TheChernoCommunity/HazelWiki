<template>
	<div class="container">
		<h3>About page</h3>
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

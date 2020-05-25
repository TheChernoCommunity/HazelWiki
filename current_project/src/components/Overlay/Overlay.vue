<template>
	<div id="overlay" @click="closeNavBar" v-if="showOverlay"></div>
</template>

<script>
	import { EventBus } from '@/main.js'

	export default {
		data() {
			return {
				showOverlay: false
			}
		},
		created() {
			EventBus.$on('overlay-closeVisibile', () => {
				this.showOverlay = false;
			});
			EventBus.$on('overlay-openVisibile', () => {
				this.showOverlay = true;
			});
		},
		methods: {
			closeNavBar() {
				EventBus.$emit("navbar-closeVisibile");
			}
		}
	}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
	#overlay {
		position: fixed; /* Sit on top of the page content */
		width: 100%; /* Full width (cover the whole page) */
		height: 100%; /* Full height (cover the whole page) */
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: rgba(0,0,0,0.5); /* Black background with opacity */
		z-index: 2; /* Specify a stack order in case you're using a different order for other elements */
		cursor: pointer; /* Add a pointer on hover */
	}
</style>

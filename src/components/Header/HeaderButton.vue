<template>
	<a class="header_button" v-on:click="buttonAction(eventName)">
		<HeaderLabel :icon="icon" :label="label" />
	</a>
</template>

<script>
	import { EventBus } from '@/main.js'
	import HeaderLabel from "./HeaderLabel.vue";

	export default {
		props: {
			eventName: {
				type: String,
				required: true
			},
			icon: {
				type: String,
				required: false,
				default: ''
			},
			label: {
				type: String,
				required: false,
				default: ''
			},
		},
		methods: {
			buttonAction(eventName) {
				EventBus.$emit(eventName);
			}
		},
		components: {
			HeaderLabel
		}
	}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
	@import "@/scss/Header.scss";

	.header_button {
		margin: 0;
		padding: 0;
		display: inline-flex;
		align-items: center;
		text-decoration: none;
		cursor: pointer;
	}

	.header_button:hover {
		background: $Header_border;
	}
</style>

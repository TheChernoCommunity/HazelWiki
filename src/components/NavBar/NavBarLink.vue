<template>
	<router-link @click.native="closeNav" class="navbar_link" v-bind="attrs">
		<i class="material-icons">{{ icon }}</i>{{ label }}
	</router-link>
</template>

<script>
	import { EventBus } from '@/main.js'

	export default {
		props: {
			label: {
				type: String,
				required: true
			},
			icon: {
				type: String,
				required: false,
				default: ''
			}
		},
		computed: {
			// Getting the property out of the parent, and making sure it gets down to the router-link component.
			//
			// NOTE: In the future, the default should probably go to 404 if no route is given.
			to() {
				return this.$attrs.to || "/"
			},
			// Redefine the attributes, because vue will not allow us set them in the child.
			attrs() {
				const { ...attrs } = this.$attrs;
				return attrs
			}
		},
		methods: {
			closeNav() {
				EventBus.$emit('navbar-closeVisibile');
                EventBus.$emit('overlay-closeVisibile');
			}
		}
	}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
	@import "@/scss/NavBar.scss";

	.navbar_link {
		align-items: middle;
		display: flex;
		color: $NavBar_secundary_color;
		font-size: 0.85em;
		font-family: inherit
	}

	.navbar_link:hover {
		color: $NavBar_primary_color;
	}

	.navbar_link:active {
		background: $NavBar_border;
	}

	.navbar_link .material-icons {
		margin-right: 12px;
		font-size: 1.5em;
	}
</style>


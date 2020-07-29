<template>
	<router-link v-if="!hidden && !external" @click.native="closeNav" class="navbar_link" v-bind="attrs">
		<span class="material-icons">{{ icon }}</span>{{ label }}
	</router-link>
	<a v-else-if="!hidden && external" :href="externalTo" @click="closeNav" class="navbar_link" target="_blank" rel="noopener noreferrer">
		<span class="material-icons">{{ icon }}</span>{{ label }}
	</a>
</template>

<script>
	import { EventBus } from '@/main.js'
	import Utils from '@/utils/Utils.js'

	export default {
		props: {
			label: {
				type: String,
				required: true
			},
			external: {
				type: Boolean,
				required: false,
				default: false
			},
			icon: {
				type: String,
				required: false,
				default: ''
			},
			hidden: {
				type: Boolean,
				required: false,
				default: false
			}
		},
		computed: {
			// Getting the property out of the parent, and making sure it gets down to the router-link component.
			//
			// NOTE: In the future, the default should probably go to 404 if no route is given.
			externalTo() {
				let startingTo = this.$attrs.to || "/";

				let alreadyStartsWithHttpOrHttps = /^https?:\/\//i;
				if (!alreadyStartsWithHttpOrHttps.test(startingTo)) {
					return "https://" + startingTo;
				}

				return startingTo;
			},
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
				if(Utils.isLayoutCompact()) {
					EventBus.$emit('navbar-closeVisibile');
					EventBus.$emit('overlay-closeVisibile');
				} else {
					EventBus.$emit('overlay-closeVisibile');
				}
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
		font-family: inherit;
		padding-top: 4px;
		padding-bottom: 4px;
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

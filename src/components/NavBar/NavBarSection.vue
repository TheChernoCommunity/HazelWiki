<template>
	<div class="navbar_section">
		<span class="navbar_section_header">
			<i class="material-icons" v-if="icon !== ''">{{ icon }}</i>{{ label }}
		</span>
		<slot></slot>
	</div>
</template>

<script>
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
		}
	}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
	@import "@/scss/NavBar.scss";

	.navbar_section {
		align-items: middle;
		border-bottom: 1px solid $NavBar_border;
		color: $NavBar_primary_color;
		padding: 12px;
		font-weight: bolder;
		font-size: 1em;
		font-family: $NavBar_font_family;
		text-decoration: none;
	}

	.navbar_section_header {
		display: inline-flex;
		align-items: middle;
		padding-bottom: .5em;
		font-family: inherit;
		font-size: inherit;
	}

	.navbar_section_header .material-icons {
		font-size: 1.5em;
		margin-right: 12px;
	}
</style>


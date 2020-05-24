<template>
	<span class="header_label">
		<span class="material-icons" v-if="icon !== ''">{{ icon }}</span>
		<span class="header_label_spacer" v-if="icon !== '' && label !== ''" />
		<span v-if="label !== ''">{{ label }}</span>
	</span>
</template>

<script>
	export default {
		props: {
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
		}
	}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
	@import "@/scss/Header.scss";

	.header_label {
		min-width: $Header_height; // at least a square
		height: 100%;
		margin: 0;
		padding: $Header_padding;
		display: inline-flex;
		align-items: center;
		border-right: 1px solid $Header_border;
		color: $Header_color;
		font-size: 1em;
		font-family: $Header_font_family;
	}

	.header_label_spacer {
		margin-right: 6px;
	}
</style>

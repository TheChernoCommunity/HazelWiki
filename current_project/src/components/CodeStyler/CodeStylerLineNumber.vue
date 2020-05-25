<template>
	<span class="line-number" v-show="visible">
		<span v-for="(line, index) in amount" :key="index">{{ line }}</span>
	</span>
</template>

<script>
	export default {
		props: {
			amount: {
				type: Number,
				required: true,
				default: 1
			},
			visible: {
				type: Boolean,
				required: false,
				default: true
			}
		}
	}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
	@import "@/scss/CodeStyler.scss";

	.line-number{
		margin: 0 1em 0 -1em;
		border-right: 1px solid $CodeStyler_color;
		display: inline;

		text-align: right;
	}

	.line-number span{
		display: flex;
		justify-content: right;
		padding: 0 .5em 0 1em;

		font-family: $CodeStyler_font-family;
		font-size: $CodeStyler_font-size;
		font-weight: $CodeStyler_font-weight;
		font-stretch: 100%;
		font-style: normal;
		font-variant-caps: normal;
	}
</style>

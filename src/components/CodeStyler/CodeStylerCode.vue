<template>
	<code>{{ src }}</code>
</template>

<script>
	export default {
		props: {
			src: {
				type: String,
				required: true
			},
			language: {
				type: String,
				required: false,
				default: ""
			}
		}
	}
</script>


<style scoped lang="scss" rel="stylesheet/scss">
	@import "@/scss/CodeStyler.scss";

	code{
		display: inline;

		font-family: $CodeStyler_font-family;
		font-size: $CodeStyler_font-size;
		font-weight: $CodeStyler_font-weight;
		font-stretch: 100%;
		font-style: normal;
		font-variant-caps: normal;

		text-align: left;
		word-wrap: break-word;
		white-space: pre-wrap;
		page-break-inside: avoid;
		tab-size: $CodeStyler_tab-size;
	}

</style>

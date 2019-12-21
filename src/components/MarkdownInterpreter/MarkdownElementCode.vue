<template>
	<code>
		<markdown-element v-for="(contentElement, contentIndex) in element.content"
							:key="contentIndex"
							:element="contentElement"
		/>
	</code>
</template>

<script>
	export default {
		props: {
			element: {
				type: Object,
				required: true
			}
		},
		components: {
			'markdown-element' : () => import('./MarkdownElement.vue') // Recursive dependency
		}
	}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
	@import "@/scss/MarkdownInterpreter.scss";

	code {
		display: inline;
		padding: 0 .25em;

		background: $CodeStyler_background;
		border: 1px solid $CodeStyler_border;
		color: $CodeStyler_color;

		font-family: $MarkdownInterpreter_code_font-family;
		font-size: $MarkdownInterpreter_code_font-size;
		font-weight: $MarkdownInterpreter_font-weight;
		font-stretch: 100%;
		font-style: normal;
		font-variant-caps: normal;

		text-align: left;
		word-wrap: break-word;
		white-space: pre-wrap;
	}
</style>

<template>
	<blockquote>
		<markdown-element v-for="(contentElement, contentIndex) in element.content"
							:key="contentIndex"
							:element="contentElement"
		/>
	</blockquote>
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

	blockquote{
		margin: $MarkdownInterpreter_q_margin-top 0;
		margin-bottom: $MarkdownInterpreter_q_margin-bottom;

		padding: 0 $MarkdownInterpreter_q_padding-horizontal;
		padding-top: $MarkdownInterpreter_q_padding-top;
		padding-bottom: $MarkdownInterpreter_q_padding-bottom;

		border: 1px solid $MarkdownInterpreter_q_border-color;
		border-left: $MarkdownInterpreter_q_border-size solid $MarkdownInterpreter_q_border-color-highlight;
		border-radius: $MarkdownInterpreter_q_border-size;

		background: $MarkdownInterpreter_q_background;
	}
</style>

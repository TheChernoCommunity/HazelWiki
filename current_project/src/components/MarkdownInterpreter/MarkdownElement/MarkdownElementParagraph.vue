<template>
	<p>
		<markdown-element v-for="(contentElement, contentIndex) in element.content"
							:key="contentIndex"
							:element="contentElement"
		/>
	</p>
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

	p{
		margin-top: $MarkdownInterpreter_p_margin-top;
		margin-bottom: $MarkdownInterpreter_p_margin-bottom;
	}
</style>

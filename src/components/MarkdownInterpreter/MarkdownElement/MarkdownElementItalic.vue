<template>
	<em>
		<markdown-element v-for="(contentElement, contentIndex) in element.content"
							:key="contentIndex"
							:element="contentElement"
		/>
	</em>
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

	em {
		font-style: italic;
	}
</style>

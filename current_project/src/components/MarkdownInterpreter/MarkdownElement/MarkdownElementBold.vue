<template>
	<strong>
		<markdown-element v-for="(contentElement, contentIndex) in element.content"
							:key="contentIndex"
							:element="contentElement"
		/>
	</strong>
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

	strong {
		font-weight: $MarkdownInterpreter_strong_font-weight;
	}
</style>

<template>
	<ul>
		<li v-for="(listElement, listIndex) in element.content" :key="listIndex">
			<markdown-element v-for="(contentElement, contentIndex) in listElement[0]" :key="'li'+listIndex+','+contentIndex" :element="contentElement" />
			<markdown-element v-if="listElement[1]!==null" :key="'li'+listIndex+',lu'" :element="listElement[1]" />
		</li>
	</ul>
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

	ul {
		margin: 0;
		margin-left: 1.5em; // Because the bullet is outside of the list’s container

		white-space: nowrap;
	}

	ul li {
		list-style-type: circle;
		list-style-position: outside;
		display: list-item;

		white-space: normal;
	}
</style>

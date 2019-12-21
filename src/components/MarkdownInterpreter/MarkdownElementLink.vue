<template>
	<a :href="link">
		<markdown-element v-for="(contentElement, contentIndex) in contentElements"
							:key="contentIndex"
							:element="contentElement"
		/>
	</a>
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
		},
		computed: {
			link: function() {
				if(this.element.token === '[]()' && this.element.content.length > 1 && this.element.content[0].token === 'TXT')
					return this.element.content[0].content;
				return "";
			},
			contentElements: function() {
				if(this.element.token === '[]()' && this.element.content.length > 1)
					return this.element.content.slice(1);
				return [];
			}
		}
	}
</script>

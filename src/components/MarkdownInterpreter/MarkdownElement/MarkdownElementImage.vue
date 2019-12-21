<template>
	<img :src="link" :alt="txt" />
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
				if(this.element.token === '![]()' && this.element.content.length > 1 && this.element.content[0].token === 'TXT')
					return this.element.content[0].content;
				return "";
			},
			txt: function() {
				if(this.element.token === '![]()' && this.element.content.length > 1 && this.element.content[1].token === 'TXT')
					return this.element.content[1].content;
				return "";
			}
		}
	}
</script>

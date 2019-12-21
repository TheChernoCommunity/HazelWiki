<template>
	<code-styler :src="contentString" :language="contentLanguage" />
</template>

<script>
	import CodeStyler from "../CodeStyler/CodeStyler.vue"

	export default {
		props: {
			element: {
				type: Object,
				required: true
			}
		},
		computed: {
			contentLanguage: function() {
				if(this.element.token === '```')
					return this.element.content[0];
				return "";
			},
			contentString: function() {
				var content = ""
				if(this.element.token === '```' && this.element.content.length > 1)
					for(var i = 1; i < this.element.content.length; i++)
					{
						if(this.element.content[i].token === '\n')
							content = content.concat('\n'.repeat(this.element.content[i].content[0]));
						else
							content = content.concat(this.element.content[i].content);
					}
				return content;
			}
		},
		components: {
			'code-styler': CodeStyler
		}
	}
</script>

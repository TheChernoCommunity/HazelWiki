<template>
	<span>
		<h1 v-if="element.content[0] === 1">
			<markdown-element v-for="(contentElement, contentIndex) in contentElements"
								:key="contentIndex"
								:element="contentElement"
			/>
		</h1>
		<h2 v-if="element.content[0] === 2">
			<markdown-element v-for="(contentElement, contentIndex) in contentElements"
								:key="contentIndex"
								:element="contentElement"
			/>
		</h2>
		<h3 v-if="element.content[0] === 3">
			<markdown-element v-for="(contentElement, contentIndex) in contentElements"
								:key="contentIndex"
								:element="contentElement"
			/>
		</h3>
		<h4 v-if="element.content[0] === 4">
			<markdown-element v-for="(contentElement, contentIndex) in contentElements"
								:key="contentIndex"
								:element="contentElement"
			/>
		</h4>
		<h5 v-if="element.content[0] === 5">
			<markdown-element v-for="(contentElement, contentIndex) in contentElements"
								:key="contentIndex"
								:element="contentElement"
			/>
		</h5>
		<h6 v-if="element.content[0] === 6">
			<markdown-element v-for="(contentElement, contentIndex) in contentElements"
								:key="contentIndex"
								:element="contentElement"
			/>
		</h6>
	</span>
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
			contentElements: function() {
				if(this.element.token === '#' && this.element.content.length > 1)
					return this.element.content.slice(1);
				return [];
			}
		}
	}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
	@import "@/scss/MarkdownInterpreter.scss";

	h1, h2, h3, h4, h5, h6{
		margin-top: $MarkdownInterpreter_h_margin-top;
		margin-bottom: $MarkdownInterpreter_h_margin-bottom;

		font-family: $MarkdownInterpreter_font-family;
		font-weight: $MarkdownInterpreter_h_font-weight;
		color: $MarkdownInterpreter_color;

		line-height: $MarkdownInterpreter_h_line-height;

		border-color: $MarkdownInterpreter_h_border-color;
	}

	h1, h2, h3, h4, h5, h6 :first-child{
		margin-top: 0!important;
	}

	h1, h2{
		border-bottom: $MarkdownInterpreter_h_border-size solid $MarkdownInterpreter_h_border-color;
	}

	h1{
		font-size: $MarkdownInterpreter_h1_size;
	}

	h2{
		font-size: $MarkdownInterpreter_h2_size;
	}

	h3{
		font-size: $MarkdownInterpreter_h3_size;
	}

	h4{
		font-size: $MarkdownInterpreter_h4_size;
	}

	h5{
		font-size: $MarkdownInterpreter_h5_size;
	}

	h6{
		font-size: $MarkdownInterpreter_h6_size;
		color: $MarkdownInterpreter_h6_color;
	}
</style>

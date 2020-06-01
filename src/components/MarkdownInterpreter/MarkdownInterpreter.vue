<template>
	<div class="markdown-body">
		<markdown-element v-for="(element, index) in elements"
							:key="index"
							:element="element"
		/>
	</div>
</template>

<script>
	import axios from 'axios'
	import MarkdownParser from './MarkdownParser/MarkdownParser.js'
	import MarkdownElement from './MarkdownElement/MarkdownElement.vue';

	const parser = new MarkdownParser();

	export default {
		props: {
			src: {
				type: String,
				required: true
			}
		},
		data () {
			return {
				text: ""
			}
		},
		mounted() {
			axios({
				url: this.src,
				method: 'GET'
			}).then((response) => {
				this.text = response.data
			}).catch((error) => {
				console.log(error);
			});
		},
		watch: {
			src() {
				axios({
					url: this.src,
					method: 'GET'
				}).then((response) => {
					this.text = response.data
				}).catch((error) => {
					console.log(error);
				});
			}
		},
		computed: {
			elements: function() {
				return parser.parse(this.text);
			}
		},
		components: {
			'markdown-element': MarkdownElement
		}
	}
</script>

<style lang="scss" rel="stylesheet/scss">
	@import "@/scss/MarkdownInterpreter.scss";

	.markdown-body {
		color: $MarkdownInterpreter_color;

		font-family: $MarkdownInterpreter_font-family;
		font-size: $MarkdownInterpreter_font-size;
		font-weight: $MarkdownInterpreter_font-weight;

		line-height: $MarkdownInterpreter_line-height;
		vertical-align: center;
	}
</style>

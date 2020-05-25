<template>
	<div class="code-styler">
		<pre>
			<code-styler-line-number :amount="numberOfLines" :visible="lineNumbers" />
			<code-styler-code :src="src" :language="language" />
		</pre>
	</div>
</template>

<script>
	import CodeStylerLineNumber from "./CodeStylerLineNumber.vue"
	import CodeStylerCode from "./CodeStylerCode.vue"

	export default {
		props: {
			src: {
				type: String,
				required: true
			},
			language: {
				type: String,
				required: false,
				default: ""
			},
			lineNumbers: {
				type: Boolean,
				required: false,
				default: true
			}
		},
		computed: {
			numberOfLines: function() {
				return this.src.split("\n").length;
			}
		},
		components: {
			'code-styler-line-number': CodeStylerLineNumber,
			'code-styler-code': CodeStylerCode
		}
	}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
	@import "@/scss/CodeStyler.scss";

	pre{
		background: $CodeStyler_background;
		color: $CodeStyler_color;

		margin: 0 15px;
		margin-bottom: 16px;
		padding: 0.5em 1em;
		max-width: 100%;

		border: 1px solid $CodeStyler_border;
		border-left: 3px solid $CodeStyler_border-highlight;
		border-radius: 3px;
		box-sizing: border-box;

		line-height: $CodeStyler_line-height;
		display: block;
		counter-reset: line;

		//resize: vertical;
		overflow: auto;
		overflow-x: auto;

		display: flex;
		flex-direction: row;
	}
</style>

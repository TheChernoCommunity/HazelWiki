<template>
	<div class="container">
		<markdown-interpreter :src="src" />
	</div>
</template>

<script>
	import MarkdownInterpreter from '@/components/MarkdownInterpreter/MarkdownInterpreter.vue';

	export default {
		props: {
			src: {
				type: String,
				required: true
			}
		},
		components: {
			'markdown-interpreter': MarkdownInterpreter,
		}
	}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
	.container {
		padding-top: 5px;
	}
</style>

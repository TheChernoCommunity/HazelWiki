<template>
	<div class="container" v-bind:style="{ paddingLeft: paddingLeft+'px' }">
		<markdown-interpreter :src="src" />
	</div>
</template>

<script>
	import MarkdownInterpreter from '@/components/MarkdownInterpreter/MarkdownInterpreter.vue';
	import NavBar from  "@/scss/NavBar.scss";
	import Utils from '@/utils/Utils.js';

	export default {
		props: {
			src: {
				type: String,
				required: true
			}
		},
		data() {
			return {
				paddingLeft: 0,
			}
		},
		components: {
			'markdown-interpreter': MarkdownInterpreter,
		},
		created() {
			if(!Utils.isLayoutCompact()){
				this.paddingLeft = NavBar.width;
			}
		},
		mounted() {
			this.$nextTick(() => {
			window.addEventListener('resize', this.onResize);
			})
		},
		methods: {
			onResize(){
				if(!Utils.isLayoutCompact()){
					this.paddingLeft = NavBar.width;
				} else {
					this.paddingLeft = 0;
				}
			}
		},
		beforeDestroy() {
			window.removeEventListener('resize', this.onResize);
		}
	}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
	.container {
		padding-top: 32px;
	}
</style>

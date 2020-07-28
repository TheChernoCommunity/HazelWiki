<template>
	<div class="container" v-bind:style="{ paddingLeft: paddingLeft+'px' }">
		<markdown-interpreter :src="src" />
	</div>
</template>

<script>
	import MarkdownInterpreter from '@/components/MarkdownInterpreter/MarkdownInterpreter.vue';
	import NavBar from  "@/scss/NavBar.scss";
	import Global from  "@/scss/Global.scss";

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
			if(!this.isLayoutCompact()){
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
				if(!this.isLayoutCompact()){
					this.paddingLeft = NavBar.width;
				} else {
					this.paddingLeft = 0;
				}
			},
			isLayoutCompact(){
				if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
					return true
				}
				var r = window.innerWidth / window.innerHeight;
				if(r <= 1){
					return true
				}
				if( window.innerWidth <= Global.minScreenWidth){
					return true
				}
				return false;
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

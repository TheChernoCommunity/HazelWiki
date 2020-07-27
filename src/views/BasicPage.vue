<template>
	<div class="container" v-bind:style="{ paddingLeft: paddingLeft+'px' }">
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
		data() {
			return {
				paddingLeft: 0, 
			}
		},
		components: {
			'markdown-interpreter': MarkdownInterpreter,
		},

		created() {						
			if(!this.isMobile()){
				this.paddingLeft = 200;
			}
		},
		mounted() {			
			this.$nextTick(() => {
			window.addEventListener('resize', this.onResize);
			})
		},
		methods: {
			onResize(){
				if(!this.isMobile()){
					this.paddingLeft = 200;
				} else {
					this.paddingLeft = 0;
				}
			},
			isMobile() {
				if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
					console.log("Mobile")
					return true
				} else {
					console.log("PC")
					return false
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

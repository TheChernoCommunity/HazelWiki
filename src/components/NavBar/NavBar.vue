<template>
	<transition name = "navbar_fade">
		<div class="navbar" v-show="visible">		
			<navbar-section v-for="(section, index) in externalLinkArray" :key="index"
				:label="section.label"
				:icon="section.icon">
				<navbar-link v-for="(link, index) in section.links" :key="index"
					:label="link.label"
					:icon="link.icon"
					:to="link.to"
					:external="link.external"
					:hidden="link.hidden"
				/>
			</navbar-section>
		</div>
	</transition>
</template>

<script>
	import { EventBus } from '@/main.js'
	import NavBarSection from './NavBarSection.vue'
	import NavBarLink from './NavBarLink.vue'


	export default {
		props: {
			toc: {
				type: Array,
				required: true
			},
			
		},
		data() {
			return {
				visible: false,
			}
		},
		
		created() {	
			if(!this.isMobile()){
				this.visible = true;
			}
			EventBus.$on('navbar-toggleVisibile', () => {
				this.visible = !this.visible;
				if (this.visible) {
					EventBus.$emit('overlay-openVisibile');
				}
			});

			EventBus.$on('navbar-closeVisibile', () => {
				this.visible = false;
				EventBus.$emit('overlay-closeVisibile');
			});
		},

		mounted() {	
			this.$nextTick(() => {
			window.addEventListener('resize', this.onResize);
			})
		},
		methods: {
			onResize(){
				if(!this.isMobile()){
					this.visible = true;
				} else {
					this.visible = false;
					EventBus.$emit('overlay-closeVisibile');
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
		},

		computed: {
			externalLinkArray () {			
				let externalLinkArray = this.toc;
				for (let section of externalLinkArray) {
					if (section.links) {
						for (let link of section.links) {
							if (link.type == 'ignore') {
								let itStartWithASlash = /^\//;
								if (itStartWithASlash.test(link.to)) {
									// We assume if the to: attribute starts with / it is a component, and not external
									link['external'] = false;
								}
								link['external'] = true;
							} else {
								// It cannot be an external link if its type is not ignore (like 'markdown')
								link['external'] = false;
							}
						}
					}
				}
				return externalLinkArray;
			}
		},
		components: {
			'navbar-section': NavBarSection,
			'navbar-link': NavBarLink,
		}
	}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
	@import "@/scss/NavBar.scss";

	.navbar {
		position: fixed;
		top: 0px;
		left: 0px;
		width: $NavBar_width;
		height: 100%;
		background: $NavBar_background;
		border-right: 2px solid $NavBar_background;
		z-index: 10;
		opacity: 1;
	}

	.navbar_fade-enter-active,
	.navbar_fade-leave-active {
		transition: opacity .3s ease-in-out, transform 0.3s ease;
	}

	.navbar_fade-enter,
	.navbar_fade-leave-to {
		opacity: 0;
		left: -$NavBar_width;
	}
</style>

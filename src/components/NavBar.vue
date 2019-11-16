<template>
	<transition name = "navbar_fade">
		<div class="navbar" v-show="visible">
			<div class="navbar_section">
				Navigation bar
			</div>

			<div class="navbar_section">
				<div class="navbar_section_header">Testing</div>
				<router-link to="/" class="navbar_item">
					<span class="material-icons">home</span>Home
				</router-link>
				<router-link to="/About" class="navbar_item">
					<span class="material-icons">info</span>About
				</router-link>
			</div>
			
			<div class="navbar_section">
				<div class="navbar_section_header">More testing</div>
				<a href="#" class="navbar_item">
					<span class="material-icons">question_answer</span>Forum
				</a>
				<a href="#" class="navbar_item">
					<span class="material-icons">menu_book</span>API
				</a>
			</div>
		</div>
	</transition>
</template>

<script>
	import { EventBus } from '../main.js';

	export default {
		data() {
			return {
				visible: false
			}
		},
		created() {
			EventBus.$on('navbar-toggleVisibile', () => {
				this.visible = !this.visible;
			});
		}
	}
</script>

<style>
	.navbar {
		position: fixed;
		top: 0;
		left: 0px;
		width: 200px;
		height: 100%;
		background: #1b1c1d;
		border-right: 2px solid #1b1c1d;
	}

	.navbar_fade-enter-active,
	.navbar_fade-leave-active {
		transition: opacity .3s ease-in-out, transform 0.3s ease;
	}
	.navbar_fade-enter,
	.navbar_fade-leave-to {
		opacity: 0;
		left: -200px;
	}

	.navbar_section {
		align-items: center;
		border-bottom: 1px solid rgba(255, 255, 255, 0.08);
		background: inherit;
		color: #ffffff;
		padding: 12px;
		font-weight: bolder;
		font-size: 1em;
		text-decoration: none;
	}

	.navbar_section_header {
		align-items: inherit;
		background: inherit;
		color: inherit;
		padding-bottom: .5em;
		font-weight: inherit;
		font-size: inherit;
		text-decoration: inherit;
	}

	.navbar_item {
		display: flex;
		align-items: inherit;
		background: inherit;
		color: rgba(255, 255, 255, .5);
		font-weight: inherit;
		font-size: 0.85em;
		text-decoration: inherit;
	}

	.navbar_item .material-icons {
		margin-right: 12px;
	}

	.navbar_item:hover {
		color: #ffffff;
	}

	.navbar_item:active {
		background: rgba(255, 255, 255, 0.08);
	}
</style>
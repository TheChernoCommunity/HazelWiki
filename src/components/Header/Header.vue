<template>
	<div class="header">
		<span class="left">
			<HeaderButton eventName='navbar-toggleVisibile' icon='menu' label='' />
			<HeaderLabel icon='home' label='Pagetitle' />
		</span>
		<span class="right">
			<!-- https://buttons.github.io/ -->
			<a class="github-button"
				href="https://github.com/thecherno/Hazel"
				data-icon="octicon-star"
				data-show-count="true"
				aria-label="Star thecherno/Hazel on GitHub">
				Star
			</a>
		</span>
	</div>
</template>

<script>
	import HeaderLabel from "./HeaderLabel.vue";
	import HeaderButton from "./HeaderButton.vue";

	export default {
		components: {
			HeaderLabel,
			HeaderButton
		}
	}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
	@import "@/scss/Header.scss";

	.header {
		top: 0;
		left: 0;
		height: $Header_height;
		width: 100%;
		margin: 0;
		background: $Header_background;
		display: flex;
		justify-content:space-between;
	}

	.header .left {
		display: flex;
		float: left;
	}

	.header .right {
		height: 100%;
		display: flex;
		float: right;
		align-items: center;
		margin-right: 20px;
	}
</style>
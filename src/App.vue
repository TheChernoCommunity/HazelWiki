<template>
	<div>
		<NavBar :toc="navBarLayout" />
		<Overlay></Overlay>
		<Header />
		<router-view/>
	</div>
</template>

<script>
	import NavBar from './components/Navbar/Navbar';
	import Header from './components/Header/Header';

	import '../node_modules/materialize-css/dist/css/materialize.min.css';
	import '../node_modules/materialize-css/dist/js/materialize.min.js';
	import Overlay from "./components/Overlay/Overlay";

	const navBarLayout = require('../assets/NavBarLayout.json');

	export default {
		name: 'App',
		data() {
			return {
				navBarLayout: navBarLayout,
			}
		},
		components: {
			Overlay,
			Header,
			NavBar,
		}
	}
</script>

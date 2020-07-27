<template>
	<div>
		<navigation-bar :toc="HazelWikiLayout"/>
		<overlay />
		<top-header />
		<router-view/>
	</div>
</template>

<script>
	import NavBar from './components/NavBar/NavBar';
	import Header from './components/Header/Header';
	import Overlay from "./components/Overlay/Overlay";

	import '../node_modules/materialize-css/dist/css/materialize.css';
	import '../node_modules/materialize-css/dist/js/materialize.js';

	const HazelWikiLayout = require('@/assets/HazelWikiLayout.json');
	
	//const HazelWikiLayout = require('@/assets/pt_HazelWikiLayout.json');

	export default {
		name: 'App',
		data() {
			return {
				HazelWikiLayout: HazelWikiLayout,
			}
		},
		components: {
			'overlay': Overlay,
			'top-header': Header,
			'navigation-bar': NavBar,
		}
	}
</script>



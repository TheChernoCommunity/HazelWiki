<template>
  <div>
    <navigation-bar :toc="navBarLayout" />
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

  const navBarLayout = require('./assets/NavBarLayout.json');

  export default {
    name: 'App',
    data() {
      return {
        navBarLayout: navBarLayout,
      }
    },
    components: {
      'overlay': Overlay,
      'top-header': Header,
      'navigation-bar': NavBar,
    }
  }
</script>



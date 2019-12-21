import Vue from 'vue'
import Router from 'vue-router'

import BasicPage from './../views/BasicPage.vue'
import Testpage from './../views/Testpage.vue'
import PageNotFound from './../views/PageNotFound.vue'

const navBarLayout = require('@/assets/NavBarLayout.json');

Vue.use(Router)

function createRoutes() {
	function createRouteElement(routeData) {
		if (routeData.type == "markdown")
			return {
				path: routeData.to,
				component: BasicPage,
				props: {
					src: "./static/content/".concat(routeData.src)
				}
			};
		if (routeData.type == "ignore")
			return null // ignore this type, surpressing warning

		console.warn("unknown route type: ".concat(routeData.type));
		return null; // return empty if not specified or unknown
	}

	// Start with the default routes
	var routes = [
		{
			path: "*",
			component: PageNotFound
		},
		{
			path: '/testpage',
			component: Testpage
		},
	]

	// Add the markdown content files
	for(var sectionIndex=0; sectionIndex < navBarLayout.length; sectionIndex++)
	{
		var navSectionLayout = navBarLayout[sectionIndex].links;
		if(navSectionLayout)
			for(var linkIndex=0; linkIndex < navSectionLayout.length; linkIndex++)
			{
				var routeElement = createRouteElement(navSectionLayout[linkIndex]);
				if (routeElement)
					routes.push(routeElement)
			}
	}

	return routes;
}

export default new Router({
	mode: 'history',
	routes: createRoutes()
})

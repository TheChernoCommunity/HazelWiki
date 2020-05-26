import Vue from 'vue'
import Router from 'vue-router'

import BasicPage from './../views/BasicPage.vue'
import Testpage from './../views/TestPage.vue'
import PageNotFound from './../views/PageNotFound.vue'

const HazelWikiLayout = require('@/assets/HazelWikiLayout.json');

Vue.use(Router);

function createRoutes() {
	function createMarkdownFileIncludePath(markdownFileRelativePath) {
		let everythingUpToFirstWord = /^[^\w]*/;
		let previousDir = /\.{2}\//g;
		let currentDir = /\.{1}\//g;
		let cleanedRelativePath = markdownFileRelativePath
			.replace(everythingUpToFirstWord, '')
			.replace(previousDir, '')
			.replace(currentDir, '');
		console.log(".content/".concat(cleanedRelativePath));
		return "./content/".concat(cleanedRelativePath);
	}

	function createRouteElement(routeData) {
		if (routeData.type == "markdown") {
			return {
				path: routeData.to,
				component: BasicPage,
				props: {
					src: createMarkdownFileIncludePath(routeData.src)
				}
			};
		}
		else if (routeData.type == "ignore")
			return null; // ignore this type, suppressing warning

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
	];

	// Add the markdown content files
	for(var sectionIndex=0; sectionIndex < HazelWikiLayout.length; sectionIndex++)
	{
		var navSectionLayout = HazelWikiLayout[sectionIndex].links;
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
	base: process.env.NODE_ENV === 'production' ? '/HazelWiki/' : '/',
	routes: createRoutes()
})

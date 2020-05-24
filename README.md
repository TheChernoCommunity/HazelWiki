# HazelWiki

The HazelWiki is a collaborative prototype Wiki for [Hazel](https://github.com/TheCherno/Hazel). You can find the HazelWiki published at [TheChernoCommunity.github.io/HazelWiki/](https://thechernocommunity.github.io/HazelWiki/).

## Getting Started

The HazelWiki is written in Vue.Js, which you will have to install. The recommended installation method is using npm, which is delivered when installing Node.js.

### Installing Node.js and npm
Go to the site [https://nodejs.org/en/download/](https://nodejs.org/en/download/) and download the necessary binary files for your system and run the installation using the default settings. This will also install the npm package manager for you.

To make sure npm is installed correctly, you can open a command prompt and check for the version of it
``` bash
npm -v
```

### Installing Vue.Js
Now that you have installed npm, you can install vue using npm.
``` bash
# latest stable
npm install vue
```

### Running HazelWiki locally
Now that you have Vue installed, you need to run HazelWiki locally. First you install the dependencies for running this vue project locally.
``` bash
# install dependencies
npm install
```

Now you have different ways of compiling HazelWiki. In order to host it yourself, you run the developer build.
``` bash
# serve with hot reload at localhost:8080
npm run dev
```

After it starts up the local server, you can browse to [localhost:8080](localhost:8080) in order to see HazelWiki on your system. When making changes to the static content, a simple refresh will load up your new content.

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

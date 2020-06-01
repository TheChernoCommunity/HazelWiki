# Contributing Markdown To HazelWiki

Since the purpose of the Wiki is to create community based documentation and tutorials for the Hazel Game Engine, understanding the process for creating new documentation is important. To keep it easy to contribute, the Wiki is written in Markdown files.

First, identify if you need a new link in the navbar drawer, or if you just need to add to or update existing markdown.
If you do need a new link in the navbar drawer, then open the `/src/assets/HazelWikiLayout.json` file, and add a new link entry for your markdown file.

After you are satisfied you have a navbar link to your markdown document, you can either find the existing markdown file you editing, or create a new markdown fine in the `/public/content/` folder.

It is important to understand that we use a custom Markdown parser and interpreter internally. So some markdown syntax may not be available to you. Please consult the [testpage](https://thechernocommunity.github.io/HazelWiki/testpage) for our markdown syntax examples. If you feel you are missing an essential feature, feel free to make a feature request with an example.

Test you contribution locally as explained in the [readme](https://github.com/TheChernoCommunity/HazelWiki/blob/master/README.md) of this repository. Once you are satisfied, submit a PR using the guidelines for HazelWiki.


## Example

I will apply these steps as an example to show you how this document was added to the project. 

First, I decided that I would need a link in the navbar drawer, because I was not changing any existing markdown. During this evaluation, I decided the best category for was the "Wiki dev" section in the navbar drawer. Using this knowledge, I opened the `/src/assets/HazelWikiLayout.json` file. I identified the "Wiki dev" section of the navbar drawer by looking for a label of dev. Next, I added a json object value in the links section. 

```json
{ "to": "/ContributingMarkdown", "label": "Contributing markdown", "type": "markdown", "src": "ContributingMarkdown.md" },
```

This json describes a few things to the page. 
- The **to** key describes to HazelWiki that the route to access this document should be `https://thechernocommunity.github.io/HazelWiki<to>`, in this case this will be `https://thechernocommunity.github.io/HazelWiki/ContributingMarkdown`. This is dynamic, and can be set to anything unique, but must start with a `/`.
- The **label** key describes the label that should be used in the navbar drawer (please make this descriptive, and short).
- The **icon** key describes the icon that should be placed before the label in the navbar drawer. The icons are taken from the [Material](https://material.io/resources/icons) library. Since I didn't feel the need for an icon, I left this part out.
- The **type** key describes to HazelWiki that it is markdown, for us this will always be true and set to `"markdown"`.
- The **src** key describes the name of the markdown document. It already understands the path to the markdown document should be `/public/content/`.
- The **hidden** key describes if the page should be linked in the navigation section. You can set this to `true` or `false`. Ommiting this property will default to `false`, so it is not hidden.

Now that HazelWiki understands how to link to your document, we need to create it. This will be created in the path `/public/content/<src>`, where I fill in the src that I entered in the json file `/public/content/ContributingMarkdown.md` (please use Pascal Case naming).

Next write the document, then test it locally. When you are ready for us to review it, submit a PR to the `dev` branch. 

Thanks!

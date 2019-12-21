<template>
	<span>
		<!-- These commens around the tags must stay, oterwise all elements
		     must be placed on a single line, as these are messing with the
		     code tags in vue, resulting in leading and trailing spaces...
		     This way this code stays a bit readable
		--><markdown-header    v-if="element.token === '#'"     :element="element" /><!--
		--><markdown-paragraph v-if="element.token === 'p'"     :element="element" /><!--
		--><markdown-newline   v-if="element.token === '\n'"    :element="element" /><!--
		--><markdown-text      v-if="element.token === 'TXT'"   :element="element" /><!--
		--><markdown-bold      v-if="element.token === '**'"    :element="element" /><!--
		--><markdown-italic    v-if="element.token === '*'"     :element="element" /><!--
		--><markdown-code      v-if="element.token === '`'"     :element="element" /><!--
		--><markdown-codeblock v-if="element.token === '```'"   :element="element" /><!--
		--><markdown-link      v-if="element.token === '[]()'"  :element="element" /><!--
		--><markdown-image     v-if="element.token === '![]()'" :element="element" /><!--
		--><markdown-list      v-if="element.token === '-'"     :element="element" /><!--
		--><markdown-quote     v-if="element.token === '>'"     :element="element" />
	</span>
</template>

<script>
	import MarkdownElementHeader    from "./MarkdownElementHeader.vue";
	import MarkdownElementParagraph from "./MarkdownElementParagraph.vue";
	import MarkdownElementNewline   from "./MarkdownElementNewline.vue";
	import MarkdownElementText      from "./MarkdownElementText.vue";
	import MarkdownElementBold      from "./MarkdownElementBold.vue";
	import MarkdownElementItalic    from "./MarkdownElementItalic.vue";
	import MarkdownElementCode      from "./MarkdownElementCode.vue";
	import MarkdownElementCodeblock from "./MarkdownElementCodeblock.vue";
	import MarkdownElementLink      from "./MarkdownElementLink.vue";
	import MarkdownElementImage     from "./MarkdownElementImage.vue";
	import MarkdownElementList      from "./MarkdownElementList.vue";
	import MarkdownElementQuote     from "./MarkdownElementQuote.vue";

	export default {
		props: {
			element: {
				type: Object,
				required: true
			}
		},
		components: {
			'markdown-header'    : MarkdownElementHeader,
			'markdown-paragraph' : MarkdownElementParagraph,
			'markdown-newline'   : MarkdownElementNewline,
			'markdown-text'      : MarkdownElementText,
			'markdown-bold'      : MarkdownElementBold,
			'markdown-italic'    : MarkdownElementItalic,
			'markdown-code'      : MarkdownElementCode,
			'markdown-codeblock' : MarkdownElementCodeblock,
			'markdown-link'      : MarkdownElementLink,
			'markdown-image'     : MarkdownElementImage,
			'markdown-list'      : MarkdownElementList,
			'markdown-quote'     : MarkdownElementQuote,
		}
	}
</script>

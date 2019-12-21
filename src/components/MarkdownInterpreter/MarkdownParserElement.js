import MarkdownTokenScanner        from './MarkdownTokenScanner'        // Base scanner
import MarkdownTokenScannerNewline from './MarkdownTokenScannerNewline' // Newline scanner
import MarkdownTokenScannerCode    from './MarkdownTokenScannerCode'    // Code scanner
import MarkdownTokenScannerImage   from './MarkdownTokenScannerImage'   // Image scanner
import MarkdownTokenScannerLink    from './MarkdownTokenScannerLink'    // Link scanner
import MarkdownTokenScannerHeader  from './MarkdownTokenScannerHeader'  // Header scanner
import MarkdownTokenScannerList    from './MarkdownTokenScannerList'    // List scanner
import MarkdownTokenScannerQuote   from './MarkdownTokenScannerQuote'   // Quote scanner
import MarkdownTokenScannerBold    from './MarkdownTokenScannerBold'    // Bold scanner
import MarkdownTokenScannerItalic  from './MarkdownTokenScannerItalic'  // Italic scanner

export default class MarkdownParserElement
{
	constructor(token, content)
	{
		this.token = token;
		this.content = content
	}

	static createParagraphElement(contentElements)
	{
		if(contentElements instanceof Array)
			return new MarkdownParserElement('p', contentElements);
		return new MarkdownParserElement('p', [contentElements]);
	}

	static createTextElement(content)
	{
		return new MarkdownParserElement(MarkdownTokenScanner.getToken(), content);
	}

	static createBoldElement(boldContent)
	{
		return new MarkdownParserElement(MarkdownTokenScannerBold.getToken(), [boldContent]);
	}

	static createItalicElement(italicContent)
	{
		return new MarkdownParserElement(MarkdownTokenScannerItalic.getToken(), [italicContent]);
	}

	static createNewlineElement(amount)
	{
		return new MarkdownParserElement(MarkdownTokenScannerNewline.getToken(), [amount])
	}

	static createHeaderElement(level, contentElement)
	{
		return new MarkdownParserElement(MarkdownTokenScannerHeader.getToken(), [level].concat(contentElement));
	}

	static createImageElement(linkElement, captionElement)
	{
		return new MarkdownParserElement(MarkdownTokenScannerImage.getToken().join(''), [linkElement].concat(captionElement));
	}

	static createLinkElement(linkElement, captionElement)
	{
		return new MarkdownParserElement(MarkdownTokenScannerLink.getToken().join(''), [linkElement].concat(captionElement));
	}

	static createListElement(listElements)
	{
		return new MarkdownParserElement(MarkdownTokenScannerList.getToken(), listElements);
	}

	static createCodeElement(codeContent)
	{
		return new MarkdownParserElement(MarkdownTokenScannerCode.getToken(), [codeContent]);
	}

	static createCodeBlockElement(codeLanguage, codeContent)
	{
		return new MarkdownParserElement(MarkdownTokenScannerCode.getToken().repeat(3), [codeLanguage].concat(codeContent));
	}

	static createQuoteElement(contentElements)
	{
		if(contentElements instanceof Array)
			return new MarkdownParserElement(MarkdownTokenScannerQuote.getToken(), contentElements);
		return new MarkdownParserElement(MarkdownTokenScannerQuote.getToken(), [contentElements]);
	}

};

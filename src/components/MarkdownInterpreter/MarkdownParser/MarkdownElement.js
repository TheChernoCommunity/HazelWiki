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

export default class MarkdownElement
{
	constructor(token, content)
	{
		this.token = token;
		this.content = content
	}

	static createParagraphElement(contentElements)
	{
		if(contentElements instanceof Array)
			return new MarkdownElement('p', contentElements);
		return new MarkdownElement('p', [contentElements]);
	}

	static createTextElement(content)
	{
		return new MarkdownElement(MarkdownTokenScanner.getToken(), content);
	}

	static createBoldElement(boldContent)
	{
		return new MarkdownElement(MarkdownTokenScannerBold.getToken(), [boldContent]);
	}

	static createItalicElement(italicContent)
	{
		return new MarkdownElement(MarkdownTokenScannerItalic.getToken(), [italicContent]);
	}

	static createNewlineElement(amount)
	{
		return new MarkdownElement(MarkdownTokenScannerNewline.getToken(), [amount])
	}

	static createHeaderElement(level, contentElement)
	{
		return new MarkdownElement(MarkdownTokenScannerHeader.getToken(), [level].concat(contentElement));
	}

	static createImageElement(linkElement, captionElement)
	{
		return new MarkdownElement(MarkdownTokenScannerImage.getToken().join(''), [linkElement].concat(captionElement));
	}

	static createLinkElement(linkElement, captionElement)
	{
		return new MarkdownElement(MarkdownTokenScannerLink.getToken().join(''), [linkElement].concat(captionElement));
	}

	static createListElement(listElements)
	{
		return new MarkdownElement(MarkdownTokenScannerList.getToken(), listElements);
	}

	static createCodeElement(codeContent)
	{
		return new MarkdownElement(MarkdownTokenScannerCode.getToken(), [codeContent]);
	}

	static createCodeBlockElement(codeLanguage, codeContent)
	{
		return new MarkdownElement(MarkdownTokenScannerCode.getToken().repeat(3), [codeLanguage].concat(codeContent));
	}

	static createQuoteElement(contentElements)
	{
		if(contentElements instanceof Array)
			return new MarkdownElement(MarkdownTokenScannerQuote.getToken(), contentElements);
		return new MarkdownElement(MarkdownTokenScannerQuote.getToken(), [contentElements]);
	}

};

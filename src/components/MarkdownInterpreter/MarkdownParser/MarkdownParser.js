import MarkdownToken from './MarkdownToken'
import MarkdownLexer from './MarkdownLexer'

import MarkdownTokenScanner        from './MarkdownTokenScanner'        // Base scanner
import MarkdownTokenScannerCode    from './MarkdownTokenScannerCode'    // Code scanner
import MarkdownTokenScannerNewline from './MarkdownTokenScannerNewline' // Newline scanner
import MarkdownTokenScannerImage   from './MarkdownTokenScannerImage'   // Image scanner
import MarkdownTokenScannerLink    from './MarkdownTokenScannerLink'    // Link scanner
import MarkdownTokenScannerHeader  from './MarkdownTokenScannerHeader'  // Header scanner
import MarkdownTokenScannerList    from './MarkdownTokenScannerList'    // List scanner
import MarkdownTokenScannerQuote   from './MarkdownTokenScannerQuote'   // Quote scanner
import MarkdownTokenScannerBold    from './MarkdownTokenScannerBold'    // Bold scanner
import MarkdownTokenScannerItalic  from './MarkdownTokenScannerItalic'  // Italic scanner

import MarkdownElement from './MarkdownElement'

export default class MarkdownParser
{
	constructor()
	{
		// lexer is used to create tokens
		this.lexer = new MarkdownLexer();
		this.lexer.addScanner(new MarkdownTokenScannerCode());
		this.lexer.addScanner(new MarkdownTokenScannerNewline());
		this.lexer.addScanner(new MarkdownTokenScannerImage());
		this.lexer.addScanner(new MarkdownTokenScannerLink());
		this.lexer.addScanner(new MarkdownTokenScannerHeader());
		this.lexer.addScanner(new MarkdownTokenScannerList());
		this.lexer.addScanner(new MarkdownTokenScannerQuote());
		this.lexer.addScanner(new MarkdownTokenScannerBold());
		this.lexer.addScanner(new MarkdownTokenScannerItalic());

		// codeScanner is used to convert src to text only (used for code and code block)
		this.codeScanner = new MarkdownLexer();
		this.codeBlockScanner = new MarkdownLexer();
		this.codeBlockScanner.addScanner(new MarkdownTokenScannerNewline());

		this.src = '';
		this.tokenArray = [];
		this.elementArray = [];

		this.insideParagraph = false
		this.insideQuote = false
	}

	parse(src)
	{
		// Find tokens in the source
		this.setSrc(src);
		this.createTokens();
		this.cleanupTokens();

		// Create elements from tokens
		this.createElements();
		return this.getElements();
	}

	setSrc(src)
	{
		this.src = src;
	}

	createTokens()
	{
		this.tokenArray = this.lexer.tokenize(this.src);
	}

	cleanupTokens()
	{
		// Clean up tokens before creating elements
		this.untokenizeCodeTokens();
		this.removeTokens();
		this.mergeTokens();
	}

	untokenizeCodeTokens()
	{
		// Untokenzize code blocks
		var tokenIndex = 0;
		while(tokenIndex < this.tokenArray.length-1)
		{
			var token = this.tokenArray[tokenIndex++];
			if (token.token == MarkdownTokenScannerCode.getToken())
			{
				// Extract the start and end of the code part
				var startIndex = tokenIndex--;
				while(++tokenIndex < this.tokenArray.length-1 && (this.tokenArray[tokenIndex].token != token.token || this.tokenArray[tokenIndex].length < token.length));
				var endIndex = tokenIndex++;

				// Convert the inside of code to text tokens only
				var src = this.lexer.untokenize(this.tokenArray.slice(startIndex, endIndex))
				var tokenArray = []
				if (token.length == 1)
				{
					tokenArray = this.codeScanner.tokenize(src).slice(0, -1);

				}
				else if (token.length == 3)
				{
					tokenArray = this.codeBlockScanner.tokenize(src).slice(0, -1);
				}

				// replace the tokens with the newly created tokens
				this.tokenArray.splice(startIndex, endIndex-startIndex, ...tokenArray);
				tokenIndex = startIndex + tokenArray.length + 1;
			}
		}
	}

	removeTokens()
	{
		// Removes unneeded tokens
		var tokenIndex = 0;
		while(tokenIndex < this.tokenArray.length)
		{
			var token = this.tokenArray[tokenIndex++];

			// remove \r token
			if (token.token == MarkdownTokenScanner.getToken() && token.content === "\r")
			{
				this.tokenArray.splice(--tokenIndex, 1);
			}

			// remove EOF token
			else if (token.isEnd())
			{
				this.tokenArray.splice(--tokenIndex, 1);
			}

			// remove space after header token
			else if (token.token == MarkdownTokenScannerHeader.getToken())
			{
				var nextHeaderSpaceToken = this.tokenArray[tokenIndex];
				if (nextHeaderSpaceToken.token == MarkdownTokenScanner.getToken() && nextHeaderSpaceToken.content === " ")
					this.tokenArray.splice(tokenIndex--, 1);
			}

			// remove invalid list tokens + remove spaces before/after valid list tokens
			else if (token.token == MarkdownTokenScannerList.getToken())
			{
				// Check if this token is a valid token
				var offset = 1;
				while(++offset <= tokenIndex && this.tokenArray[tokenIndex-offset].token == MarkdownTokenScanner.getToken() && this.tokenArray[tokenIndex-offset].content === " ");

				if(this.tokenArray[tokenIndex-offset].token === MarkdownTokenScannerNewline.getToken())
				{
					// Valid list, remove spaces before/after it
					var prevListSpaceToken = this.tokenArray[tokenIndex-2];
					var nextListSpaceToken = this.tokenArray[tokenIndex];
					if(prevListSpaceToken.token == MarkdownTokenScanner.getToken() && prevListSpaceToken.content === " ")
					{
						token.content++;
						tokenIndex--;
						this.tokenArray.splice(--tokenIndex, 1); // remove space token before this list token
					}
					else if(nextListSpaceToken.token == MarkdownTokenScanner.getToken() && nextListSpaceToken.content === " ")
					{
						this.tokenArray.splice(tokenIndex--, 1); // remove space after this list token
					}
				}
				else
				{
					// Invalid list token, unscan it
					this.tokenArray[--tokenIndex] = new MarkdownToken(MarkdownTokenScanner.getToken(), token.token, token.token.length);
				}
			}

			// remove invalid quote tokens + remove spaces after tokens
			else if (token.token == MarkdownTokenScannerQuote.getToken())
			{
				// Check if this token is valid, if it has a valid previous token
				var prevQuoteSpaceToken = this.tokenArray[tokenIndex-2];
				var nextQuoteSpaceToken = this.tokenArray[tokenIndex];
				if(prevQuoteSpaceToken.token === token.token || prevQuoteSpaceToken.token === MarkdownTokenScannerNewline.getToken())
				{
					// Valid token, remove spaces after it
					if(nextQuoteSpaceToken.token == MarkdownTokenScanner.getToken() && nextQuoteSpaceToken.content === " ")
					{
						this.tokenArray.splice(tokenIndex--, 1); // remove space after this quote token
					}
				}
				else
				{
					// Invalid quote token, unscan it
					this.tokenArray[--tokenIndex] = new MarkdownToken(MarkdownTokenScanner.getToken(), token.token, token.token.length);
				}
			}
		}
	}

	mergeTokens()
	{
		// Merges similar tokens next to each other together
		var tokenIndex = 0;
		while(tokenIndex < this.tokenArray.length-1)
		{
			var token = this.tokenArray[tokenIndex++];
			var nextToken = this.tokenArray[tokenIndex];

			// merges text together
			if (token.token === MarkdownTokenScanner.getToken() && nextToken.token === token.token)
			{
				nextToken.content = token.content.concat(nextToken.content);
				nextToken.length += token.length;
				this.tokenArray.splice(--tokenIndex, 1);
			}

			// merges newlines together
			else if (token.token === MarkdownTokenScannerNewline.getToken() && nextToken.token === token.token)
			{
				nextToken.length += token.length;
				this.tokenArray.splice(--tokenIndex, 1);
			}

			// merges headers together
			else if (token.token === MarkdownTokenScannerHeader.getToken() && nextToken.token === token.token)
			{
				nextToken.length += token.length;
				this.tokenArray.splice(--tokenIndex, 1);
			}

			// merges quotes together
			else if (token.token == MarkdownTokenScannerQuote.getToken() && nextToken.token === token.token)
			{
				nextToken.length += token.length;
				this.tokenArray.splice(--tokenIndex, 1);
			}
		}
	}

	isPagragraphToken(token)
	{
		return (this.insideQuote || (!this.insideParagraph) && (
			token.token == MarkdownTokenScanner.getToken() ||                         // Regular text
			token.token == MarkdownTokenScannerNewline.getToken() ||                  // Newline
			token.token == MarkdownTokenScannerItalic.getToken() ||                   // Italic text
			token.token == MarkdownTokenScannerBold.getToken() ||                     // Bold text
			token.token == MarkdownTokenScannerList.getToken() ||                     // List
			token.token == MarkdownTokenScannerImage.getToken().join('') ||           // Image
			token.token == MarkdownTokenScannerLink.getToken().join('') ||            // Link
			(token.token == MarkdownTokenScannerCode.getToken() && token.length < 3)) // Inline code
		);
	}

	isParagraphEnd(token)
	{
		if(token.token == MarkdownTokenScannerNewline.getToken() && token.length >= 2) return true;
		if(token.token == MarkdownTokenScannerHeader.getToken()) return true;
		return false;
	}

	createRecursiveListItems(list)
	{
		var recursiveListLevel = list[0][0].content;
		var recursiveList = [];

		// create a list of all elements on this list level
		var listIndex = -1
		while(++listIndex < list.length && list[listIndex][0].content <= recursiveListLevel)
		{
			var thisListElement = list[listIndex].slice(1);

			// if there is a sub list level, create a list of those recursively
			var subListIndex = listIndex;
			while(++subListIndex < list.length && list[subListIndex][0].content > recursiveListLevel);
			var subListElements = []
			if(subListIndex-listIndex>1)
			{
				subListElements = this.createRecursiveListItems(list.slice(listIndex+1, subListIndex))
				//console.log(subListElements)
			}

			// add this element to the list
			recursiveList.push([thisListElement, subListElements])
			listIndex = subListIndex-1;
		}

		// return the list
		return recursiveList;
	}

	createRecursiveListElements(list)
	{
		var listIndex = -1;
		while(++listIndex < list.length)
		{
			var listElement = this.createElementsRecursive(list[listIndex][0]);
			if(listElement.length === undefined) listElement = [listElement];

			var subListElement = null;
			if(list[listIndex][1].length > 0)
			{
				//console.log(list[listIndex][1])
				subListElement = this.createRecursiveListElements(list[listIndex][1]);
			}
			list[listIndex] = [listElement, subListElement];
		}
		return MarkdownElement.createListElement(list);
	}

	createElements()
	{
		if(this.tokenArray && this.tokenArray.length > 0)
			this.elementArray = this.createElementsRecursive(this.tokenArray);
		else
			this.elementArray = [];
	}

	createElementsRecursive(tokenArray)
	{
		if(tokenArray.length == 0)
		{
			console.warn("Parser received an empty array!");
			console.trace();
			return [];
		}
		var token = tokenArray[0];

		// Header
		if(token.token == MarkdownTokenScannerHeader.getToken())
		{
			// Find the end of the header
			var newlineHeaderTokenIndex = 0;
			while(++newlineHeaderTokenIndex < tokenArray.length-1 && tokenArray[newlineHeaderTokenIndex].token != MarkdownTokenScannerNewline.getToken());

			// Create the header element
			this.insideParagraph = true; // a header content can't be a paragraph
			var headerElement = MarkdownElement.createHeaderElement(token.length, this.createElementsRecursive(tokenArray.slice(1, newlineHeaderTokenIndex)));
			this.insideParagraph = false;

			// Return the header
			if (newlineHeaderTokenIndex == tokenArray.length-1) { return headerElement; }
			return [headerElement].concat(this.createElementsRecursive(tokenArray.slice(newlineHeaderTokenIndex+1)));
		}

		// Code block
		if(token.token == MarkdownTokenScannerCode.getToken() && token.length >= 3)
		{
			// Find the end of the code block
			var codeBlockEnd = 0;
			while(++codeBlockEnd < tokenArray.length-1 && tokenArray[codeBlockEnd].token !== token.token);
			var codeBlockContent = tokenArray.slice(1, codeBlockEnd)

			// Extract the code language
			var codeLanguage = null;
			if(codeBlockContent[0].token == MarkdownTokenScanner.getToken()) { codeLanguage = codeBlockContent.splice(0, 1)[0].content; }
			while(codeBlockContent[0].token == MarkdownTokenScannerNewline.getToken()) { codeBlockContent.splice(0, 1); }
			while(codeBlockContent[codeBlockContent.length-1].token == MarkdownTokenScannerNewline.getToken()) codeBlockContent.splice(-1);

			// Create the code block element
			this.insideParagraph = true; // a code block can't be a paragraph
			var codeBlockElement = MarkdownElement.createCodeBlockElement(codeLanguage, this.createElementsRecursive(codeBlockContent));
			this.insideParagraph = false;

			// Return the code block element
			if (codeBlockEnd == tokenArray.length-1) { return codeBlockElement; }
			return [codeBlockElement].concat(this.createElementsRecursive(tokenArray.slice(codeBlockEnd+1)));
		}

		// Quote
		if(token.token == MarkdownTokenScannerQuote.getToken())
		{
			// Find the end of the quote
			var quoteBlockEnd = -1;
			while(++quoteBlockEnd < tokenArray.length && tokenArray[quoteBlockEnd].token === token.token) // begin of quote line
			{
				while(++quoteBlockEnd < tokenArray.length && tokenArray[quoteBlockEnd].token !== MarkdownTokenScannerNewline.getToken()); // end of quote line
				if(quoteBlockEnd < tokenArray.length && tokenArray[quoteBlockEnd].length > 1)
				{
					++quoteBlockEnd;
					break;
				}
			}
			var quoteBlockTokens = tokenArray.slice(0,quoteBlockEnd);

			// Remove one level of quote
			var quoteBlockTokenIndex = -1;
			while(++quoteBlockTokenIndex < quoteBlockTokens.length)
			{
				if(quoteBlockTokens[quoteBlockTokenIndex].token === token.token)
				{
					if(quoteBlockTokens[quoteBlockTokenIndex].length > 1)
						quoteBlockTokens[quoteBlockTokenIndex].length--; // Decreasing level by 1
					else
					{
						quoteBlockTokens.splice(quoteBlockTokenIndex--, 1) // Removing lowest levels
						if(quoteBlockTokenIndex >= 0 && quoteBlockTokenIndex < quoteBlockTokens.length - 1)
						{
							// Merge new line tokens
							if(quoteBlockTokens[quoteBlockTokenIndex  ].token === MarkdownTokenScannerNewline.getToken() &&
								quoteBlockTokens[quoteBlockTokenIndex+1].token === MarkdownTokenScannerNewline.getToken() )
							{
								quoteBlockTokens[quoteBlockTokenIndex].length += quoteBlockTokens[quoteBlockTokenIndex+1].length;
								quoteBlockTokens.splice(quoteBlockTokenIndex+1, 1);
							}
						}
					}
				}
			}

			// Create the quote element
			this.insideQuote = true;
			var quoteElement = MarkdownElement.createQuoteElement(this.createElementsRecursive(quoteBlockTokens))
			this.insideQuote = false;

			// Return the paragraph element
			if (quoteBlockEnd >= tokenArray.length-1) { return quoteElement; }
			return [quoteElement].concat(this.createElementsRecursive(tokenArray.slice(quoteBlockEnd)));
		}

		// Paragraph
		if(this.isPagragraphToken(token))
		{
			// Remove leading newline tokens first
			var paragraphBeginIndex = -1
			while(++paragraphBeginIndex < tokenArray.length-1 && tokenArray[paragraphBeginIndex].token == MarkdownTokenScannerNewline.getToken());

			// Find the end of the current paragraph
			var newlineParagraphTokenIndex = paragraphBeginIndex;
			while(++newlineParagraphTokenIndex < tokenArray.length-1 && !this.isParagraphEnd(tokenArray[newlineParagraphTokenIndex]));

			// Create the paragraph element
			var insideQuote = this.insideQuote; this.insideQuote = false;
			this.insideParagraph = true;
			var paragraphElement = MarkdownElement.createParagraphElement(this.createElementsRecursive(tokenArray.slice(paragraphBeginIndex, newlineParagraphTokenIndex)));
			this.insideParagraph = false;
			this.insideQuote = insideQuote;

			// Return the paragraph element
			if (newlineParagraphTokenIndex >= tokenArray.length - 1) { return paragraphElement; }
			return [paragraphElement].concat(this.createElementsRecursive(tokenArray.slice(newlineParagraphTokenIndex+1)));
		}

		// Newline
		if(token.token == MarkdownTokenScannerNewline.getToken())
		{
			// Create the newline element
			var newNewlineElement = MarkdownElement.createNewlineElement(token.length)

			// Return the newline element
			if (tokenArray.length == 1) { return newNewlineElement; }
			return [newNewlineElement].concat(this.createElementsRecursive(tokenArray.slice(1)));
		}

		// Regular text
		if(token.token == MarkdownTokenScanner.getToken())
		{
			// Create the text element
			var newTextElement = MarkdownElement.createTextElement(token.content);

			// Return the text element
			if (tokenArray.length == 1) { return newTextElement; }
			return [newTextElement].concat(this.createElementsRecursive(tokenArray.slice(1)));
		}

		// Bold text
		if(token.token == MarkdownTokenScannerBold.getToken())
		{
			// Find the end of the bold element
			var boldEndTokenIndex = 0;
			while(++boldEndTokenIndex < tokenArray.length && tokenArray[boldEndTokenIndex].token != token.token);

			// Create the bold element
			var boldElement = MarkdownElement.createBoldElement(this.createElementsRecursive(tokenArray.slice(1, boldEndTokenIndex)))

			// Return the bold element
			if (boldEndTokenIndex == tokenArray.length-1) { return boldElement; }
			return [boldElement].concat(this.createElementsRecursive(tokenArray.slice(boldEndTokenIndex+1)));
		}

		// Italic text
		if(token.token == MarkdownTokenScannerItalic.getToken())
		{
			// Find the end of the italic element
			var itelicEndTokenIndex = 0;
			while(++itelicEndTokenIndex < tokenArray.length && tokenArray[itelicEndTokenIndex].token != token.token);

			// Create the italic element
			var italicElement = MarkdownElement.createItalicElement(this.createElementsRecursive(tokenArray.slice(1, itelicEndTokenIndex)))

			// Return the italic element
			if (itelicEndTokenIndex == tokenArray.length-1) { return italicElement; }
			return [italicElement].concat(this.createElementsRecursive(tokenArray.slice(itelicEndTokenIndex+1)));
		}

		// Image
		if(token.token == MarkdownTokenScannerImage.getToken().join(''))
		{
			// Find the end of the caption element, the part between the '[]'
			var imageCaptionTokenIndex = 0;
			while(++imageCaptionTokenIndex < tokenArray.length && tokenArray[imageCaptionTokenIndex].token != token.token);

			// Create the caption element
			var imageCaptionElement;
			if(imageCaptionTokenIndex > 1)
				imageCaptionElement = this.createElementsRecursive(tokenArray.slice(1, imageCaptionTokenIndex));
			else
				imageCaptionElement = this.createElementsRecursive([new MarkdownToken(MarkdownTokenScanner.getToken(), "")]);

			// Find the end of the source link element, the part between the '()'
			var imageLinkTokenIndex = imageCaptionTokenIndex;
			while(++imageLinkTokenIndex < tokenArray.length && tokenArray[imageLinkTokenIndex].token != token.token);

			// Create the source link element
			var imageLinkElement;
			if(imageLinkTokenIndex-imageCaptionTokenIndex > 1)
				imageLinkElement = this.createElementsRecursive(tokenArray.slice(imageCaptionTokenIndex+1, imageLinkTokenIndex));
			else
				imageLinkElement = this.createElementsRecursive([new MarkdownToken(MarkdownTokenScanner.getToken(), "")]);

			// Create the image element
			var imageElement = MarkdownElement.createImageElement(imageLinkElement, imageCaptionElement);

			// Return the image element
			if (imageLinkTokenIndex == tokenArray.length-1) { return imageElement; }
			return [imageElement].concat(this.createElementsRecursive(tokenArray.slice(imageLinkTokenIndex+1)));
		}

		// Link
		if(token.token == MarkdownTokenScannerLink.getToken().join(''))
		{
			// Find the end of the caption element, the part between the '[]'
			var linkingCaptionTokenIndex = 0;
			while(++linkingCaptionTokenIndex < tokenArray.length && tokenArray[linkingCaptionTokenIndex].token != token.token);

			// Create the caption element
			var linkingCaptionElement;
			if(linkingCaptionTokenIndex > 1)
				linkingCaptionElement = this.createElementsRecursive(tokenArray.slice(1, linkingCaptionTokenIndex));
			else
				linkingCaptionElement = this.createElementsRecursive([new MarkdownToken(MarkdownTokenScanner.getToken(), "")]);

			// Find the end of the source link element, the part between the '()'
			var linkingLinkTokenIndex = linkingCaptionTokenIndex;
			while(++linkingLinkTokenIndex < tokenArray.length && tokenArray[linkingLinkTokenIndex].token != token.token);

			// Create the source link element
			var linkingLinkElement;
			if(linkingLinkTokenIndex-linkingCaptionTokenIndex>1)
				linkingLinkElement = this.createElementsRecursive(tokenArray.slice(linkingCaptionTokenIndex+1, linkingLinkTokenIndex));
			else
				linkingLinkElement = this.createElementsRecursive([new MarkdownToken(MarkdownTokenScanner.getToken(), "")]);

			// Create the link element
			var linkingElement = MarkdownElement.createLinkElement(linkingLinkElement, linkingCaptionElement);

			// Return the link element
			if (linkingLinkTokenIndex == tokenArray.length-1) { return linkingElement; }
			return [linkingElement].concat(this.createElementsRecursive(tokenArray.slice(linkingLinkTokenIndex+1)));
		}

		// List
		if(token.token == MarkdownTokenScannerList.getToken())
		{
			// Get all list items in this list
			var listItems = []
			var listItemBeginIndex = 0;
			while(listItemBeginIndex < tokenArray.length && tokenArray[listItemBeginIndex].token == MarkdownTokenScannerList.getToken())
			{
				// Search for the end of this list item
				var listItemEndIndex = listItemBeginIndex;
				while(++listItemEndIndex < tokenArray.length && tokenArray[listItemEndIndex].token !== MarkdownTokenScannerNewline.getToken());

				// Add this list item to the list
				listItems.push(tokenArray.slice(listItemBeginIndex, listItemEndIndex))

				// Get the start of the next list item (account for any amount of newlines)
				listItemBeginIndex = listItemEndIndex + 1;
			}

			// Create a recursive list with sublists
			listItems = this.createRecursiveListItems(listItems);

			// Convert this list to elements
			var listElement = this.createRecursiveListElements(listItems);

			// Return the list element
			if (listItemEndIndex == tokenArray.length) { return listElement; }
			return [listElement].concat(this.createElementsRecursive(tokenArray.slice(listItemEndIndex+1)));
		}

		// Code
		if(token.token == MarkdownTokenScannerCode.getToken())
		{
			// Find the end of the code
			var codeEndTokenIndex = 0;
			while(++codeEndTokenIndex < tokenArray.length && tokenArray[codeEndTokenIndex].token != token.token);

			// Create the code element
			var codeElement = MarkdownElement.createCodeElement(this.createElementsRecursive(tokenArray.slice(1, codeEndTokenIndex)));

			// Return the code element
			if (codeEndTokenIndex == tokenArray.length-1) { return codeElement; }
			return [codeElement].concat(this.createElementsRecursive(tokenArray.slice(codeEndTokenIndex+1)));
		}

		console.warn("unknown token: ".concat(token.token))
		if(tokenArray.length > 1)
			return this.createElementsRecursive(tokenArray.slice(1));
		return [];
	}

	getElements() { return this.elementArray; }

	logTokens()   { console.log(this.tokenArray  ); }
	logElements() { console.log(this.elementArray); }
}

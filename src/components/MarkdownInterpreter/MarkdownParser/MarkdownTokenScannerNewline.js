import MarkdownToken from './MarkdownToken'

import MarkdownTokenScanner from './MarkdownTokenScanner'

export default class MarkdownTokenScannerNewline extends MarkdownTokenScanner
{
	/* Abstract base class, this class cannot scan for specific tokens,
	 * Instead, it will detect everything that specific scanners cannot
	 * detect themselves.
	 */
	constructor()
	{
		super();
		this.token = MarkdownTokenScannerNewline.getToken();
	}

	static getToken() { return '\n'; }

	scan(source)
	{
		if (source.charAt(0) == this.token) {
			var charIndex = 0
			while(source.charAt(++charIndex) == this.token); // group all the newlines together
			return new MarkdownToken(this.token, null, charIndex);
		} else {
			return MarkdownToken.nullToken();
		}
	}

	unscan(token)
	{
		if (token.token == this.token)
			return this.token.concat(this.token.repeat(token.length-1));
		return '';
	}
};

import MarkdownToken from './MarkdownToken'

import MarkdownTokenScanner from './MarkdownTokenScanner'

export default class MarkdownTokenScannerHeader extends MarkdownTokenScanner
{
	/* Abstract base class, this class cannot scan for specific tokens,
	 * Instead, it will detect everything that specific scanners cannot
	 * detect themselves.
	 */
	constructor()
	{
		super();
		this.token = MarkdownTokenScannerHeader.getToken();
	}

	static getToken() { return '#'; }

	scan(source)
	{
		if (source.charAt(0) == this.token) {
			var charIndex = 0
			while(source.charAt(++charIndex) == this.token); // group all the headers together
			return new MarkdownToken(this.token, null, charIndex);
		} else {
			return MarkdownToken.nullToken();
		}
	}

	unscan(token)
	{
		if (token.token == this.token)
		{
			var src = '';
			for (var i = token.length; i > 0; i--)
				src = src.concat(this.token);
			return src;
		}
		return '';
	}
}

import MarkdownToken from './MarkdownToken'

import MarkdownTokenScanner from './MarkdownTokenScanner'

export default class MarkdownTokenScannerItalic extends MarkdownTokenScanner
{
	/* Abstract base class, this class cannot scan for specific tokens,
	 * Instead, it will detect everything that specific scanners cannot
	 * detect themselves.
	 */
	constructor()
	{
		super();
		this.token = MarkdownTokenScannerItalic.getToken();
	}

	static getToken() { return '*'; }

	scan(source)
	{
		if (source.charAt(0) == this.token) {
			return new MarkdownToken(this.token, null, this.token.length);
		} else {
			return MarkdownToken.nullToken();
		}
	}

	unscan(token)
	{
		if (token.token == this.token)
			return this.token.concat(this.token);
		return '';
	}
}

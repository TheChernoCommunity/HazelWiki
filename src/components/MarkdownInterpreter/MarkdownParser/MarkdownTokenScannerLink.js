import MarkdownToken from './MarkdownToken'

import MarkdownTokenScanner from './MarkdownTokenScanner'

export default class MarkdownTokenScannerLink extends MarkdownTokenScanner
{
	/* Abstract base class, this class cannot scan for specific tokens,
	 * Instead, it will detect everything that specific scanners cannot
	 * detect themselves.
	 */
	constructor()
	{
		super();
		this.token = MarkdownTokenScannerLink.getToken();
		this.tokenStage = 0;
		this.srcStage = 0;
	}

	static getToken() { return ['[', '](', ')']; }

	scan(source)
	{
		if (source.substr(0, this.token[this.tokenStage].length) == this.token[this.tokenStage]) {
			var token = new MarkdownToken(this.token.join(''), null, this.token[this.tokenStage].length);
			if (++this.tokenStage == this.token.length) { this.tokenStage = 0; } // move to the next stage
			return token;
		} else {
			return MarkdownToken.nullToken();
		}
	}

	unscan(token)
	{
		if (token.token == this.token.join(''))
		{
			var src = this.token[this.tokenStage];
			if (++this.tokenStage == this.token.length) { this.tokenStage = 0; } // move to the next stage
			return src;
		}
		return '';
	}
}

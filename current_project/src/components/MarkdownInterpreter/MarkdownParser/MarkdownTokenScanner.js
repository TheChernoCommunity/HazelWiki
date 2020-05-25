import MarkdownToken from './MarkdownToken'

export default class MarkdownTokenScanner
{
	/* Abstract base class, this class cannot scan for specific tokens,
	 * Instead, it will detect everything that specific scanners cannot
	 * detect themselves.
	 */
	constructor()
	{
		this.scanners = []; // registered scanners
		this.scannersAmount = 0;
	}

	static getToken() { return 'TXT'; }

	addScanner(scanner)
	{
		// The first scanner added will have the highers priority
		this.scanners[this.scannersAmount++] = scanner;
	}

	scan(src)
	{
		// Check if the source is empty
		if (src.length == 0) { return MarkdownToken.endOfFileToken(); }

		// Check if any registered scanners recognize this as a token
		for(var scannerIndex = 0; scannerIndex < this.scannersAmount; scannerIndex++)
		{
			var scanToken = this.scanners[scannerIndex].scan(src);
			if (scanToken.isValid()) { return scanToken; }
		}
		
		// It is not registered, so this scanner recognizes it as plain text
		return new MarkdownToken(MarkdownTokenScanner.getToken(), src.charAt(0), 1);
	}

	unscan(token)
	{
		// Check if the token is invalid
		if (!token || !token.isValid()) { return ''; }

		// Check if this is from this generic scanner
		if (token.token == MarkdownTokenScanner.getToken())
			return token.content;

		// Check for any other scanners
		for(var scannerIndex = 0; scannerIndex < this.scannersAmount; scannerIndex++)
		{
			var unscanSrc = this.scanners[scannerIndex].unscan(token);
			if (unscanSrc !== '') { return unscanSrc; }
		}
		
		// Still not recognized, we just return nothing...
		return ''
	}
};
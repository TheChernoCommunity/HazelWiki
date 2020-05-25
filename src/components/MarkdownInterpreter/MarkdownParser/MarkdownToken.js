export default class MarkdownToken
{
	constructor(token, content, length)
	{
		this.token   = token;
		this.content = content;
		this.length  = length;
	}

	isNull() { return this.token == MarkdownToken.nullToken().token }
	isError() { return this.token == MarkdownToken.errorToken().token }
	isValid() { return !(this.isNull() || this.isError()); }
	isEnd() { return this.token == MarkdownToken.endOfFileToken().token }

	static endOfFileToken() { return new MarkdownToken('EOF', null, 0); }
	static nullToken() { return new MarkdownToken('NULL', null, 0); }
	static errorToken() { return new MarkdownToken('ERROR', null, 0); }
}

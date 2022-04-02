export class UnreachableException extends Error {
	constructor(message?: string) {
		super(`UnreachableException${message ? `: ${message}` : ''}`);
	}
}

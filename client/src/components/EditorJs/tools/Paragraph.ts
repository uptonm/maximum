// @ts-ignore
import EditorJsParagraph from '@editorjs/paragraph';

interface ParagraphData {
	// placeholder for the empty paragraph
	placeholder: string;
	// Whether or not to keep blank paragraphs when saving editor data
	preserveBlank: boolean;
}

interface ParagraphConfig {
	// Paragraph's content. Can include HTML tags: <a><b><i>
	text: string;
}

export class Paragraph extends EditorJsParagraph {
	private readonly readOnly: boolean;

	constructor(private config?: { data: ParagraphData, config: ParagraphConfig, api: object, readOnly: boolean }) {
		super(config);
		this.readOnly = config?.readOnly ?? false;
	}

	/**
	 * Create Tool's view
	 * @return {HTMLElement}
	 * @private
	 */
	drawView() {
		const div = document.createElement('DIV');

		div.classList.add('mt-6', 'prose', 'prose-indigo', 'prose-lg', 'text-gray-500');
		div.contentEditable = 'false';
		// div.dataset.placeholder = this.api.i18n.t(this._placeholder);

		if (!this.readOnly) {
			div.contentEditable = 'true';
			// @ts-ignore
			div.addEventListener('keyup', this.onKeyUp);
		}

		return div;
	}
}

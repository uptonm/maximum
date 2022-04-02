/* eslint-disable no-underscore-dangle */
import { API, PasteEvent } from '@editorjs/editorjs';

type ParagraphData = {
	/**
	 * Paragraph's content. Can include HTML tags: <a><b><i>
	 */
	text: string;
};

interface ParagraphConfig {
	/**
	 * placeholder for the empty paragraph
	 */
	placeholder: string;
	/**
	 * Whether to keep blank paragraphs when saving editor data
	 */
	preserveBlank: boolean;
}

type ParagraphGeneratorArgs = {
	/**
	 * previously saved data
	 */
	data: ParagraphData,
	/**
	 * user config for Tool
	 */
	config: ParagraphConfig,
	/**
	 * editor.js api
	 */
	api: API,
	/**
	 * read only mode flag
	 */
	readOnly: boolean,
};

export class Paragraph {
	private readonly _CSS: object;

	private readonly _placeholder: string;

	private readonly _element: HTMLElement;

	private readonly _preserveBlank: boolean;

	private readonly api: API;

	private readonly readOnly: boolean;

	private _data: ParagraphData;

	/**
	 * Default placeholder for Paragraph Tool
	 *
	 * @return {string}
	 * @constructor
	 */
	static get DEFAULT_PLACEHOLDER() {
		return '';
	}

	/**
	 * Render plugin`s main Element and fill it with saved data
	 *
	 * @param {ParagraphGeneratorArgs} args - args uses to create Paragraph tool
	 */
	constructor(args: ParagraphGeneratorArgs) {
		this.api = args.api;
		this.readOnly = args.readOnly;

		this._CSS = {
			block: this.api.styles.block,
			wrapper: 'ce-paragraph',
		};

		if (!this.readOnly) {
			this.onKeyUp = this.onKeyUp.bind(this);
		}

		/**
		 * Placeholder for paragraph if it is first Block
		 * @type {string}
		 */
		this._placeholder = args.config.placeholder
			? args.config.placeholder
			: Paragraph.DEFAULT_PLACEHOLDER;
		this._data = {
			text: '',
		};
		this._element = this.drawView();
		this._preserveBlank = args.config.preserveBlank !== undefined
			? args.config.preserveBlank
			: false;

		this.data = args.data;
	}

	/**
	 * Check if text content is empty and set empty string to inner html.
	 * We need this because some browsers (e.g. Safari) insert <br> into empty content-editable elements
	 *
	 * @param {KeyboardEvent} e - key up event
	 */
	onKeyUp(e: KeyboardEvent) {
		if (e.code !== 'Backspace' && e.code !== 'Delete') {
			return;
		}

		const { textContent } = this._element;

		if (textContent === '') {
			this._element.innerHTML = '';
		}
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
			if (this.api.blocks.getCurrentBlockIndex() <= 0) {
				div.setAttribute('placeholder', this._placeholder);
			}
		}

		return div;
	}

	/**
	 * Return Tool's view
	 *
	 * @returns {HTMLDivElement}
	 */
	render() {
		return this._element;
	}

	/**
	 * Method that specified how to merge two Text blocks.
	 * Called by Editor.js by backspace at the beginning of the Block
	 * @param {ParagraphData} data
	 * @public
	 */
	merge(data: ParagraphData) {
		this.data = {
			text: this.data.text + data.text,
		};
	}

	/**
	 * Validate Paragraph block data:
	 * - check for emptiness
	 *
	 * @param {ParagraphData} savedData — data received after saving
	 * @returns {boolean} false if saved data is not correct, otherwise true
	 * @public
	 */
	validate(savedData: ParagraphData): boolean {
		return !(savedData.text.trim() === '' && !this._preserveBlank);
	}

	/**
	 * Extract Tool's data from the view
	 * @param {HTMLDivElement} toolsContent - Paragraph tools rendered view
	 * @returns {ParagraphData} - saved data
	 * @public
	 */
	save(toolsContent: HTMLDivElement): ParagraphData {
		return {
			text: toolsContent.innerHTML,
		};
	}

	/**
	 * On paste callback fired from Editor.
	 *
	 * @param {PasteEvent} event - event with pasted data
	 */
	onPaste(event: PasteEvent) {
		if ('data' in event.detail && typeof event.detail.data !== 'string' && 'innerHTML' in event.detail.data) {
			this.data = {
				text: event.detail.data.innerHTML,
			};
		}
	}

	/**
	 * Enable Conversion Toolbar. Paragraph can be converted to/from other tools
	 */
	static get conversionConfig() {
		return {
			export: 'text', // to convert Paragraph to other block, use 'text' property of saved data
			import: 'text', // to covert other block's exported string to Paragraph, fill 'text' property of tool data
		};
	}

	/**
	 * Sanitizer rules
	 */
	static get sanitize() {
		return {
			text: {
				br: true,
			},
		};
	}

	/**
	 * Returns true to notify the core that read-only mode is supported
	 *
	 * @return {boolean}
	 */
	static get isReadOnlySupported() {
		return true;
	}

	/**
	 * Get current Tools`s data
	 * @returns {ParagraphData} Current data
	 * @private
	 */
	get data() {
		this._data.text = this._element.innerHTML;

		return this._data;
	}

	/**
	 * Store data in plugin:
	 * - at the this._data property
	 * - at the HTML
	 *
	 * @param {ParagraphData} data — data to set
	 * @private
	 */
	set data(data) {
		this._data = data || {};

		this._element.innerHTML = this._data.text || '';
	}

	/**
	 * Used by Editor paste handling API.
	 * Provides configuration to handle P tags.
	 *
	 * @returns {{tags: string[]}}
	 */
	static get pasteConfig() {
		return {
			tags: ['P'],
		};
	}

	/**
	 * Icon and title for displaying at the Toolbox
	 *
	 * @return {{icon: string, title: string}}
	 */
	static get toolbox() {
		return {
			icon: '<span>P</span>',
			title: 'Paragraph',
		};
	}
}

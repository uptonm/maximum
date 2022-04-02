// import CheckList from "@editorjs/checklist";
// import CodeBox from "@bomdi/codebox";
// import Delimiter from "@editorjs/delimiter";
// import Embed from "@editorjs/embed";
// import Image from "@editorjs/image";
// import InlineCode from "@editorjs/inline-code";
// import LinkTool from "@editorjs/link";
// import List from "@editorjs/list";
// import Quote from "@editorjs/quote";
// import SimpleImage from "@editorjs/simple-image";
import { useCallback, useEffect, useRef } from 'react';
import EditorJS, { API, OutputData } from '@editorjs/editorjs';
import { OutputBlockData } from '@editorjs/editorjs/types/data-formats/output-data';

// @ts-ignore
import CodeTool from '@editorjs/code';
import { Header } from '@components/EditorJs/tools/Header';
import { Paragraph } from '@components/EditorJs/tools/Paragraph';

// import API from "../api/image" // Your server url

const EDITOR_JS_TOOLS = {
	// embed: Embed,
	code: CodeTool,
	header: Header,
	paragraph: Paragraph,
	// list: List,
	// codeBox: CodeBox,
	// linkTool: LinkTool,
	// image: {
	// 	class: Image,
	// 	config: {
	// 		uploader: {
	// 			uploadByFile(file) {
	// 				let formData = new FormData();
	// 				formData.append("images", file);
	// 				// send image to server
	// 				return API.imageUpload(formData).then((res) => {
	// 					// get the uploaded image path, pushing image path to image array
	// 					imageArray.push(res.data.data)
	// 					return {
	// 						success: 1,
	// 						file: {
	// 							url: res.data.data
	// 						}
	// 					}
	// 				})
	// 			}
	// 		}
	// 	}
	// },
	// quote: Quote,
	// checklist: CheckList,
	// delimiter: Delimiter,
	// inlineCode: InlineCode,
	// simpleImage: SimpleImage
};

export type EditorJsProps = {
	defaultValue: OutputData;
	onChange: (blocks: OutputBlockData[]) => void;
};

export default function EditorJs({ defaultValue, onChange }: EditorJsProps) {
	const containerRef = useRef<HTMLDivElement>(null);
	const editorJsInstance = useRef<EditorJS | null>();

	const handleChange = useCallback(async (api: API) => {
		const saveData = await api.saver.save();
		onChange(saveData.blocks);
	}, [onChange]);

	const initializeEditor = useCallback(async (holder: HTMLDivElement) => {
		const editor = new EditorJS({
			holder,
			autofocus: true,
			data: defaultValue,
			onChange: handleChange,
			// @ts-ignore
			tools: EDITOR_JS_TOOLS,
			// @ts-ignore
			logLevel: 'ERROR',
		});

		await editor.isReady;
		return editor;
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [handleChange]);

	// This will run only once
	useEffect(() => {
		if (!editorJsInstance.current && containerRef.current) {
			initializeEditor(containerRef.current).then((editor) => {
				editorJsInstance.current = editor;
			});
		}
		return () => {
			editorJsInstance.current?.destroy();
			editorJsInstance.current = null;
		};
	}, [initializeEditor]);

	return (
		<div ref={containerRef} />
	);
}

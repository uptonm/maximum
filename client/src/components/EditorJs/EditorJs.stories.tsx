import { useCallback, useState } from 'react';
import { OutputBlockData, OutputData } from '@editorjs/editorjs';
import { Meta, StoryObj } from '@storybook/react';

import EditorJs, { EditorJsProps } from '@components/EditorJs';

export default {
	component: EditorJs,
} as Meta<typeof EditorJs>;

const defaultValue: OutputData = {
	time: new Date().getTime(),
	blocks: [],
};

function EditorJsTemplate() {
	const [_, setValue] = useState<OutputData>(defaultValue);

	const handleChange = useCallback((blocks: OutputBlockData[]) => {
		setValue((curValue) => ({ ...curValue, blocks }));
	}, []);

	return (
		<EditorJs
			onChange={handleChange}
			defaultValue={defaultValue}
		/>
	);
}

export const Basic: StoryObj<EditorJsProps> = {
	render: () => <EditorJsTemplate />,
};

import dynamic from 'next/dynamic';
import { isEqual } from 'lodash-es';
import { toast } from 'react-hot-toast';
import { OutputData } from '@editorjs/editorjs';
import { useCallback, useEffect, useState } from 'react';
import { OutputBlockData } from '@editorjs/editorjs/types/data-formats/output-data';

import {
	useCreateBlocksMutation,
	useDeleteBlocksMutation,
	useGetStoryByIdQuery,
	useUpdateStoryMutation,
} from '@services/Story.generated';
import { Story_Enum_Block_Type_Enum } from '@lib/gqlTypes';

const EditorJs = dynamic(() => import('@components/EditorJs/EditorJs'), { ssr: false });

export type StoryEditorProps = {
	storyId: string;
};

export function StoryEditor({ storyId }: StoryEditorProps) {
	const [title, setTitle] = useState<string>('');
	const [hasChanges, setHasChanges] = useState<boolean>(false);
	const [editorData, setEditorData] = useState<OutputData | null>(null);

	const queryResults = useGetStoryByIdQuery({
		variables: { storyId },
		onCompleted: (data) => {
			setTitle(data.story_story_by_pk?.title ?? '');
			setEditorData({
				time: new Date().getTime(),
				blocks: (data.story_story_by_pk?.blocks ?? []).map((block) => ({
					id: block.id,
					type: block.type,
					data: block.data,
				})),
			});
		},
	});

	const [updateStoryFn] = useUpdateStoryMutation({
		onCompleted: () => {
			toast('Changes saved');
			queryResults.refetch({ storyId });
		},
	});
	const [createBlocksFn] = useCreateBlocksMutation();
	const [deleteBlocksFn] = useDeleteBlocksMutation();

	useEffect(() => {
		const delayDebounceFn = setTimeout(() => {
			if (!queryResults.loading && queryResults.data?.story_story_by_pk?.title !== title) {
				updateStoryFn({
					variables: {
						storyId,
						story: {
							title,
						},
					},
				});
			}
		}, 1000);

		return () => clearTimeout(delayDebounceFn);
	}, [title]);

	useEffect(() => {
		const delayDebounceFn = setTimeout(async () => {
			const { data, loading } = queryResults;
			const editorBlocks = editorData?.blocks ?? [];
			const storyBlocks = data?.story_story_by_pk?.blocks ?? [];

			if (!loading && data && hasChanges) {
				await deleteBlocksFn({
					variables: {
						blockIds: storyBlocks.map((b) => b.id),
					},
				});

				await createBlocksFn({
					variables: {
						blocks: editorBlocks.map((block, blockIdx) => ({
							seq: blockIdx,
							data: block.data,
							story_id: storyId,
							type: block.type as Story_Enum_Block_Type_Enum,
						})),
					},
				});

				setHasChanges(false);
				toast('Changes saved');
				queryResults.refetch({ storyId });
			}
		}, 1000);

		return () => clearTimeout(delayDebounceFn);
	}, [hasChanges]);

	const setBlocks = useCallback((blocks: OutputBlockData[]) => {
		let foundChanges = false;
		setEditorData((curEditorData) => {
			if (!isEqual(curEditorData?.blocks ?? [], blocks)) {
				foundChanges = true;
				return { ...curEditorData, blocks };
			}
			return curEditorData;
		});
		setHasChanges(foundChanges);
	}, []);

	if (queryResults.loading) {
		return <h1>Loading story...</h1>;
	}

	if (queryResults.error) {
		return (
			<h1>
				Error:
				{queryResults.error.message}
			</h1>
		);
	}

	if (!queryResults.data || !queryResults.data.story_story_by_pk) {
		return <h1 className="text-3xl">Story not found</h1>;
	}

	return (
		<div className="flex flex-col pt-16 w-full max-w-prose">
			<label htmlFor="title">
				<span className="sr-only">Title</span>
				<input
					id="title"
					value={title}
					className="w-full focus:outline-none border-b-2 border-transparent focus:border-slate-800/25
					tracking-tight text-gray-900 font-extrabold text-3xl whitespace-normal resize-none pb-2"
					onChange={({ target }) => setTitle(target.value)}
				/>
			</label>

			<div className="flex flex-col space-y-8">
				{ editorData && (
					<EditorJs
						onChange={setBlocks}
						defaultValue={editorData}
					/>
				) }
			</div>
		</div>
	);
}

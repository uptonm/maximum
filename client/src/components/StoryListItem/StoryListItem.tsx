import dayjs from 'dayjs';
import Link from 'next/link';

import { FullName } from '@lib/utils';
import { StorySearchResultFragment } from '@services/Story.generated';

type StoryAuthor = StorySearchResultFragment['author'];

export type StoryListItemProps = {
	story: StorySearchResultFragment;
};

export function StoryListItem({ story }: StoryListItemProps) {
	return (
		<li key={story.id} className="border-2 border-gray-200 py-2 px-4">
			<Link href={`/users/${story.author.id}`} passHref>
				<a className="flex items-center space-x-2 text-xs">
					<h2 className="text-slate-700">{FullName<StoryAuthor>(story.author)}</h2>
					<span>in</span>
					<h2 className="text-slate-700">Some Blog</h2>
					<span>·</span>
					<h4 className="text-slate-700">{dayjs(story.created_at).format('LL')}</h4>
				</a>
			</Link>
			<Link href={`/stories/${story.id}/edit`} passHref>
				<a>
					<h1 className="font-extrabold text-2xl">{story.title}</h1>
					{story.blocks?.[0]?.content?.length > 0 && <p>{story.blocks?.[0]?.content}</p>}
				</a>
			</Link>
		</li>
	);
}

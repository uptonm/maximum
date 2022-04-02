import { StoryListItem } from '@components/StoryListItem';
import { StorySearchResultFragment } from '@services/Story.generated';

export type StoryListProps = {
	loading?: boolean;
	stories?: StorySearchResultFragment[];
};

export function StoryList({ loading, stories }: StoryListProps) {
	if (loading) {
		return <h1>Loading stories...</h1>;
	}

	return (
		<ul className="space-y-2">
			{(stories ?? []).map((story) => (
				<StoryListItem key={story.id} story={story} />
			))}
		</ul>
	);
}
StoryList.defaultProps = {
	loading: false,
	stories: [],
};

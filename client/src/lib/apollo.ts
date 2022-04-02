import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import { GRAPHQL_SECRET, GRAPHQL_URL } from '@config/constants';

export const client = new ApolloClient({
	link: new HttpLink({
		uri: GRAPHQL_URL,
		headers: {
			'x-hasura-admin-secret': GRAPHQL_SECRET,
		},
	}),
	cache: new InMemoryCache(),
});

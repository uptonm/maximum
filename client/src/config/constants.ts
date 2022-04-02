import { User_User } from '@lib/gqlTypes';

export const TEST_USER: User_User = {
	id: 'b5887f23-d278-468e-b74d-412647889402',
	first_name: 'Test',
	last_name: 'User',
	email: 'test@example.com',
};

export const GRAPHQL_URL: string = process.env.NEXT_PUBLIC_GRAPHQL_URL ?? 'GRAPHQL_URL_UNDEFINED';
export const GRAPHQL_SECRET: string = process.env.NEXT_PUBLIC_GRAPHQL_SECRET ?? 'GRAPHQL_SECRET_UNDEFINED';

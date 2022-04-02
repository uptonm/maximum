import { User_User } from '@lib/gqlTypes';

export function FullName<Record extends Pick<User_User, 'first_name' | 'last_name'>>(record: Record): string {
	return `${record.first_name} ${record.last_name}`;
}

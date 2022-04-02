import { FieldPolicy, FieldReadFunction, TypePolicies, TypePolicy } from '@apollo/client/cache';
export type mutation_rootKeySpecifier = ('delete_story_block' | 'delete_story_block_by_pk' | 'delete_story_enum_block_type' | 'delete_story_enum_block_type_by_pk' | 'delete_story_enum_visibility_state' | 'delete_story_enum_visibility_state_by_pk' | 'delete_story_story' | 'delete_story_story_by_pk' | 'delete_user_user' | 'delete_user_user_by_pk' | 'insert_story_block' | 'insert_story_block_one' | 'insert_story_enum_block_type' | 'insert_story_enum_block_type_one' | 'insert_story_enum_visibility_state' | 'insert_story_enum_visibility_state_one' | 'insert_story_story' | 'insert_story_story_one' | 'insert_user_user' | 'insert_user_user_one' | 'update_story_block' | 'update_story_block_by_pk' | 'update_story_enum_block_type' | 'update_story_enum_block_type_by_pk' | 'update_story_enum_visibility_state' | 'update_story_enum_visibility_state_by_pk' | 'update_story_story' | 'update_story_story_by_pk' | 'update_user_user' | 'update_user_user_by_pk' | mutation_rootKeySpecifier)[];
export type mutation_rootFieldPolicy = {
	delete_story_block?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_story_block_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_story_enum_block_type?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_story_enum_block_type_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_story_enum_visibility_state?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_story_enum_visibility_state_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_story_story?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_story_story_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_user_user?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_user_user_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_story_block?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_story_block_one?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_story_enum_block_type?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_story_enum_block_type_one?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_story_enum_visibility_state?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_story_enum_visibility_state_one?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_story_story?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_story_story_one?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_user_user?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_user_user_one?: FieldPolicy<any> | FieldReadFunction<any>,
	update_story_block?: FieldPolicy<any> | FieldReadFunction<any>,
	update_story_block_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	update_story_enum_block_type?: FieldPolicy<any> | FieldReadFunction<any>,
	update_story_enum_block_type_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	update_story_enum_visibility_state?: FieldPolicy<any> | FieldReadFunction<any>,
	update_story_enum_visibility_state_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	update_story_story?: FieldPolicy<any> | FieldReadFunction<any>,
	update_story_story_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	update_user_user?: FieldPolicy<any> | FieldReadFunction<any>,
	update_user_user_by_pk?: FieldPolicy<any> | FieldReadFunction<any>
};
export type query_rootKeySpecifier = ('story_block' | 'story_block_aggregate' | 'story_block_by_pk' | 'story_enum_block_type' | 'story_enum_block_type_aggregate' | 'story_enum_block_type_by_pk' | 'story_enum_visibility_state' | 'story_enum_visibility_state_aggregate' | 'story_enum_visibility_state_by_pk' | 'story_story' | 'story_story_aggregate' | 'story_story_by_pk' | 'user_user' | 'user_user_aggregate' | 'user_user_by_pk' | query_rootKeySpecifier)[];
export type query_rootFieldPolicy = {
	story_block?: FieldPolicy<any> | FieldReadFunction<any>,
	story_block_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	story_block_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	story_enum_block_type?: FieldPolicy<any> | FieldReadFunction<any>,
	story_enum_block_type_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	story_enum_block_type_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	story_enum_visibility_state?: FieldPolicy<any> | FieldReadFunction<any>,
	story_enum_visibility_state_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	story_enum_visibility_state_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	story_story?: FieldPolicy<any> | FieldReadFunction<any>,
	story_story_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	story_story_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	user_user?: FieldPolicy<any> | FieldReadFunction<any>,
	user_user_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	user_user_by_pk?: FieldPolicy<any> | FieldReadFunction<any>
};
export type story_blockKeySpecifier = ('data' | 'id' | 'seq' | 'story_id' | 'type' | story_blockKeySpecifier)[];
export type story_blockFieldPolicy = {
	data?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	seq?: FieldPolicy<any> | FieldReadFunction<any>,
	story_id?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>
};
export type story_block_aggregateKeySpecifier = ('aggregate' | 'nodes' | story_block_aggregateKeySpecifier)[];
export type story_block_aggregateFieldPolicy = {
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>
};
export type story_block_aggregate_fieldsKeySpecifier = ('avg' | 'count' | 'max' | 'min' | 'stddev' | 'stddev_pop' | 'stddev_samp' | 'sum' | 'var_pop' | 'var_samp' | 'variance' | story_block_aggregate_fieldsKeySpecifier)[];
export type story_block_aggregate_fieldsFieldPolicy = {
	avg?: FieldPolicy<any> | FieldReadFunction<any>,
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	max?: FieldPolicy<any> | FieldReadFunction<any>,
	min?: FieldPolicy<any> | FieldReadFunction<any>,
	stddev?: FieldPolicy<any> | FieldReadFunction<any>,
	stddev_pop?: FieldPolicy<any> | FieldReadFunction<any>,
	stddev_samp?: FieldPolicy<any> | FieldReadFunction<any>,
	sum?: FieldPolicy<any> | FieldReadFunction<any>,
	var_pop?: FieldPolicy<any> | FieldReadFunction<any>,
	var_samp?: FieldPolicy<any> | FieldReadFunction<any>,
	variance?: FieldPolicy<any> | FieldReadFunction<any>
};
export type story_block_avg_fieldsKeySpecifier = ('seq' | story_block_avg_fieldsKeySpecifier)[];
export type story_block_avg_fieldsFieldPolicy = {
	seq?: FieldPolicy<any> | FieldReadFunction<any>
};
export type story_block_max_fieldsKeySpecifier = ('id' | 'seq' | 'story_id' | story_block_max_fieldsKeySpecifier)[];
export type story_block_max_fieldsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	seq?: FieldPolicy<any> | FieldReadFunction<any>,
	story_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type story_block_min_fieldsKeySpecifier = ('id' | 'seq' | 'story_id' | story_block_min_fieldsKeySpecifier)[];
export type story_block_min_fieldsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	seq?: FieldPolicy<any> | FieldReadFunction<any>,
	story_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type story_block_mutation_responseKeySpecifier = ('affected_rows' | 'returning' | story_block_mutation_responseKeySpecifier)[];
export type story_block_mutation_responseFieldPolicy = {
	affected_rows?: FieldPolicy<any> | FieldReadFunction<any>,
	returning?: FieldPolicy<any> | FieldReadFunction<any>
};
export type story_block_stddev_fieldsKeySpecifier = ('seq' | story_block_stddev_fieldsKeySpecifier)[];
export type story_block_stddev_fieldsFieldPolicy = {
	seq?: FieldPolicy<any> | FieldReadFunction<any>
};
export type story_block_stddev_pop_fieldsKeySpecifier = ('seq' | story_block_stddev_pop_fieldsKeySpecifier)[];
export type story_block_stddev_pop_fieldsFieldPolicy = {
	seq?: FieldPolicy<any> | FieldReadFunction<any>
};
export type story_block_stddev_samp_fieldsKeySpecifier = ('seq' | story_block_stddev_samp_fieldsKeySpecifier)[];
export type story_block_stddev_samp_fieldsFieldPolicy = {
	seq?: FieldPolicy<any> | FieldReadFunction<any>
};
export type story_block_sum_fieldsKeySpecifier = ('seq' | story_block_sum_fieldsKeySpecifier)[];
export type story_block_sum_fieldsFieldPolicy = {
	seq?: FieldPolicy<any> | FieldReadFunction<any>
};
export type story_block_var_pop_fieldsKeySpecifier = ('seq' | story_block_var_pop_fieldsKeySpecifier)[];
export type story_block_var_pop_fieldsFieldPolicy = {
	seq?: FieldPolicy<any> | FieldReadFunction<any>
};
export type story_block_var_samp_fieldsKeySpecifier = ('seq' | story_block_var_samp_fieldsKeySpecifier)[];
export type story_block_var_samp_fieldsFieldPolicy = {
	seq?: FieldPolicy<any> | FieldReadFunction<any>
};
export type story_block_variance_fieldsKeySpecifier = ('seq' | story_block_variance_fieldsKeySpecifier)[];
export type story_block_variance_fieldsFieldPolicy = {
	seq?: FieldPolicy<any> | FieldReadFunction<any>
};
export type story_enum_block_typeKeySpecifier = ('description' | 'type' | story_enum_block_typeKeySpecifier)[];
export type story_enum_block_typeFieldPolicy = {
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>
};
export type story_enum_block_type_aggregateKeySpecifier = ('aggregate' | 'nodes' | story_enum_block_type_aggregateKeySpecifier)[];
export type story_enum_block_type_aggregateFieldPolicy = {
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>
};
export type story_enum_block_type_aggregate_fieldsKeySpecifier = ('count' | 'max' | 'min' | story_enum_block_type_aggregate_fieldsKeySpecifier)[];
export type story_enum_block_type_aggregate_fieldsFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	max?: FieldPolicy<any> | FieldReadFunction<any>,
	min?: FieldPolicy<any> | FieldReadFunction<any>
};
export type story_enum_block_type_max_fieldsKeySpecifier = ('description' | 'type' | story_enum_block_type_max_fieldsKeySpecifier)[];
export type story_enum_block_type_max_fieldsFieldPolicy = {
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>
};
export type story_enum_block_type_min_fieldsKeySpecifier = ('description' | 'type' | story_enum_block_type_min_fieldsKeySpecifier)[];
export type story_enum_block_type_min_fieldsFieldPolicy = {
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>
};
export type story_enum_block_type_mutation_responseKeySpecifier = ('affected_rows' | 'returning' | story_enum_block_type_mutation_responseKeySpecifier)[];
export type story_enum_block_type_mutation_responseFieldPolicy = {
	affected_rows?: FieldPolicy<any> | FieldReadFunction<any>,
	returning?: FieldPolicy<any> | FieldReadFunction<any>
};
export type story_enum_visibility_stateKeySpecifier = ('description' | 'state' | story_enum_visibility_stateKeySpecifier)[];
export type story_enum_visibility_stateFieldPolicy = {
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	state?: FieldPolicy<any> | FieldReadFunction<any>
};
export type story_enum_visibility_state_aggregateKeySpecifier = ('aggregate' | 'nodes' | story_enum_visibility_state_aggregateKeySpecifier)[];
export type story_enum_visibility_state_aggregateFieldPolicy = {
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>
};
export type story_enum_visibility_state_aggregate_fieldsKeySpecifier = ('count' | 'max' | 'min' | story_enum_visibility_state_aggregate_fieldsKeySpecifier)[];
export type story_enum_visibility_state_aggregate_fieldsFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	max?: FieldPolicy<any> | FieldReadFunction<any>,
	min?: FieldPolicy<any> | FieldReadFunction<any>
};
export type story_enum_visibility_state_max_fieldsKeySpecifier = ('description' | 'state' | story_enum_visibility_state_max_fieldsKeySpecifier)[];
export type story_enum_visibility_state_max_fieldsFieldPolicy = {
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	state?: FieldPolicy<any> | FieldReadFunction<any>
};
export type story_enum_visibility_state_min_fieldsKeySpecifier = ('description' | 'state' | story_enum_visibility_state_min_fieldsKeySpecifier)[];
export type story_enum_visibility_state_min_fieldsFieldPolicy = {
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	state?: FieldPolicy<any> | FieldReadFunction<any>
};
export type story_enum_visibility_state_mutation_responseKeySpecifier = ('affected_rows' | 'returning' | story_enum_visibility_state_mutation_responseKeySpecifier)[];
export type story_enum_visibility_state_mutation_responseFieldPolicy = {
	affected_rows?: FieldPolicy<any> | FieldReadFunction<any>,
	returning?: FieldPolicy<any> | FieldReadFunction<any>
};
export type story_storyKeySpecifier = ('author' | 'author_id' | 'blocks' | 'blocks_aggregate' | 'created_at' | 'id' | 'subtitle' | 'title' | 'updated_at' | 'visibility' | story_storyKeySpecifier)[];
export type story_storyFieldPolicy = {
	author?: FieldPolicy<any> | FieldReadFunction<any>,
	author_id?: FieldPolicy<any> | FieldReadFunction<any>,
	blocks?: FieldPolicy<any> | FieldReadFunction<any>,
	blocks_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	subtitle?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>,
	updated_at?: FieldPolicy<any> | FieldReadFunction<any>,
	visibility?: FieldPolicy<any> | FieldReadFunction<any>
};
export type story_story_aggregateKeySpecifier = ('aggregate' | 'nodes' | story_story_aggregateKeySpecifier)[];
export type story_story_aggregateFieldPolicy = {
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>
};
export type story_story_aggregate_fieldsKeySpecifier = ('count' | 'max' | 'min' | story_story_aggregate_fieldsKeySpecifier)[];
export type story_story_aggregate_fieldsFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	max?: FieldPolicy<any> | FieldReadFunction<any>,
	min?: FieldPolicy<any> | FieldReadFunction<any>
};
export type story_story_max_fieldsKeySpecifier = ('author_id' | 'created_at' | 'id' | 'subtitle' | 'title' | 'updated_at' | 'visibility' | story_story_max_fieldsKeySpecifier)[];
export type story_story_max_fieldsFieldPolicy = {
	author_id?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	subtitle?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>,
	updated_at?: FieldPolicy<any> | FieldReadFunction<any>,
	visibility?: FieldPolicy<any> | FieldReadFunction<any>
};
export type story_story_min_fieldsKeySpecifier = ('author_id' | 'created_at' | 'id' | 'subtitle' | 'title' | 'updated_at' | 'visibility' | story_story_min_fieldsKeySpecifier)[];
export type story_story_min_fieldsFieldPolicy = {
	author_id?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	subtitle?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>,
	updated_at?: FieldPolicy<any> | FieldReadFunction<any>,
	visibility?: FieldPolicy<any> | FieldReadFunction<any>
};
export type story_story_mutation_responseKeySpecifier = ('affected_rows' | 'returning' | story_story_mutation_responseKeySpecifier)[];
export type story_story_mutation_responseFieldPolicy = {
	affected_rows?: FieldPolicy<any> | FieldReadFunction<any>,
	returning?: FieldPolicy<any> | FieldReadFunction<any>
};
export type subscription_rootKeySpecifier = ('story_block' | 'story_block_aggregate' | 'story_block_by_pk' | 'story_enum_block_type' | 'story_enum_block_type_aggregate' | 'story_enum_block_type_by_pk' | 'story_enum_visibility_state' | 'story_enum_visibility_state_aggregate' | 'story_enum_visibility_state_by_pk' | 'story_story' | 'story_story_aggregate' | 'story_story_by_pk' | 'user_user' | 'user_user_aggregate' | 'user_user_by_pk' | subscription_rootKeySpecifier)[];
export type subscription_rootFieldPolicy = {
	story_block?: FieldPolicy<any> | FieldReadFunction<any>,
	story_block_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	story_block_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	story_enum_block_type?: FieldPolicy<any> | FieldReadFunction<any>,
	story_enum_block_type_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	story_enum_block_type_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	story_enum_visibility_state?: FieldPolicy<any> | FieldReadFunction<any>,
	story_enum_visibility_state_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	story_enum_visibility_state_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	story_story?: FieldPolicy<any> | FieldReadFunction<any>,
	story_story_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	story_story_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	user_user?: FieldPolicy<any> | FieldReadFunction<any>,
	user_user_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	user_user_by_pk?: FieldPolicy<any> | FieldReadFunction<any>
};
export type user_userKeySpecifier = ('email' | 'first_name' | 'id' | 'last_name' | user_userKeySpecifier)[];
export type user_userFieldPolicy = {
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	first_name?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	last_name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type user_user_aggregateKeySpecifier = ('aggregate' | 'nodes' | user_user_aggregateKeySpecifier)[];
export type user_user_aggregateFieldPolicy = {
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>
};
export type user_user_aggregate_fieldsKeySpecifier = ('count' | 'max' | 'min' | user_user_aggregate_fieldsKeySpecifier)[];
export type user_user_aggregate_fieldsFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	max?: FieldPolicy<any> | FieldReadFunction<any>,
	min?: FieldPolicy<any> | FieldReadFunction<any>
};
export type user_user_max_fieldsKeySpecifier = ('email' | 'first_name' | 'id' | 'last_name' | user_user_max_fieldsKeySpecifier)[];
export type user_user_max_fieldsFieldPolicy = {
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	first_name?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	last_name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type user_user_min_fieldsKeySpecifier = ('email' | 'first_name' | 'id' | 'last_name' | user_user_min_fieldsKeySpecifier)[];
export type user_user_min_fieldsFieldPolicy = {
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	first_name?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	last_name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type user_user_mutation_responseKeySpecifier = ('affected_rows' | 'returning' | user_user_mutation_responseKeySpecifier)[];
export type user_user_mutation_responseFieldPolicy = {
	affected_rows?: FieldPolicy<any> | FieldReadFunction<any>,
	returning?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StrictTypedTypePolicies = {
	mutation_root?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | mutation_rootKeySpecifier | (() => undefined | mutation_rootKeySpecifier),
		fields?: mutation_rootFieldPolicy,
	},
	query_root?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | query_rootKeySpecifier | (() => undefined | query_rootKeySpecifier),
		fields?: query_rootFieldPolicy,
	},
	story_block?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | story_blockKeySpecifier | (() => undefined | story_blockKeySpecifier),
		fields?: story_blockFieldPolicy,
	},
	story_block_aggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | story_block_aggregateKeySpecifier | (() => undefined | story_block_aggregateKeySpecifier),
		fields?: story_block_aggregateFieldPolicy,
	},
	story_block_aggregate_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | story_block_aggregate_fieldsKeySpecifier | (() => undefined | story_block_aggregate_fieldsKeySpecifier),
		fields?: story_block_aggregate_fieldsFieldPolicy,
	},
	story_block_avg_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | story_block_avg_fieldsKeySpecifier | (() => undefined | story_block_avg_fieldsKeySpecifier),
		fields?: story_block_avg_fieldsFieldPolicy,
	},
	story_block_max_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | story_block_max_fieldsKeySpecifier | (() => undefined | story_block_max_fieldsKeySpecifier),
		fields?: story_block_max_fieldsFieldPolicy,
	},
	story_block_min_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | story_block_min_fieldsKeySpecifier | (() => undefined | story_block_min_fieldsKeySpecifier),
		fields?: story_block_min_fieldsFieldPolicy,
	},
	story_block_mutation_response?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | story_block_mutation_responseKeySpecifier | (() => undefined | story_block_mutation_responseKeySpecifier),
		fields?: story_block_mutation_responseFieldPolicy,
	},
	story_block_stddev_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | story_block_stddev_fieldsKeySpecifier | (() => undefined | story_block_stddev_fieldsKeySpecifier),
		fields?: story_block_stddev_fieldsFieldPolicy,
	},
	story_block_stddev_pop_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | story_block_stddev_pop_fieldsKeySpecifier | (() => undefined | story_block_stddev_pop_fieldsKeySpecifier),
		fields?: story_block_stddev_pop_fieldsFieldPolicy,
	},
	story_block_stddev_samp_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | story_block_stddev_samp_fieldsKeySpecifier | (() => undefined | story_block_stddev_samp_fieldsKeySpecifier),
		fields?: story_block_stddev_samp_fieldsFieldPolicy,
	},
	story_block_sum_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | story_block_sum_fieldsKeySpecifier | (() => undefined | story_block_sum_fieldsKeySpecifier),
		fields?: story_block_sum_fieldsFieldPolicy,
	},
	story_block_var_pop_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | story_block_var_pop_fieldsKeySpecifier | (() => undefined | story_block_var_pop_fieldsKeySpecifier),
		fields?: story_block_var_pop_fieldsFieldPolicy,
	},
	story_block_var_samp_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | story_block_var_samp_fieldsKeySpecifier | (() => undefined | story_block_var_samp_fieldsKeySpecifier),
		fields?: story_block_var_samp_fieldsFieldPolicy,
	},
	story_block_variance_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | story_block_variance_fieldsKeySpecifier | (() => undefined | story_block_variance_fieldsKeySpecifier),
		fields?: story_block_variance_fieldsFieldPolicy,
	},
	story_enum_block_type?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | story_enum_block_typeKeySpecifier | (() => undefined | story_enum_block_typeKeySpecifier),
		fields?: story_enum_block_typeFieldPolicy,
	},
	story_enum_block_type_aggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | story_enum_block_type_aggregateKeySpecifier | (() => undefined | story_enum_block_type_aggregateKeySpecifier),
		fields?: story_enum_block_type_aggregateFieldPolicy,
	},
	story_enum_block_type_aggregate_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | story_enum_block_type_aggregate_fieldsKeySpecifier | (() => undefined | story_enum_block_type_aggregate_fieldsKeySpecifier),
		fields?: story_enum_block_type_aggregate_fieldsFieldPolicy,
	},
	story_enum_block_type_max_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | story_enum_block_type_max_fieldsKeySpecifier | (() => undefined | story_enum_block_type_max_fieldsKeySpecifier),
		fields?: story_enum_block_type_max_fieldsFieldPolicy,
	},
	story_enum_block_type_min_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | story_enum_block_type_min_fieldsKeySpecifier | (() => undefined | story_enum_block_type_min_fieldsKeySpecifier),
		fields?: story_enum_block_type_min_fieldsFieldPolicy,
	},
	story_enum_block_type_mutation_response?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | story_enum_block_type_mutation_responseKeySpecifier | (() => undefined | story_enum_block_type_mutation_responseKeySpecifier),
		fields?: story_enum_block_type_mutation_responseFieldPolicy,
	},
	story_enum_visibility_state?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | story_enum_visibility_stateKeySpecifier | (() => undefined | story_enum_visibility_stateKeySpecifier),
		fields?: story_enum_visibility_stateFieldPolicy,
	},
	story_enum_visibility_state_aggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | story_enum_visibility_state_aggregateKeySpecifier | (() => undefined | story_enum_visibility_state_aggregateKeySpecifier),
		fields?: story_enum_visibility_state_aggregateFieldPolicy,
	},
	story_enum_visibility_state_aggregate_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | story_enum_visibility_state_aggregate_fieldsKeySpecifier | (() => undefined | story_enum_visibility_state_aggregate_fieldsKeySpecifier),
		fields?: story_enum_visibility_state_aggregate_fieldsFieldPolicy,
	},
	story_enum_visibility_state_max_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | story_enum_visibility_state_max_fieldsKeySpecifier | (() => undefined | story_enum_visibility_state_max_fieldsKeySpecifier),
		fields?: story_enum_visibility_state_max_fieldsFieldPolicy,
	},
	story_enum_visibility_state_min_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | story_enum_visibility_state_min_fieldsKeySpecifier | (() => undefined | story_enum_visibility_state_min_fieldsKeySpecifier),
		fields?: story_enum_visibility_state_min_fieldsFieldPolicy,
	},
	story_enum_visibility_state_mutation_response?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | story_enum_visibility_state_mutation_responseKeySpecifier | (() => undefined | story_enum_visibility_state_mutation_responseKeySpecifier),
		fields?: story_enum_visibility_state_mutation_responseFieldPolicy,
	},
	story_story?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | story_storyKeySpecifier | (() => undefined | story_storyKeySpecifier),
		fields?: story_storyFieldPolicy,
	},
	story_story_aggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | story_story_aggregateKeySpecifier | (() => undefined | story_story_aggregateKeySpecifier),
		fields?: story_story_aggregateFieldPolicy,
	},
	story_story_aggregate_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | story_story_aggregate_fieldsKeySpecifier | (() => undefined | story_story_aggregate_fieldsKeySpecifier),
		fields?: story_story_aggregate_fieldsFieldPolicy,
	},
	story_story_max_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | story_story_max_fieldsKeySpecifier | (() => undefined | story_story_max_fieldsKeySpecifier),
		fields?: story_story_max_fieldsFieldPolicy,
	},
	story_story_min_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | story_story_min_fieldsKeySpecifier | (() => undefined | story_story_min_fieldsKeySpecifier),
		fields?: story_story_min_fieldsFieldPolicy,
	},
	story_story_mutation_response?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | story_story_mutation_responseKeySpecifier | (() => undefined | story_story_mutation_responseKeySpecifier),
		fields?: story_story_mutation_responseFieldPolicy,
	},
	subscription_root?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | subscription_rootKeySpecifier | (() => undefined | subscription_rootKeySpecifier),
		fields?: subscription_rootFieldPolicy,
	},
	user_user?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | user_userKeySpecifier | (() => undefined | user_userKeySpecifier),
		fields?: user_userFieldPolicy,
	},
	user_user_aggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | user_user_aggregateKeySpecifier | (() => undefined | user_user_aggregateKeySpecifier),
		fields?: user_user_aggregateFieldPolicy,
	},
	user_user_aggregate_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | user_user_aggregate_fieldsKeySpecifier | (() => undefined | user_user_aggregate_fieldsKeySpecifier),
		fields?: user_user_aggregate_fieldsFieldPolicy,
	},
	user_user_max_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | user_user_max_fieldsKeySpecifier | (() => undefined | user_user_max_fieldsKeySpecifier),
		fields?: user_user_max_fieldsFieldPolicy,
	},
	user_user_min_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | user_user_min_fieldsKeySpecifier | (() => undefined | user_user_min_fieldsKeySpecifier),
		fields?: user_user_min_fieldsFieldPolicy,
	},
	user_user_mutation_response?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | user_user_mutation_responseKeySpecifier | (() => undefined | user_user_mutation_responseKeySpecifier),
		fields?: user_user_mutation_responseFieldPolicy,
	}
};
export type TypedTypePolicies = StrictTypedTypePolicies & TypePolicies;
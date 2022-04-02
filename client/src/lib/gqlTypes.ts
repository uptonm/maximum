export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  jsonb: any;
  timestamptz: any;
  uuid: any;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export type Jsonb_Comparison_Exp = {
  /** is the column contained in the given json value */
  _contained_in?: InputMaybe<Scalars['jsonb']>;
  /** does the column contain the given json value at the top level */
  _contains?: InputMaybe<Scalars['jsonb']>;
  _eq?: InputMaybe<Scalars['jsonb']>;
  _gt?: InputMaybe<Scalars['jsonb']>;
  _gte?: InputMaybe<Scalars['jsonb']>;
  /** does the string exist as a top-level key in the column */
  _has_key?: InputMaybe<Scalars['String']>;
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: InputMaybe<Array<Scalars['String']>>;
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: InputMaybe<Array<Scalars['String']>>;
  _in?: InputMaybe<Array<Scalars['jsonb']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['jsonb']>;
  _lte?: InputMaybe<Scalars['jsonb']>;
  _neq?: InputMaybe<Scalars['jsonb']>;
  _nin?: InputMaybe<Array<Scalars['jsonb']>>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "story.block" */
  delete_story_block?: Maybe<Story_Block_Mutation_Response>;
  /** delete single row from the table: "story.block" */
  delete_story_block_by_pk?: Maybe<Story_Block>;
  /** delete data from the table: "story_enum.block_type" */
  delete_story_enum_block_type?: Maybe<Story_Enum_Block_Type_Mutation_Response>;
  /** delete single row from the table: "story_enum.block_type" */
  delete_story_enum_block_type_by_pk?: Maybe<Story_Enum_Block_Type>;
  /** delete data from the table: "story_enum.visibility_state" */
  delete_story_enum_visibility_state?: Maybe<Story_Enum_Visibility_State_Mutation_Response>;
  /** delete single row from the table: "story_enum.visibility_state" */
  delete_story_enum_visibility_state_by_pk?: Maybe<Story_Enum_Visibility_State>;
  /** delete data from the table: "story.story" */
  delete_story_story?: Maybe<Story_Story_Mutation_Response>;
  /** delete single row from the table: "story.story" */
  delete_story_story_by_pk?: Maybe<Story_Story>;
  /** delete data from the table: "user.user" */
  delete_user_user?: Maybe<User_User_Mutation_Response>;
  /** delete single row from the table: "user.user" */
  delete_user_user_by_pk?: Maybe<User_User>;
  /** insert data into the table: "story.block" */
  insert_story_block?: Maybe<Story_Block_Mutation_Response>;
  /** insert a single row into the table: "story.block" */
  insert_story_block_one?: Maybe<Story_Block>;
  /** insert data into the table: "story_enum.block_type" */
  insert_story_enum_block_type?: Maybe<Story_Enum_Block_Type_Mutation_Response>;
  /** insert a single row into the table: "story_enum.block_type" */
  insert_story_enum_block_type_one?: Maybe<Story_Enum_Block_Type>;
  /** insert data into the table: "story_enum.visibility_state" */
  insert_story_enum_visibility_state?: Maybe<Story_Enum_Visibility_State_Mutation_Response>;
  /** insert a single row into the table: "story_enum.visibility_state" */
  insert_story_enum_visibility_state_one?: Maybe<Story_Enum_Visibility_State>;
  /** insert data into the table: "story.story" */
  insert_story_story?: Maybe<Story_Story_Mutation_Response>;
  /** insert a single row into the table: "story.story" */
  insert_story_story_one?: Maybe<Story_Story>;
  /** insert data into the table: "user.user" */
  insert_user_user?: Maybe<User_User_Mutation_Response>;
  /** insert a single row into the table: "user.user" */
  insert_user_user_one?: Maybe<User_User>;
  /** update data of the table: "story.block" */
  update_story_block?: Maybe<Story_Block_Mutation_Response>;
  /** update single row of the table: "story.block" */
  update_story_block_by_pk?: Maybe<Story_Block>;
  /** update data of the table: "story_enum.block_type" */
  update_story_enum_block_type?: Maybe<Story_Enum_Block_Type_Mutation_Response>;
  /** update single row of the table: "story_enum.block_type" */
  update_story_enum_block_type_by_pk?: Maybe<Story_Enum_Block_Type>;
  /** update data of the table: "story_enum.visibility_state" */
  update_story_enum_visibility_state?: Maybe<Story_Enum_Visibility_State_Mutation_Response>;
  /** update single row of the table: "story_enum.visibility_state" */
  update_story_enum_visibility_state_by_pk?: Maybe<Story_Enum_Visibility_State>;
  /** update data of the table: "story.story" */
  update_story_story?: Maybe<Story_Story_Mutation_Response>;
  /** update single row of the table: "story.story" */
  update_story_story_by_pk?: Maybe<Story_Story>;
  /** update data of the table: "user.user" */
  update_user_user?: Maybe<User_User_Mutation_Response>;
  /** update single row of the table: "user.user" */
  update_user_user_by_pk?: Maybe<User_User>;
};


/** mutation root */
export type Mutation_RootDelete_Story_BlockArgs = {
  where: Story_Block_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Story_Block_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Story_Enum_Block_TypeArgs = {
  where: Story_Enum_Block_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Story_Enum_Block_Type_By_PkArgs = {
  type: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Story_Enum_Visibility_StateArgs = {
  where: Story_Enum_Visibility_State_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Story_Enum_Visibility_State_By_PkArgs = {
  state: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Story_StoryArgs = {
  where: Story_Story_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Story_Story_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_User_UserArgs = {
  where: User_User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_User_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootInsert_Story_BlockArgs = {
  objects: Array<Story_Block_Insert_Input>;
  on_conflict?: InputMaybe<Story_Block_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Story_Block_OneArgs = {
  object: Story_Block_Insert_Input;
  on_conflict?: InputMaybe<Story_Block_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Story_Enum_Block_TypeArgs = {
  objects: Array<Story_Enum_Block_Type_Insert_Input>;
  on_conflict?: InputMaybe<Story_Enum_Block_Type_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Story_Enum_Block_Type_OneArgs = {
  object: Story_Enum_Block_Type_Insert_Input;
  on_conflict?: InputMaybe<Story_Enum_Block_Type_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Story_Enum_Visibility_StateArgs = {
  objects: Array<Story_Enum_Visibility_State_Insert_Input>;
  on_conflict?: InputMaybe<Story_Enum_Visibility_State_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Story_Enum_Visibility_State_OneArgs = {
  object: Story_Enum_Visibility_State_Insert_Input;
  on_conflict?: InputMaybe<Story_Enum_Visibility_State_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Story_StoryArgs = {
  objects: Array<Story_Story_Insert_Input>;
  on_conflict?: InputMaybe<Story_Story_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Story_Story_OneArgs = {
  object: Story_Story_Insert_Input;
  on_conflict?: InputMaybe<Story_Story_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_UserArgs = {
  objects: Array<User_User_Insert_Input>;
  on_conflict?: InputMaybe<User_User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_User_OneArgs = {
  object: User_User_Insert_Input;
  on_conflict?: InputMaybe<User_User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_Story_BlockArgs = {
  _append?: InputMaybe<Story_Block_Append_Input>;
  _delete_at_path?: InputMaybe<Story_Block_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Story_Block_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Story_Block_Delete_Key_Input>;
  _inc?: InputMaybe<Story_Block_Inc_Input>;
  _prepend?: InputMaybe<Story_Block_Prepend_Input>;
  _set?: InputMaybe<Story_Block_Set_Input>;
  where: Story_Block_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Story_Block_By_PkArgs = {
  _append?: InputMaybe<Story_Block_Append_Input>;
  _delete_at_path?: InputMaybe<Story_Block_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Story_Block_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Story_Block_Delete_Key_Input>;
  _inc?: InputMaybe<Story_Block_Inc_Input>;
  _prepend?: InputMaybe<Story_Block_Prepend_Input>;
  _set?: InputMaybe<Story_Block_Set_Input>;
  pk_columns: Story_Block_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Story_Enum_Block_TypeArgs = {
  _set?: InputMaybe<Story_Enum_Block_Type_Set_Input>;
  where: Story_Enum_Block_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Story_Enum_Block_Type_By_PkArgs = {
  _set?: InputMaybe<Story_Enum_Block_Type_Set_Input>;
  pk_columns: Story_Enum_Block_Type_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Story_Enum_Visibility_StateArgs = {
  _set?: InputMaybe<Story_Enum_Visibility_State_Set_Input>;
  where: Story_Enum_Visibility_State_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Story_Enum_Visibility_State_By_PkArgs = {
  _set?: InputMaybe<Story_Enum_Visibility_State_Set_Input>;
  pk_columns: Story_Enum_Visibility_State_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Story_StoryArgs = {
  _set?: InputMaybe<Story_Story_Set_Input>;
  where: Story_Story_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Story_Story_By_PkArgs = {
  _set?: InputMaybe<Story_Story_Set_Input>;
  pk_columns: Story_Story_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_User_UserArgs = {
  _set?: InputMaybe<User_User_Set_Input>;
  where: User_User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_User_By_PkArgs = {
  _set?: InputMaybe<User_User_Set_Input>;
  pk_columns: User_User_Pk_Columns_Input;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "story.block" */
  story_block: Array<Story_Block>;
  /** fetch aggregated fields from the table: "story.block" */
  story_block_aggregate: Story_Block_Aggregate;
  /** fetch data from the table: "story.block" using primary key columns */
  story_block_by_pk?: Maybe<Story_Block>;
  /** fetch data from the table: "story_enum.block_type" */
  story_enum_block_type: Array<Story_Enum_Block_Type>;
  /** fetch aggregated fields from the table: "story_enum.block_type" */
  story_enum_block_type_aggregate: Story_Enum_Block_Type_Aggregate;
  /** fetch data from the table: "story_enum.block_type" using primary key columns */
  story_enum_block_type_by_pk?: Maybe<Story_Enum_Block_Type>;
  /** fetch data from the table: "story_enum.visibility_state" */
  story_enum_visibility_state: Array<Story_Enum_Visibility_State>;
  /** fetch aggregated fields from the table: "story_enum.visibility_state" */
  story_enum_visibility_state_aggregate: Story_Enum_Visibility_State_Aggregate;
  /** fetch data from the table: "story_enum.visibility_state" using primary key columns */
  story_enum_visibility_state_by_pk?: Maybe<Story_Enum_Visibility_State>;
  /** fetch data from the table: "story.story" */
  story_story: Array<Story_Story>;
  /** fetch aggregated fields from the table: "story.story" */
  story_story_aggregate: Story_Story_Aggregate;
  /** fetch data from the table: "story.story" using primary key columns */
  story_story_by_pk?: Maybe<Story_Story>;
  /** fetch data from the table: "user.user" */
  user_user: Array<User_User>;
  /** fetch aggregated fields from the table: "user.user" */
  user_user_aggregate: User_User_Aggregate;
  /** fetch data from the table: "user.user" using primary key columns */
  user_user_by_pk?: Maybe<User_User>;
};


export type Query_RootStory_BlockArgs = {
  distinct_on?: InputMaybe<Array<Story_Block_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Story_Block_Order_By>>;
  where?: InputMaybe<Story_Block_Bool_Exp>;
};


export type Query_RootStory_Block_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Story_Block_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Story_Block_Order_By>>;
  where?: InputMaybe<Story_Block_Bool_Exp>;
};


export type Query_RootStory_Block_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootStory_Enum_Block_TypeArgs = {
  distinct_on?: InputMaybe<Array<Story_Enum_Block_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Story_Enum_Block_Type_Order_By>>;
  where?: InputMaybe<Story_Enum_Block_Type_Bool_Exp>;
};


export type Query_RootStory_Enum_Block_Type_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Story_Enum_Block_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Story_Enum_Block_Type_Order_By>>;
  where?: InputMaybe<Story_Enum_Block_Type_Bool_Exp>;
};


export type Query_RootStory_Enum_Block_Type_By_PkArgs = {
  type: Scalars['String'];
};


export type Query_RootStory_Enum_Visibility_StateArgs = {
  distinct_on?: InputMaybe<Array<Story_Enum_Visibility_State_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Story_Enum_Visibility_State_Order_By>>;
  where?: InputMaybe<Story_Enum_Visibility_State_Bool_Exp>;
};


export type Query_RootStory_Enum_Visibility_State_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Story_Enum_Visibility_State_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Story_Enum_Visibility_State_Order_By>>;
  where?: InputMaybe<Story_Enum_Visibility_State_Bool_Exp>;
};


export type Query_RootStory_Enum_Visibility_State_By_PkArgs = {
  state: Scalars['String'];
};


export type Query_RootStory_StoryArgs = {
  distinct_on?: InputMaybe<Array<Story_Story_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Story_Story_Order_By>>;
  where?: InputMaybe<Story_Story_Bool_Exp>;
};


export type Query_RootStory_Story_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Story_Story_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Story_Story_Order_By>>;
  where?: InputMaybe<Story_Story_Bool_Exp>;
};


export type Query_RootStory_Story_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootUser_UserArgs = {
  distinct_on?: InputMaybe<Array<User_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_User_Order_By>>;
  where?: InputMaybe<User_User_Bool_Exp>;
};


export type Query_RootUser_User_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_User_Order_By>>;
  where?: InputMaybe<User_User_Bool_Exp>;
};


export type Query_RootUser_User_By_PkArgs = {
  id: Scalars['uuid'];
};

/** columns and relationships of "story.block" */
export type Story_Block = {
  __typename?: 'story_block';
  data: Scalars['jsonb'];
  id: Scalars['uuid'];
  seq: Scalars['Int'];
  story_id: Scalars['uuid'];
  type: Story_Enum_Block_Type_Enum;
};


/** columns and relationships of "story.block" */
export type Story_BlockDataArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "story.block" */
export type Story_Block_Aggregate = {
  __typename?: 'story_block_aggregate';
  aggregate?: Maybe<Story_Block_Aggregate_Fields>;
  nodes: Array<Story_Block>;
};

/** aggregate fields of "story.block" */
export type Story_Block_Aggregate_Fields = {
  __typename?: 'story_block_aggregate_fields';
  avg?: Maybe<Story_Block_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Story_Block_Max_Fields>;
  min?: Maybe<Story_Block_Min_Fields>;
  stddev?: Maybe<Story_Block_Stddev_Fields>;
  stddev_pop?: Maybe<Story_Block_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Story_Block_Stddev_Samp_Fields>;
  sum?: Maybe<Story_Block_Sum_Fields>;
  var_pop?: Maybe<Story_Block_Var_Pop_Fields>;
  var_samp?: Maybe<Story_Block_Var_Samp_Fields>;
  variance?: Maybe<Story_Block_Variance_Fields>;
};


/** aggregate fields of "story.block" */
export type Story_Block_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Story_Block_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "story.block" */
export type Story_Block_Aggregate_Order_By = {
  avg?: InputMaybe<Story_Block_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Story_Block_Max_Order_By>;
  min?: InputMaybe<Story_Block_Min_Order_By>;
  stddev?: InputMaybe<Story_Block_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Story_Block_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Story_Block_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Story_Block_Sum_Order_By>;
  var_pop?: InputMaybe<Story_Block_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Story_Block_Var_Samp_Order_By>;
  variance?: InputMaybe<Story_Block_Variance_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Story_Block_Append_Input = {
  data?: InputMaybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "story.block" */
export type Story_Block_Arr_Rel_Insert_Input = {
  data: Array<Story_Block_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Story_Block_On_Conflict>;
};

/** aggregate avg on columns */
export type Story_Block_Avg_Fields = {
  __typename?: 'story_block_avg_fields';
  seq?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "story.block" */
export type Story_Block_Avg_Order_By = {
  seq?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "story.block". All fields are combined with a logical 'AND'. */
export type Story_Block_Bool_Exp = {
  _and?: InputMaybe<Array<Story_Block_Bool_Exp>>;
  _not?: InputMaybe<Story_Block_Bool_Exp>;
  _or?: InputMaybe<Array<Story_Block_Bool_Exp>>;
  data?: InputMaybe<Jsonb_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  seq?: InputMaybe<Int_Comparison_Exp>;
  story_id?: InputMaybe<Uuid_Comparison_Exp>;
  type?: InputMaybe<Story_Enum_Block_Type_Enum_Comparison_Exp>;
};

/** unique or primary key constraints on table "story.block" */
export enum Story_Block_Constraint {
  /** unique or primary key constraint */
  BlockPkey = 'block_pkey',
  /** unique or primary key constraint */
  BlockStoryIdSeqKey = 'block_story_id_seq_key'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Story_Block_Delete_At_Path_Input = {
  data?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Story_Block_Delete_Elem_Input = {
  data?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Story_Block_Delete_Key_Input = {
  data?: InputMaybe<Scalars['String']>;
};

/** input type for incrementing numeric columns in table "story.block" */
export type Story_Block_Inc_Input = {
  seq?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "story.block" */
export type Story_Block_Insert_Input = {
  data?: InputMaybe<Scalars['jsonb']>;
  id?: InputMaybe<Scalars['uuid']>;
  seq?: InputMaybe<Scalars['Int']>;
  story_id?: InputMaybe<Scalars['uuid']>;
  type?: InputMaybe<Story_Enum_Block_Type_Enum>;
};

/** aggregate max on columns */
export type Story_Block_Max_Fields = {
  __typename?: 'story_block_max_fields';
  id?: Maybe<Scalars['uuid']>;
  seq?: Maybe<Scalars['Int']>;
  story_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "story.block" */
export type Story_Block_Max_Order_By = {
  id?: InputMaybe<Order_By>;
  seq?: InputMaybe<Order_By>;
  story_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Story_Block_Min_Fields = {
  __typename?: 'story_block_min_fields';
  id?: Maybe<Scalars['uuid']>;
  seq?: Maybe<Scalars['Int']>;
  story_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "story.block" */
export type Story_Block_Min_Order_By = {
  id?: InputMaybe<Order_By>;
  seq?: InputMaybe<Order_By>;
  story_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "story.block" */
export type Story_Block_Mutation_Response = {
  __typename?: 'story_block_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Story_Block>;
};

/** on_conflict condition type for table "story.block" */
export type Story_Block_On_Conflict = {
  constraint: Story_Block_Constraint;
  update_columns?: Array<Story_Block_Update_Column>;
  where?: InputMaybe<Story_Block_Bool_Exp>;
};

/** Ordering options when selecting data from "story.block". */
export type Story_Block_Order_By = {
  data?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  seq?: InputMaybe<Order_By>;
  story_id?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
};

/** primary key columns input for table: story_block */
export type Story_Block_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Story_Block_Prepend_Input = {
  data?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "story.block" */
export enum Story_Block_Select_Column {
  /** column name */
  Data = 'data',
  /** column name */
  Id = 'id',
  /** column name */
  Seq = 'seq',
  /** column name */
  StoryId = 'story_id',
  /** column name */
  Type = 'type'
}

/** input type for updating data in table "story.block" */
export type Story_Block_Set_Input = {
  data?: InputMaybe<Scalars['jsonb']>;
  id?: InputMaybe<Scalars['uuid']>;
  seq?: InputMaybe<Scalars['Int']>;
  story_id?: InputMaybe<Scalars['uuid']>;
  type?: InputMaybe<Story_Enum_Block_Type_Enum>;
};

/** aggregate stddev on columns */
export type Story_Block_Stddev_Fields = {
  __typename?: 'story_block_stddev_fields';
  seq?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "story.block" */
export type Story_Block_Stddev_Order_By = {
  seq?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Story_Block_Stddev_Pop_Fields = {
  __typename?: 'story_block_stddev_pop_fields';
  seq?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "story.block" */
export type Story_Block_Stddev_Pop_Order_By = {
  seq?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Story_Block_Stddev_Samp_Fields = {
  __typename?: 'story_block_stddev_samp_fields';
  seq?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "story.block" */
export type Story_Block_Stddev_Samp_Order_By = {
  seq?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Story_Block_Sum_Fields = {
  __typename?: 'story_block_sum_fields';
  seq?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "story.block" */
export type Story_Block_Sum_Order_By = {
  seq?: InputMaybe<Order_By>;
};

/** update columns of table "story.block" */
export enum Story_Block_Update_Column {
  /** column name */
  Data = 'data',
  /** column name */
  Id = 'id',
  /** column name */
  Seq = 'seq',
  /** column name */
  StoryId = 'story_id',
  /** column name */
  Type = 'type'
}

/** aggregate var_pop on columns */
export type Story_Block_Var_Pop_Fields = {
  __typename?: 'story_block_var_pop_fields';
  seq?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "story.block" */
export type Story_Block_Var_Pop_Order_By = {
  seq?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Story_Block_Var_Samp_Fields = {
  __typename?: 'story_block_var_samp_fields';
  seq?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "story.block" */
export type Story_Block_Var_Samp_Order_By = {
  seq?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Story_Block_Variance_Fields = {
  __typename?: 'story_block_variance_fields';
  seq?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "story.block" */
export type Story_Block_Variance_Order_By = {
  seq?: InputMaybe<Order_By>;
};

/** The type of blocks that are supported by the client */
export type Story_Enum_Block_Type = {
  __typename?: 'story_enum_block_type';
  description: Scalars['String'];
  type: Scalars['String'];
};

/** aggregated selection of "story_enum.block_type" */
export type Story_Enum_Block_Type_Aggregate = {
  __typename?: 'story_enum_block_type_aggregate';
  aggregate?: Maybe<Story_Enum_Block_Type_Aggregate_Fields>;
  nodes: Array<Story_Enum_Block_Type>;
};

/** aggregate fields of "story_enum.block_type" */
export type Story_Enum_Block_Type_Aggregate_Fields = {
  __typename?: 'story_enum_block_type_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Story_Enum_Block_Type_Max_Fields>;
  min?: Maybe<Story_Enum_Block_Type_Min_Fields>;
};


/** aggregate fields of "story_enum.block_type" */
export type Story_Enum_Block_Type_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Story_Enum_Block_Type_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "story_enum.block_type". All fields are combined with a logical 'AND'. */
export type Story_Enum_Block_Type_Bool_Exp = {
  _and?: InputMaybe<Array<Story_Enum_Block_Type_Bool_Exp>>;
  _not?: InputMaybe<Story_Enum_Block_Type_Bool_Exp>;
  _or?: InputMaybe<Array<Story_Enum_Block_Type_Bool_Exp>>;
  description?: InputMaybe<String_Comparison_Exp>;
  type?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "story_enum.block_type" */
export enum Story_Enum_Block_Type_Constraint {
  /** unique or primary key constraint */
  BlockTypePkey = 'block_type_pkey'
}

export enum Story_Enum_Block_Type_Enum {
  /** An arbitrary block of code */
  Code = 'Code',
  /** a basic heading containing a level and text */
  Header = 'header',
  /** a basic paragraph containing text */
  Paragraph = 'paragraph'
}

/** Boolean expression to compare columns of type "story_enum_block_type_enum". All fields are combined with logical 'AND'. */
export type Story_Enum_Block_Type_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Story_Enum_Block_Type_Enum>;
  _in?: InputMaybe<Array<Story_Enum_Block_Type_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Story_Enum_Block_Type_Enum>;
  _nin?: InputMaybe<Array<Story_Enum_Block_Type_Enum>>;
};

/** input type for inserting data into table "story_enum.block_type" */
export type Story_Enum_Block_Type_Insert_Input = {
  description?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Story_Enum_Block_Type_Max_Fields = {
  __typename?: 'story_enum_block_type_max_fields';
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Story_Enum_Block_Type_Min_Fields = {
  __typename?: 'story_enum_block_type_min_fields';
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "story_enum.block_type" */
export type Story_Enum_Block_Type_Mutation_Response = {
  __typename?: 'story_enum_block_type_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Story_Enum_Block_Type>;
};

/** on_conflict condition type for table "story_enum.block_type" */
export type Story_Enum_Block_Type_On_Conflict = {
  constraint: Story_Enum_Block_Type_Constraint;
  update_columns?: Array<Story_Enum_Block_Type_Update_Column>;
  where?: InputMaybe<Story_Enum_Block_Type_Bool_Exp>;
};

/** Ordering options when selecting data from "story_enum.block_type". */
export type Story_Enum_Block_Type_Order_By = {
  description?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
};

/** primary key columns input for table: story_enum_block_type */
export type Story_Enum_Block_Type_Pk_Columns_Input = {
  type: Scalars['String'];
};

/** select columns of table "story_enum.block_type" */
export enum Story_Enum_Block_Type_Select_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Type = 'type'
}

/** input type for updating data in table "story_enum.block_type" */
export type Story_Enum_Block_Type_Set_Input = {
  description?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
};

/** update columns of table "story_enum.block_type" */
export enum Story_Enum_Block_Type_Update_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Type = 'type'
}

/** Enum table representing the visibility state of a given story */
export type Story_Enum_Visibility_State = {
  __typename?: 'story_enum_visibility_state';
  description: Scalars['String'];
  state: Scalars['String'];
};

/** aggregated selection of "story_enum.visibility_state" */
export type Story_Enum_Visibility_State_Aggregate = {
  __typename?: 'story_enum_visibility_state_aggregate';
  aggregate?: Maybe<Story_Enum_Visibility_State_Aggregate_Fields>;
  nodes: Array<Story_Enum_Visibility_State>;
};

/** aggregate fields of "story_enum.visibility_state" */
export type Story_Enum_Visibility_State_Aggregate_Fields = {
  __typename?: 'story_enum_visibility_state_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Story_Enum_Visibility_State_Max_Fields>;
  min?: Maybe<Story_Enum_Visibility_State_Min_Fields>;
};


/** aggregate fields of "story_enum.visibility_state" */
export type Story_Enum_Visibility_State_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Story_Enum_Visibility_State_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "story_enum.visibility_state". All fields are combined with a logical 'AND'. */
export type Story_Enum_Visibility_State_Bool_Exp = {
  _and?: InputMaybe<Array<Story_Enum_Visibility_State_Bool_Exp>>;
  _not?: InputMaybe<Story_Enum_Visibility_State_Bool_Exp>;
  _or?: InputMaybe<Array<Story_Enum_Visibility_State_Bool_Exp>>;
  description?: InputMaybe<String_Comparison_Exp>;
  state?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "story_enum.visibility_state" */
export enum Story_Enum_Visibility_State_Constraint {
  /** unique or primary key constraint */
  VisibilityStatePkey = 'visibility_state_pkey'
}

export enum Story_Enum_Visibility_State_Enum {
  /** A draft story is only visible to the user that created it */
  Draft = 'Draft',
  /** A published story is visible to all users */
  Published = 'Published'
}

/** Boolean expression to compare columns of type "story_enum_visibility_state_enum". All fields are combined with logical 'AND'. */
export type Story_Enum_Visibility_State_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Story_Enum_Visibility_State_Enum>;
  _in?: InputMaybe<Array<Story_Enum_Visibility_State_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Story_Enum_Visibility_State_Enum>;
  _nin?: InputMaybe<Array<Story_Enum_Visibility_State_Enum>>;
};

/** input type for inserting data into table "story_enum.visibility_state" */
export type Story_Enum_Visibility_State_Insert_Input = {
  description?: InputMaybe<Scalars['String']>;
  state?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Story_Enum_Visibility_State_Max_Fields = {
  __typename?: 'story_enum_visibility_state_max_fields';
  description?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Story_Enum_Visibility_State_Min_Fields = {
  __typename?: 'story_enum_visibility_state_min_fields';
  description?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "story_enum.visibility_state" */
export type Story_Enum_Visibility_State_Mutation_Response = {
  __typename?: 'story_enum_visibility_state_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Story_Enum_Visibility_State>;
};

/** on_conflict condition type for table "story_enum.visibility_state" */
export type Story_Enum_Visibility_State_On_Conflict = {
  constraint: Story_Enum_Visibility_State_Constraint;
  update_columns?: Array<Story_Enum_Visibility_State_Update_Column>;
  where?: InputMaybe<Story_Enum_Visibility_State_Bool_Exp>;
};

/** Ordering options when selecting data from "story_enum.visibility_state". */
export type Story_Enum_Visibility_State_Order_By = {
  description?: InputMaybe<Order_By>;
  state?: InputMaybe<Order_By>;
};

/** primary key columns input for table: story_enum_visibility_state */
export type Story_Enum_Visibility_State_Pk_Columns_Input = {
  state: Scalars['String'];
};

/** select columns of table "story_enum.visibility_state" */
export enum Story_Enum_Visibility_State_Select_Column {
  /** column name */
  Description = 'description',
  /** column name */
  State = 'state'
}

/** input type for updating data in table "story_enum.visibility_state" */
export type Story_Enum_Visibility_State_Set_Input = {
  description?: InputMaybe<Scalars['String']>;
  state?: InputMaybe<Scalars['String']>;
};

/** update columns of table "story_enum.visibility_state" */
export enum Story_Enum_Visibility_State_Update_Column {
  /** column name */
  Description = 'description',
  /** column name */
  State = 'state'
}

/** columns and relationships of "story.story" */
export type Story_Story = {
  __typename?: 'story_story';
  /** An object relationship */
  author: User_User;
  author_id: Scalars['uuid'];
  /** An array relationship */
  blocks: Array<Story_Block>;
  /** An aggregate relationship */
  blocks_aggregate: Story_Block_Aggregate;
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  subtitle: Scalars['String'];
  title: Scalars['String'];
  updated_at: Scalars['timestamptz'];
  visibility: Story_Enum_Visibility_State_Enum;
};


/** columns and relationships of "story.story" */
export type Story_StoryBlocksArgs = {
  distinct_on?: InputMaybe<Array<Story_Block_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Story_Block_Order_By>>;
  where?: InputMaybe<Story_Block_Bool_Exp>;
};


/** columns and relationships of "story.story" */
export type Story_StoryBlocks_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Story_Block_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Story_Block_Order_By>>;
  where?: InputMaybe<Story_Block_Bool_Exp>;
};

/** aggregated selection of "story.story" */
export type Story_Story_Aggregate = {
  __typename?: 'story_story_aggregate';
  aggregate?: Maybe<Story_Story_Aggregate_Fields>;
  nodes: Array<Story_Story>;
};

/** aggregate fields of "story.story" */
export type Story_Story_Aggregate_Fields = {
  __typename?: 'story_story_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Story_Story_Max_Fields>;
  min?: Maybe<Story_Story_Min_Fields>;
};


/** aggregate fields of "story.story" */
export type Story_Story_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Story_Story_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "story.story". All fields are combined with a logical 'AND'. */
export type Story_Story_Bool_Exp = {
  _and?: InputMaybe<Array<Story_Story_Bool_Exp>>;
  _not?: InputMaybe<Story_Story_Bool_Exp>;
  _or?: InputMaybe<Array<Story_Story_Bool_Exp>>;
  author?: InputMaybe<User_User_Bool_Exp>;
  author_id?: InputMaybe<Uuid_Comparison_Exp>;
  blocks?: InputMaybe<Story_Block_Bool_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  subtitle?: InputMaybe<String_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  visibility?: InputMaybe<Story_Enum_Visibility_State_Enum_Comparison_Exp>;
};

/** unique or primary key constraints on table "story.story" */
export enum Story_Story_Constraint {
  /** unique or primary key constraint */
  StoryPkey = 'story_pkey'
}

/** input type for inserting data into table "story.story" */
export type Story_Story_Insert_Input = {
  author?: InputMaybe<User_User_Obj_Rel_Insert_Input>;
  author_id?: InputMaybe<Scalars['uuid']>;
  blocks?: InputMaybe<Story_Block_Arr_Rel_Insert_Input>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  subtitle?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  visibility?: InputMaybe<Story_Enum_Visibility_State_Enum>;
};

/** aggregate max on columns */
export type Story_Story_Max_Fields = {
  __typename?: 'story_story_max_fields';
  author_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  subtitle?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Story_Story_Min_Fields = {
  __typename?: 'story_story_min_fields';
  author_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  subtitle?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "story.story" */
export type Story_Story_Mutation_Response = {
  __typename?: 'story_story_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Story_Story>;
};

/** on_conflict condition type for table "story.story" */
export type Story_Story_On_Conflict = {
  constraint: Story_Story_Constraint;
  update_columns?: Array<Story_Story_Update_Column>;
  where?: InputMaybe<Story_Story_Bool_Exp>;
};

/** Ordering options when selecting data from "story.story". */
export type Story_Story_Order_By = {
  author?: InputMaybe<User_User_Order_By>;
  author_id?: InputMaybe<Order_By>;
  blocks_aggregate?: InputMaybe<Story_Block_Aggregate_Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  subtitle?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  visibility?: InputMaybe<Order_By>;
};

/** primary key columns input for table: story_story */
export type Story_Story_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "story.story" */
export enum Story_Story_Select_Column {
  /** column name */
  AuthorId = 'author_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Subtitle = 'subtitle',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Visibility = 'visibility'
}

/** input type for updating data in table "story.story" */
export type Story_Story_Set_Input = {
  author_id?: InputMaybe<Scalars['uuid']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  subtitle?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  visibility?: InputMaybe<Story_Enum_Visibility_State_Enum>;
};

/** update columns of table "story.story" */
export enum Story_Story_Update_Column {
  /** column name */
  AuthorId = 'author_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Subtitle = 'subtitle',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Visibility = 'visibility'
}

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "story.block" */
  story_block: Array<Story_Block>;
  /** fetch aggregated fields from the table: "story.block" */
  story_block_aggregate: Story_Block_Aggregate;
  /** fetch data from the table: "story.block" using primary key columns */
  story_block_by_pk?: Maybe<Story_Block>;
  /** fetch data from the table: "story_enum.block_type" */
  story_enum_block_type: Array<Story_Enum_Block_Type>;
  /** fetch aggregated fields from the table: "story_enum.block_type" */
  story_enum_block_type_aggregate: Story_Enum_Block_Type_Aggregate;
  /** fetch data from the table: "story_enum.block_type" using primary key columns */
  story_enum_block_type_by_pk?: Maybe<Story_Enum_Block_Type>;
  /** fetch data from the table: "story_enum.visibility_state" */
  story_enum_visibility_state: Array<Story_Enum_Visibility_State>;
  /** fetch aggregated fields from the table: "story_enum.visibility_state" */
  story_enum_visibility_state_aggregate: Story_Enum_Visibility_State_Aggregate;
  /** fetch data from the table: "story_enum.visibility_state" using primary key columns */
  story_enum_visibility_state_by_pk?: Maybe<Story_Enum_Visibility_State>;
  /** fetch data from the table: "story.story" */
  story_story: Array<Story_Story>;
  /** fetch aggregated fields from the table: "story.story" */
  story_story_aggregate: Story_Story_Aggregate;
  /** fetch data from the table: "story.story" using primary key columns */
  story_story_by_pk?: Maybe<Story_Story>;
  /** fetch data from the table: "user.user" */
  user_user: Array<User_User>;
  /** fetch aggregated fields from the table: "user.user" */
  user_user_aggregate: User_User_Aggregate;
  /** fetch data from the table: "user.user" using primary key columns */
  user_user_by_pk?: Maybe<User_User>;
};


export type Subscription_RootStory_BlockArgs = {
  distinct_on?: InputMaybe<Array<Story_Block_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Story_Block_Order_By>>;
  where?: InputMaybe<Story_Block_Bool_Exp>;
};


export type Subscription_RootStory_Block_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Story_Block_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Story_Block_Order_By>>;
  where?: InputMaybe<Story_Block_Bool_Exp>;
};


export type Subscription_RootStory_Block_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootStory_Enum_Block_TypeArgs = {
  distinct_on?: InputMaybe<Array<Story_Enum_Block_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Story_Enum_Block_Type_Order_By>>;
  where?: InputMaybe<Story_Enum_Block_Type_Bool_Exp>;
};


export type Subscription_RootStory_Enum_Block_Type_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Story_Enum_Block_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Story_Enum_Block_Type_Order_By>>;
  where?: InputMaybe<Story_Enum_Block_Type_Bool_Exp>;
};


export type Subscription_RootStory_Enum_Block_Type_By_PkArgs = {
  type: Scalars['String'];
};


export type Subscription_RootStory_Enum_Visibility_StateArgs = {
  distinct_on?: InputMaybe<Array<Story_Enum_Visibility_State_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Story_Enum_Visibility_State_Order_By>>;
  where?: InputMaybe<Story_Enum_Visibility_State_Bool_Exp>;
};


export type Subscription_RootStory_Enum_Visibility_State_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Story_Enum_Visibility_State_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Story_Enum_Visibility_State_Order_By>>;
  where?: InputMaybe<Story_Enum_Visibility_State_Bool_Exp>;
};


export type Subscription_RootStory_Enum_Visibility_State_By_PkArgs = {
  state: Scalars['String'];
};


export type Subscription_RootStory_StoryArgs = {
  distinct_on?: InputMaybe<Array<Story_Story_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Story_Story_Order_By>>;
  where?: InputMaybe<Story_Story_Bool_Exp>;
};


export type Subscription_RootStory_Story_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Story_Story_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Story_Story_Order_By>>;
  where?: InputMaybe<Story_Story_Bool_Exp>;
};


export type Subscription_RootStory_Story_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootUser_UserArgs = {
  distinct_on?: InputMaybe<Array<User_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_User_Order_By>>;
  where?: InputMaybe<User_User_Bool_Exp>;
};


export type Subscription_RootUser_User_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_User_Order_By>>;
  where?: InputMaybe<User_User_Bool_Exp>;
};


export type Subscription_RootUser_User_By_PkArgs = {
  id: Scalars['uuid'];
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']>;
  _gt?: InputMaybe<Scalars['timestamptz']>;
  _gte?: InputMaybe<Scalars['timestamptz']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamptz']>;
  _lte?: InputMaybe<Scalars['timestamptz']>;
  _neq?: InputMaybe<Scalars['timestamptz']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>;
};

/** columns and relationships of "user.user" */
export type User_User = {
  __typename?: 'user_user';
  email: Scalars['String'];
  first_name: Scalars['String'];
  id: Scalars['uuid'];
  last_name: Scalars['String'];
};

/** aggregated selection of "user.user" */
export type User_User_Aggregate = {
  __typename?: 'user_user_aggregate';
  aggregate?: Maybe<User_User_Aggregate_Fields>;
  nodes: Array<User_User>;
};

/** aggregate fields of "user.user" */
export type User_User_Aggregate_Fields = {
  __typename?: 'user_user_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<User_User_Max_Fields>;
  min?: Maybe<User_User_Min_Fields>;
};


/** aggregate fields of "user.user" */
export type User_User_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<User_User_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "user.user". All fields are combined with a logical 'AND'. */
export type User_User_Bool_Exp = {
  _and?: InputMaybe<Array<User_User_Bool_Exp>>;
  _not?: InputMaybe<User_User_Bool_Exp>;
  _or?: InputMaybe<Array<User_User_Bool_Exp>>;
  email?: InputMaybe<String_Comparison_Exp>;
  first_name?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  last_name?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "user.user" */
export enum User_User_Constraint {
  /** unique or primary key constraint */
  UserEmailKey = 'user_email_key',
  /** unique or primary key constraint */
  UserPkey = 'user_pkey'
}

/** input type for inserting data into table "user.user" */
export type User_User_Insert_Input = {
  email?: InputMaybe<Scalars['String']>;
  first_name?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  last_name?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type User_User_Max_Fields = {
  __typename?: 'user_user_max_fields';
  email?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  last_name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type User_User_Min_Fields = {
  __typename?: 'user_user_min_fields';
  email?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  last_name?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "user.user" */
export type User_User_Mutation_Response = {
  __typename?: 'user_user_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<User_User>;
};

/** input type for inserting object relation for remote table "user.user" */
export type User_User_Obj_Rel_Insert_Input = {
  data: User_User_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<User_User_On_Conflict>;
};

/** on_conflict condition type for table "user.user" */
export type User_User_On_Conflict = {
  constraint: User_User_Constraint;
  update_columns?: Array<User_User_Update_Column>;
  where?: InputMaybe<User_User_Bool_Exp>;
};

/** Ordering options when selecting data from "user.user". */
export type User_User_Order_By = {
  email?: InputMaybe<Order_By>;
  first_name?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  last_name?: InputMaybe<Order_By>;
};

/** primary key columns input for table: user_user */
export type User_User_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "user.user" */
export enum User_User_Select_Column {
  /** column name */
  Email = 'email',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  Id = 'id',
  /** column name */
  LastName = 'last_name'
}

/** input type for updating data in table "user.user" */
export type User_User_Set_Input = {
  email?: InputMaybe<Scalars['String']>;
  first_name?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  last_name?: InputMaybe<Scalars['String']>;
};

/** update columns of table "user.user" */
export enum User_User_Update_Column {
  /** column name */
  Email = 'email',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  Id = 'id',
  /** column name */
  LastName = 'last_name'
}

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']>;
  _gt?: InputMaybe<Scalars['uuid']>;
  _gte?: InputMaybe<Scalars['uuid']>;
  _in?: InputMaybe<Array<Scalars['uuid']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['uuid']>;
  _lte?: InputMaybe<Scalars['uuid']>;
  _neq?: InputMaybe<Scalars['uuid']>;
  _nin?: InputMaybe<Array<Scalars['uuid']>>;
};

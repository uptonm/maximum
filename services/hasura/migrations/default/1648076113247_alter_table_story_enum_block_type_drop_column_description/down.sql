comment on column "story_enum"."block_type"."description" is E'The type of blocks that are supported by the client';
alter table "story_enum"."block_type" alter column "description" drop not null;
alter table "story_enum"."block_type" add column "description" int4;

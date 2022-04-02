alter table "story"."block" alter column "content" drop not null;
alter table "story"."block" add column "content" text;

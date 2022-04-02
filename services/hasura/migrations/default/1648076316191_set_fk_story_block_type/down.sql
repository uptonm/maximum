alter table "story"."block" drop constraint "block_type_fkey",
  add constraint "block_type_fkey"
  foreign key ("type")
  references "story"."block_type"
  ("type") on update cascade on delete restrict;

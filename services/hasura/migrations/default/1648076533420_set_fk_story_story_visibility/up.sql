alter table "story"."story"
  add constraint "story_visibility_fkey"
  foreign key ("visibility")
  references "story_enum"."visibility_state"
  ("state") on update cascade on delete restrict;

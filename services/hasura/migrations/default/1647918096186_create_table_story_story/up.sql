CREATE TABLE "story"."story" ("id" uuid NOT NULL DEFAULT gen_random_uuid(), "title" text NOT NULL, "author_id" uuid NOT NULL, "created_at" timestamptz NOT NULL DEFAULT now(), "updated_at" timestamptz NOT NULL DEFAULT now(), PRIMARY KEY ("id") , FOREIGN KEY ("author_id") REFERENCES "user"."user"("id") ON UPDATE cascade ON DELETE cascade);
CREATE OR REPLACE FUNCTION "story"."set_current_timestamp_updated_at"()
RETURNS TRIGGER AS $$
DECLARE
  _new record;
BEGIN
  _new := NEW;
  _new."updated_at" = NOW();
  RETURN _new;
END;
$$ LANGUAGE plpgsql;
CREATE TRIGGER "set_story_story_updated_at"
BEFORE UPDATE ON "story"."story"
FOR EACH ROW
EXECUTE PROCEDURE "story"."set_current_timestamp_updated_at"();
COMMENT ON TRIGGER "set_story_story_updated_at" ON "story"."story" 
IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE EXTENSION IF NOT EXISTS pgcrypto;

CREATE TABLE "story"."block" ("id" uuid NOT NULL DEFAULT gen_random_uuid(), "story_id" uuid NOT NULL, "seq" integer NOT NULL, "content" text NOT NULL, PRIMARY KEY ("id") , FOREIGN KEY ("story_id") REFERENCES "story"."story"("id") ON UPDATE cascade ON DELETE cascade, UNIQUE ("story_id", "seq"));
CREATE EXTENSION IF NOT EXISTS pgcrypto;

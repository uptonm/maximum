CREATE TABLE "user"."user" ("id" uuid NOT NULL DEFAULT gen_random_uuid(), "first_name" text NOT NULL, "last_name" text NOT NULL, "email" text NOT NULL, PRIMARY KEY ("id") , UNIQUE ("email"));
CREATE EXTENSION IF NOT EXISTS pgcrypto;

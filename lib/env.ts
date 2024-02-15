import zod from "zod";

const envSchema = zod.object({
  DATABASE_URL: zod.string().nullable(),
  AUTH_GOOGLE_ID: zod.string().nullable(),
  AUTH_GOOGLE_SECRET: zod.string().nullable(),
  NEXTAUTH_URL: zod.string().nullable(),
  NEXTAUTH_SECRET: zod.string().nullable(),
});

export const env = envSchema.parse(process.env);

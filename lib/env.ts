import zod from "zod";

const envSchema = zod.object({
  DATABASE_URL: zod.string(),
  AUTH_GOOGLE_ID: zod.string(),
  AUTH_GOOGLE_SECRET: zod.string(),
  NEXTAUTH_URL: zod.string(),
  NEXTAUTH_SECRET: zod.string(),
});

export const env = envSchema.parse(process.env);

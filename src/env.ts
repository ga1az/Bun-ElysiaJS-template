import { z } from 'zod'

import { createEnv } from "@t3-oss/env-core";

export const env = createEnv({
  server: {
    NEXTAUTH_SECRET: z.string(),
    DB_DATABASE: z.string(),
    DB_HOST: z.string(),
    DB_USER: z.string(),
    DB_PASSWORD: z.string(),
    DB_PORT: z.string(),
    CLERK_JWKS_URL: z.string(),
    CLERK_PEM_PUBLIC_KEY: z.string(),
  },
  runtimeEnv: process.env,
})
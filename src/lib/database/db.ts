import { Pool } from "pg";
import { Kysely, PostgresDialect } from "kysely";
import { env } from "../../env";
import { Database } from "./types";


const dialect = new PostgresDialect({
  pool: new Pool({
    database: env.DB_DATABASE,
    host: env.DB_HOST,
    user: env.DB_USER,
    password: env.DB_PASSWORD,
    port: Number(env.DB_PORT),
    max: 10,
  }),
});

export const db = new Kysely<Database>({
  dialect,
});
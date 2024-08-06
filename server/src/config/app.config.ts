import { join } from "path";

export const EnvConfiguration = () => ({
  environment: process.env.NODE_ENV || 'dev',
  port: +process.env.PORT || 3007,
  sqliteDb: join(__dirname, '..', '..', 'database', process.env.SQLITE_DB || 'database.sqlite'),
});

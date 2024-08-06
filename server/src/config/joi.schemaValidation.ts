import * as Joi from 'joi';

export const JoiSchemaValidation = Joi.object({
  PORT: Joi.number().default(3007),
  NODE_ENV: Joi.string().default('dev'),
  SQLITE_DB: Joi.string().default('database.sqlite'),
});

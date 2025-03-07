import type { ZodError } from "zod";

import { config } from "dotenv";
import { expand } from "dotenv-expand";
import { z } from "zod";

expand(config());

const EnvSchema = z.object({
  NODE_ENV: z.string().default("development"),
  PORT: z.coerce.number().default(999),
  LOG_LEVEL: z.enum(["fatal", "error", "warn", "info", "debug", "trace"]),
});

export type EnvT = z.infer<typeof EnvSchema>;

// eslint-disable-next-line import/no-mutable-exports
let env: EnvT;
try {
// eslint-disable-next-line node/no-process-env
  env = EnvSchema.parse(process.env);
}
catch (e) {
  const error = e as ZodError;
  console.error("Invalid env:");
  console.error(error.flatten().fieldErrors);
  process.exit(1);
}

export default env;
import { OpenAPIHono } from "@hono/zod-openapi";

import type { AppBindings } from "@/lib/types.js";

import envIn from "@/env.js";
import { pinoLogger } from "@/middlewares/pino-logger.js";

function createApp() {
  const app = new OpenAPIHono<AppBindings>({ strict: false });

  app.use(pinoLogger());

  app.get("/favicon.ico", (c) => {
    const emoji = "😆";
    c.header("Content-Type", "image/svg+xml");
    // eslint-disable-next-line style/max-len
    return c.body(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" x="-0.1em" font-size="90">${emoji}</text></svg>`);
  });

  app.notFound(c => c.json(
    { message: `api not found on path ${c.req.path}` },
    404,
  ));

  app.onError((err, c) => {
    console.error(err);
    const env = c.env?.NODE_ENV || envIn.NODE_ENV;
    return c.json(
      {
        message: `Error ${err.message}`,
        stack: env === "production" ? undefined : err.stack,
      },
      500,
    );
  });

  return app;
}

export default createApp;
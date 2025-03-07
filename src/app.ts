import CreateApp from "@/lib/create-app.js";

const app = CreateApp();

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

app.get("/error", (c) => {
  c.status(422);
  c.var.logger.debug("Wow! Log.");
  throw new Error("Oh No!"); // test onError handler below
});

export default app;

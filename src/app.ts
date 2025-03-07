import CreateApp from "@/lib/create-app.js";
import configureOpenAPI from "@/lib/configure-open-api.js";
import index from '@/routes/index.route.js';

const app = CreateApp();

configureOpenAPI(app);

const routes = [
  index
];

routes.forEach((route) => {
  app.route("/", route);
})
export default app;

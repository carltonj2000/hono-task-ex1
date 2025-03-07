import { createRouter } from "@/lib/create-app.js";
import { createRoute, z } from "@hono/zod-openapi";

const router = createRouter().openapi(createRoute({
    method: 'get',
    path: '/',
    responses: {
      200: {
        content: {
          'application/json': {
            schema: z.object({
                message: z.string(),
            }),
          },
        },
        description: 'Task API Index',
      },
    },
}), (c) => {
    return c.json({message: "hi"})
});

export default router;
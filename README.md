# Hono, OpenAPI, drizzle, zod

```
npm install
npm run dev
```

```
open http://localhost:3000
```

## Code History

The code in this repository is based on the following:

- https://youtu.be/sNh9PoM9sUE?si=iGnCikTLMZklnjEv

Eslint settings are based of the following:

- https://github.com/w3cj/hono-open-api-starter/blob/main/eslint.config.mjs

## Create History

Make sure the eslint extension is installed for vscode.

```bash
pnpm create hono@latest
cd hono-task-ex1
pnpm dlx @antfu/eslint-config@latest
pnpm i # to install dependencies added to package.json from the setup above
pnpm i @hono/zod-openapi zod
pnpm add hono-pino pino
pnpm i pino-pretty
pnpm i dotenv dotenv-expand
```

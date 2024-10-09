import { Elysia, t } from "elysia";
import { swagger } from "@elysiajs/swagger"

import { note } from "./note";
const app = new Elysia()
  .use(swagger())
  .use(note)
  .listen(8088);

console.log(
  `🦊 Elysia is running at http://${app.server?.hostname}:${app.server?.port}/`
);

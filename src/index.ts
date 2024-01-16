import cors from "@elysiajs/cors";
import { Elysia } from "elysia";
import { httpV1 } from "./http/v1";
import swagger from "@elysiajs/swagger";

const app = new Elysia()
  .use(cors({
    credentials: true,
    allowedHeaders: ["Content-Type"],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS", "HEAD"],
    origin: (request): boolean => {
      const origin = request.headers.get('origin')
      if (!origin) {
        return false
      }
      return true
    }
  }))
  .use(swagger({
    documentation:{
      info:{
        title: "PideSimple API",
        version: "0.0.1",
      }
    }
  }))
  .use(httpV1)


app.listen(3030)

console.log(
  `🔥 HTTP server running at ${app.server?.hostname}:${app.server?.port}`,
)
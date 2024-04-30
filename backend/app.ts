import express, { Request } from "express";
import cors from "cors";
import morgan from "morgan";
const app = express();
import testRouter from "./controllers/test";

morgan.token("payload", (request: Request) => {
  if (request.body && typeof request.body === "object") {
    return JSON.stringify(request.body);
  }
  return "-";
});

app.use(
  morgan(
    ":method :url :status :res[content-length] - :response-time ms :payload"
  )
);
app.use(cors());
app.use("/test", testRouter);

export default app;

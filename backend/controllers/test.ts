import express, {Request, Response } from "express";

const testRouter = express.Router();

testRouter.get("/", (request: Request, response: Response) => {
    response.status(200).end("All gud")
})

export default testRouter;
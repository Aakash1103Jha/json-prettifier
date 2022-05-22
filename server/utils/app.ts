import express, { Application, Request, Response } from "express"
import cors from "cors"
import { resolve } from "path"

import uploadRouter from "../routes/upload-route"

const app: Application = express()
const { MODE } = process.env

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())

if (MODE !== "dev") {
	app.use(express.static(resolve(__dirname, "build")))
} else {
	app.use(express.static(resolve(__dirname, "..", "..", "client", "build")))
}

app.get("/api", async (req: Request, res: Response) => {
	res.status(200).send("Welcome!")
})
app.use("/api/file", uploadRouter)

app.use("*", async (req: Request, res: Response) => {
	res.sendFile(resolve(__dirname, "build", "index.html"))
})

export default app

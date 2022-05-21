import express, { Application, Request, Response } from "express"
import cors from "cors"
import { resolve } from "path"

const app: Application = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(resolve(__dirname, "..", "..", "client", "build")))
app.use(cors())

app.get("/api", async (req: Request, res: Response) => {
	res.status(200).send("Welcome!")
})

app.use("*", async (req: Request, res: Response) => {
	res.sendFile(resolve(__dirname, "..", "..", "client", "build", "index.html"))
})

export default app

import multer, { FileFilterCallback } from "multer"
import { Request } from "express"
import { mkdirSync } from "fs"
import { resolve } from "path"

const fileTypes = ["application/json"]

type DestinationCallback = (error: Error | null, destination: string) => void
type FileNameCallback = (error: Error | null, filename: string) => void

const storage = multer.diskStorage({
	destination: (req: Request, file: Express.Multer.File, cb: DestinationCallback): void => {
		const path = resolve(__dirname, "..", "temp")
		mkdirSync(path, { recursive: true })
		cb(null, path)
	},
	filename: (req: Request, file: Express.Multer.File, cb: FileNameCallback) => {
		cb(null, `${Date.now()}-${file.originalname}`)
	},
})

const fileFilter = (req: Request, file: Express.Multer.File, cb: FileFilterCallback): void => {
	if (fileTypes.includes(file.mimetype)) {
		cb(null, true)
	} else {
		cb(null, false)
	}
}

const fileUploadHandler = multer({ storage, fileFilter })

export default fileUploadHandler

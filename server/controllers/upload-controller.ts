import { Request, Response } from "express"
import { readFile, unlink } from "fs/promises"
import { promisify } from "util"

const unlinkFile = promisify(unlink)

export const uploadJsonFile = async (req: Request, res: Response) => {
	if (!req.file) return res.status(400).json({ message: "Did you miss uploading the file?" })
	const { path } = req.file!
	try {
		const data = await readFile(path, { encoding: "utf-8" })
		if (data) unlinkFile(path)
		return res.status(200).json(data)
	} catch (err) {
		console.error(`Upload error: ${err}`)
		return res.status(500).json({ message: (err as Error).message })
	}
}

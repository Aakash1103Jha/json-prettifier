import { Router } from "express"
import { uploadJsonFile } from "../controllers/upload-controller"
import fileUploadHandler from "../utils/multer.config"

const uploadRouter = Router()

uploadRouter.post("/upload", fileUploadHandler.single("json_file"), uploadJsonFile)

export default uploadRouter

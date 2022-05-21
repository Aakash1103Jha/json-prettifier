require("dotenv/config")
require("regenerator-runtime")

import app from "./utils/app"

// declare global {
// 	namespace Express {
// 		interface Request {
// 			user: Jwt
// 		}
// 	}
// }

const PORT: string | number = process.env.PORT || 4000

const connection = app.listen(PORT, () => console.info(`Server running on port ${PORT}`))

export default connection

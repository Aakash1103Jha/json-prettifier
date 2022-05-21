import { type FC } from "react"
import { Route, Routes } from "react-router"
import Navbar from "./components/Navbar/Navbar"

const App: FC = () => {
	return (
		<div className={`App`}>
			<Navbar />
			<Routes>
				<Route path="/" element={<p>Homepage</p>} />
			</Routes>
		</div>
	)
}

export default App

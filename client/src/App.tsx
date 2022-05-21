import { type FC } from "react"
import { Route, Routes } from "react-router"
import Navbar from "./components/Navbar/Navbar"
import Prettify from "./pages/Prettify/Prettify"

const App: FC = () => {
	return (
		<div className={`App`}>
			<Navbar />
			<Routes>
				{/* <Route path="/" element={<p>Homepage</p>} /> */}
				<Route path="/" element={<Prettify />} />
			</Routes>
		</div>
	)
}

export default App

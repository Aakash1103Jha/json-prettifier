import { type FC } from "react"
import { Route, Routes } from "react-router"
import Navbar from "./components/Navbar/Navbar"
import FormatJson from "./pages/FormatJson/FormatJson"

const App: FC = () => {
	return (
		<div className={`App`}>
			<Navbar />
			<Routes>
				{/* <Route path="/" element={<p>Homepage</p>} /> */}
				<Route path="/" element={<FormatJson />} />
			</Routes>
		</div>
	)
}

export default App

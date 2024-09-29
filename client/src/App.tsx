import { MainLayout } from "./layouts/main.layout";
import "./styles/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<MainLayout/>} />
				<Route path="/admin" element={<h1>Admin</h1>} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;

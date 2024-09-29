import { Routes, Route } from "react-router-dom";
import { HomePage } from "../Pages/Home/home.page";

export const MainLayout = () => {
	return (
		<>
			<div className="header">
				<h1>Header</h1>
			</div>
            <div className="page-content">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                </Routes>
            </div>
			<div className="footer">
				<h1>Footer</h1>
			</div>
		</>
	);
};

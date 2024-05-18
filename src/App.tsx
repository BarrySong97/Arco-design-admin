import { RouterProvider } from "react-router-dom";
import "./App.css";
import { reactRoutesConfig } from "./routes";

function App() {
	return (
		<>
			<RouterProvider router={reactRoutesConfig} />
		</>
	);
}

export default App;

import { createRoot } from "react-dom/client";
import { InputCard } from "./Components/InputCards";
import { Header } from "./Components/Header";
import { TodoCards } from "./Components/TodoCards";
import "./index.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

function Page() {
	return (
		<div>
			<Header />
			<InputCard />
			<TodoCards />
			<TodoCards />
		</div>
	);
}

root.render(<Page />);

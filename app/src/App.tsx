import "./App.css";
import { doStuff } from "lib";

const App = () => {
	doStuff();
	return (
		<div className="content">
			<h1>Rsbuild with React</h1>
			<p>Start building amazing things with Rsbuild.</p>
		</div>
	);
};

export default App;

import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import DogDetails from "./DogDetails";

const dogs = [
	{
		"name": "Whiskey",
		"age": 5,
		"src": "whiskey",
		"facts": [
			"Whiskey loves eating popcorn.",
			"Whiskey is a terrible guard dog.",
			"Whiskey wants to cuddle with you!"
		]
	},
	{
		"name": "Duke",
		"age": 3,
		"src": "duke",
		"facts": [
			"Duke believes that ball is life.",
			"Duke likes snow.",
			"Duke enjoys pawing other dogs."
		]
	},
	{
		"name": "Perry",
		"age": 4,
		"src": "perry",
		"facts": [
			"Perry loves all humans.",
			"Perry demolishes all snacks.",
			"Perry hates the rain."
		]
	}
]

function App() {
  return (
    <div className="App">
      <h1>Dog Finder!</h1>
      <BrowserRouter>
        {/* <Nav /> */}
        <Routes>
          {/* <Route path="/dogs" element={<DogList />} /> */}
          <Route path="/dogs/:name" element={<DogDetails dogs={dogs}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

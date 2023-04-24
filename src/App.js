import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import DogDetails from "./DogDetails";
import DogList from "./DogList";
import { useEffect, useState } from "react";
import axios from "axios";


function App() {
	const [dogs, setDogs] = useState(null);
	const [isLoading, setIsLoading] = useState(true);

	async function getDogs() {
		const resp = await axios.get('http://localhost:5001/dogs');
		setDogs(resp.data);
		setIsLoading(false);
	}


	if (isLoading) {
		getDogs();
		return <p>Who let the dogs out?</p>;
	}

  return (
    <div className="App">
      <h1>Dog Finder!</h1>
      <BrowserRouter>
        {/* <Nav /> */}
        <Routes>
          <Route path="/dogs" element={<DogList dogs={dogs} />} />
          <Route path="/dogs/:name" element={<DogDetails dogs={dogs} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

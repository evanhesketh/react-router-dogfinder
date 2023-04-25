import './App.css';
import { Route, BrowserRouter, Routes, Navigate } from 'react-router-dom';
import DogDetails from './DogDetails';
import DogList from './DogList';
import Nav from './Nav';
import { useState, useParams } from 'react';
import axios from 'axios';

/** App for finding dogs.
 *
 * State:
 * -dogs: data collected from dogs API like [{dog}, ...]
 * -isLoading: Boolean (initial: true)
 *
 * Depending on path, show different components.
 *
 * App -> {Nav, Routes}
 */

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
		<div className='App'>
			<h1>Dog Finder!</h1>
			<BrowserRouter>
				<Nav dogs={dogs} />
				<Routes>
					<Route
						path='/dogs'
						element={<DogList dogs={dogs} />}
					/>
					<Route
						path='/dogs/:name'
						render={({ match }) => (
							<DogDetails
								dog={dogs.find(dog => dog.name === match.params.name)}
							/>
						)}
					/>
					<Route
						path='*'
						element={<Navigate to='/dogs' />}
					/>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;

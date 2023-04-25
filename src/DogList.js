import { Link } from 'react-router-dom';

/** Show all dogs.
 *
 * Props:
 * - dogs: array of dog objects [{dog}, ...]
 *
 * Route: /dogs -> DogList
 */

function DogList({ dogs }) {
	return (
		<table>
			<tbody>
				{dogs.map(dog => {
					return (
						<tr key={dog.name}>
							<td>
								<Link to={`/dogs/${dog.name}`}>{dog.name}</Link>
							</td>
							<td>
								<img
									src={`/${dog.src}.jpg`}
									alt={dog.name}
								/>
							</td>
						</tr>
					);
				})}
			</tbody>
		</table>
	);
}

export default DogList;

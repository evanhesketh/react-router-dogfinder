import { useParams, Navigate } from "react-router-dom";
import "./DogDetails.css"

/** Presentational component for a dog.
 *
 * Props:
 * - dogs: array of dog objects [{dog}, ...]
 *
 * Route: /dogs/:name
 * App -> Routes -> DogDetails
 */

function DogDetails({dog}) {

  if (!dog) {
    return <Navigate to="/dogs" />
  }
  return (
    <div className="DogDetails">
      <h2 className="DogDetails-name">{dog.name}</h2>
      <img src={`/${dog.src}.jpg`} alt={dog.name}></img>
      <p className="DogDetails-age">Age: {dog.age}</p>
      Facts:
      <ul className="DogDetails-facts">
        {dog.facts.map(fact => <li key={fact}>{fact}</li>)}
      </ul>
    </div>
  );
}

export default DogDetails;
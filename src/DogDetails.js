import { useParams } from "react-router-dom";

function DogDetails({dogs}) {
  const {name} = useParams();

  const dog = dogs.filter(dog => dog.name === name)[0];

  return (
    <div className="DogDetails">
      <h2 className="DogDetails-name">{dog.name}</h2>
      <img src={`../${dog.src}.jpg`} alt={dog.name}></img>
      <p className="DogDetails-age">Age: {dog.age}</p>
      Facts:
      <ul className="DogDetails-facts">
        {dog.facts.map(fact => <li key={fact}>{fact}</li>)}
      </ul>
    </div>
  );
}

export default DogDetails;
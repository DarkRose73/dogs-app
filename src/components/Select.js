import React, { useEffect, useState } from "react";
import getBreeds from "../helpers/getBreeds";
import Error from "./Error";

const Select = ({ updateDog }) => {
  const [breeds, setBreeds] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    updateBreeds();
  }, []);

  const updateBreeds = () => {
    getBreeds()
      .then((newBreeds) => {
        setBreeds(newBreeds);
      })
      .catch((error) => {
        console.log(error);
        setError("Error al cargar las razas");
      });
  };

  return (
    <div>
      <select onChange={(e) => updateDog(e.target.value)}>
        {breeds.map((breed) => (
          <option value={breed.id} key={breed.id}>
            {breed.name}
          </option>
        ))}
      </select>
      {error && <Error error={error} />}
    </div>
  );
};

export default Select;

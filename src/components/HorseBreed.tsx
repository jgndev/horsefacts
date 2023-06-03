import React, { useState } from "react";
import Breed from "../interfaces/breed.ts";
import axios from "axios";

const HorseBreed = () => {
  const [breed, setBreed] = useState<Breed>();

  const handleClicked = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();

    try {
      const response = await axios.get<Breed>(
        "https://horsefacts-api.jgnovak.dev/api/breeds"
      );

      setBreed(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h1 className="text-2xl">Horse Breed</h1>
      <div>
        {breed && (
          <div>
            <div>Name: {breed.Name}</div>
            <div>Country: {breed.Country}</div>
            <div>
              Colors:
              <ul>
                {breed.Colors.map((color, index) => (
                  <li key={index}>{color}</li>
                ))}
              </ul>
            </div>
            <div>Established: {breed.Established}</div>
          </div>
        )}
      </div>
      <button
        className="rounded-md bg-black px-4 py-3 text-white"
        onClick={handleClicked}
      >
        Get a Horse breed
      </button>
    </>
  );
};

export default HorseBreed;

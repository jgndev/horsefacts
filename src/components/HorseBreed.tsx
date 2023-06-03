import React, {useState} from "react";
import Breed from "../interfaces/breed.ts";
import axios from "axios";

const HorseBreed = () => {

    const [breed, setBreed] = useState<Breed>();

    const handleClicked = async (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault();

        try {
            const response = await axios.get<Breed>('https://horsefacts-api.jgnovak.dev/api/breeds');

            console.log(response);
            console.log(response.data);

            setBreed(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <h1>Horse Breed</h1>
            <p>
                {breed && (
                    <div>
                        <span>Name: {breed.Name}</span>
                        <span>Country: {breed.Country}</span>
                        <span>Colors: {breed.Colors.join(', ')}</span>
                        <span>Established: {breed.Established}</span>
                    </div>
                )}
            </p>
            <button onClick={handleClicked}>Get a Horse breed</button>
        </>
    );
}

export default HorseBreed;
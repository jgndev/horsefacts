import axios from "axios";
import React, { useState } from "react";
import Fact from "../interfaces/fact.ts";

const HorseFact = () => {
  const [fact, setFact] = useState<Fact>();

  const handleClick = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();

    try {
      const response = await axios.get<Fact>(
        "https://horsefacts-api.jgnovak.dev/api/facts"
      );
      console.log(response);

      console.log(response.data);
      setFact(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h1>Fact</h1>
      <h2>{fact && <span>{fact.fact}</span>}</h2>
      <button onClick={handleClick}>Get a Horse fact</button>
    </>
  );
};

export default HorseFact;

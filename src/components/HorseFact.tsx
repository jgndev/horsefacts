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

      setFact(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h1 className="text-2xl">Horse Fact</h1>
      <div>{fact && <span>{fact.fact}</span>}</div>
      <button
        className="rounded-md bg-black px-4 py-3 text-white"
        onClick={handleClick}
      >
        Get a Horse fact
      </button>
    </>
  );
};

export default HorseFact;

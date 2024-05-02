import React, { useState } from "react";

// Define a custom dictionary of words and their corrections
const customDictionary = [
  {
    word: "React",
    meaning: "A JavaScript library for building user interfaces.",
  },

  { word: "Component", meaning: "A reusable building block in React." },

  { word: "State", meaning: "An object that stores data for a component." },
];

const SpellCheckApp = () => {
  const [inputText, setInputText] = useState("");
  const [dictionaryMeaning, setDictionaryMeaning] = useState("");

  const handleInput = (e) => {
    setInputText(e);
  };
  const handleSearch = () => {
    const result = customDictionary.filter(
      (data) => data.word.toLowerCase() == inputText.toLowerCase()
    );
    console.log(result);
    if (result.length) setDictionaryMeaning(result[0].meaning);
    else setDictionaryMeaning("Word not found in the dictionary.");
  };

  return (
    <div>
      <h1>Dictionary App</h1>
      <input
        type="text"
        value={inputText}
        onChange={(e) => handleInput(e.target.value)}
        placeholder="Search for a word..."
      />
      <button onClick={handleSearch}>Search</button>
      <p>
        <b>Definition:</b>
      </p>
      <p>{dictionaryMeaning}</p>
    </div>
  );
};

export default SpellCheckApp;

'use client';

import { useState } from 'react';
import React from 'react';

const CharacterCreationPage = () => {
  const [name, setName] = useState('');
  const [characterClass, setCharacterClass] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (name && characterClass) {
      window.location.href = `/game?name=${encodeURIComponent(name)}&class=${encodeURIComponent(characterClass)}`;
    } else {
      // Optional: handle case where name or class is not selected
      alert("Please enter a name and choose a class.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#2e1a47] to-[#180d26] text-white flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-8">Create Your Character</h1>
      <form onSubmit={handleSubmit} className="bg-[#180d26] p-8 rounded-lg shadow-lg w-full max-w-md">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gold-400 font-bold mb-2">Character Name</label>
          <input
            type="text"
            id="name"
            className="w-full bg-gray-800 border border-gray-700 rounded py-2 px-3 text-white"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <p className="text-gold-400 font-bold mb-2">Choose Your Class</p>
          <div className="grid grid-cols-2 gap-4">
            {['warrior', 'mage', 'rogue', 'healer'].map((c) => (
              <label key={c} className="flex items-center space-x-2 bg-gray-800 p-4 rounded-lg border border-transparent hover:border-purple-500 cursor-pointer">
                <input
                  type="radio"
                  name="class"
                  value={c}
                  className="form-radio text-purple-500"
                  checked={characterClass === c}
                  onChange={(e) => setCharacterClass(e.target.value)}
                />
                <span>{c.charAt(0).toUpperCase() + c.slice(1)}</span>
              </label>
            ))}
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105 shadow-lg"
        >
          Begin Your Journey
        </button>
      </form>
    </div>
  );
};

export default CharacterCreationPage;
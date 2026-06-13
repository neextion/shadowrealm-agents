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
      alert("Please enter a name and choose a class.");
    }
  };

  const pageStyle: React.CSSProperties = {
    minHeight: '100vh',
    background: 'linear-gradient(to bottom, #2e1a47, #180d26)',
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2rem',
  };

  const formStyle: React.CSSProperties = {
    backgroundColor: '#180d26',
    padding: '2rem',
    borderRadius: '8px',
    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.5)',
    width: '100%',
    maxWidth: '450px',
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    backgroundColor: '#2a1d45',
    border: '1px solid #3b0764',
    borderRadius: '4px',
    padding: '0.75rem 1rem',
    color: 'white',
    marginBottom: '1rem',
  };

  const radioLabelStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#2a1d45',
    padding: '1rem',
    borderRadius: '8px',
    border: '2px solid transparent',
    cursor: 'pointer',
    transition: 'border-color 0.2s ease-in-out',
  };

  const submitButtonStyle: React.CSSProperties = {
    width: '100%',
    backgroundColor: '#9333ea',
    color: 'white',
    fontWeight: 'bold',
    padding: '0.75rem 2rem',
    borderRadius: '9999px',
    fontSize: '1.125rem',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.3s ease-in-out',
    boxShadow: '0 5px 15px rgba(147, 51, 234, 0.4)',
  };

  return (
    <div style={pageStyle}>
      <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '2rem', textShadow: '0 0 5px #c084fc' }}>Create Your Character</h1>
      <form onSubmit={handleSubmit} style={formStyle}>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="name" style={{ display: 'block', color: '#FFD700', fontWeight: 'bold', marginBottom: '0.5rem' }}>Character Name</label>
          <input
            type="text"
            id="name"
            style={inputStyle}
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your hero's name"
          />
        </div>
        <div style={{ marginBottom: '1.5rem' }}>
          <p style={{ color: '#FFD700', fontWeight: 'bold', marginBottom: '0.5rem' }}>Choose Your Class</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
            {['Warrior', 'Mage', 'Rogue', 'Healer'].map((c) => (
              <label key={c} style={{ ...radioLabelStyle, borderColor: characterClass === c.toLowerCase() ? '#a855f7' : 'transparent' }}>
                <input
                  type="radio"
                  name="class"
                  value={c.toLowerCase()}
                  checked={characterClass === c.toLowerCase()}
                  onChange={(e) => setCharacterClass(e.target.value)}
                  style={{ marginRight: '0.5rem', accentColor: '#a855f7' }}
                />
                <span>{c}</span>
              </label>
            ))}
          </div>
        </div>
        <button
          type="submit"
          style={submitButtonStyle}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          Begin Your Journey
        </button>
      </form>
    </div>
  );
};

export default CharacterCreationPage;

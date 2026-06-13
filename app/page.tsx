'use client';

import Link from 'next/link';
import React, { useState } from 'react';

export default function LandingPage() {
  const [isHovered, setIsHovered] = useState(false);

  const pageStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    backgroundColor: '#180d26',
    color: '#FFD700', // Gold text
    padding: '1rem',
    textAlign: 'center',
  };

  const titleStyle: React.CSSProperties = {
    fontSize: '3.75rem', // 6xl
    fontWeight: '800',
    marginBottom: '1rem',
    textShadow: '0 0 8px #a855f7, 0 0 16px #a855f7, 0 0 24px #a855f7', // Glowing effect
  };

  const subtitleStyle: React.CSSProperties = {
    fontSize: '1.5rem', // 2xl
    marginBottom: '2rem',
    color: '#e5e7eb', // Lighter gray for subtitle
  };

  const buttonStyle: React.CSSProperties = {
    padding: '1rem 2rem',
    backgroundColor: '#9333ea', // purple-600
    borderRadius: '8px',
    fontSize: '1.25rem',
    fontWeight: 'bold',
    color: 'white',
    textDecoration: 'none',
    transition: 'all 0.3s ease-in-out',
    transform: isHovered ? 'scale(1.05)' : 'scale(1)',
    boxShadow: isHovered ? '0 0 15px #c084fc, 0 0 25px #c084fc' : '0 10px 15px -3px rgba(147, 51, 234, 0.4)',
  };

  const partySectionStyle: React.CSSProperties = {
    marginTop: '4rem',
  };

  const partyTitleStyle: React.CSSProperties = {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
  };

  const partyGridStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
    gap: '1rem',
    maxWidth: '800px',
  };

  const agentCardStyle: React.CSSProperties = {
    background: 'rgba(42, 29, 69, 0.8)',
    padding: '1rem',
    borderRadius: '8px',
    border: '1px solid #3b0764',
  };

  return (
    <div style={pageStyle}>
      <div>
        <h1 style={titleStyle}>Welcome to Shadowrealm</h1>
        <p style={subtitleStyle}>An AI-powered text-based RPG adventure where your choices matter.</p>
        <Link href="/character-creation" passHref legacyBehavior>
          <a
            style={buttonStyle}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            Start Your Adventure
          </a>
        </Link>
      </div>
      <div style={partySectionStyle}>
        <h2 style={partyTitleStyle}>Meet Your Party</h2>
        <div style={partyGridStyle}>
          {['Game Master', 'Warrior', 'Mage', 'Rogue', 'Healer', 'Rival'].map((agent) => (
            <div key={agent} style={agentCardStyle}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#c084fc' }}>{agent}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

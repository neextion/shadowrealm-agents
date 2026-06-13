'use client';
import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import GameUI from '@/components/GameUI';

// Mock Gemini API
async function getGeminiResponse(agentName: string, prompt: string) {
  // In a real application, you would make an API call here.
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`This is a mock response from ${agentName} for the prompt: "${prompt}"`);
    }, 1000);
  });
}

function Game() {
  const p = useSearchParams();
  const name = p.get('name');
  const characterClass = p.get('class');

  return <GameUI characterName={name} characterClass={characterClass} />;
}

export default function GamePage() {
  return <Suspense fallback={<div>Loading...</div>}><Game /></Suspense>;
}

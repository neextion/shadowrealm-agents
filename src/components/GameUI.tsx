'use client';

import React, { useState, useCallback } from 'react';
import AgentPipeline, { Agent } from './AgentPipeline';
import QuestJournal, { Quest } from './QuestJournal';
import Dice from './Dice';
import { getAgentResponses } from '@app/actions';

const initialAgents: Agent[] = [
  { name: 'Game Master', status: 'active' },
  { name: 'Warrior', status: 'done' },
  { name: 'Mage', status: 'done' },
  { name: 'Rogue', status: 'done' },
  { name: 'Healer', status: 'done' },
  { name: 'Rival', status: 'done' },
];

const initialQuests: Quest[] = [
  { name: 'Find the Lost Sword', completed: true },
  { name: 'Rescue the Princess', completed: false },
  { name: 'Slay the Dragon', completed: false },
];

const GameUI = () => {
  const [agents, setAgents] = useState<Agent[]>(initialAgents);
  const [quests, setQuests] = useState<Quest[]>(initialQuests);
  const [narration, setNarration] = useState('The story begins...');
  const [playerInput, setPlayerInput] = useState('');
  const [health, setHealth] = useState(100);
  const [diceRoll, setDiceRoll] = useState(0);

  const handlePlayerInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPlayerInput(e.target.value);
  };

  const handlePlayerInputSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    if (!playerInput) return;

    const roll = Math.floor(Math.random() * 20) + 1;
    setDiceRoll(roll);

    setNarration((prev) => `${prev}\n> ${playerInput} (rolled a ${roll})`);
    setPlayerInput('');

    // Get agent responses from the server action
    const responses = await getAgentResponses(playerInput);

    for (let i = 0; i < agents.length; i++) {
      const currentAgent = agents[i];
      setAgents((prev) =>
        prev.map((agent) =>
          agent.name === currentAgent.name ? { ...agent, status: 'thinking' } : agent
        )
      );
      setNarration((prev) => `${prev}\n**${currentAgent.name}:** ${responses[i]}`);
      setAgents((prev) =>
        prev.map((agent) =>
          agent.name === currentAgent.name ? { ...agent, status: 'done' } : agent
        )
      );
    }
    setAgents((prev) => prev.map((agent, i) => i === 0 ? {...agent, status: 'active'} : agent));
  }, [playerInput, agents]);

  return (
    <div style={{ display: 'flex', height: '100vh', backgroundColor: '#180d26', color: 'white' }}>
      <div style={{ flex: '0 0 250px', padding: '1rem' }}>
        <QuestJournal quests={quests} />
      </div>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '1rem' }}>
        <div style={{ flex: 1, backgroundColor: '#2a1d45', borderRadius: '8px', padding: '1rem', marginBottom: '1rem', overflowY: 'auto' }}>
          <h2 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Game Master</h2>
          <p style={{ whiteSpace: 'pre-wrap' }}>{narration}</p>
        </div>
        <AgentPipeline agents={agents} />
        <form onSubmit={handlePlayerInputSubmit} style={{ marginTop: '1rem' }}>
          <input
            type="text"
            placeholder="What do you do?"
            value={playerInput}
            onChange={handlePlayerInputChange}
            style={{
              width: '100%',
              padding: '1rem',
              borderRadius: '8px',
              border: 'none',
              backgroundColor: '#2a1d45',
              color: 'white',
            }}
          />
        </form>
      </div>
      <div style={{ flex: '0 0 250px', padding: '1rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem' }}>HP: {health}</div>
        <Dice roll={diceRoll} />
      </div>
    </div>
  );
};

export default GameUI;

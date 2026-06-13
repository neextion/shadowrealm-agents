'use client';

import React, { useState, useCallback, useEffect } from 'react';
import AgentPipeline, { Agent } from './AgentPipeline';
import QuestJournal, { Quest } from './QuestJournal';
import Dice from './Dice';
import { getAgentResponses } from '@app/actions';

const initialAgents: Agent[] = [
  { name: 'Game Master', status: 'active' },
  { name: 'Warrior', status: 'thinking' },
  { name: 'Mage', status: 'thinking' },
  { name: 'Rogue', status: 'thinking' },
  { name: 'Healer', status: 'thinking' },
  { name: 'Rival', status: 'thinking' },
];

const initialQuests: Quest[] = [
  { name: 'The Goblin Threat', completed: false },
  { name: 'The Missing Artifact', completed: false },
];

const GameUI = () => {
  const [agents, setAgents] = useState<Agent[]>(initialAgents);
  const [quests, setQuests] = useState<Quest[]>(initialQuests);
  const [narration, setNarration] = useState('You and your party stand at the entrance of a dark cave, a foul stench emanating from within. A goblin scout spotted you and ran inside, shrieking. What do you do?');
  const [playerInput, setPlayerInput] = useState('');
  const [health, setHealth] = useState(100);
  const [diceRoll, setDiceRoll] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handlePlayerInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPlayerInput(e.target.value);
  };

  const handlePlayerInputSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    if (!playerInput || isSubmitting) return;

    setIsSubmitting(true);
    const roll = Math.floor(Math.random() * 20) + 1;
    setDiceRoll(roll);

    setNarration((prev) => `${prev}\n\n> ${playerInput} (rolled a ${roll})`);
    setPlayerInput('');

    // Reset agent statuses to 'thinking'
    setAgents(initialAgents.map(agent => ({ ...agent, status: 'thinking' })));

    try {
      const responses = await getAgentResponses(playerInput);
      let fullNarration = narration + `\n\n> ${playerInput} (rolled a ${roll})`;

      for (let i = 0; i < agents.length; i++) {
        const currentAgent = agents[i];
        setAgents((prev) =>
          prev.map((agent) =>
            agent.name === currentAgent.name ? { ...agent, status: 'active' } : agent
          )
        );
        
        const responseText = responses[i] || '...';
        fullNarration += `\n\n**${currentAgent.name}:** ${responseText}`;
        setNarration(fullNarration);

        setAgents((prev) =>
          prev.map((agent) =>
            agent.name === currentAgent.name ? { ...agent, status: 'done' } : agent
          )
        );
      }
    } catch (error) { 
      console.error('Error getting agent responses:', error);
      setNarration((prev) => `${prev}\n\nError: Could not get agent responses.`);
    } finally {
      setIsSubmitting(false);
      setAgents((prev) => prev.map((agent, i) => i === 0 ? {...agent, status: 'active'} : {...agent, status: 'thinking'}));
    }
  }, [playerInput, isSubmitting, agents, narration]);

  return (
    <div style={{ display: 'flex', height: '100vh', backgroundColor: '#180d26', color: 'white' }}>
      <div style={{ flex: '0 0 250px', padding: '1rem' }}>
        <QuestJournal quests={quests} />
      </div>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '1rem' }}>
        <div style={{ flex: 1, backgroundColor: '#2a1d45', borderRadius: '8px', padding: '1rem', marginBottom: '1rem', overflowY: 'auto' }}>
          <h2 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Shadowrealm Agents</h2>
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
            disabled={isSubmitting}
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

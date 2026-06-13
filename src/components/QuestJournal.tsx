'use client';

import React from 'react';

export interface Quest {
  name: string;
  completed: boolean;
}

interface QuestJournalProps {
  quests: Quest[];
}

const QuestJournal: React.FC<QuestJournalProps> = ({ quests }) => {
  return (
    <div style={{ backgroundColor: '#2a1d45', padding: '1rem', borderRadius: '8px', color: 'white' }}>
      <h2 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Quest Journal</h2>
      <ul>
        {quests.map((quest) => (
          <li key={quest.name} style={{ textDecoration: quest.completed ? 'line-through' : 'none', marginBottom: '0.5rem' }}>
            {quest.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuestJournal;
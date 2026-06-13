'use client';

import React from 'react';

export interface Agent {
  name: string;
  status: 'active' | 'thinking' | 'done';
}

interface AgentPipelineProps {
  agents: Agent[];
}

const AgentPipeline: React.FC<AgentPipelineProps> = ({ agents }) => {
  return (
    <div style={{ backgroundColor: '#2a1d45', padding: '1rem', borderRadius: '8px', color: 'white' }}>
      <h2 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Agent Pipeline</h2>
      <div style={{ display: 'flex', gap: '1rem' }}>
        {agents.map((agent) => (
          <div key={agent.name} style={{ textAlign: 'center' }}>
            <div style={{ 
              width: '60px', 
              height: '60px', 
              borderRadius: '50%', 
              backgroundColor: agent.status === 'active' ? '#4caf50' : agent.status === 'thinking' ? '#ffc107' : '#9e9e9e', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              marginBottom: '0.5rem' 
            }}>
              {agent.name.substring(0, 1)}
            </div>
            <div>{agent.name}</div>
            <div style={{ fontSize: '0.8rem', color: '#ccc' }}>{agent.status}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AgentPipeline;
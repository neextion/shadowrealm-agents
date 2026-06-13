import React from 'react';

interface AgentPortraitProps {
  agentName: string;
}

export const AgentPortrait: React.FC<AgentPortraitProps> = ({ agentName }) => {
  return (
    <div className="text-center">
      <div className="w-24 h-24 bg-gray-700 rounded-full mx-auto mb-2 border-4 border-gold-500"></div>
      <p className="font-bold text-gold-400">{agentName}</p>
    </div>
  );
};

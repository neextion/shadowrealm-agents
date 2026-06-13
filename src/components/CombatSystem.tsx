import React from 'react';

export const CombatSystem = () => {
  return (
    <div className="bg-[#180d26] p-4 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4 text-gold-400">Combat</h2>
      <div className="space-y-4">
        <div>
          <p className="font-bold">Player</p>
          <div className="w-full bg-gray-700 rounded-full h-4">
            <div className="bg-green-500 h-4 rounded-full" style={{ width: '80%' }}></div>
          </div>
          <p className="text-sm text-right">80/100 HP</p>
        </div>
        <div>
          <p className="font-bold">Goblin</p>
          <div className="w-full bg-gray-700 rounded-full h-4">
            <div className="bg-red-500 h-4 rounded-full" style={{ width: '50%' }}></div>
          </div>
          <p className="text-sm text-right">25/50 HP</p>
        </div>
      </div>
    </div>
  );
};

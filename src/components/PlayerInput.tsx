import React from 'react';

const PlayerInput: React.FC = () => {
  return (
    <div style={{ display: 'flex' }}>
      <input type="text" style={{ flex: 1, padding: '0.5rem' }} placeholder="What do you do?" />
      <button style={{ padding: '0.5rem' }}>Send</button>
    </div>
  );
};

export default PlayerInput;
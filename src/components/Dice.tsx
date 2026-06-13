'use client';

import React, { useState, useEffect } from 'react';
import styles from './Dice.module.css';

interface DiceProps {
  roll: number;
}

const Dice: React.FC<DiceProps> = ({ roll }) => {
  const [isRolling, setIsRolling] = useState(false);

  useEffect(() => {
    if (roll > 0) {
      setIsRolling(true);
      setTimeout(() => {
        setIsRolling(false);
      }, 1000); // Animation duration
    }
  }, [roll]);

  return (
    <div className={styles.diceContainer}>
      <div className={`${styles.dice} ${isRolling ? styles.rolling : ''}`}>
        <div className={styles.face}>{roll > 0 ? roll : ''}</div>
      </div>
    </div>
  );
};

export default Dice;

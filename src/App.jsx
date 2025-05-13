import React, { useState } from 'react';
import Container from '@mui/material/Container';
import InfoGrid from './components/InfoGrid';
import MindfulnessCard from './components/MindfulnessCard';

export default function App() {
  const [level, setLevel] = useState(0);
  const [finalMode, setFinalMode] = useState(false);

  const increaseLevel = () => {
    if (level < 3) setLevel(prev => prev + 1);
  };

  const reset = () => {
    setLevel(0);
    setFinalMode(false);
  };

  return (
    <Container maxWidth="lg">
      {!finalMode ? (
        <InfoGrid level={level} onMoreClick={increaseLevel} onFinalMode={() => setFinalMode(true)} />
      ) : (
        <MindfulnessCard onReset={reset} />
      )}
    </Container>
  );
}

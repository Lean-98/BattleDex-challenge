import { useEffect } from 'react';
import { Typography } from '@mui/material';
import confetti from 'canvas-confetti';
import type { VictoryMessageProps } from '../../../interfaces/components';

const shootConfetti = () => {
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 },
  });
};

export const VictoryMessage: React.FC<VictoryMessageProps> = ({ winner }) => {
  useEffect(() => {
    shootConfetti();
  }, [winner]);

  return (
    <Typography
      variant="h6"
      sx={{
        display: 'flex',
        justifyContent: 'flex-start',
        fontSize: '1.5rem',
        backgroundColor: '#e0f7fa',
        borderRadius: 2,
        border: '2px solid black',
        padding: 4,
        marginTop: 2,
        marginBottom: 6,
        color: 'black',
      }}
    >
      {`${winner.name} Wins!`}
    </Typography>
  );
};

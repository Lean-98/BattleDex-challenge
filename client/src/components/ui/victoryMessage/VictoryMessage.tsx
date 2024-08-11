import { Typography } from '@mui/material';
import type { VictoryMessageProps } from '../../../interfaces/components';

export const VictoryMessage: React.FC<VictoryMessageProps> = ({ winner }) => {
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
      {`${winner} Wins!`}
    </Typography>
  );
};

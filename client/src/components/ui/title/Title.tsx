import { Typography } from '@mui/material';
import type { TitleProps } from '../../../interfaces';

export const Title: React.FC<TitleProps> = ({ text }) => {
  return (
    <Typography
      variant="h1"
      align="left"
      color="black"
      gutterBottom
      sx={{
        textTransform: 'capitalize',
        fontWeight: 'normal',
        fontSize: '2.5rem',
        letterSpacing: '0.1rem',
      }}
    >
      {text}
    </Typography>
  );
};

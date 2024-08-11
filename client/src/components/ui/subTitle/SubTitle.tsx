import { Typography } from '@mui/material';
import type { SubtitleProps } from '../../../interfaces/components';

export const SubTitle: React.FC<SubtitleProps> = ({ text }) => {
  return (
    <Typography
      variant="h3"
      color="black"
      sx={{ fontSize: '1.7rem', marginTop: 4 }}
    >
      {text}
    </Typography>
  );
};

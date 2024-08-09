import Button from '@mui/material/Button';
import type { ButtonProps } from '../../../interfaces';

export const ButtonBattle: React.FC<ButtonProps> = ({
  arialLabel,
  capitalize,
  uppercase,
  text,
}) => {
  return (
    <Button
      variant="contained"
      color="success"
      aria-label={arialLabel || text}
      sx={{
        textTransform: uppercase
          ? 'uppercase'
          : capitalize
          ? 'capitalize'
          : 'none',
        minWidth: '150px',
        minHeight: '50px',
        fontSize: '1.2rem',
      }}
    >
      {text}
    </Button>
  );
};

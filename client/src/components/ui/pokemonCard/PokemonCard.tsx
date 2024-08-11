import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import type { PokemonCardProps } from '../../../interfaces';

export const PokemonCard: React.FC<PokemonCardProps> = ({
  image,
  name,
  onClick,
}) => {
  return (
    <Card
      sx={{
        maxWidth: 320,
        maxHeight: 370,
        marginTop: 2,
        marginLeft: 2,
      }}
      onClick={onClick}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          image={image}
          alt={`Image of the pokemon ${name}`}
          sx={{
            objectFit: 'contain',
            height: { xs: 150, sm: 200, md: 250, lg: 300, xl: 320 },
            width: '100%',
          }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

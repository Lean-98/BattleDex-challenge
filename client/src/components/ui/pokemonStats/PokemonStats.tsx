import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import LinearProgress from '@mui/material/LinearProgress';
import type { PokemonStatsProps } from '../../../interfaces';

export const PokemonStats: React.FC<PokemonStatsProps> = ({
  attack,
  defense,
  hp,
  id,
  image,
  name,
  speed,
}) => {
  return (
    <Card
      key={id}
      sx={{
        width: '100%', // Ocupar todo el ancho disponible
        maxHeight: 650,
        boxShadow: 3,
        borderRadius: 2,
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          image={image}
          alt={`Image of the pokemon ${name}`}
          sx={{
            objectFit: 'contain',
            height: { xs: 150, sm: 200, md: 250, lg: 300, xl: 380 },
            width: '100%',
          }}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            align="left"
            sx={{
              display: 'flex',
              justifyContent: 'flex-start',
            }}
          >
            {name}
          </Typography>
        </CardContent>
      </CardActionArea>

      <CardContent sx={{ paddingY: 0, paddingX: 2 }}>
        <Typography variant="body1" gutterBottom>
          HP
        </Typography>
        <LinearProgress
          variant="determinate"
          value={hp}
          sx={{
            marginBottom: 1,
            height: 8,
            borderRadius: 5,
            backgroundColor: '#e0e0e0',
            '& .MuiLinearProgress-bar': {
              backgroundColor: '#00e676',
            },
          }}
        />

        <Typography variant="body1" gutterBottom>
          Attack
        </Typography>
        <LinearProgress
          variant="determinate"
          value={attack}
          sx={{
            marginBottom: 1,
            height: 8,
            borderRadius: 5,
            backgroundColor: '#e0e0e0',
            '& .MuiLinearProgress-bar': {
              backgroundColor: '#00e676',
            },
          }}
        />

        <Typography variant="body1" gutterBottom>
          Defense
        </Typography>
        <LinearProgress
          variant="determinate"
          value={defense}
          sx={{
            marginBottom: 1,
            height: 8,
            borderRadius: 5,
            backgroundColor: '#e0e0e0',
            '& .MuiLinearProgress-bar': {
              backgroundColor: '#00e676',
            },
          }}
        />

        <Typography variant="body1" gutterBottom>
          Speed
        </Typography>
        <LinearProgress
          variant="determinate"
          value={speed}
          sx={{
            marginBottom: 1,
            height: 8,
            borderRadius: 5,
            backgroundColor: '#e0e0e0',
            '& .MuiLinearProgress-bar': {
              backgroundColor: '#00e676',
            },
          }}
        />
      </CardContent>
    </Card>
  );
};

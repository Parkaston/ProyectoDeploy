import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function OverloadCenter({ level, onMoreClick, onFinalMode }) {
  const scale = [1, 0.85, 0.7, 0.7][level];
  return (
    <Card sx={{
      transform: `scale(${scale})`,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      border: '6px solid black',
      boxShadow: '8px 8px 0px #000',
      padding: 2,
      maxWidth: '90vw',
      transition: 'all 0.5s ease'
    }}>
      <CardContent>
<Typography variant="h4" sx={{
    fontFamily: 'Space Grotesk, sans-serif',
    fontWeight: 700,
    fontSize: '1.2rem',           
    transition: 'all 0.3s ease'
}}>
          {level < 3 ? '¿Estás entretenid@?' : 'Demasiado...'}
        </Typography>
        {level < 3 ? (
<Button 
  onClick={onMoreClick}
  sx={{
    mt: 2,
    fontSize: '0.9rem',
    padding: '0.75rem 2rem',
    backgroundColor: '#fff',
    color: '#000',
    border: '3px solid #000',
    boxShadow: '6px 6px 0px #000',
    '&:hover': {
      backgroundColor: '#e5e5e5',
      boxShadow: '4px 4px 0px #000'
    }
  }}
>
  ¿Más?
</Button>
        ) : (
<Button
  onClick={onFinalMode}
  sx={{
    mt: 2,
    fontSize: '0.9rem',
    padding: '0.75rem 2rem',
    backgroundColor: '#fff',
    color: '#000',
    border: '3px solid #000',
    boxShadow: '6px 6px 0px #000',
    '&:hover': {
      backgroundColor: '#e5e5e5',
      boxShadow: '4px 4px 0px #000'
    }
  }}
>
  Volvamos a las bases
</Button>
        )}
      </CardContent>
    </Card>
  );
}

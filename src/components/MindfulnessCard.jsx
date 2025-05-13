import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';

export default function MindfulnessCard({ onReset }) {
  return (
    <Card className="fadeIn" sx={{
      maxWidth: 600,
      margin: 'auto',
      mt: 10,
      textAlign: 'center',
      border: '6px solid black',
      boxShadow: '8px 8px 0px #000',
      padding: 4
    }}>
      <CardContent>
        <Typography variant="h4" gutterBottom>
          Volvamos a las bases
        </Typography>
        <Typography variant="body1" gutterBottom>
          Nuestro cerebro no está hecho para volar entre infinitas distracciones.  
          Tal vez... ¿y si mejor caminamos? 🌿
        </Typography>
        <Typography variant="h6" sx={{ mt: 3 }}>
          Recomendaciones:
        </Typography>
        <Typography variant="body2">
          <Link href="https://www.goodreads.com/en/book/show/34536488" target="_blank">📖 Digital Minimalism - Cal Newport</Link><br />
          <Link href="https://www.goodreads.com/en/book/show/4069" target="_blank">📖 The Art of Happiness - Dalai Lama</Link><br />
          <Link href="https://www.goodreads.com/en/book/show/45046571" target="_blank">📖 The Things You Can See Only When You Slow Down - Haemin Sunim</Link>
        </Typography>
        <Button variant="outlined" color="primary" onClick={onReset}
          sx={{ mt: 4, boxShadow: '4px 4px 0px #000' }}>
          Reiniciar experiencia
        </Button>
      </CardContent>
    </Card>
  );
}

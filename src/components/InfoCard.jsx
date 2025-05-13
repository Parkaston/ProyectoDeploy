import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function InfoCard({ title, content, wiggle }) {
  return (
    <Card
      variant="outlined"
      className={wiggle ? 'wiggle' : ''}
      sx={{
        width: '160px',               
        height: '160px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: 1,
        backgroundColor: '#fff',
        boxShadow: '4px 4px 0px #000'
      }}
    >
      <CardContent>
        <Typography variant="subtitle1" sx={{ fontWeight: 'bold', fontSize: '0.9rem' }}>
          {title}
        </Typography>
        <Typography variant="body2" sx={{ fontSize: '0.75rem' }}>
          {content}
        </Typography>
      </CardContent>
    </Card>
  );
}

import React from 'react';
import Box from '@mui/material/Box';
import InfoCard from './InfoCard';
import OverloadCenter from './OverloadCenter';
//comienzo con un elementos de ejemplo, luego usaria una API para obtener datos
const generateCardContent = (level, index) => {
  if (level === 0) return { title: `Noticia seria #${index + 1}`, content: 'Informe verificado 📰' };
  if (level === 1) return { title: `Meme #${index + 1}`, content: '😂 Blah blah 💩💀' };
  if (level === 2) return { title: `Reel viral #${index + 1}`, content: '👉 Haz click rápido.' };
  return { title: `🔥💀🤖🐸🍕💩 #${index + 1}`, content: 'Lorem ipsum 😂💩🎉' };
};

export default function InfoGrid({ level, onMoreClick, onFinalMode }) {
  const size = 3 + 2 * level;
  const center = Math.floor(size / 2);
  let index = 0;

  return (
    <Box
      display="grid"
      gridTemplateColumns={`repeat(${size}, 160px)`}   // 👈 columnas fijas de 160px
      gap={1}
      justifyContent="center"
      mt={4}
    >
      {Array.from({ length: size }).map((_, row) =>
        Array.from({ length: size }).map((_, col) =>
          row === center && col === center ? (
            <OverloadCenter key="center" level={level} onMoreClick={onMoreClick} onFinalMode={onFinalMode} />
          ) : (
            <InfoCard
              key={`${row}-${col}`}
              title={generateCardContent(level, index).title}
              content={generateCardContent(level, index++).content}
              wiggle={level === 3}
            />
          )
        )
      )}
    </Box>
  );
}

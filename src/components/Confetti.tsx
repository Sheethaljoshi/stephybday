"use client";

import React, { useEffect, useState, memo } from 'react';

const confettiColors = [
  '#FFB6C1', // Pastel Pink
  '#E6E6FA', // Soft Lavender
  '#FFDAB9', // Peach Puff
  '#ADD8E6', // Light Blue
  '#90EE90', // Light Green
  '#FFFFFF',
];

const ConfettiPiece = memo(function ConfettiPiece({ id, style }: { id: number; style: React.CSSProperties }) {
  return (
    <div
      key={id}
      className="confetti"
      style={style}
    />
  );
});

export const Confetti = () => {
  const [pieces, setPieces] = useState<React.ReactNode[]>([]);

  useEffect(() => {
    const newPieces = Array.from({ length: 150 }).map((_, i) => {
      const style = {
        '--color': confettiColors[Math.floor(Math.random() * confettiColors.length)],
        left: `${Math.random() * 100}vw`,
        animationDelay: `${Math.random() * 1.5}s`,
        animationDuration: `${2 + Math.random() * 3}s`,
      } as React.CSSProperties;
      return <ConfettiPiece key={i} id={i} style={style} />;
    });
    setPieces(newPieces);
    
    const timer = setTimeout(() => setPieces([]), 5000);
    return () => clearTimeout(timer);
  }, []);

  return <div aria-hidden="true">{pieces}</div>;
};

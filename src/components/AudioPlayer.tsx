'use client';

import { useEffect, useRef, useState } from 'react';

export default function AudioPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [muted, setMuted] = useState(false);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const audio = new Audio('/sounds/intro.mp3');
    audio.loop = false;       // plays once, 3 sec track
    audio.volume = 0.5;
    audioRef.current = audio;

    const tryPlay = () => {
      if (started) return;
      setStarted(true);
      audio.play().catch(() => {});
      // remove listeners after first interaction
      window.removeEventListener('mousemove', tryPlay);
      window.removeEventListener('scroll', tryPlay);
      window.removeEventListener('touchstart', tryPlay);
    };

    window.addEventListener('mousemove', tryPlay);
    window.addEventListener('scroll', tryPlay);
    window.addEventListener('touchstart', tryPlay);

    return () => {
      window.removeEventListener('mousemove', tryPlay);
      window.removeEventListener('scroll', tryPlay);
      window.removeEventListener('touchstart', tryPlay);
      audio.pause();
    };
  }, []);

  const toggleMute = () => {
    if (!audioRef.current) return;
    audioRef.current.muted = !muted;
    setMuted(!muted);
  };

  if (!started) return null; // hide button until audio starts

  return (
    <button
      onClick={toggleMute}
      title={muted ? 'Unmute' : 'Mute'}
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        zIndex: 9999,
        background: 'rgba(0,0,0,0.6)',
        border: 'none',
        borderRadius: '50%',
        width: '40px',
        height: '40px',
        cursor: 'pointer',
        fontSize: '18px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {muted ? '🔇' : '🔊'}
    </button>
  );
}
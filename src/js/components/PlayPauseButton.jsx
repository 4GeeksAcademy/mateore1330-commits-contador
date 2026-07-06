import React from "react";

// Botón que pausa o reanuda el contador.
// Recibe por props el estado (paused) y la función que lo cambia (onToggle).
const PlayPauseButton = ({ paused, onToggle }) => {
  return (
    <button className="play-pause-btn" onClick={onToggle}>
      {/* Si está en pausa mostramos el triángulo de play; si no, los dos palitos de pausa */}
      <i className={paused ? "fas fa-play" : "fas fa-pause"}></i>
    </button>
  );
};

export default PlayPauseButton;

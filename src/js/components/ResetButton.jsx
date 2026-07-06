import React from "react";

// Botón que reinicia el tiempo a 0.
// Recibe por props la función onReset (definida en main.jsx).
const ResetButton = ({ onReset }) => {
  return (
    <button className="play-pause-btn" onClick={onReset}>
      {/* Flecha circular de reinicio */}
      <i className="fas fa-rotate-left"></i>
    </button>
  );
};

export default ResetButton;

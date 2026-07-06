import React from "react";

// Elegir el modo: Cronómetro o Temporizador.
const ModeSelector = ({ mode, onSelectMode }) => {
  return (
    <div className="mode-selector">
      <button
        className={
          "mode-btn" + (mode === "stopwatch" ? " mode-btn--active" : "")
        }
        onClick={() => onSelectMode("stopwatch")}
      >
        Cronómetro
      </button>
      <button
        className={"mode-btn" + (mode === "timer" ? " mode-btn--active" : "")}
        onClick={() => onSelectMode("timer")}
      >
        Temporizador
      </button>
    </div>
  );
};

export default ModeSelector;

import React from "react";

// Recuadro de input para fijar el tiempo del temporizador (total de segundos).
// Es un input controlado: muestra los segundos actuales y avisa al cambiar.
const TimerInput = ({ seconds, onSetSeconds }) => {
  return (
    <div className="timer-input">
      <label className="timer-input__label">Segundos:</label>
      <input
        type="number"
        min="0"
        max="999999"
        className="timer-input__field"
        placeholder="0"
        value={seconds === 0 ? "" : seconds}
        onChange={(e) => onSetSeconds(e.target.value)}
      />
    </div>
  );
};

export default TimerInput;

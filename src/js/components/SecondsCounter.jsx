import React from "react";

// Valores posicionales de cada caja (de izquierda a derecha).
const PLACES = [100000, 10000, 1000, 100, 10, 1];

// Recibe el total de segundos por props y lo dibuja en 6 cifras.
// Si editable es true (temporizador en pausa), muestra flechas para ajustar cada cifra.
const SecondsCounter = ({ seconds, editable, onAdjust }) => {
  // Método de la división + módulo:
  //   - dividir "corre" el número hasta la posición que queremos
  //   - % 10 se queda solo con la última cifra
  const digits = PLACES.map((place) => Math.floor(seconds / place) % 10);

  return (
    <div className="seconds-counter">
      <div className="seconds-counter__icon">
        <i className="fas fa-clock"></i>
      </div>

      {digits.map((digit, index) => (
        <div key={index} className="seconds-counter__column">
          {editable && (
            <button
              className="seconds-counter__arrow"
              onClick={() => onAdjust(PLACES[index])}
            >
              <i className="fas fa-chevron-up"></i>
            </button>
          )}

          <div className="seconds-counter__digit">{digit}</div>

          {editable && (
            <button
              className="seconds-counter__arrow"
              onClick={() => onAdjust(-PLACES[index])}
            >
              <i className="fas fa-chevron-down"></i>
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default SecondsCounter;

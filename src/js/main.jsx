import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "../styles/index.css";
import Home from "./components/Home";

const root = ReactDOM.createRoot(document.getElementById("root"));

// Modo activo que se muestra en pantalla
let mode = "stopwatch"; // "stopwatch" | "timer"

// Cronómetro (cuenta hacia arriba). Arranca contando desde 0.
let swSeconds = 0;
let swPaused = false;

// Temporizador (cuenta regresiva). Arranca en 0 y en pausa.
// tmInitial guarda el número que fija el usuario, para poder reiniciar a ese valor.
let tmSeconds = 0;
let tmPaused = true;
let tmInitial = 0;

// Máximo del temporizador: 6 cifras (el display no puede mostrar más).
const MAX_SECONDS = 999999;

// Cambia el modo visible. No resetea nada: cada modo conserva su estado.
const selectMode = (newMode) => {
  mode = newMode;
  renderApp();
};

// Play / pausa del modo activo.
const togglePause = () => {
  if (mode === "stopwatch") {
    swPaused = !swPaused;
  } else {
    // En el temporizador no dejamos darle play si no hay tiempo que descontar.
    if (tmPaused && tmSeconds === 0) return;
    tmPaused = !tmPaused;
  }
  renderApp();
};

// Botón reiniciar del modo activo.
const resetTimer = () => {
  if (mode === "stopwatch") {
    // El cronómetro vuelve a 0 y sigue contando.
    swSeconds = 0;
    swPaused = false;
  } else {
    // El temporizador vuelve al número fijado, en pausa.
    tmSeconds = tmInitial;
    tmPaused = true;
  }
  renderApp();
};

// Ajusta el temporizador con las flechas de cada cifra (delta = ±valor posicional).
const adjustTimer = (delta) => {
  tmSeconds = Math.min(MAX_SECONDS, Math.max(0, tmSeconds + delta));
  tmInitial = tmSeconds;
  renderApp();
};

// Fija el temporizador desde el input (número total de segundos).
const setTimerSeconds = (value) => {
  tmSeconds = Math.min(MAX_SECONDS, Math.max(0, Number(value) || 0));
  tmInitial = tmSeconds;
  renderApp();
};

const renderApp = () => {
  // Valores del modo activo que se muestran en pantalla.
  const seconds = mode === "stopwatch" ? swSeconds : tmSeconds;
  const paused = mode === "stopwatch" ? swPaused : tmPaused;
  // Solo se pueden editar las cifras en el temporizador cuando está en pausa.
  const editable = mode === "timer" && tmPaused;

  root.render(
    <React.StrictMode>
      <Home
        mode={mode}
        seconds={seconds}
        paused={paused}
        editable={editable}
        onSelectMode={selectMode}
        onToggle={togglePause}
        onReset={resetTimer}
        onAdjust={adjustTimer}
        onSetSeconds={setTimerSeconds}
      />
    </React.StrictMode>,
  );
};

renderApp();

// Un único intervalo actualiza los DOS modos a la vez (corren en segundo plano).
setInterval(() => {
  if (!swPaused) {
    swSeconds++;
  }
  if (!tmPaused && tmSeconds > 0) {
    tmSeconds--;
    if (tmSeconds === 0) {
      tmPaused = true; // al llegar a 0 se detiene solo
      // setTimeout(0) para que el display pinte 000000 antes de que salte el recuadro
      setTimeout(() => window.alert("¡Se acabó el tiempo!"), 0);
    }
  }
  renderApp();
}, 1000);

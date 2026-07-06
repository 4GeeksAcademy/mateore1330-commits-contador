import React from "react";
import ModeSelector from "./ModeSelector";
import TimerInput from "./TimerInput";
import SecondsCounter from "./SecondsCounter";
import PlayPauseButton from "./PlayPauseButton";
import ResetButton from "./ResetButton";

const Home = ({
  mode,
  seconds,
  paused,
  editable,
  onSelectMode,
  onToggle,
  onReset,
  onAdjust,
  onSetSeconds,
}) => {
  return (
    <div className="app-card">
      <h1 className="app-title">Contador de segundos</h1>

      <ModeSelector mode={mode} onSelectMode={onSelectMode} />

      {editable && <TimerInput seconds={seconds} onSetSeconds={onSetSeconds} />}

      <SecondsCounter
        seconds={seconds}
        editable={editable}
        onAdjust={onAdjust}
      />

      <div className="counter-controls">
        <PlayPauseButton paused={paused} onToggle={onToggle} />
        <ResetButton onReset={onReset} />
      </div>
    </div>
  );
};

export default Home;

import React from "react";

const SecondsCounter = ({ seconds }) => {
  const digits = [100000, 10000, 1000, 100, 10, 1].map(
    (divisor) => Math.floor(seconds / divisor) % 10,
  );

  return (
    <div className="seconds-counter">
      <div className="seconds-counter__icon">
        <i className="fas fa-clock"></i>
      </div>

      {digits.map((digit, index) => (
        <div key={index} className="seconds-counter__digit">
          {digit}
        </div>
      ))}
    </div>
  );
};

export default SecondsCounter;

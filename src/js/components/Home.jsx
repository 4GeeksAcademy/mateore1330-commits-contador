import React from "react";
import SecondsCounter from "./SecondsCounter";

const Home = ({ seconds }) => {
  return (
    <div className="text-center mt-5">
      <h1 className="mb-4">Contador de segundos</h1>
      <SecondsCounter seconds={seconds} />
    </div>
  );
};

export default Home;

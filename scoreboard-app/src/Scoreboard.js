import { useState, useEffect } from "react";

const Scoreboard = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [firstTeamScore, setFirstTeamScore] = useState(5);
  const [secondTeamScore, setSecondTeamScore] = useState(2);
  const [firstTeamName, setFirstTeamName] = useState("Fajny team");
  const [secondTeamName, setSecondTeamName] = useState("Drugi fajny team");

  useEffect(() => {
    fetch("http://localhost:8081/users")
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  });

  useEffect(() => {
    let intervalId;
    if (isRunning) {
      intervalId = setInterval(() => setTime(time + 1), 10);
    }
    return () => clearInterval(intervalId);
  }, [isRunning, time]);

  const minutes = Math.floor((time % 360000) / 6000);

  const seconds = Math.floor((time % 6000) / 100);

  const startStopStopwatchHandler = () => {
    setIsRunning(!isRunning);
  };

  const reset = () => {
    setTime(0);
  };

  const arr = {
    firstTeamName: "",
    secondTeamName: "",
    firstTeamScore: "",
    secondTeamScore: "",
    startTimer: null,
    stopTimer: null,
    timeLength: "",
  };

  return (
    <div className="score-board-container">
      <div className="score-board-wrapper">
        <div className="first-team">
          <h2 className="team-name">{firstTeamName}</h2>
        </div>
        <h1 className="score">
          {firstTeamScore} : {secondTeamScore}
        </h1>
        <div className="second-team">
          <h2 className="team-name">{secondTeamName}</h2>
        </div>
      </div>
      <div className="timer-wrapper">
        <h3 className="timer">
          {minutes.toString().padStart(2, "0")}:
          {seconds.toString().padStart(2, "0")}
        </h3>
      </div>
    </div>
  );
};

export default Scoreboard;

import { useState, useEffect } from "react";

const AdminPanel = () => {
  const [firstTeamName, setFirstTeamName] = useState("");
  const [secondTeamName, setSecondTeamName] = useState("");
  const [firstTeamScore, setFirstTeamScore] = useState(0);
  const [secondTeamScore, setSecondTeamScore] = useState(0);
  const [startTimer, setStartTimer] = useState(false);
  const [stopTimer, setStopTimer] = useState(true);

  const changeTeamScoreHandler = (team, action) => {
    if (team === 1) {
      if (firstTeamScore == 0 && action === "-") return;
      if (action === "+") setFirstTeamScore(firstTeamScore + 1);
      if (action === "-") setFirstTeamScore(firstTeamScore - 1);
    } else {
      if (secondTeamScore == 0 && action === "-") return;
      if (action === "+") setSecondTeamScore(secondTeamScore + 1);
      if (action === "-") setSecondTeamScore(secondTeamScore - 1);
    }
  };

  const submitFormHandler = (event) => {
    event.preventDefault();
    const data = {
      firstTeamName,
      secondTeamName,
      firstTeamScore,
      secondTeamScore,
      startTimer,
      stopTimer,
    };

    console.log(data);
  };

  return (
    <>
      <header>
        <h1>Panel administracyjny</h1>
      </header>
      <form onSubmit={submitFormHandler}>
        <div className="inputs-wrapper">
          <label>Pierwsza drużyna</label>
          <input
            value={firstTeamName}
            className="margin-bottom"
            placeholder="Pierwsza fajna drużyna"
            onChange={(e) => setFirstTeamName(e.target.value)}
          ></input>
          <label>Druga drużyna</label>
          <input
            value={secondTeamName}
            placeholder="Druga fajna drużyna"
            className="margin-bottom"
            onChange={(e) => setSecondTeamName(e.target.value)}
          ></input>
          <button type="submit">Zaktualizuj nazywy drużyn</button>
        </div>
        <div className="inputs-wrapper">
          <label>Bramki pierwszej drużyny</label>
          <div className="counter-wrapper margin-bottom">
            <button
              className="counter-button"
              onClick={(e) => changeTeamScoreHandler(1, "-")}
              type="submit"
            >
              -
            </button>
            <h1 className="counter">{firstTeamScore}</h1>
            <button
              className="counter-button"
              onClick={(e) => changeTeamScoreHandler(1, "+")}
              type="submit"
            >
              +
            </button>
          </div>
          <label>Bramki drugiej drużyny</label>
          <div className="counter-wrapper">
            <button
              className="counter-button"
              onClick={(e) => changeTeamScoreHandler(2, "-")}
              type="submit"
            >
              -
            </button>
            <h1 className="counter">{secondTeamScore}</h1>
            <button
              className="counter-button"
              onClick={(e) => changeTeamScoreHandler(2, "+")}
              type="submit"
            >
              +
            </button>
          </div>
        </div>
        <div className="inputs-wrapper">
          <label>Wystartuj stoper</label>
          <button
            className="margin-bottom"
            onClick={(e) => {
              setStartTimer(true);
              setStopTimer(false);
            }}
            type="submit"
          >
            Start
          </button>
          <label>Wyzeruj stoper</label>
          <button
            onClick={(e) => {
              setStartTimer(false);
              setStopTimer(true);
            }}
            type="submit"
          >
            Wyzeruj
          </button>
        </div>
      </form>
    </>
  );
};

export default AdminPanel;

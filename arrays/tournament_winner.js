function tournamentWinner(competitions, results) {
  const obj = {};
  for (let i = 0; i < competitions.length; i++) {
    if (results[i]) {
      const winner = competitions[i][1];
      if (obj[winner] === undefined) {
        obj[winner] = 3;
      } else {
        obj[winner] += 3;
      }
    } else {
      const winner = competitions[i][0];
      if (obj[winner] === undefined) {
        obj[winner] = 3;
      } else {
        obj[winner] += 3;
      }
    }
  }

  // sort obj where team with most points is first
  let maxPoints = 0;
  let winner = "";
  for (const team in obj) {
    if (obj[team] > maxPoints) {
      maxPoints = obj[team];
      winner = team;
    }
  }
  return winner;
}
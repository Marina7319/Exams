function footballResults(input) {
    let firstGame = input[0];
    let secondGame = input[1];
    let thirdGame = input[2];

    let firstResultTeamA = firstGame[0];
    let secondResultTeamA = secondGame[0];
    let thirdResultTeamA = thirdGame[0];

    let firstResultTeamB = firstGame[2];
    let secondResultTeamB = secondGame[2];
    let thirdResultTeamB = thirdGame[2];
    let won = 0;
    let lost = 0;
    let drawn = 0;

    if (firstResultTeamA > firstResultTeamB) {
        won += 1;
    } else if (firstResultTeamA === firstResultTeamB) {
        drawn += 1;
    } else if (firstResultTeamA < firstResultTeamB) {
        lost += 1;
    }
    if (secondResultTeamA > secondResultTeamB) {
        won += 1;
    } else if (secondResultTeamA === secondResultTeamB) {
        drawn += 1;
    } else if (secondResultTeamA < secondResultTeamB) {
        lost += 1;
    }
    if (thirdResultTeamA > thirdResultTeamB) {
        won += 1;
    } else if (thirdResultTeamA === thirdResultTeamB) {
        drawn += 1;
    } else if (thirdResultTeamA < thirdResultTeamB) {
        lost += 1;
    }
    console.log(`Team won ${won} games.`);
    console.log(`Team lost ${lost} games.`);
    console.log(`Drawn games: ${drawn}`);
}

footballResults(["4:2",
    "0:3",
    "1:0"])

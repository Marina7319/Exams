function basketballTournament(input) {
    let index = 0;
    let currentWord = input[index];
    index++;
    let winGames = 0;
    let lostGames = 0;
    let sum = 0;
    while (currentWord !== "End of tournaments") {
        let nameTournament = currentWord;
        let plays = Number(input[index]);
        sum += plays;
        index++;
        let i = 0;
        while (i < plays) {
            i++;
            let pointsForTeamA = Number(input[index]);
            index++;
            let pointsForTeamB = Number(input[index]);
            index++
            if (pointsForTeamA > pointsForTeamB) {
                winGames++;
                console.log(`Game ${i} of tournament ${nameTournament}: win with ${pointsForTeamA - pointsForTeamB} points.`);
            } else {
                lostGames++;
                console.log(`Game ${i} of tournament ${nameTournament}: lost with ${pointsForTeamB - pointsForTeamA} points.`);
            }
        }
        currentWord = input[index];
        index++;
    }
    console.log(`${(winGames / sum * 100).toFixed(2)}% matches win`);
    console.log(`${(lostGames / sum * 100).toFixed(2)}% matches lost`);
}
basketballTournament(["Ballers",
    "3",
    "87",
    "63",
    "56",
    "65",
    "75",
    "64",
    "Sharks",
    "4",
    "64",
    "76",
    "65",
    "86",
    "68",
    "99",
    "45",
    "78",
    "End of tournaments"])



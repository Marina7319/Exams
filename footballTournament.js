function footballTournament(input) {
    let index = 0;
    let footballTeam = input[index];
    index++;
    let gamesForSeason = Number(input[index]);
    index++;
    let i = 0;
    let W = 0;
    let D = 0;
    let L = 0;
    while (i < gamesForSeason) {
        let result = input[index];
        index++;
        i++;
        switch (result) {
            case 'W':
                W += 1;
                break;
            case 'D':
                D += 1;
                break;
            case 'L':
                L += 1;
                break;
        }
    }
    if (gamesForSeason === 0) {
        console.log(`${footballTeam} hasn't played any games during this season.`);
    } else if (gamesForSeason >= 1) {
        console.log(`${footballTeam} has won ${W*3+D+L*0} points during this season.`);
        console.log(`Total stats:`);
        console.log(`## W: ${W}`);
        console.log(`## D: ${D}`);
        console.log(`## L: ${L}`);
        console.log(`Win rate: ${(W / gamesForSeason * 100).toFixed(2)}%`);
    }
}
footballTournament(["Chelsea",
"0"])


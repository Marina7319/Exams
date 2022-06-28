function fitnessCenter(input) {
    let visitorsInFitness = Number(input[0]);
    let index = 1;
    let i = 0;
    let back = 0;
    let chest = 0;
    let legs = 0;
    let abs = 0;
    let proteinShake = 0;
    let proteinBar = 0;
    while (i < visitorsInFitness) {
        i++;
        let activity = input[index];
        index++;
        switch (activity) {
            case "Back":
                back += 1;
                break;
            case "Chest":
                chest += 1;
                break;
            case "Legs":
                legs += 1;
                break;
            case "Abs":
                abs += 1;
                break;
            case "Protein shake":
                proteinShake += 1;
                break;
            case "Protein bar":
                proteinBar += 1;
                break;
        }
    }
    let workOut = back + chest + legs + abs;
    let drinks = proteinBar + proteinShake;
    console.log(`${back} - back`);
    console.log(`${chest} - chest`);
    console.log(`${legs} - legs`);
    console.log(`${abs} - abs`);
    console.log(`${proteinShake} - protein shake`);
    console.log(`${proteinBar} - protein bar`);
    console.log(`${(workOut / visitorsInFitness * 100).toFixed(2)}% - work out`);
    console.log(`${(drinks / visitorsInFitness * 100).toFixed(2)}% - protein`);
}
fitnessCenter(["10",
"Back",
"Chest",
"Legs",
"Abs",
"Protein shake",
"Protein bar",
"Protein shake",
"Protein bar",
"Legs",
"Abs"])


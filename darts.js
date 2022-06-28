function darts(input) {
    let index = 0;
    let player = input[index];
    index++;
    let currentWord = input[index];
    index++;
    let points = 0;
    let result = 301;
    let sum = 0;
    let unsuccessful = 0;
    let shots = 0;
    while (currentWord !== "Retire") {
        let text = currentWord;
        points = Number(input[index]);
        index++;
        shots++;
        switch (text) {
            case "Single":
                sum = points;
                break;
            case "Double":
                sum = points * 2;
                break;
            case "Triple":
                sum = points * 3;
                break;
        }

        if (sum > result) {
            result -= 0;
            unsuccessful++;
        } else {
            result -= sum;
        }
        if (result <= 0) {

            break;
        }
        currentWord = input[index];
        index++;
    }
    if (currentWord === "Retire") {
        console.log(`${player} retired after ${unsuccessful} unsuccessful shots.`)
    }
    if (result === 0) {
        console.log(`${player} won the leg with ${shots - unsuccessful} shots.`);
    }
}
darts(["Stephen Bunting",
    "Triple",
    "20",
    "Triple",
    "20",
    "Triple",
    "20",
    "Triple",
    "20",
    "Triple",
    "20",
    "Triple",
    "20",
    "Double",
    "7",
    "Single",
    "12",
    "Double",
    "1",
    "Single",
    "1"])




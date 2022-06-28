function gameNumberWars(input) {
    let index = 0;
    let nameFirstPlayer = input[index];
    index++;
    let nameSecondPlayer = input[index];
    index++;
    let currentWord = input[index];
    index++;
    let firstPlayer = 0;
    let secondPlayer = 0;
    let cardsFirst = 0;
    let cardsSecond = 0;
    while (currentWord !== "End of game") {
        let cardFirstPlayer = Number(currentWord);
        let cardSecondPlayer = Number(input[index]);
        index++;
        if (cardFirstPlayer > cardSecondPlayer) {
            firstPlayer += cardFirstPlayer - cardSecondPlayer;
        }
        else if (cardFirstPlayer === cardSecondPlayer) {
            console.log(`Number wars!`);
            let cardNumOne = Number(input[index]);
            index++
            let cardNumTwo = Number(input[index]);
            index++;
            if (cardNumTwo > cardNumOne) {
                cardsSecond = cardNumTwo - cardNumOne;
                break;
            } else { // cardNumOne > cardNumTwo
                cardsFirst = cardNumOne - cardNumTwo;
                break;
            }
        } else {
            secondPlayer += cardSecondPlayer - cardFirstPlayer;
        }
        currentWord = input[index];
        index++;
    }
    if (firstPlayer > secondPlayer && currentWord !== "End of game") {
        console.log(`${nameFirstPlayer} is winner with ${cardsFirst} points`);
    } else if (currentWord !== "End of game") {
        console.log(`${nameSecondPlayer} is winner with ${cardsSecond} points`);
    }
    if (currentWord === "End of game") {
        console.log(`${nameFirstPlayer} has ${firstPlayer} points`);
        console.log(`${nameSecondPlayer} has ${secondPlayer} points`);
    }
}

gameNumberWars(["Aleks",
    "Georgi",
    "4",
    "5",
    "3",
    "2",
    "4",
    "3",
    "4",
    "4",
    "5",
    "2"])











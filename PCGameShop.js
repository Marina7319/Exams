function PCGameShop(input) {
    let gamesSold = Number(input[0]);
    let i = 1;
    let Hearthstone = 0;
    let Fornite = 0;
    let Overwatch = 0;
    let others = 0;
    let games = gamesSold;
    let gameName = "";
    let index = 1;
    while (i <= gamesSold) {
        i++;
        gameName = input[index];
        index++;
        if ("Hearthstone" === gameName) {
            Hearthstone += 1;
        }
        else if ("Fornite" === gameName) {
            Fornite += 1;
        }
        else if ("Overwatch" === gameName) {
            Overwatch += 1;
        }
        else {
            others += 1
        }
    }
    console.log(`Hearthstone - ${(Hearthstone / games * 100).toFixed(2)}%`);
    console.log(`Fornite - ${(Fornite / games * 100).toFixed(2)}%`);
    console.log(`Overwatch - ${(Overwatch / games * 100).toFixed(2)}%`);
    console.log(`Others - ${(others / games * 100).toFixed(2)}%`);
}

PCGameShop(["4",
    "Hearthstone",
    "Fornite",
    "Overwatch",
    "Counter-Strike"])



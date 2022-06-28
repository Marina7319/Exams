function cinema(input) {
    let cinemaSits = Number(input[0]);
    let inputWord = input[1];
    let index = 2;
    let sumSits = 0;
    let sum = 0;
    while (inputWord !== "Movie time!") {
        let sits = Number(inputWord);
        sum += sits;
        if (sits % 3 === 0) {
            sumSits += (sits * 5) - 5;
        } else {
            sumSits += sits * 5;
        }
        if (sum >= cinemaSits) {
            break;
        }
        inputWord = input[index];
        index++;
    }
    if (sum >= cinemaSits && inputWord !== "Movie time!") {
        console.log(`The cinema is full.`);
        console.log(`Cinema income - ${sumSits} lv.`);
    }
    if (inputWord === "Movie time!") {
        console.log(`There are ${Math.abs(cinemaSits - sum)} seats left in the cinema.`);
        console.log(`Cinema income - ${sumSits} lv.`);
    }
}
cinema(["50",
"15",
"10",
"10",
"15",
"5"])





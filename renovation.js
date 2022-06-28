function renovation(input) {
    let index = 0;
    let hight = Number(input[index]);//3
    index++;
    let wight = Number(input[index]);//5
    index++;
    let areaNotToPaint = Number(input[index]);//10
    index++;
    let area = hight * wight * 4;//60
    let areaForPaint = Math.ceil(area - area * areaNotToPaint / 100);//54
    let currentWord = input[index];
    index++;
    let sum = 0;
    while (currentWord !== "Tired!") {
        let paint = Number(currentWord);
        sum += paint;
        if (sum >= areaForPaint) {
            break;
        }
        currentWord = input[index];
        index++;
    }
    if (currentWord === "Tired!") {
        console.log(`${areaForPaint - sum} quadratic m left.`);
    }
    if (sum > areaForPaint) {
        console.log(`All walls are painted and you have ${(sum - areaForPaint)} l paint left!`);
    } else if (sum === areaForPaint) {
        console.log(`All walls are painted! Great job, Pesho!`);
    }
}

renovation(["2",
    "3",
    "25",
    "6",
    "7",
    "8"])


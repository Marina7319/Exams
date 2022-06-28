function clubBills(input){
    let profitForTheClub = Number(input[0]);
    let currentWord = input[1];
    let index = 2;
    let sumBill = 0;
    let sumBills = 0;
    while (currentWord !== "Party!"){
        let name = currentWord;
        let numDrinks = Number(currentWord);
        let price = name.length;
        sumBill = price * numDrinks;
        sumBills += sumBill;
        currentWord = input[index];
        index++;
    }
}
clubBills(["100",
"Sidecar",
"7",
"Mojito",
"5",
"White Russian",
"10"])






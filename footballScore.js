function footballScore(input) {
    for (let i = 1; i <= 3; i++) {
        let score = input[0];
        let firstNum = score[0];
        let valueOne = 0;
        let valueTwo = 0;

        let thirdNum = score[2];



        switch (firstNum) {
            case '1':
                valueOne = 1;
                break;
            case '2':
                valueOne = 2;

                break;
            case '3':
                valueOne = 3;

                break;
            case '4':
                valueOne = 4;

                break;
            case '5':
                valueOne = 5;

                break;
            case '6':
                valueOne = 6;

                break;
            case '7':
                valueOne = 7;

                break;
            case '8':
                valueOne = 8;

                break;
            case '9':
                valueOne = 9;

                break;

        }
        console.log(firstNum);

        if (firstNum > thirdNum) {
            console.log(`win`);
        } else {
            console.log(`wieen`);

        }


    }

}
footballScore(["3:1",
    "0:2",
    "0:0"])

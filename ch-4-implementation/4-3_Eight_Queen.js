/*

 */

function mySolution(currentDirection) {
    console.log('');

    let startTime = new Date().getTime();
    let answer = 0;

    const movingNumberOfCases = [[-2, 1], [-2, -1], [2, 1], [2, -1], [1, -2], [1, 2], [-1, -2], [-1, 2]];

    const col = currentDirection[0].charCodeAt(0) - 96;
    const row = Number(currentDirection[1]);

    for (let i = 0; i < movingNumberOfCases.length; i++) {
        const movingNumberOfCase = movingNumberOfCases[i];

        let nx = col + movingNumberOfCase[0];
        let ny = row + movingNumberOfCase[1];

        if (nx <= 0 || nx > 8 || ny <= 0 || ny > 8) {
            continue;
        }

        answer++;
    }

    console.log('');
    console.log('My Answer ===>', answer);
    console.log('time =====>', new Date().getTime() - startTime);
}

function bestSolution(currentDirection) {
    console.log('');

    let startTime = new Date().getTime();
    let answer = 0;

    const col = (currentDirection[0].charCodeAt(0) - 'a'.charCodeAt(0)) + 1;
    const row = Number(currentDirection[1]);

    const movingNumberOfCases = [[-2, 1], [-2, -1], [2, 1], [2, -1], [1, -2], [1, 2], [-1, -2], [-1, 2]];

    for (const movingNumberOfCase of movingNumberOfCases) {
        let nextCol = col + movingNumberOfCase[0];
        let nextRow = row + movingNumberOfCase[1];

        if(nextCol >= 1 && nextCol <= 8 && nextRow >= 1 && nextRow <= 8){
            answer++;
        }
    }

    console.log('');
    console.log('Best Answer ===>', answer);
    console.log('time =====>', new Date().getTime() - startTime);
}

mySolution('a1');
bestSolution('a1');

/*
    모든 경우의수가 제한적이기
    때문에 완전 탐색 알고리즘을 사용함.
 */

function mySolution(hour) {
    console.log('');

    let startTime = new Date().getTime();
    let answer = 0;

    for (let i = 0; i <= hour; i++) {
        for (let j = 0; j < 60; j++) {
            for (let k = 0; k < 60; k++) {
                if((String(i) + String(j) + String(k)).includes('3')) {
                    answer++;
                }
            }
        }
    }

    console.log('');
    console.log('My Answer ===>', answer);
    console.log('time =====>', new Date().getTime() - startTime);
}

function bestSolution(hour) {
    console.log('');

    let startTime = new Date().getTime();
    let answer = 0;

    for (let i = 0; i < hour + 1; i++) {
        for (let j = 0; j < 60; j++) {
            for (let k = 0; k < 60; k++) {
                if((i + '' + j + '' + k).includes('3')) {
                    answer++;
                }
            }
        }
    }

    console.log('');
    console.log('Best Answer ===>', answer);
    console.log('time =====>', new Date().getTime() - startTime);
}

mySolution(5);
bestSolution(5);

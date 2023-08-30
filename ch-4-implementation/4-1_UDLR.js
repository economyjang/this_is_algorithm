/*
    방향 순서마다 단순하게 이동 처리를 하는 것이 아니라
    '방향 벡터'를 이용해야함
 */

function mySolution(size, movingPlan) {
    console.log('');

    let startTime = new Date().getTime();
    let answer = [];

    console.log('Size ==>', size);
    console.log('Moving Plan ==>', movingPlan);

    let row = 1;
    let col = 1;

    for (let i = 0; i < movingPlan.length; i++) {
        let direction = movingPlan[i];

        let temp = 0;
        switch (direction) {
            case 'R':
                temp = col + 1;
                if (0 < temp && temp <= size) {
                    col++;
                }
                break;
            case 'L' :
                temp = col - 1;
                if (0 < temp && temp <= size) {
                    col--;
                }
                break;
            case 'U' :
                temp = row - 1;
                if (0 < temp && temp <= size) {
                    row--;
                }
                break;
            case 'D' :
                temp = row + 1;
                if (0 < temp && temp <= size) {
                    row++;
                }
                break;
        }
    }

    answer.push(row);
    answer.push(col);

    console.log('');
    console.log('My Answer ===>', answer);
    console.log('time =====>', new Date().getTime() - startTime);
}

function bestSolution(size, movingPlan) {
    console.log('');

    let startTime = new Date().getTime();
    let answer = [];

    console.log('Size ==>', size);
    console.log('Moving Plan ==>', movingPlan);

    let x = 1;
    let y = 1;

    // 상 하 좌 우(U, D, L, R) 에 따른 이동 방향
    let dx = [-1, 1, 0, 0];
    let dy = [0, 0, -1, 1];

    let moveType = ['U', 'D', 'L', 'R'];

    for (let i = 0; i < movingPlan.length; i++) {
        let nx = 1;
        let ny = 1;

        // moveType 과 일치하는 plan 이 있으면
        if (moveType.includes(movingPlan[i])) {
            // 이동한 A 의 좌표 nx, ny
            let idx = moveType.indexOf(movingPlan[i]);

            nx = x + dx[idx];
            ny = y + dy[idx];
        }

        if(nx < 1 || nx > size || ny < 1 || ny > size){
            continue;
        }

        x = nx;
        y = ny;
    }

    answer.push(x);
    answer.push(y);

    console.log('');
    console.log('Best Answer ===>', answer);
    console.log('time =====>', new Date().getTime() - startTime);
}

mySolution(5, ['R', 'R', 'R', 'U', 'D', 'D']);
bestSolution(5, ['R', 'R', 'R', 'U', 'D', 'D']);

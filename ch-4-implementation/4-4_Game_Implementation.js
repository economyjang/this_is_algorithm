/*
    시뮬레이션 문제
    차례대로 조건을 수행하면됨
    맵 데이터를 행렬로 접근해야함
 */

function mySolution(mapSize, locationAndDirection, map) {
    console.log('');

    let startTime = new Date().getTime();
    let answer = 0;

    let row = locationAndDirection[0];
    let col = locationAndDirection[1];
    let currentDirection = locationAndDirection[2];

    // 북 동 남 서
    const dRow = [-1, 0, 1, 0];
    const dCol = [0, 1, 0, -1];

    const objMap = {};

    // Map 형식으로 좌표 데이터를 옮김
    for (let i = 0; i < map.length; i++) {
        objMap[i] = map[i];
    }

    // 최초 시작지점 방문처리
    objMap[row][col] = 1;
    // 최초 시작지점 방문한 위치 개수 추가
    answer++;

    let turnTime = 0;
    while (true) {
        // 방향 전환 횟수 추가
        turnTime++;
        // 방향 전환
        currentDirection--;

        // 왼쪽으로 방향 전환
        if (currentDirection === -1) {
            currentDirection = 3;
        }

        // 탐색할 위치 정보
        let nRow = row + dRow[currentDirection];
        let nCol = col + dCol[currentDirection];

        // 탐색을 시도할 방향 위치
        let searchDirect = objMap?.[nRow]?.[nCol];
        // 정면에 가보지 않은 곳이면 위치 이동
        if (searchDirect === 0) {
            // 위치 이동
            row = nRow;
            col = nCol;
            // 방문 처리
            objMap[nRow][nCol] = 1;
            // 이동 횟수 증가
            answer++;
            // 방향 전환 횟수 원복
            turnTime = 0;
            continue;
        }

        if (turnTime === 4) {
            nRow = row - dRow[currentDirection];
            nCol = col - dCol[currentDirection];

            let searchDirect = objMap?.[nRow]?.[nCol];
            if (searchDirect === 0) {
                row = nRow;
                col = nCol;
            } else {
                break;
            }
            turnTime = 0;
        }
    }

    console.log('');
    console.log('My Answer ===>', answer);
    console.log('time =====>', new Date().getTime() - startTime);
}

function bestSolution(currentDirection) {
    console.log('');

    let startTime = new Date().getTime();
    let answer = 0;


    console.log('');
    console.log('Best Answer ===>', answer);
    console.log('time =====>', new Date().getTime() - startTime);
}

mySolution([4, 4], [1, 1, 0], [
                                                                    [1, 1, 1, 1],
                                                                    [1, 0, 0, 1],
                                                                    [1, 1, 0, 1],
                                                                    [1, 1, 1, 1]
                                                                ]);

bestSolution([4, 4], [1, 1, 0], [[1, 1, 1, 1], [1, 0, 0, 1], [1, 1, 0, 1], [1, 1, 1, 1]]);

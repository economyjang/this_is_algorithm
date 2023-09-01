/*
    BFS 는 큐 구조에 기초한다
 */

function bfs(graph, start, visited) {
    // 노드를 저장하기 위한 큐
    const queue = [];
    queue.push(start);

    // 현재 노드 방문처리
    visited[start] = true;

    while(queue.length > 0){
        const node = queue.shift();
        console.log(node, '==> end');

        for (const nodeListElement of graph[node]) {
            if(visited[nodeListElement] === false){
                queue.push(nodeListElement);
                visited[nodeListElement] = true;
            }
        }
    }
}

const graph = [
    [],
    [2, 3, 8],
    [1, 7],
    [1, 4, 5],
    [3, 5],
    [3, 4],
    [7],
    [2, 6, 8],
    [1, 7]
]
const visited = [];
visited.length = 9;
visited.fill(false);

bfs(graph, 1, visited);
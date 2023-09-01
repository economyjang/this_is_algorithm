/*
    DFS 는 스택 구조에 기초한다
 */

function dfs(graph, node, visited) {
    // 현재 노드 방문처리
    visited[node] = true;
    console.log(node, '==> end');

    const connectedNodeList = graph[node];
    for (const connectedNode of connectedNodeList) {
        if(visited[connectedNode] === false){
            dfs(graph, connectedNode, visited);
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

dfs(graph, 1, visited);
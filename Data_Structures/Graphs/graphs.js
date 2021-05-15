//Adjacency List - can use an array to store or a hash table;
//This is a undirected graph

class Graph {
    adjacencyList;

    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }

    addEdge(v1, v2) {
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    }

    removeEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
            v => v !== vertex2
        );
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
            v => v !== vertex1
        );
    }

    removeVertex(vertex) {
        while (this.adjacencyList[vertex].length) {
            const adjacentVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, adjacentVertex);
        }
    }

    depthFirstRecursive(start) {
        const result = [];
        const visited = {};
        //Helper function
        const dfs = (vertex) => {
            if (!this.adjacencyList[start]) return null;
            visited[vertex] = true;
            result.push(vertex);
            this.adjacencyList[vertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    return dfs(neighbor);
                }
            });
            // console.log(this)
        };
        dfs(start);
        return result;
    }

    depthFirstIterative(start) {
        const stack = [start];
        const result = [];
        const visited = {};
        let currentVertex;

        visited[start] = true;
        while (stack.length) {
            currentVertex = stack.pop();
            result.push(currentVertex);

            this.adjacencyList[currentVertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    stack.push(neighbor);
                }
            });
        }
        return result;
    }
}

let g = new Graph();

g.addVertex('A');
g.addVertex('B');
g.addVertex('C');
g.addVertex('D');
g.addVertex('E');
g.addVertex('F');

g.addEdge('A', 'B');
g.addEdge('A', 'C');
g.addEdge('B', 'D');
g.addEdge('C', 'E');
g.addEdge('D', 'E');
g.addEdge('D', 'F');
g.addEdge('E', 'F');
const res = g.depthFirstRecursive('A');
console.log(res);

//          A
//        /   \
//       B     C
//       |     |
//       D --- E
//        \   /
//          F

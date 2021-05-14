//Adjacency List - can use an array to store or a hash table;
//This is a undirected graph

class Graph {
  constructor() {
	this.adjacencyList = {};
  }

  addVertex(vertex) {
	if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
}

let g = new Graph();
g.addVertex('Tokyo')
g.addVertex('San Francisco');
console.log(g)


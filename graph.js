class Graph {
	constructor(N) {
		this.V = N;
		this.adjs = []
		for (let i = 0; i < N; i++)
			this.adjs.push([])
	}

	insert(u, v) {
		this.adjs[u[0]].push(new Edge(v[0], u[1], u[2], v[1], v[2]))
		this.adjs[v[0]].push(new Edge(u[0], v[1], v[2], u[1], u[2]))
	}

	getEdges(u) {
		return this.adjs[u]
	}
}

class Edge {
	constructor(id, xi, yi, xf, yf) {
		this.weigth = [xi, yi, xf, yf]
		this.id = id;
	}
	getXi() {
		return this.weigth[0];
	}

	getXf() {
		return this.weigth[2];
	}

	getYi() {
		return this.weigth[1];
	}

	getYf() {
		return this.weigth[3];
	}
	getId() {
		return this.id;
	}
	calculateDistance() {
		return Math.sqrt(Math.pow(this.getXf() - this.getXi(), 2) + Math.pow(this.getYf() - this.getYi(), 2));
	}

}



function Dijkstra(graph, source, target) {
	let dist = new Array(graph.V).fill(Number.MAX_SAFE_INTEGER)
	let parent = new Array(graph.V).fill(-1)
	let queue = new Array(graph.V)
	for (let i = 0; i < graph.V; i++)
		queue[i] = i

	dist[source] = 0
	while (queue.length !== 0) {
		let smallestVal = Number.MAX_SAFE_INTEGER
		let u = -1
		for (let i of queue) {
			if (dist[i] < smallestVal) {
				u = i
				smallestVal = dist[i]
			}
		}
		
		queue.splice(queue.indexOf(u), 1)

		for (let v of graph.getEdges(u)) {
			let alt = dist[u] + v.calculateDistance()
			if (alt < dist[v.getId()]) {
				dist[v.getId()] = alt
				parent[v.getId()] = u
			}
			if (v.getId() === target)
				return parent
		}
	}
}

let g = new Graph(4)
let pin1 = [0, 1, 2]
let pin2 = [1, 2, 5]
let pin3 = [2, 5, 10]
let pin4 = [3, 1, 7]

g.insert(pin1,pin2)
g.insert(pin2,pin3)
g.insert(pin3,pin4)
console.log(Dijkstra(g, 0, 3))
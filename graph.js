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
				return [parent, dist]
		}
	}
}

let g = new Graph(11)
let pins = []
pins.push([0, 3957, 3225])
pins.push([1, 3950, 3183])
pins.push([2, 3965, 3261])
pins.push([3, 3971, 3300])
pins.push([4, 4024, 3292])
pins.push([5, 4015, 3254])
pins.push([6, 4009, 3212])
pins.push([7, 4003, 3176])
pins.push([8, 3996, 3138])
pins.push([9, 4043, 3129])
pins.push([10, 4063, 3244])

g.insert(pins[0], pins[1])
g.insert(pins[0], pins[2])
g.insert(pins[2], pins[3])
g.insert(pins[2], pins[5])
g.insert(pins[3], pins[4])
g.insert(pins[0], pins[6])
g.insert(pins[1], pins[7])
g.insert(pins[4], pins[5])
g.insert(pins[5], pins[6])
g.insert(pins[6], pins[7])
g.insert(pins[7], pins[8])
g.insert(pins[8], pins[9])
g.insert(pins[5], pins[10])
g.insert(pins[9], pins[10])
let vals = Dijkstra(g, 3, 9)
console.log(vals[0].map(el => el +1))
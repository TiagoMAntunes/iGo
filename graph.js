class Graph {
    constructor(N) {
        this.V = N;
        this.adjs = []
        for (let i = 0; i < N; i++)
            this.adjs.push([])
    }

    insert(u, v) {
        this.adjs[u].push(v)
    }
}

class Edge{
	constructor(N, id){
		this.weigth = N;
		this.id = id;
	}
	getWeigth(){
		return this.weigth;
	}
	getId(){
		return this.id;
	}

}

let g = new Graph(5)
g.insert(1,2)
g.insert(0,3)
g.insert(4,0)
g.insert(4,1)
console.log(g.adjs)
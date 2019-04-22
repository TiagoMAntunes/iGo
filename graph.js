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
}

class Edge{
	constructor(id, xi, yi, xf, yf){
		this.weigth = [xi,yi,xf,yf]
		this.id = id;
	}
	getXi(){
		return this.weigth[0];
	}

	getXf(){
		return this.weigth[2];
	}

	getYi(){
		return this.weigth[1];
	}

	getYf(){
		return this.weigth[3];
	}
	getId(){
		return this.id;
	}
	calculateDistance(){
		return Math.sqrt(Math.pow(weigth.getXf() - weigth.getXi(),2) + Math.pow(weigth.getYf() - weigth.getYi(),2));
	}

}

let g = new Graph(4)
let pin1 = [0, 1, 2]
let pin2 = [1, 2, 5]
let pin3 = [2, 5, 10]
let pin4 = [3, 1, 7]

g.insert(pin2,pin3)
g.insert(pin1,pin4)
g.insert(pin2,pin4)
console.log(g.adjs[1])
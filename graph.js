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

let g = new Graph(5)
g.insert(1,2)
g.insert(0,3)
g.insert(4,0)
g.insert(4,1)
console.log(g.adjs)
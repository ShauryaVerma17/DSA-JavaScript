class Graph{
    constructor(){
        this.numberOfNodes = 0;
        this.AdjacentList = {};
    }

    addNode(node){
        if(!this.AdjacentList[node]){
            this.AdjacentList[node] = [];
            this.numberOfNodes++;
        }
    }

    addEdge(node1,node2){
        if(!this.AdjacentList[node1] || !this.AdjacentList[node2]){ // Node not present
            return false;
        }
        else if(this.AdjacentList[node1].indexOf(node2) != -1 ){ // Edge already present
            return false;
        }
        else{
            this.AdjacentList[node1].push(node2);
            this.AdjacentList[node2].push(node1);
        }
    }
}

let myGraph = new Graph();
myGraph.addNode(0);
myGraph.addNode(1);
myGraph.addNode(2);
myGraph.addNode(3);
myGraph.addNode(4);
myGraph.addNode(5);
myGraph.addNode(6);
myGraph.addEdge(3,1);
myGraph.addEdge(3,4);
myGraph.addEdge(4,2);
myGraph.addEdge(4,5);
myGraph.addEdge(1,2);
myGraph.addEdge(1,0);
myGraph.addEdge(0,2);
myGraph.addEdge(6,5);
myGraph.addEdge(6,5);
myGraph.addEdge(6,5);
console.log(myGraph.AdjacentList);
console.log(myGraph);

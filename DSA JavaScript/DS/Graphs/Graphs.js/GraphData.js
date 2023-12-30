// Edge list 
const graph = [[1,3],[2,1],[2,3],[2,0]];

// Adjacent List : Index is value, data is connections
const graph2 = [[2],[2,3],[0,1,3],[1,2]];

// Adjacent Matrix : Can even add weights here :) Instead of 1 add weight 
const graph3 = [
    [0,0,1,0],
    [0,0,1,1],
    [1,1,0,1],
    [0,1,1,0]
];

// or as object 
const graph4 = {
    0 : [0,0,1,0],
    1 : [0,0,1,1],
    2 : [1,1,0,1],
    3 : [0,1,1,0]
};
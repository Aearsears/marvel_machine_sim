$(function() {
// create an array with nodes
var nodes = new vis.DataSet([
    {id: 1, label: 'Node 1'},
    {id: 2, label: 'Node 2'},
    {id: 3, label: 'Node 3'},
    {id: 4, label: 'Node 4'},
    {id: 5, label: 'Node 5'}
]);

// create an array with edges
var edges = new vis.DataSet([
    {from: 1, to: 3},
    {from: 1, to: 2},
    {from: 2, to: 4},
    {from: 2, to: 5}
]);

// create a network
var container = document.getElementById('mynetwork');

// provide the data in the vis format
var data = {
    nodes: nodes,
    edges: edges
};
var options = {};

// initialize your network!
var network = new vis.Network(container, data, options);

});

class Item{
    constructor(name,img,probability){
        //img is path to picture
        this.name=name;
        this.img = img;
        this.probability = probability;
    }
}

var item1 = new Item("glove","path",0.9);
var item2 = new Item("coat","path",0.6);
var item3 = new Item("coat","path",0.4);

function compare(a, b){
    if(a.probability<b.probability){
        return -1;
    }
    else if (a.probability>b.probability){
        return 1;
    }
    return 0;
}

function print_value(a){
    console.log(a.probability);
}

var tree = new buckets.BSTree(compare);
tree.add(item1);
tree.add(item2);
tree.add(item3);
tree.inorderTraversal(print_value);
console.log(tree.getRoot().probability)
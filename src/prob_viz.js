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
    constructor(name,img,probability,p1,p2){
        //img is path to picture
        this.name=name;
        this.img = img;
        this.probability = probability;
        this.probRange = [p1,p2];
    }
}

var json = (function () {
    var json = null;
    $.ajax({
        'async': false,
        'global': false,
        'url': './src/rates.json',
        'dataType': "json",
        'success': function (data) {
            json = data;
        }
    });
    return json;
})();

var compare = function (a, b) {
	if (a.probability <= b.probability) {
		return -1
	} else if (a.probability > b.probability) {
		return 1;
	}
    return 0;
};

function print_value(a){
    console.log(a.name,a.probRange);
}

var treemid = new AvlTree(compare);
var treeleft = new AvlTree(compare);
var treeright = new AvlTree(compare);

function createTrees(pos,tree){
    let tracker = 0.0;
    for( var item in json[pos]["Item"]){
        // console.log(item);
        // console.log(json[pos]["Item"][item]);
        let ratestring = json[pos]["Item"][item]["Rate"];
        let partsArray = ratestring.split('%');
        let subrate = ((parseFloat(partsArray[0]))/100.0)
        let totalrate = subrate;
        let item1 = new Item(item,"path",totalrate,tracker,totalrate+tracker);
        tree.insert(item1);
        tracker = tracker + totalrate;
    } 
}

//0.9999999999999988 16 places of accuracy
createTrees("Amid",treemid);
createTrees("Bright",treeright);
createTrees("Cleft",treeleft);

function spinWheel(){
    var items=[];
    items.push(treeleft.getSpin(Math.random()));
    items.push(treemid.getSpin(Math.random()));
    items.push(treeright.getSpin(Math.random()));
    return items;
}
console.log(spinWheel());
// treeleft.forEach(print_value);

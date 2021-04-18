// $(function() {
// // create an array with nodes
// var nodes = new vis.DataSet([
//     {id: 1, label: 'Node 1'},
//     {id: 2, label: 'Node 2'},
//     {id: 3, label: 'Node 3'},
//     {id: 4, label: 'Node 4'},
//     {id: 5, label: 'Node 5'}
// ]);

// // create an array with edges
// var edges = new vis.DataSet([
//     {from: 1, to: 3},
//     {from: 1, to: 2},
//     {from: 2, to: 4},
//     {from: 2, to: 5}
// ]);

// // create a network
// var container = document.getElementById('mynetwork');

// // provide the data in the vis format
// var data = {
//     nodes: nodes,
//     edges: edges
// };
// var options = {};

// // initialize your network!
// var network = new vis.Network(container, data, options);

// });

math.config({
    number: 'BigNumber',      // Default type of number:
                              // 'number' (default), 'BigNumber', or 'Fraction'
    precision: 64             // Number of significant digits for BigNumbers
  })
  

class Item{
    constructor(name,img,probability,p1,p2){
        //img is path to picture
        this.name=name;
        this.img = img;
        this.probability = probability;
        this.p1 = p1;
        this.p2 = p2;
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
	if (math.largerEq(a.p1,b.p2)) {
		return 1
	} else {
		return -1;
	}
};

/**
 * Helper function to output a value in the console. Value will be formatted.
 * @param {*} value
 */
 function print (value) {
    const precision = 16;
    console.log(math.format(value, precision));
  }
  

function print_value(a){
    console.log(a.name);
    print(a.p1);
    print(a.p2);
}

var treemid = new AvlTree(compare);
var treeleft = new AvlTree(compare);
var treeright = new AvlTree(compare);

function createTrees(pos,tree){
    let tracker = math.bignumber(0.0);
    for( var item in json[pos]["Item"]){
        // console.log(item);
        // console.log(json[pos]["Item"][item]);
        let ratestring = json[pos]["Item"][item]["Rate"];
        let partsArray = ratestring.split('%');
        let subrate = (parseFloat(partsArray[0]));
        let totalrate = math.bignumber(subrate);
        totalrate = math.divide(totalrate,math.bignumber(100.0))
        let item1 = new Item(item,"path",totalrate,tracker,math.add(totalrate,tracker));
        tree.insert(item1);
        tracker = math.add(tracker,totalrate);
    } 
}

//0.9999999999999988 16 places of accuracy
//0.9800030656718224
//0.8587292825373254
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
// treeleft.forEach(print_value);
// console.log(spinWheel());

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

//event listeners for accordion
$('#rightb').on("click",function () {
    console.log("clicked");
    var collapseElementList = [].slice.call(document.querySelectorAll('.collapse'));
    new bootstrap.Collapse(collapseElementList[1]);
    // if ($('#slot ul').is(":animated")) return;
    // if($('#congraluations').is(":visible")){
        //     $('#congraluations')[0].setAttribute("style","visibility:hidden");
        // }
    new bootstrap.Collapse(collapseElementList[2]);
    $('#right')[0].setAttribute("style","display:inline");
});
$('#leftb').on("click",function () {
    console.log("clicked");
    var collapseElementList = [].slice.call(document.querySelectorAll('.collapse'));
    new bootstrap.Collapse(collapseElementList[1]);
    // if ($('#slot ul').is(":animated")) return;
    // if($('#congraluations').is(":visible")){
        //     $('#congraluations')[0].setAttribute("style","visibility:hidden");
        // }
        new bootstrap.Collapse(collapseElementList[2]);
        $('#left')[0].setAttribute("style","display:inline");
    });
$('#midb').on("click",function () {
    console.log("clicked");
    var collapseElementList = [].slice.call(document.querySelectorAll('.collapse'));
    new bootstrap.Collapse(collapseElementList[1]);
    // if ($('#slot ul').is(":animated")) return;
    // if($('#congraluations').is(":visible")){
        //     $('#congraluations')[0].setAttribute("style","visibility:hidden");
        // }
        new bootstrap.Collapse(collapseElementList[2]);
        $('#mid')[0].setAttribute("style","display:inline");
});

$('#items ul li img').on("click",function (event) {
    // console.log("clicked");
    // console.log($(event.target)[0].title);
    //delete previous child nodes
    var childNodes = document.getElementById('flush-collapseThree-accordion-body').childNodes;

    childNodes.forEach(function(entry) 
    {
        if(entry.textContent!='')
        {
            entry.textContent =" ";
        //entry.remove(); //for remove 
        }
        else{
            entry.remove();
        }
        
    });
    var collapseElementList = [].slice.call(document.querySelectorAll('.collapse'));
    new bootstrap.Collapse(collapseElementList[2]);
    // // if ($('#slot ul').is(":animated")) return;
    // // if($('#congraluations').is(":visible")){
    //     //     $('#congraluations')[0].setAttribute("style","visibility:hidden");
    //     // }
    new bootstrap.Collapse(collapseElementList[3]);
    //append text into flush-collapseThree
    let br = document.createElement("br");
    let img = document.createElement("img");
    let t1 = document.createTextNode("Name: "+ $(event.target)[0].ariaLabel);
    let t2 = document.createTextNode("Probability: "+ json[$(event.target)[0].parentNode.parentNode.id]["Item"][$(event.target)[0].ariaLabel]["Rate"]);
    img.src=$(event.target)[0].attributes[0].nodeValue;
    document.getElementById('flush-collapseThree-accordion-body').appendChild(img);
    document.getElementById('flush-collapseThree-accordion-body').appendChild(t1);
    document.getElementById('flush-collapseThree-accordion-body').appendChild(br);
    document.getElementById('flush-collapseThree-accordion-body').appendChild(t2);
});



});
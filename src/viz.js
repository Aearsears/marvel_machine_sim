$(function() {
var network = null;
function createNodes(num){
    var x=[];
    for(var i=0;i<num;i++){
        if(i==num-1){
            
            x.push({id:i,color:'red'});
        }
        else{
            x.push({id:i});
        }
    }
    
    var nodes= new vis.DataSet(x);
    if(document.getElementById('vis-network')!=null){
        network.setData({nodes});
    }
    else{
        var container = document.getElementById('mynetwork');
        var data = {
            nodes: nodes,
        };
        var options = {
            height:'100%',
            width: '100%'
        };
        network = new vis.Network(container, data, options);

    }
}
// createNodes(30);
// create a network


// provide the data in the vis format


// initialize your network!

function closeModal(modal) {
    $(modal).on('shown.bs.modal', function(e) {
        $(modal).modal("hide");
    });
}

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
    $('#left')[0].setAttribute("style","display:none");
    $('#mid')[0].setAttribute("style","display:none");
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
        $('#right')[0].setAttribute("style","display:none");
        $('#mid')[0].setAttribute("style","display:none");
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
        $('#right')[0].setAttribute("style","display:none");
        $('#left')[0].setAttribute("style","display:none");
        $('#mid')[0].setAttribute("style","display:inline");
});

$('#items ul li img').on("click",function (event) {
    // console.log("clicked");
    // console.log($(event.target)[0].title);
    //delete previous child nodes
    let childNodes = document.getElementById('flush-collapseThree-accordion-body').childNodes;
    let element = document.getElementById('flush-collapseThree-accordion-body');
    while(childNodes.length!=0){
        element.removeChild(childNodes[0]);
    }
    let collapseElementList = [].slice.call(document.querySelectorAll('.collapse'));
    new bootstrap.Collapse(collapseElementList[2]);
    // // if ($('#slot ul').is(":animated")) return;
    // // if($('#congraluations').is(":visible")){
    //     //     $('#congraluations')[0].setAttribute("style","visibility:hidden");
    //     // }
    new bootstrap.Collapse(collapseElementList[3]);
    //append text into flush-collapseThree
    let br = document.createElement("br");
    let img = document.createElement("img");
    let t1 =document.createElement("p");
    t1.innerHTML = "Name: "+ $(event.target)[0].ariaLabel;
    let t2 =document.createElement("p");
    t2.innerHTML = "Probability: "+ json[$(event.target)[0].parentNode.parentNode.id]["Item"][$(event.target)[0].ariaLabel]["Rate"];
    img.src=$(event.target)[0].attributes[0].nodeValue;
    document.getElementById('flush-collapseThree-accordion-body').appendChild(img);
    document.getElementById('flush-collapseThree-accordion-body').appendChild(t1);
    // document.getElementById('flush-collapseThree-accordion-body').appendChild(br);
    document.getElementById('flush-collapseThree-accordion-body').appendChild(t2);

    let p = json[$(event.target)[0].parentNode.parentNode.id]["Item"][$(event.target)[0].ariaLabel]["Rate"];
    p = parseFloat(p.split("%")[0]);
    var myModal = new bootstrap.Modal(document.getElementById('myModal'));
    myModal.show();
    createNodes(Math.round(100/p));
    closeModal('#myModal');
        

});




});
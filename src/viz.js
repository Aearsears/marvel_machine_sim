$(function() {
var network = null;
function createNodes(num){
    var scalef= 1;
    while(num/scalef>100){
        scalef*=10;
    }
    var x=[];
    for(var i=0;i<math.round(num/scalef);i++){
        if(i==math.round(num/scalef)-1){
            for(var k =0;k<scalef;k++){
                if(k==scalef-1){
                    //one try
                    x.push({id:i+k+1,color:'red'});
                }
                else{
                    //one try
                    x.push({id:i+k+1,color:'blue'});
                }
            }
        }
        else{
            //scale f tries
            x.push({id:i,color:'blue', shape: 'dot', size: 30});
        }
    }
        var container = document.getElementById('mynetwork');
        const legend = document.querySelector('#network-contents');
        legend.innerHTML = `Large blue node is ${scalef} rolls.<br>Red node is your winning roll.`
            + (scalef!=1 ? '<br>Small blue node is 1 roll' : '');
        
        var nodes= new vis.DataSet(x);
        var data = {
            nodes: nodes,
        };
        var options = {
            height:'100%',
            width: '100%'
        };
        network = new vis.Network(container, data, options);

    // }
}

function closeModal(modal) {
    $(modal).on('shown.bs.modal', function(e) {
        $(modal).modal("hide");
    });
}

//event listeners for accordion
$('#rightb2').on("click",function () {
    console.log("clicked");
    var collapseElementList = [].slice.call(document.querySelectorAll('.collapse'));
    new bootstrap.Collapse(collapseElementList[1]);
    new bootstrap.Collapse(collapseElementList[2]);
    $('#left2')[0].setAttribute("style","display:none");
    $('#mid2')[0].setAttribute("style","display:none");
    $('#right2')[0].setAttribute("style","display:grid; grid-template-columns: repeat(10, 1fr);");
});
$('#leftb2').on("click",function () {
    console.log("clicked");
    var collapseElementList = [].slice.call(document.querySelectorAll('.collapse'));
    new bootstrap.Collapse(collapseElementList[1]);
    new bootstrap.Collapse(collapseElementList[2]);
    $('#right2')[0].setAttribute("style","display:none");
    $('#mid2')[0].setAttribute("style","display:none");
    $('#left2')[0].setAttribute("style","display:grid; grid-template-columns: repeat(10, 1fr);");
    });
$('#midb2').on("click",function () {
    console.log("clicked");
    var collapseElementList = [].slice.call(document.querySelectorAll('.collapse'));
    new bootstrap.Collapse(collapseElementList[1]);
    new bootstrap.Collapse(collapseElementList[2]);
    $('#right2')[0].setAttribute("style","display:none");
    $('#left2')[0].setAttribute("style","display:none");
    $('#mid2')[0].setAttribute("style","display:grid; grid-template-columns: repeat(10, 1fr);");
});

$('#items ul li img').on("click",function (event) {
    //delete previous child nodes
    let childNodes = document.getElementById('flush-collapseThree-accordion-body').childNodes;
    let element = document.getElementById('flush-collapseThree-accordion-body');
    while(childNodes.length!=0){
        element.removeChild(childNodes[0]);
    }
    let collapseElementList = [].slice.call(document.querySelectorAll('.collapse'));
    new bootstrap.Collapse(collapseElementList[2]);
    new bootstrap.Collapse(collapseElementList[3]);
    //append text into flush-collapseThree
    let br = document.createElement("br");
    let img = document.createElement("img");
    let t1 =document.createElement("p");
    t1.innerHTML = "Name: "+ $(event.target)[0].title;
    let t2 =document.createElement("p");
    t2.innerHTML = "Probability: "+ json[($(event.target)[0].parentNode.parentNode.id).replace(2, "")]["Item"][$(event.target)[0].title]["Rate"];
    img.src=$(event.target)[0].attributes[0].nodeValue;
    document.getElementById('flush-collapseThree-accordion-body').appendChild(img);
    document.getElementById('flush-collapseThree-accordion-body').appendChild(t1);
    // document.getElementById('flush-collapseThree-accordion-body').appendChild(br);
    document.getElementById('flush-collapseThree-accordion-body').appendChild(t2);

    let p = json[($(event.target)[0].parentNode.parentNode.id).replace(2, "")]["Item"][$(event.target)[0].title]["Rate"];
    p = parseFloat(p.split("%")[0]);
    var myModal = new bootstrap.Modal(document.getElementById('myModal'));
    myModal.show();
    createNodes(Math.round(100/p));
    closeModal('#myModal');
});
});
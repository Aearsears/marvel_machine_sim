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
            x.push({id:i,color:'green'});
        }
    }
        var container = document.getElementById('mynetwork');
        
        x.push({
            x:-container.clientWidth/2,
            y:-container.clientWidth/2,
            label: "Green node is " +scalef +" rolls",
            font:{size:32},
            value:1,
            fixed:true,
            physics:false
        },
        {
            x:-container.clientWidth/2,
            y:-container.clientWidth/2+100,
            label: "Red node is your winning roll",
            font:{size:32},
            value:1,
            fixed:true,
            physics:false
        });
        if(scalef!=1){
            x.push({
                x:-container.clientWidth/2,
                y:-container.clientWidth/2+50,
                label: "Blue node is 1 roll",
                font:{size:32},
                value:1,
                fixed:true,
                physics:false
            })
        }
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
$('#rightb').on("click",function () {
    console.log("clicked");
    var collapseElementList = [].slice.call(document.querySelectorAll('.collapse'));
    new bootstrap.Collapse(collapseElementList[1]);
    new bootstrap.Collapse(collapseElementList[2]);
    $('#left')[0].setAttribute("style","display:none");
    $('#mid')[0].setAttribute("style","display:none");
    $('#right')[0].setAttribute("style","display:inline");
});
$('#leftb').on("click",function () {
    console.log("clicked");
    var collapseElementList = [].slice.call(document.querySelectorAll('.collapse'));
    new bootstrap.Collapse(collapseElementList[1]);
    new bootstrap.Collapse(collapseElementList[2]);
    $('#right')[0].setAttribute("style","display:none");
    $('#mid')[0].setAttribute("style","display:none");
    $('#left')[0].setAttribute("style","display:inline");
    });
$('#midb').on("click",function () {
    console.log("clicked");
    var collapseElementList = [].slice.call(document.querySelectorAll('.collapse'));
    new bootstrap.Collapse(collapseElementList[1]);
    new bootstrap.Collapse(collapseElementList[2]);
    $('#right')[0].setAttribute("style","display:none");
    $('#left')[0].setAttribute("style","display:none");
    $('#mid')[0].setAttribute("style","display:inline");
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

    //console.log(json[$(event.target)[0].parentNode.parentNode.id]["Item"][$(event.target)[0].title]["Rate"]);

    t2.innerHTML = "Probability: "+ json[$(event.target)[0].parentNode.parentNode.id]["Item"][$(event.target)[0].title]["Rate"];
    img.src=$(event.target)[0].attributes[0].nodeValue;
    document.getElementById('flush-collapseThree-accordion-body').appendChild(img);
    document.getElementById('flush-collapseThree-accordion-body').appendChild(t1);
    // document.getElementById('flush-collapseThree-accordion-body').appendChild(br);
    document.getElementById('flush-collapseThree-accordion-body').appendChild(t2);

    let p = json[$(event.target)[0].parentNode.parentNode.id]["Item"][$(event.target)[0].title]["Rate"];
    p = parseFloat(p.split("%")[0]);
    var myModal = new bootstrap.Modal(document.getElementById('myModal'));
    myModal.show();
    createNodes(Math.round(100/p));
    closeModal('#myModal');
});
});
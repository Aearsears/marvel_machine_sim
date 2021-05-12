var sound = new Audio('sound/start.mp3');
var ding = new Audio('sound/stop.mp3');
let counterDisplayElemNx = document.querySelector('.counter-display-nx');
let counterDisplayElemCash = document.querySelector('.counter-display-cash');
let counterPlusElem = document.querySelector('.counter-plus');
let counterPlusElemDouble = document.querySelector('.counter-plus-double');
let countCash = 0;
let countNx = 0;
let doubmarcounter =false;
let left = document.getElementById('left');
let right = document.getElementById('right');
let mid = document.getElementById('mid');
let indexes = null;
sound.volume = 0.2;
// Loop of playing sound
sound.addEventListener('ended', function () {
    this.currentTime = 0;
    this.play();
}, false);

$('#btn-slot').click(function () {
    if ($('#slot ul').is(":animated")) return;
    if($('#congratulations').is(":visible")){
        $('#congratulations')[0].setAttribute("style","visibility:hidden");
    }
    if(indexes!=null){
            //add the items to the inventory
            for ( var i =0; i<indexes.length; i++){
                if(i==0){
                    let clone = left.getElementsByTagName("li")[indexes[i]-1].cloneNode(true);
                    document.getElementById('inventory').appendChild(clone);
                    activatetooltips(); 
                }
                else if(i==1){
                    let clone = mid.getElementsByTagName("li")[indexes[i]-1].cloneNode(true);
                    document.getElementById('inventory').appendChild(clone);
                    activatetooltips();
                }
                else{
                    let clone = right.getElementsByTagName("li")[indexes[i]-1].cloneNode(true);
                    document.getElementById('inventory').appendChild(clone);
                    activatetooltips();
                }

            }
        mid.getElementsByTagName("li")[indexes[1]-1].childNodes[0].removeAttribute("style");
        right.getElementsByTagName("li")[indexes[2]-1].childNodes[0].removeAttribute("style");
        left.getElementsByTagName("li")[indexes[0]-1].childNodes[0].removeAttribute("style"); 

    }
    sound.play();
    countNx+=4900;
    countCash+=4.9;
    counterDisplayElemNx.innerHTML = (Math.round(countNx * 100) / 100).toLocaleString();
    counterDisplayElemCash.innerHTML = "$".concat((Math.round(countCash * 100) / 100).toString());
    doubmarcounter = false;
    let x = getItem()
    indexes =JSON.parse(JSON.stringify(x)); 
    $('#slot ul').playSpin({
        time: 500,
        loops: 1,
        easing : 'easeOutBack',
        endNum : x,
        stopSeq: "leftToRight",
        onEnd: function () {
            //test(); // flash the item                     
            ding.play(); // Play ding after each number is stopped
        },
        onFinish: function () {
            //test(); // display the congratulations banner
            $('#congratulations')[0].setAttribute("style","visibility:visible"); 
            sound.pause(); // To stop the looping sound is pause it

            setTimeout(function() {
                $('#congratulations')[0].setAttribute("style", "visibility:hidden");
            }, 3000);
        }
    });

});
// event = keyup or keydown
document.addEventListener('keyup', event => {
if (event.code === 'Space') {
    if ($('#slot ul').is(":animated")) return; 
    sound.play();
    countNx+=4900;
    countCash+=4.9;
    counterDisplayElemNx.innerHTML = (Math.round(countNx * 100) / 100).toLocaleString();
    counterDisplayElemCash.innerHTML = "$".concat((Math.round(countCash * 100) / 100).toString());
    $('#slot ul').playSpin({
        time: 1,
        loops: 1,
        endNum : getItem(),
        stopSeq: 'leftToRight',
        onEnd: function () {
            ding.play(); // Play ding after each number is stopped
        },
        onFinish: function () {
            sound.pause(); // To stop the looping sound is pause it
        }
    });
}
});
counterPlusElemDouble.addEventListener("click",()=>{
    //1USD is 1000nx
    //so 1000 nx is 1$ dollars
    if ($('#slot ul').is(":animated")) return;
    if(doubmarcounter==true){
            $("#btn-double").text('You already rolled for Double Marvel!');
            setTimeout(function() { $("#btn-double").text("Double Marvel!"); }, 5000);
            return;

    }
    var wheel = getDoubleMarvel();
    if(wheel=="mid"){
        mid.getElementsByTagName("li")[indexes[1]-1].childNodes[0].setAttribute("style","border: 5px groove rgb(250,0,0);");
    }
    else if (wheel=="right"){
        right.getElementsByTagName("li")[indexes[2]-1].childNodes[0].setAttribute("style","border: 5px groove rgb(250,0,0);");
        
    }
    else{
        left.getElementsByTagName("li")[indexes[0]-1].childNodes[0].setAttribute("style","border: 5px groove rgb(250,0,0);");

    }
    countNx+=1000;
    countCash+=1.0;
    counterDisplayElemNx.innerHTML = (Math.round(countNx * 100) / 100).toLocaleString();
    counterDisplayElemCash.innerHTML = "$".concat((Math.round(countCash * 100) / 100).toString());
    doubmarcounter=true;
});
function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < milliseconds);
    }
function activatetooltips(){
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})
}
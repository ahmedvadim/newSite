function lightSwitch(){
    var light = document.getElementById("lightSwitch");
    var BGcolor = document.body.style.backgroundColor;
    if (BGcolor != "black"){
        light.innerHTML = "The light is open! Click here to close.";
        light.onclick = function(){
            document.body.style.backgroundColor = "Black";
            light.innerHTML = "The light is close! Click here to open.";
        }
    }
}
lightSwitch();

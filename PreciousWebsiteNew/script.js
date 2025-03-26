
function writeText(txt){
    var descElement = document.getElementById("desc");
    descElement.innerHTML = txt;
    descElement.style.color = "black";  
}

function dissolveText(txt){
    var descElement = document.getElementById("desc");
    descElement.innerHTML = txt;
    descElement.style.color = "transparent"; 
}

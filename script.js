var character = document.getElementById("character");
var block = document.getElementById("block");
var counter = 0;
document.getElementById("bestScore").innerHTML = Math.floor(localStorage.getItem("score"));

function jump() {
    if(character.classList == "animate"){return}
    character.classList.add("animate");
    setTimeout(function(){
        character.classList.remove("animate");
    }, 500);
}

var checkDead = setInterval(function() {
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if(blockLeft < 50 && blockLeft > -20 && characterTop >= 130){
        block.style.animation = "none";
        alert("Game Over!! Your Score: " + Math.floor(counter/200));
        if(localStorage.getItem("score") < Math.floor(counter/200)) {
            localStorage.setItem("score", Math.floor(counter/200));
            location.reload();
            }
        counter=0;
        
        block.style.animation = "block 2s infinite linear";
    }else{
        counter++;
        document.getElementById("scoreSpan").innerHTML = Math.floor(counter/200);
    }

}, 10);

function reset() {
    localStorage.setItem("score", 0);
    location.reload();
}
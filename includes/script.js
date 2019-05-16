var blackSquare, size=80, boxsesPlace;
var letters = ['E', 'L', 'A','D'];
var boxesDisplayedCnt=0;
var displayedBoxes=[];


var boxShow = function(event){
    var box = event.srcElement;
    box.childNodes[0].style.display= 'block';
    displayedBoxes[boxesDisplayedCnt] = box;
    boxesDisplayedCnt++;
    if (boxesDisplayedCnt==2){
        compareLetters();
    }
}
 
 window.onload = function() {
    blackSquare= document.getElementById('square');
    boxsesPlace= document.getElementById('boxesplace');
    
    

    blackSquare.onclick = function(){
        for(var i=0;i<3;i++){
        var createBoxes = document.createElement('DIV');
        createBoxes.style.height = size + 'px';
        createBoxes.style.width = size + 'px';
        createBoxes.style.backgroundColor='#000';
        createBoxes.style.margin= '50px';
        createBoxes.style.display='inline-block';
        createBoxes.addEventListener("click", boxShow);
        boxsesPlace.appendChild(createBoxes);
        
        var letter = document.createElement("SPAN");
        letter.style.display = "none";
        letter.style.color = '#FFF';
        letter.style.float = 'left';
        letter.style.fontSize = size + 'px';
        letter.style.marginLeft = '13%';
        letter.style.fontFamily= 'Amiko,sans-serif';
        letter.innerText = letters[Math.floor(Math.random()*letters.length)];    
        createBoxes.appendChild(letter);


        size+=20;
    }
    }
} 

var resetDisplayedLetters = function(){
    boxesDisplayedCnt=0;
    displayedBoxes=[];
}

var compareLetters = function(){
    var letter1 = displayedBoxes[0].childNodes[0].innerText;
    var letter2 = displayedBoxes[1].childNodes[0].innerText;

    if (letter1==letter2){
        displayedBoxes[0].style.backgroundColor='#7FFF00';
        displayedBoxes[1].style.backgroundColor='#7FFF00';
        resetDisplayedLetters();
    }
    else{
        setTimeout(function(){
            displayedBoxes[0].childNodes[0].style.display='none'; 
            displayedBoxes[1].childNodes[0].style.display='none';
            resetDisplayedLetters();
        }, 1000);

    }
}













const board=document.querySelector('#board');
const Squares_Number=200;

const colors=['IndianRed','Salmon','red','FireBrick','DarRed','Pink','HardPink','HotPink','DeepPink','LawnGreen',"Lime","SpringGreen","Teal","#ffffff","Yellow","Aqua","Blue","Navy"];
 
function RandomColor() { 
    r = Math.floor(Math.random() * (colors.length));
    return colors[r];
    }

for(let i=0;i<Squares_Number;i++){
    const square=document.createElement('div');
    square.classList.add('square');
    square.addEventListener('mouseover',()=>setColor(square));
    square.addEventListener('mouseleave',()=>removeColor(square));
    board.append(square);
}

function setColor(element){
    col=RandomColor()
    element.style.backgroundColor=col;
    element.style.boxShadow=`0 0 2px ${col}, 0 0 10px ${col}`;

}

function removeColor(element){
    element.style.backgroundColor='rgb(34, 34, 63)';
    element.style.boxShadow='0 0 2px lemonchiffon' ;
}


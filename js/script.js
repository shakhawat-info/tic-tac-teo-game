

const gridBox = document.querySelector('.gridBox');
const winer = document.querySelector('.winer');


let gridArr = Array(16).fill(null);
// console.log(gridArr);
let currentPlayer = "a";
let isActive = true;


// winerCheck
function winerCheck(){
    let winCombinatios = [
        [0 , 1 , 2 , 3] , [4 , 5 , 6 , 7] , [8 , 9 , 10 , 11] , [12 , 13 , 14 , 15],
        [0 , 4 , 8 , 12] , [1 , 5 , 9 , 13] , [2 , 6 , 10 , 14] , [3 , 7 , 11, 15] , 
        [0 , 5 , 10 , 15] , [ 3 , 6 , 9 , 12]
    ]

    for (combination of winCombinatios){
        let [m , n , o , p] = combination;

        if(gridArr[m] && gridArr[m] == gridArr[n] && gridArr[m] == gridArr[o] && gridArr[m] == gridArr[p]) return gridArr[m] ;
    }
    // console.log(gridArr);
    return gridArr.includes(null) ? null : "Drow";
    
}




// Grid click
function gridClick(e){
    console.log('click');
    
    let gridIndex = e.target.dataset.index;
    gridArr[gridIndex] = currentPlayer ;
    e.target.textContent = currentPlayer;
    e.target.classList.add('choosed');
    
    // console.log(gridArr);

    let result = winerCheck();
    if(result){
        isActive = false;
        winer.textContent = result == "Drow" ? 'It\'s a Drow!' : `${result} Win!`
    }
    else{
        currentPlayer = currentPlayer == "a" ? "b" : "a";
        if(currentPlayer == "b"){
            e.target.classList.add('hi')
        }
    }
}


// initial cells box
function cellBox(){

    for(c = 0 ; c < 16 ; c++){
        let cell = document.createElement('div');
        cell.classList.add('grid');
        cell.dataset.index = c;
        gridBox.appendChild(cell);
        cell.addEventListener('click' , gridClick)
    }
}
cellBox();
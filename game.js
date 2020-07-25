var x = 0;
let a = [" ", " ", " ", " ", " ", " ", " ", " ", " "];

doMiniMax = function(){    
    if(check(a)){
        printOutput('X has won');
    }   
    else if(x == 9){
        console.log("entered here");
        printOutput('draw');
    }
    let temp = minimax(a);
    let idx = findDifference(a, temp) + 1;
    idx = idx.toString(10);
    document.getElementById(idx).value = "O";
    a = [...temp];
    x++;
    if(check(a)){
        printOutput('O has won');
    }  
}




function insert(b){
    if(document.getElementById(b).value == "X" || document.getElementById(b).value == "O"){
        return;
    }   
    document.getElementById(b).value = "X";
    a[b-1] = "X"; 
    x++;
    doMiniMax(); 
}



function findDifference(oldOne, newOne){
    for(let i = 0; i < oldOne.length; i++){
        if(oldOne[i]!= newOne[i]){
            return i;
        }
    }
}

//wrong value for minimax - not sure - check TOMORROW\
function minimax(curr){
    if(endGame(curr)){
        return eval(curr);
    }
    let moves = generateNewMoves('O', curr);
    let values = moves.map(maxPlayer);
    let val = Math.min.apply((-999), moves.map(maxPlayer));
    return moves[values.indexOf(val)];
    // console.log("Moves:" , moves);
    // console.log("Final val in minimax: -------", val);    
}

function maxPlayer(curr){
    // console.log("+++++++++++++++++++++++++++++MAX PLAYER CURRENT ONE IS: ", curr);
    if(endGame(curr)){
        // console.log("return : ", eval(curr));
        return eval(curr);
    }
    else{
        let v = -999;
        let moves = generateNewMoves('O', curr);
        v = Math.max.apply(v, moves.map(minPlayer));
        // for(one of moves){
        //     vTemp = minPlayer(one);
        //     v = Math.max(v, vTemp);
        // }
        // console.log("++++++++++++++++++++++FINAL V FOR ", curr, " is ",v);
        return v;
    }
}

function minPlayer(curr){
    // console.log("-------------------------MIN PLAYER CURRENT ONE IS: ", curr);
    if(endGame(curr)){
        // console.log("return : ", eval(curr));
        return eval(curr);
    }
    else{
        let v = 999;
        let moves = generateNewMoves('X', curr);
        v = Math.min.apply(v, moves.map(maxPlayer));
        // for(one of moves){
        //     vTemp = maxPlayer(one);
        //     v = Math.min(v, vTemp);
        // }
        // console.log("----------------------FINAL V FOR ", curr, " is ",v);
        return v;
    }
}

//generates new active state
function generateNewMoves(XorO, arr){
    let empty = count(arr, ' ');
    let nextPos = 0;
    let nextMoves = [];
    while(empty!=0){
        let temp = [...arr]; //deep copy
        for(let i = nextPos; i < temp.length; i++){
            if(temp[i] == ' '){
                temp[i] = XorO;
                nextPos = i+1;
                break;
            }
        }
        nextMoves = [...nextMoves, temp]; 
        empty--;
    }
    return nextMoves;
}

//checking if there is a win/loss
function check(arr){  
    let checkTrue = false;
    if(checkHorizontal(arr)|| 
       checkVertical(arr)  ||
       checkDiagonal(arr)){
           checkTrue = true;           
    }
    return checkTrue;
}

function checkDiagonal(arr){
    if((arr[0] == arr[4] && arr[4] == arr[8] || arr[4] == arr[2] && arr[2] == arr[6]) && arr[4] != ' '){
        return true;
    }
    return false;
}

function checkVertical(arr){
    if(arr[0] == arr[3] && arr[3] == arr[6] && arr[3] != ' ' || 
       arr[1] == arr[4] && arr[4] == arr[7] && arr[4] != ' ' ||
       arr[2] == arr[5] && arr[5] == arr[8] && arr[5] != ' ') {
        return true;
    }
    return false;
}

function checkHorizontal(arr){
    if(arr[0] == arr[1] && arr[1] == arr[2] && arr[1] != ' ' || 
       arr[3] == arr[4] && arr[4] == arr[5] && arr[4] != ' ' ||
       arr[6] == arr[7] && arr[7] == arr[8] && arr[7] != ' ') {
        return true;
    }
    return false;   
}

function printOutput(XorO){
    window.alert(XorO + " has won!");
    document.location.reload();
}


//evaluate final score 
function eval(arr){
    let empty = count(arr, ' ');
    if(empty == 0 && check(arr) == false){
        return 0;
    }
    if(empty % 2 == 0) // x has won
        return ((-10));
    else
        return (10);
}

//count occurences of elem in arr
function count(arr, elem){
    let count = 0;
    for(y of arr){
        if (y == elem){
            count++;
        }
    }
    return count;
}

//to check if the game has ended
function endGame(arr){
    if(check(arr) == true || count(arr, ' ') == 0) {
        return true;
    }
    return false;
}
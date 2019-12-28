int x = 0;
function insert(b){
    if(x % 2 == 0) //even
    document.getElementById(b).value = "X";
    else 
    document.getElementById(b).value = "O";
}
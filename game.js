//HAVE TO ADD CONDITION TO PREVENT CHANGING OF BUTTON IF VALUE ALREADY EXISTS
let x = 0;
let a = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
function insert(b){
    //let bVal = document.getElementById(b).value;
    if(document.getElementById(b).value == "X" || document.getElementById(b).value == "O"){
        return;
    }
    if(x % 2 == 0) {//even
        document.getElementById(b).value = "X";
        a[b-1] = "X";
        check("X", b-1);
    }
    else{ 
        document.getElementById(b).value = "O";
        a[b-1] = "O";
        check("O", b-1);
    }
    if(x == 8){
        window.alert("GAME OVER - NO WINNERS");
        document.location.reload();
    }
    x++;
}

function check(XorO, position){
    // if(position == 0 || position == 3 || position == 6){
    //     if(a[position] == a[position+1] &&
    //         a[position+1] == a[position+2]){
    //         return true;
    //     }
    // }
    // if(position )
    // if(position == 0 || position == 1|| position == 2){
    //     if(a[position] == a[position + 3] &&
    //         a[position + 3] == a[position + 6]){
    //         printOutput();
    //     }
    // }   
    let d = XorO;
    if(checkHorizontal(d, position) == true){
        printOutput(d);
    }
    
}
function checkVertical(XorO, position){
    
}
function checkHorizontal(XorO, position){
    let temp = 3; 
    while(temp!=0){
    switch(position){
        case 2:
        case 5: 
        case 8:
            if(a[position] == XorO) position -= 3;  
            else return false;          
        break;
        default: 
            if(a[position] == XorO) position++;
            else return false;
         }//switch
         temp--;
    } //while
    if(temp == 0) return true;
    else return false;
}

function printOutput(XorO){
    window.alert(XorO + " has won!");
    document.location.reload();
}
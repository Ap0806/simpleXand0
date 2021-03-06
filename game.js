let x = 0;
let a = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
function insert(b){
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
    x++;
}

function check(XorO, position){  
    let checkTrue = false;
    if(checkHorizontal(XorO, position)|| 
       checkVertical(XorO, position) ||
       checkDiagonal(XorO, position)){
           printOutput(XorO);
           checkTrue = true;
    }
    
    if(x == 8 && checkTrue == false){
        window.alert("GAME OVER - NO WINNERS");
        document.location.reload();
    }
}

function checkDiagonal(XorO, position){
    switch(a[4]){
        case XorO:
            switch(position){
                case 0:
                    if(a[4] == a[8]) return true;
                    return false;
                case 8:
                    if(a[4] == a[0]) return true;
                    return false;
                case 2:
                    if(a[4] == a[6]) return true;
                    return false;
                case 6: 
                    if(a[4] == a[2]) return true;
                    return false;
                case 4: 
                    if((a[6] == a[2] && a[6] == XorO) ||
                       (a[0] == a[8] && a[8] == XorO)) return true;
                    return false;              
            }
        break;
        default:
            return false;
    }
}

function checkVertical(XorO, position){
    let temp = 3;
    while(temp != 0){
        switch(position){
            case 6:
            case 7:
            case 8:
                if(a[position] == XorO) position -= 6;  
                else return false;
            break;
            default: 
            if(a[position] == XorO) position += 3;
            else return false;
         }//switch
         temp--;
    } //while
    if(temp == 0) return true;
    else return false;
}

function checkHorizontal(XorO, position){
    let temp = 3; 
    while(temp!=0){
    switch(position){
        case 2:
        case 5: 
        case 8:
            if(a[position] == XorO) position -= 2;  
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
let playerNum1 = "player 1"
let playerNum1Points = 0 ;
let playerNum2 = "player 2"
let playerNum2Points = 0 ;
let counterName = 0;
let playerTurn = 0;
let cellState = {
    "p(R1,1)": true,
    "p(R1,2)": true,
    "p(R1,3)": true,
    "p(R2,1)": true,
    "p(R2,2)": true,
    "p(R2,3)": true,
    "p(R3,1)": true,
    "p(R3,2)": true,
    "p(R3,3)": true
};

changePoints()

function enter(){
    if(counterName == 0){
        playerNum1 = document.getElementById("input").value
        document.getElementById("screen").innerHTML = "Enter player number 2 name"
            document.getElementById("playerNum1Name").innerHTML = playerNum1
        
       console.log(playerNum1)
       ++counterName
       console.log(counterName)

    }else if(counterName == 1){
         playerNum2 = document.getElementById("input").value
         console.log(playerNum2)
         document.getElementById("playerNum2Name").innerHTML = playerNum2
         ++counterName
         console.log(counterName)
         document.getElementById("screen").innerHTML = "Game Start "
         document.getElementById("playerTurnAndPlayerWin").innerHTML = `${playerNum1} Turn`
         document.getElementById("playerTurnAndPlayerWin").style.border = " 1px solid black";
         document.getElementById("playerTurnAndPlayerWin").style.padding = " 10px ";
         document.getElementById("playerTurnAndPlayerWin").style.backgroundColor = "  ghostwhite ";
         

     }
}


function resetGame(){
    resetRound()
    resetPlayerNamesAndPoints()
    changePoints()
     counterName = 0;
     playerTurn = 0;
    document.getElementById("playerTurnAndPlayerWin").innerHTML = ``
    document.getElementById("playerTurnAndPlayerWin").style.border = " 0px solid black";
    document.getElementById("playerTurnAndPlayerWin").style.padding = " 0px ";
    document.getElementById("screen").innerHTML = "Enter player number 1 name"
    document.getElementById("playerTurnAndPlayerWin").style.backgroundColor = "   ";



}



function resetPlayerNamesAndPoints(){
     playerNum1 = "player 1"
     playerNum2 = "player 2"
     playerNum1Points = 0 ;
     playerNum2Points = 0 ;
    document.getElementById("playerNum1Name").innerHTML = playerNum1
    document.getElementById("playerNum2Name").innerHTML = playerNum2
    console.log("resetPlayerNamesAndPoints did well")


}

function resetRound(){
    cellState = {
        "p(R1,1)": true,
        "p(R1,2)": true,
        "p(R1,3)": true,
        "p(R2,1)": true,
        "p(R2,2)": true,
        "p(R2,3)": true,
        "p(R3,1)": true,
        "p(R3,2)": true,
        "p(R3,3)": true
    };
    document.getElementById("p(R1,1)").innerHTML = " ";
    document.getElementById("p(R1,2)").innerHTML = " ";
    document.getElementById("p(R1,3)").innerHTML = " ";
    document.getElementById("p(R2,1)").innerHTML = " ";
    document.getElementById("p(R2,2)").innerHTML = " ";
    document.getElementById("p(R2,3)").innerHTML = " ";
    document.getElementById("p(R3,1)").innerHTML = " ";
    document.getElementById("p(R3,2)").innerHTML = " ";
    document.getElementById("p(R3,3)").innerHTML = " ";
    document.getElementById("playerTurnAndPlayerWin").innerHTML = `${playerNum1} Turn`
    document.getElementById("screen").innerHTML = "Game Start "
     playerTurn = 0;


}

function changePoints(){
    document.getElementById("playerNum1Points").innerHTML = playerNum1Points
    document.getElementById("playerNum2Points").innerHTML = playerNum2Points

}

function gameIsFull(){
    let empetyCounter =0;
    for (let key in cellState) {
        if (cellState[key] === true) { // Check if the cell is empty
            empetyCounter++;
        }
    }
    console.log(`Empty cells: ${empetyCounter}`); // Debugging line
    return empetyCounter === 0;
}







function gamelogic(location) {
    if (counterName == 2 && cellState[location]) {
        if (playerTurn % 2 == 0) {
            document.getElementById(location).style.color = "red";
            document.getElementById(location).innerHTML = "x";
            document.getElementById("playerTurnAndPlayerWin").innerHTML = `${playerNum2} Turn`;
        } else {
            document.getElementById(location).style.color = "blue";
            document.getElementById(location).innerHTML = "o";
            document.getElementById("playerTurnAndPlayerWin").innerHTML = `${playerNum1} Turn`;
        }
        cellState[location] = false; // Mark cell as occupied
        ++playerTurn;

      
            // Check winning condition for demonstration
            if ((document.getElementById("p(R1,1)").innerHTML == "x" &&
                document.getElementById("p(R1,2)").innerHTML == "x" &&
                document.getElementById("p(R1,3)").innerHTML == "x") ||
                 (document.getElementById("p(R2,1)").innerHTML == "x" &&
                document.getElementById("p(R2,2)").innerHTML == "x" &&
                document.getElementById("p(R2,3)").innerHTML == "x")||
                 (document.getElementById("p(R3,1)").innerHTML == "x" &&
                document.getElementById("p(R3,2)").innerHTML == "x" &&
                document.getElementById("p(R3,3)").innerHTML == "x") ||
                 (document.getElementById("p(R1,1)").innerHTML == "x" &&
                document.getElementById("p(R2,1)").innerHTML == "x" &&
                document.getElementById("p(R3,1)").innerHTML == "x") ||
                (document.getElementById("p(R1,2)").innerHTML == "x" &&
                document.getElementById("p(R2,2)").innerHTML == "x" &&
                document.getElementById("p(R3,2)").innerHTML == "x") ||
                (document.getElementById("p(R1,3)").innerHTML == "x" &&
                document.getElementById("p(R2,3)").innerHTML == "x" &&
                document.getElementById("p(R3,3)").innerHTML == "x") ||
                (document.getElementById("p(R1,1)").innerHTML == "x" &&
                document.getElementById("p(R2,2)").innerHTML == "x" &&
                document.getElementById("p(R3,3)").innerHTML == "x") ||
                (document.getElementById("p(R1,3)").innerHTML == "x" &&
                document.getElementById("p(R2,2)").innerHTML == "x" &&
                document.getElementById("p(R3,1)").innerHTML == "x")) {
                console.log(`The winner is ${playerNum1}`);
                ++playerNum1Points
                changePoints()
                document.getElementById("screen").innerHTML = "Press Reset Round to play next round "
                document.getElementById("playerTurnAndPlayerWin").innerHTML = `${playerNum1} Win`;
                for (let key in cellState) {
                    if (cellState.hasOwnProperty(key)) {
                        cellState[key] = false;
                    }
                }

            }else if ((document.getElementById("p(R1,1)").innerHTML == "o" &&
            document.getElementById("p(R1,2)").innerHTML == "o" &&
            document.getElementById("p(R1,3)").innerHTML == "o") ||
             (document.getElementById("p(R2,1)").innerHTML == "o" &&
            document.getElementById("p(R2,2)").innerHTML == "o" &&
            document.getElementById("p(R2,3)").innerHTML == "o")||
             (document.getElementById("p(R3,1)").innerHTML == "o" &&
            document.getElementById("p(R3,2)").innerHTML == "o" &&
            document.getElementById("p(R3,3)").innerHTML == "o") ||
             (document.getElementById("p(R1,1)").innerHTML == "o" &&
            document.getElementById("p(R2,1)").innerHTML == "o" &&
            document.getElementById("p(R3,1)").innerHTML == "o") ||
            (document.getElementById("p(R1,2)").innerHTML == "o" &&
            document.getElementById("p(R2,2)").innerHTML == "o" &&
            document.getElementById("p(R3,2)").innerHTML == "o") ||
            (document.getElementById("p(R1,3)").innerHTML == "o" &&
            document.getElementById("p(R2,3)").innerHTML == "o" &&
            document.getElementById("p(R3,3)").innerHTML == "o") ||
            (document.getElementById("p(R1,1)").innerHTML == "o" &&
            document.getElementById("p(R2,2)").innerHTML == "o" &&
            document.getElementById("p(R3,3)").innerHTML == "o") ||
            (document.getElementById("p(R1,3)").innerHTML == "o" &&
            document.getElementById("p(R2,2)").innerHTML == "o" &&
            document.getElementById("p(R3,1)").innerHTML == "o")) {
                console.log(`The winner is ${playerNum2}`);
                ++playerNum2Points
                changePoints()
                document.getElementById("screen").innerHTML = "Press Reset Round to play next round "
                document.getElementById("playerTurnAndPlayerWin").innerHTML = `${playerNum2} Win`;
                for (let key in cellState) {
                    if (cellState.hasOwnProperty(key)) {
                        cellState[key] = false;
                    }
                }
            }else if(gameIsFull()){
                document.getElementById("screen").innerHTML = "Press Reset Round to play next round "
                document.getElementById("playerTurnAndPlayerWin").innerHTML = `Draw`;
                console.log(`Draw`);
            }           
        }
    }








// function gamelogic(location) {
//     if (counterName == 2 && cellState[location]) {
//         if (playerTurn % 2 == 0) {
//             document.getElementById(location).innerHTML = "x";
//             document.getElementById("playerTurn").innerHTML = `${playerNum2} Turn`;
//         } else {
//             document.getElementById(location).innerHTML = "o";
//             document.getElementById("playerTurn").innerHTML = `${playerNum1} Turn`;
//         }
//         cellState[location] = false; // Mark cell as occupied
//         ++playerTurn;

//         // Debugging: Check if game is full
//         if (gameIsFull()) {
//             console.log("Game is full");
//             // Check winning condition for demonstration
//             if ((document.getElementById("p(R1,1)").innerHTML == "x" &&
//                 document.getElementById("p(R1,2)").innerHTML == "x" &&
//                 document.getElementById("p(R1,3)").innerHTML == "x") ||
//                  (document.getElementById("p(R2,1)").innerHTML == "x" &&
//                 document.getElementById("p(R2,2)").innerHTML == "x" &&
//                 document.getElementById("p(R2,3)").innerHTML == "x")||
//                  (document.getElementById("p(R3,1)").innerHTML == "x" &&
//                 document.getElementById("p(R3,2)").innerHTML == "x" &&
//                 document.getElementById("p(R3,3)").innerHTML == "x") ||
//                  (document.getElementById("p(R1,1)").innerHTML == "x" &&
//                 document.getElementById("p(R2,1)").innerHTML == "x" &&
//                 document.getElementById("p(R3,1)").innerHTML == "x") ||
//                 (document.getElementById("p(R1,2)").innerHTML == "x" &&
//                 document.getElementById("p(R2,2)").innerHTML == "x" &&
//                 document.getElementById("p(R3,2)").innerHTML == "x") ||
//                 (document.getElementById("p(R1,3)").innerHTML == "x" &&
//                 document.getElementById("p(R2,3)").innerHTML == "x" &&
//                 document.getElementById("p(R3,3)").innerHTML == "x") ||
//                 (document.getElementById("p(R1,1)").innerHTML == "x" &&
//                 document.getElementById("p(R2,2)").innerHTML == "x" &&
//                 document.getElementById("p(R3,3)").innerHTML == "x") ||
//                 (document.getElementById("p(R1,3)").innerHTML == "x" &&
//                 document.getElementById("p(R2,2)").innerHTML == "x" &&
//                 document.getElementById("p(R3,1)").innerHTML == "x")) {
//                 console.log(`The winner is ${playerNum1}`);
//                 ++playerNum1Points
//                 changePoints()
//                 document.getElementById("screen").innerHTML = "Press Reset Round to play next round "
//                 document.getElementById("playerTurn").innerHTML = `${playerNum1} Win`;
//             }else if ((document.getElementById("p(R1,1)").innerHTML == "o" &&
//             document.getElementById("p(R1,2)").innerHTML == "o" &&
//             document.getElementById("p(R1,3)").innerHTML == "o") ||
//              (document.getElementById("p(R2,1)").innerHTML == "o" &&
//             document.getElementById("p(R2,2)").innerHTML == "o" &&
//             document.getElementById("p(R2,3)").innerHTML == "o")||
//              (document.getElementById("p(R3,1)").innerHTML == "o" &&
//             document.getElementById("p(R3,2)").innerHTML == "o" &&
//             document.getElementById("p(R3,3)").innerHTML == "o") ||
//              (document.getElementById("p(R1,1)").innerHTML == "o" &&
//             document.getElementById("p(R2,1)").innerHTML == "o" &&
//             document.getElementById("p(R3,1)").innerHTML == "o") ||
//             (document.getElementById("p(R1,2)").innerHTML == "o" &&
//             document.getElementById("p(R2,2)").innerHTML == "o" &&
//             document.getElementById("p(R3,2)").innerHTML == "o") ||
//             (document.getElementById("p(R1,3)").innerHTML == "o" &&
//             document.getElementById("p(R2,3)").innerHTML == "o" &&
//             document.getElementById("p(R3,3)").innerHTML == "o") ||
//             (document.getElementById("p(R1,1)").innerHTML == "o" &&
//             document.getElementById("p(R2,2)").innerHTML == "o" &&
//             document.getElementById("p(R3,3)").innerHTML == "o") ||
//             (document.getElementById("p(R1,3)").innerHTML == "o" &&
//             document.getElementById("p(R2,2)").innerHTML == "o" &&
//             document.getElementById("p(R3,1)").innerHTML == "o")) {
//                 console.log(`The winner is ${playerNum2}`);
//                 ++playerNum2Points
//                 changePoints()
//                 document.getElementById("screen").innerHTML = "Press Reset Round to play next round "
//                 document.getElementById("playerTurn").innerHTML = `${playerNum2} Win`;
//             }           
//         }else {
//             console.log("Game is not ended");
//         }
//     }
// }


   
    
       




function puchR1C1(){
    
    gamelogic("p(R1,1)")
   

}


function puchR1C2(){
    gamelogic("p(R1,2)")

}

function puchR1C3(){
    gamelogic("p(R1,3)")

}


function puchR2C1(){
    gamelogic("p(R2,1)")

}


function puchR2C2(){
    gamelogic("p(R2,2)")

}

function puchR2C3(){
    gamelogic("p(R2,3)")

}


function puchR3C1(){
    gamelogic("p(R3,1)")

}


function puchR3C2(){
    gamelogic("p(R3,2)")


}


function puchR3C3(){
    gamelogic("p(R3,3)")

}


var bA = document.getElementById("backRowA");
var fA = document.getElementById("frontRowA");
var bB = document.getElementById("backRowB");
var fB = document.getElementById("frontRowB");
var step = document.getElementById("step");
var reset = document.getElementById("reset");
var step  = document.getElementById("step");

// team A has 7 players
var teamAftRow = [
    "Smith",
    "Jones",
    "Spiker"
];
var teamAbkRow = [
    "Perry",
    "Vandenburg",
    "Williamson"
];
var teamAbench = [

    "Borsh"
];

// team B has 8 players
var teamBftRow = [
    "Benton",
    "Jones",
    "Tree"
];
var teamBbkRow = [
    "Salley",
    "Dalrymple",
    "Hurley"
];
var teamBbench = [
    "Ford",
    "Price"
];

// place team A players on back row
var backRow = "";
for (var i = 0; i < teamAbkRow.length; i++){

    backRow = backRow + teamAbkRow[i] + "\t" + "\t" + "\t";
    
};
bA.innerHTML = backRow;

// place team A players on the front row
var frontRow = "";
for (var i = 0; i < teamAftRow.length; i++){

    frontRow = frontRow + teamAftRow[i] + "\t" + "\t" + "\t";
    
};
fA.innerHTML = frontRow;

// place team B players on the front row
var frontRow = "";
for (var i = 0; i < teamBftRow.length; i++){

    frontRow = frontRow + teamBftRow[i] + "\t" + "\t" + "\t";
    
};
fB.innerHTML = frontRow;


// place team B players on back row
var backRow = "";
for (var i = 0; i < teamBbkRow.length; i++){

    backRow = backRow + teamBbkRow[i] + "\t" + "\t" + "\t";
    
};
bB.innerHTML = backRow;
// ========================================================
//     refactoring the above as functions
//=========================================================

function displayBftRow(){
    // place team B players on the front row
    var frontRow = "";
    for (var i = 0; i < teamBftRow.length; i++){

        frontRow = frontRow + teamBftRow[i] + "\t" + "\t" + "\t";
        
    };
    fB.innerHTML = frontRow;
};

function displayBbkRow(){
    // place team B players on back row
    var backRow = "";
    for (var i = 0; i < teamBbkRow.length; i++){

    backRow = backRow + teamBbkRow[i] + "\t" + "\t" + "\t";
    };
bB.innerHTML = backRow;
}

// =================== teams initialized ==================
//     lots of code ... surely there is a way to simplify
// ========================================================

step.addEventListener("click", function(){

    // bench player about to come in
    var comingIn = teamBbench.pop();
    teamBbkRow.unshift(comingIn);

    // back row going forward
    var goingForward = teamBbkRow.pop();
    teamBftRow.unshift(goingForward);

    // front row coming out
    var comingOut = teamBftRow.pop();
    teamBbench.unshift(comingOut);

    // call function displayBbkRow
    displayBftRow();
    displayBbkRow();
});









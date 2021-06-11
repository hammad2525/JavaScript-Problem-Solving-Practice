let games = ['hockey','polo','kabadi','cricket'];

for(let i=0; i<games.length; i++){

    if(games[i]=='cricket'){

        console.log("cricket is included");
    }
    else {

        console.log("cricket is not included");
    }
}

//for each loop:

let game = ['hockey','polo','kabadi','cricket'];
game.forEach(function (i) {
    
    if(game[i]=='cricket'){

        console.log("I said that cricket is included");
    }
    else {

        console.log("I said that cricket is not included");
    }
    
})
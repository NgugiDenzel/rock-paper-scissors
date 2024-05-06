

//var gamePlay = Math.random(gameVariables)


var container = document.querySelector(".container")
var rock = document.querySelector('.rock');
var paper = document.querySelector('.paper')
var scissors = document.querySelector(".scissors")
var playarea = document.querySelector("#playarea")
//var computerCircles = document.querySelector(".computerCircles")
var textarea = document.querySelector("#textarea")

rock.addEventListener("click", userPlay)
paper.addEventListener('click', userPlay)
scissors.addEventListener('click', userPlay)



function createGame(){

    var game = document.createElement('div')
    game.className = 'usercircle'
   

    var rock = document.createElement('div')
    rock.className = 'rock'
    var img = document.createElement('img')
    img.id = 'rock'
    img.src = 'images/icon-rock.svg'
    var paper = document.createElement('div')
    paper.className = 'paper'
    var img = document.createElement('img')
    img.id = 'paper'
    img.src = 'images/icon-paper.svg'
    var scissors = document.createElement('div')
    scissors.className = 'scissors'
    var img = document.createElement('img')
    img.id = 'scissors'
    img.src = 'images/icon/icon-scissors.svg'

}

    function userPlay(evt){
        var target = evt.target.id
        var targetclass = evt.target.className
    playarea.remove()
    if (target === 'rock'){
        createRock()
    }else if(target === 'scissors'){
        createScissors()

    }else if(target === 'paper'){
        createPaper()
    }else{
        console.log("there is an error")
    }
    if (targetclass === 'rock'){
        createRock()
    }else if(targetclass === 'scissors'){
        createScissors()

    }else if(targetclass === 'paper'){
        createPaper()
    }else{
        console.log("there is an error")
    }

    }
    
    
    


rock.addEventListener("click", computerPlay);
paper.addEventListener("click", computerPlay);
scissors.addEventListener("click", computerPlay);


function createPaper(){
    var circle = document.createElement("div")
    circle.className = "circle";
    circle.style.backgroundColor = "white";
    circle.style.height= "150px";
    circle.style.width="150px";
    circle.style.borderRadius = "50%"
    circle.style.border ="20px solid hsl(230, 89%, 62%)"
    circle.style.position ="absolute";
    circle.style.top="250px";
    circle.style.left="400px";


    var image= document.createElement("img")
    image.id = "userPaper"
    image.src="images/icon-paper.svg";
    image.style.position="absolute";
    image.style.top="50px";
    image.style.right="50px";
    image.style.bottom ="50px";
    image.style.left = "50px";


    circle.appendChild(image)

    

    container.appendChild(circle)

    

    }
function createScissors(){
    var circle = document.createElement("div")
    circle.className = "circle"
    circle.style.backgroundColor = "white";
    circle.style.height= "150px";
    circle.style.width="150px";
    circle.style.borderRadius = "50%"
    circle.style.border ="20px solid hsl(40, 84%, 53%)"
    circle.style.position ="absolute";
    circle.style.top="250px";
    circle.style.left="400px";


    var image= document.createElement("img")
    image.id = "userScissors"
    image.src="images/icon-scissors.svg";
    image.style.position="absolute";
    image.style.top="50px";
    image.style.right="50px";
    image.style.bottom ="50px";
    image.style.left = "50px";


    circle.appendChild(image)

    

    container.appendChild(circle)

}    
 function createRock(){
    var circle = document.createElement("div")
    circle.className = "circle"
    circle.style.backgroundColor = "white";
    circle.style.height= "150px";
    circle.style.width="150px";
    circle.style.borderRadius = "50%"
    circle.style.border ="20px solid hsl(349, 71%, 52%)"
    circle.style.position ="absolute";
    circle.style.top="250px";
    circle.style.left="400px";


    var image= document.createElement("img")
    image.id = "userRock"
    image.src="images/icon-rock.svg";
    image.style.position="absolute";
    image.style.top="50px";
    image.style.right="50px";
    image.style.bottom ="50px";
    image.style.left = "50px";


    circle.appendChild(image)

    

    container.appendChild(circle)

 }




//ock.addEventListener("click", gameLogic)


function computerRock(){
    var computerCircles = document.createElement("div")
    computerCircles.className = "computerCircles"
    computerCircles.style.backgroundColor = "white";
    computerCircles.style.height= "150px";
    computerCircles.style.width="150px";
    computerCircles.style.borderRadius = "50%"
    computerCircles.style.border ="20px solid hsl(349, 71%, 52%)"
    computerCircles.style.position ="absolute";
    computerCircles.style.top="250px";
    computerCircles.style.left="800px";


    var image= document.createElement("img")
    image.id = "compRock"
    image.src="images/icon-rock.svg";
    image.style.position="absolute";
    image.style.top="50px";
    image.style.right="50px";
    image.style.bottom ="50px";
    image.style.left = "50px";


    computerCircles.appendChild(image)

    

    container.appendChild(computerCircles)

}

function computerScissors(){
    var computerCircles = document.createElement("div")
    computerCircles.className = "computerCircles"
    computerCircles.style.backgroundColor = "white";
    computerCircles.style.height= "150px";
    computerCircles.style.width="150px";
    computerCircles.style.borderRadius = "50%"
    computerCircles.style.border ="20px solid hsl(40, 84%, 53%)"
    computerCircles.style.position ="absolute";
    computerCircles.style.top="250px";
    computerCircles.style.left="800px";


    var image= document.createElement("img")
    image.id = "compScissors";
    image.src="images/icon-scissors.svg";
    image.style.position="absolute";
    image.style.top="50px";
    image.style.right="50px";
    image.style.bottom ="50px";
    image.style.left = "50px";


    computerCircles.appendChild(image)

    

    container.appendChild(computerCircles)

}
function computerPaper(){
    var computerCircles = document.createElement("div")
        computerCircles.className = "computerCircles"
        computerCircles.style.backgroundColor = "white";
        computerCircles.style.height= "150px";
        computerCircles.style.width="150px";
        computerCircles.style.borderRadius = "50%"
        computerCircles.style.border ="20px solid hsl(230, 89%, 62%)"
        computerCircles.style.position ="absolute";
        computerCircles.style.top="250px";
        computerCircles.style.left="800px";


    var image= document.createElement("img")
    image.id ="compPaper";
    image.src="images/icon-paper.svg";
    image.style.position="absolute";
    image.style.top="50px";
    image.style.right="50px";
    image.style.bottom ="50px";
    image.style.left = "50px";


    computerCircles.appendChild(image)

    

    container.appendChild(computerCircles)

}


function computerPlay(evt){
    //this function selets random elements from an array
    var myArray = ["rock", "paper", "scissors"];



        for(i=0; i<=myArray.length; i++){
           var randomIndex = Math.floor(Math.random() * myArray.length);
            random=myArray[randomIndex]

           if (random === "rock"){

            computerRock()
           }else if(random === "scissors"){
            computerScissors()
           }else if(random === "paper"){
            computerPaper()
           }else{
            console.log("computer error")
           }

            break;

           
            
        }}

document.body.addEventListener("click", getElements)

function tie(){
    var result = document.createElement('div')
    container.append(result)
    result.innerHTML = "<p> you have tied</p> <button id='playagain' type='button'>play again</button>"
}

function getElements(){
    var action = document.querySelector(".container .computerCircles img")
    var user = document.querySelector(".container .circle img")
    var scorecard = document.querySelector("#score")
    count = 0;
    if (action.id === "compRock" && user.id ==="userRock"){
        var result = document.createElement("div")
        container.append(result)
        result.innerHTML = "<p> you have tied</p> <button id='playagain' type='button'>play again</button>"        
        console.log("its a tie")
        console.log(scorecard)

    }else if(action.id ==="compPaper" && user.id ==="userPaper"){
        var result = document.createElement("div")
        container.append(result)
        result.innerHTML = "<p> you have tied</p> <button id='playagain' type='button'>play again</button>"
        console.log("its a tie")
    }else if(action.id ==="compScissors" && user.id === "userScissors"){
        var result = document.createElement("div")
        container.append(result)
        result.innerHTML = "<p> you have tied</p> <button id='playagain' type='button'>play again</button>"
        console.log("its a tie")
        

    }else if(action.id === "compRock" && user.id ==="userScissors"){
        var result = document.createElement("div")
        container.append(result)
        result.innerHTML = "<p> you have lost</p>"
        count --;
        console.log("you lost and the computer won")
    }else if(action.id === "compScissors" && user.id === "userRock"){
        var result = document.createElement("div")
        container.append(result)
        result.innerHTML = "<p> you have won</p> <button id='playagain' type='button'>play again</button"
        count ++;
        scorecard.innerHTML = count

        console.log("you won rock beats scissors")
    }else if(action.id === "compPaper" && user.id ==="userRock"){
        var result = document.createElement("div")
        container.append(result)
        result.innerHTML = "<p> you have lost</p> <button id='playagain' type='button'>play again</button>"
        count --;
        scorecard.innerHTML = count
        console.log("you lost paper beats rock")
    }else if(action.id ==="compRock" && user.id ==="userPaper"){
        var result = document.createElement("div")
        container.append(result)
        result.innerHTML = "<p> you have won</p> <button id='playagain' type='button'>play again</button>"
        count ++;
        scorecard.innerHTML = count
        console.log("you win paper beats rock")
    }else if(action.id === "compScissors" && user.id ==="userPaper"){
        var result = document.createElement("div")
        container.append(result)
        result.innerHTML = "<p> you have lost</p> <button id='playagain' type='button'>play again</button>"
        count --;
        scorecard.innerHTML = count
        console.log("you lose scissors beat paper")
    }else if(action.id ==="compPaper" && user.id ==="userScissors"){
        var result = document.createElement("div")
        container.append(result)
        result.innerHTML = "<p> you have won</p> <button id='playagain' type='button'>play again</button>"
        count ++;
        scorecard.innerHTML = count
        console.log("you won paper beats rock")
    }

}



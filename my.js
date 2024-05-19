let userScore = 0;
let compScore = 0;

const msg = document.getElementById("result");
const choices = document.querySelectorAll(".choice");
const user_Score = document.getElementById("user-score");
const comp_Score = document.getElementById("comp-score");
const resetBtn = document.querySelector("#reset-game");


const genCompChoice = () =>{
    let options = ["rock", "paper", "scissors"];
    let idx = Math.floor(Math.random() * 3);
    return options[idx];

}

const drawGame = ()=>{
    console.log("Game was Draw !!");
    msg.style.backgroundColor = "yellow"
    msg.style.color = "black"
    msg.innerText = "Game was Draw !! Play Again."
}

const showWinner = (userWin, userChoice, compChoice) =>{
    if(userWin==true){
        userScore++;
        user_Score.innerText = userScore;
        console.log("You Win !");
        msg.style.backgroundColor = "green"
        msg.style.color = "white"
        msg.innerText = `You Win. Congratulations :) Your ${compChoice} beats ${userChoice}`;
    }else{
        compScore++;
        comp_Score.innerText = compScore;
        console.log("You Lose ! Play Again ");
        msg.style.backgroundColor = "red"
        msg.style.color = "white"
        msg.innerText = `You Lose. Play Again :) ${compChoice} beaten by ${userChoice}`;
    }
}

const playGame = (userChoice)=>{
    console.log(`User choice = ${userChoice}`);
    const compChoice = genCompChoice();
    console.log(`Comp choice = ${compChoice}`);

    if(userChoice == compChoice){
        drawGame();
    }else{
       let userWin = true;

        if(userChoice === "rock"){
            //computer Choice will be either paper or scissor
            if(compChoice === "paper"){
                userWin = false;
            }else{
                userWin = true;
            }
        
        }else if(userChoice === "paper"){
            //computer Choice will be either rock or scissor
            
            if(compChoice === "rock"){
                userWin = true;
            }else{
                userWin = false;
            }

        }else{
            //if user choice is Scissor then computer Choice will be either rock or paper
            
            if(compChoice === "rock"){
                userWin = false;
            }else{
                userWin = true;
            }

        }
        showWinner(userWin, compChoice, userChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", ()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

const resetScore = ()=>{
    compScore = 0;
    comp_Score.innerText ="0";
    userScore = 0;
    user_Score.innerText = "0";

}

resetBtn.addEventListener("click", ()=>{
    resetScore();
    
})
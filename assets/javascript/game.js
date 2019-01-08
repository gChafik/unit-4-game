let totalScore = 0;
let gemVal = 0;
let matchNumber = 0;
let wins = 0;
let losses = 0;
function match_number(){
    matchNumber = Math.floor(Math.random()*100) +1;
    return matchNumber
}
function randomGemNumber(){
    let gemNumber = []
    //generates a random number between 1 and 10 to be used for each gem
    for (let index = 0; index < 4; index++) {
        let randomNumber = Math.floor(Math.random() * 10) + 1;
        gemNumber.push(randomNumber);
    }
    return gemNumber;
}
function reset(){
    totalScore = 0;
    gemVal = 0;
    matchNumber = 0;
    randomGemNumber();
    match_number();
    matchNumber = match_number();
    console.log(matchNumber);
    gemVal = randomGemNumber();
    $("#match_number").text(matchNumber);
    $("#total_score").text(totalScore);
}
function win(){
    alert("You win!");
    reset();
    wins++;
    $("#wins").text("Wins: " + wins);
}
function lose(){
    alert("You lose!");
    reset();
    losses++;
    $("#losses").text("Losses: " + losses);
}
$(document).ready(function() {
    reset();
    $("#gem1").on("click", function() {
        totalScore += gemVal[0];
        $("#total_score").text(totalScore);
        if(totalScore === matchNumber){
            win();
        }
        else if (totalScore > matchNumber) {
            lose();
        }
    });
    $("#gem2").on("click", function() {
        totalScore += gemVal[1];
        $("#total_score").text(totalScore);
        if(totalScore === matchNumber){
            win();
        }
        else if (totalScore > matchNumber) {
            lose();
        }
    });

      $("#gem3").on("click", function() {
        totalScore += gemVal[2];
        $("#total_score").text(totalScore); 
        if(totalScore === matchNumber){
            win();
        }
        else if (totalScore > matchNumber) {
            lose();
        }
    });
      $("#gem4").on("click", function() {
        totalScore += gemVal[3];
        $("#total_score").text(totalScore);
        if(totalScore === matchNumber){
            win();
        }
        else if (totalScore > matchNumber) {
            lose();
        }
    });
});





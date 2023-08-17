player1_name=localStorage.getItem("player1_name");
player2_name=localStorage.getItem("player2_name");

player1_score = 0;
player2_score = 0;
answer_turn="";
question_turn="";
document.getElementById("player1_name").innerHTML=player1_name+":";
document.getElementById("player2_name").innerHTML=player2_name+":";

document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;


document.getElementById("player_question").innerHTML="Question Turn -"+player1_name;
document.getElementById("player_answer").innerHTML="Answer Turn -"+player2_name;

function send(){
    number1=document.getElementById("number1").value;
    number2=document.getElementById("number2").value;
    q = parseInt(number1)* parseInt(number2);
    A1 = "<h4> Question. " + number1+"x"+number2 + "</h4>";
    A2 = "<br> Answer : <input type='text' id='input_check_box'>";
    A3 = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";

row = A1+A2+A3;
document.getElementById("output").innerHTML = row;
document.getElementById("number1").value="";
document.getElementById("number2").value="";
}

function check()
{
    get_answer=document.getElementById("input_check_box").value;
    answer=get_answer.toLowerCase();
    console.log("answer in lower case-"+answer);
    if(answer==q)
    {
        if(answer_turn=="player1")
        {
            player1_score=player1_score+1;
            document.getElementById("player1_score").innerHTML=player1_score;
        }
        else
        {
            player2_score=player2_score+1;
            document.getElementById("player2_score").innerHTML=player2_score;
        }
    }
    if(question_turn=="player1")
    {
        question_turn="player2"
        document.getElementById("player_question").innerHTML="Qustiont Turn-"+player2_name;
    }
    else
    {
        question_turn="player1"
        document.getElementById("player_question").innerHTML="Qustiont Turn-"+player1_name; 
    }
    if(answer_turn=="player1")
    {
        answer_turn="player2"
        document.getElementById("player_answer").innerHTML="Answer Turn-"+player2_name;
    }
    else
    {
        answer_turn="player1"
        document.getElementById("player_answer").innerHTML="Answer Turn-"+player1_name;  
    }
    document.getElementById("output").innerHTML="";
}
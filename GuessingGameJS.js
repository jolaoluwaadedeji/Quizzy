    const QUESTIONS = {
    Questions:[{Question:"How many States Are in Nigeria?",Answer:"36"},
    {Question:"Who is the President of Nigeria?",Answer:"Buhari"},
    {Question:"Where is the capital of Nigeria? ",Answer:"Abuja"},
    {Question:"Nigeria got its independence when?",Answer:"Oct 1st 1960"}
    ]};

    let count = 0;

    let score = 0;

    let question;
 
    let answer;

    let $questionButton;

    let $score;

    let $questionDiv;

    let $correct;  
    
    let $validateAnswer;

    function init(){

        $score = document.querySelector("#score");

        $questionDiv = document.getElementById("question");
    
        $questionButton = document.getElementById("questionButton");
        
        $correct = document.getElementById("validateAnswer"); 
        
        $validateAnswer = document.getElementById("submitAnswer");

        hideButton();
    }

    function hideButton(){

        $validateAnswer.hidden = true;

    }

    function GetQuestion(){

        $validateAnswer.hidden = false;

        if(count == QUESTIONS.Questions.length){

            $score.innerHTML = "This is the end of the quiz.Your total score is"+" "+score+"out of"+" "+count;

        // count = 0;
        $validateAnswer.disabled = true;

            return;
        }

        question = QUESTIONS.Questions[count].Question;

        $questionDiv.innerHTML = question;
        
       // $questionButton.disabled = true;

        $validateAnswer.disabled = false;
    }

    function SubmitAnswer(){

        var answerValue = document.getElementById("inputValue").value;

        answer = QUESTIONS.Questions[count].Answer;

        if(answerValue === ""){

            if(question  === ""){

                questionDiv.innerHTML = "";
            }
            $correct.innerHTML="The Question is Unanswered!";
        }
        else if(answerValue === answer.toLowerCase()){

            $correct.innerHTML="You are Correct!";

            $questionDiv.innerHTML = question;
                    
            document.getElementById("inputValue").value = answerValue;

            score++;
        }
        else{

            $questionDiv.innerHTML = question;
                    
            document.getElementById("inputValue").value = answerValue;

            $correct.innerHTML="You are Wrong!";
        
        }
        count++;

        $validateAnswer.disabled = true;
    }

    function Reset(){

        count = 0;

        document.getElementById("inputValue").value = "";

        $questionDiv.innerHTML = "";

        $score.innerHTML = "";
        
        $correct.innerHTML = "";
    
}
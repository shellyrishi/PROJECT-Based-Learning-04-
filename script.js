
      ///question bank 1
      var commonQuestions = [
        {
            title: ' In Frequency Modulation –',
            choices: [' Amplitude of the carrier remains same', 'Frequency of the carrier varies in accordance with the modulating signal','The number of side bands are infinite', 'all of the above'],
            answer: 'all of the above'
        },
        {
            title: 'The amount of frequency deviation in FM signal depends on',
            choices: [' Amplitude of the modulating signal', 'Carrier frequency', 'Modulating frequency',' Transmitter amplifier'],
            answer: ' Amplitude of the modulating signal'
        },
        {
            title: ' Advantage of using direct method for generation of FM signal is',
            choices: ['It gives high stability to FM signal frequency', 'Distortion free FM signal is generated',
             'High power FM generation is possible', 'none'],
            answer: 'High power FM generation is possible'
        },
        {
            title: ' Sensitivity is defined as',
            choices: ['Ability of receiver to amplify weak signals', 'Ability to reject unwanted signals', 'Ability to reject noise','Ability to convert incoming signal into Image Frequency' ],
            answer: 'Ability of receiver to amplify weak signals'
        },
        {
            title: 'Armstrong method is used for the generation of',
            choices: ['Direct FM', 'Indirect FM', 'SSB-SC', 'DSB-SC'],
            answer: 'Indirect FM'
        }

    ];
    
    //question bank 2
    var synQuestions = [
        {
            title2:'Carson’s rule is used to calculate',
            choices2:['Bandwidth of FM signal','Signal to noise ratio','Modulation index','noise figure'],
            answer2:  'Bandwidth of FM signal'
        },
        {
            title2: 'The ratio of maximum peak frequency deviation and the maximum modulating signal frequency is termed as',
            choices2: ['Frequency deviation', ' Deviation ratio', 'Signal to noise ratio', 'Frequency spectrum'],
            answer2: ' Deviation ratio'
        },
        {
            title2:'Calculate the maximum frequency deviation for the FM signal v(t) = 10 cos (6000t+ 5sin2200t)',
            choices2:['1750 Hz','1320 Hz','1660 Hz','2200 Hz'],
            answer2: '1750 Hz'       
        },

        {
            title2:'Calculate the dissipation in power across 20Ω resistor for the FM signal v(t)= 20 cos(6600t+ 10sin2100t)',
            choices2:['220W','430W','2W','20W'],
            answer2: '20W'
        }
      ];


    ///question bank 3
    var longQuestions = [
        {
            title3: 'Determine the Bandwidth of a FM wave when the maximum deviation allowed is 75KHz and the modulating signal has a frequency of 10KHz.',
            choices3: ['120', '170', '165', '220'],
            answer3: '170'
        },
        {
            title3: 'The equation of the FM signal is  10 sin [2 π ×  106 t +5 sin ( 2 π × 103 t )]. The modulating frequency is  _____.)',
            choices3: ['120', '110', '103', '20'],
            answer3: '103'
        },
        {
            title3: 'If the deviation is 75 kHz and maximum modulating frequency is 5 kHz, what is the bandwidth of an FM wave ?',
            choices3: ['330', '160', '103', '105'],
            answer3: '160'
        },
        {
            title3: ' A 100MHz carrier is frequency modulated by 5 KHz wave. For a frequency deviation of 100 KHz, calculate the carrier swing of the FM signal.',
            choices3: ['200', '2000', '250', '275'],
            answer3: '200'
        },
        {
            title3: ' For a FM signal v(t) = 20 cos ( 10 * 108t + 30 sin 3000t), calculate the power dissipated by the FM wave in a 20Ω resistor.',
            choices3: [' 100 Watts', '  510 Watts', ' 10 Watts', ' 321 Watts'],
            answer3: '10'
        }

    ];

/////////////////////////////QuestionBank//////////////////////////////



var userList = [];

////////////////////////Clear scoreboard data///////////////////////////
function clearData(){
    userList.splice(0, userList.length);
    //console.log('diu');
    
    storeUser();
    //console.log('dllm');
    //location.reload();
    $('.modal-body').find('div').empty();
}

////////////////////////Clear scoreboard data///////////////////////////


////////////////////////renPreviousUser///////////////////
$(document).ready(function () {  
    $("#commonQuestions").hide();
    $("#synQuestions").hide();
    $("#longQuestions").hide();
    
    getUser(); 
    renPreviousUser();

    function renPreviousUser(){
        for (var i = 0; i < userList.length; i+=2){
            var oldUser = userList[i];
            var oldScore = userList[i+1]
            var previousUser = $("<li>");
            previousUser.attr("data-index", i);

            previousUser.append(oldUser + " score is " + oldScore);
            
            $("#previousUser").append(previousUser);
        }
    }
    function getUser(){
        //console.log(userName);
        //console.log(userScore);
        
        var storedUser = JSON.parse(localStorage.getItem("userList"));

        if (storedUser !== null){
            userList = storedUser;
        }
        //renPreviousUser();
    }
   });
////////////////////////renPreviousUser and get data from local storage///////////////////


var questionNum = 0;
var userGuess;
var timer;
var score = 0;

function start(){
    var instruction = document.getElementById("instruction");
    var quizOption = document.getElementById("quizOption");

    instruction.style.display = "block";
    quizOption.style.display = "none";
    if (instruction.style.display === "block"){
        instruction.style.display = "none";
        quizOption.style.display = "block";
    }
    else{
        instruction.style.display = "block";
        quizOption.style.display = "none";
    }
    //function for triggering the timer
    $("#comQuest").on("click", function(){
    countDown();
    });
    $("#synQuest").on("click", function(){
        countDown();
    });
    $("#longQuest").on("click", function(){
        countDown();
    });
///end tag
    
}//start() close tag

//sound effect///


/////////////////////////////CommonQuestion///////////////////////////////
function displayCommonQuestions(){
    var questionRow = document.getElementById("commonQuestions");
    var quizOption = document.getElementById("quizOption");
    var wrongSound = document.getElementById("wrongSound");
    var rightSound = document.getElementById("rightSound");

    quizOption.style.display = "block";
    if (quizOption.style.display  === "block"){
        quizOption.style.display = "none";
        questionRow.style.display = "block";
    }
    else{
        quizOption.style.display= "block";
        questionRow.style.display = "none";
    }

    $("#title").children().hide();
    $("#choices").children().hide();
    $("#answer").children().hide();
    $("#sign").children().hide();
    $("#timer").children().hide();
    $("#synTitle").children().hide();
    $("#synChoices").children().hide();
    $("#synAnswer").children().hide();
    $("#synSign").children().hide();
    
    
    //$("#completeMsg").children().hide();
    //$("#finalScore").children().hide();
    //$("#initials").children().hide();
    

    var displayQuest = $("<h2>");
    displayQuest.attr("id", commonQuestions[questionNum].choices);
    displayQuest.append(commonQuestions[questionNum].title);
    $("#title").append(displayQuest);
    console.log(displayQuest);

    for (i = 0; i < 4; i++) {
        console.log(commonQuestions.length);
        var choiceList = $("<button>");
        choiceList.attr("type", "button");
        choiceList.attr("value", commonQuestions[questionNum].choices[i]);
        choiceList.css("margin-top", "50px");
        choiceList.addClass("btn btn-secondary btn-lg btn-block choices");
        choiceList.append(commonQuestions[questionNum].choices[i]);
        $("#choices").append(choiceList);
    }

}//displayCommonQuestions() close tag

var signs ={
    correct: "Correct!",
    incorrect: "Incorrect! 15 seconds taken lol",
    line: "The correct answer is: ",
    done: "All done!",
    finalScore: "Your final score is: ",
    initials: "Enter initials: "
}
//main
$(document).on("click",".choices", function(){
    userGuess = $(this).attr("value");
    $("answer").empty
    

    if(userGuess === commonQuestions[questionNum].answer && timer > 0){
        rightSound.play();
        $("#title").children().hide();
        $("#choices").children().hide();
        $("#answer").children().hide();
        var result = $("<h3>");
        result.append(signs.correct);//append the correct
        $("#answer").append(result)//link it back to html

        score+=10;
        console.log(score)
        questionNum++;
        
        setTimeout(displayCommonQuestions, 1100);


        //console.log(questionNum, commonQuestions.length);
        
        if(questionNum === commonQuestions.length){
            if(timer >50){
                score += 10;
            }
            else if (timer > 40 && time <49){
                score += 5;
            }
            rightSound.play();
            setTimeout(finalPage, 1100);
            clearInterval(time);
        }
    }
    else if (userGuess != commonQuestions[questionNum].answer && timer > 0){
        wrongSound.play();
        $("#title").children().hide();
        $("#choices").children().hide();
        $("#answer").children().hide();
        var result = $("<h5>");
        result.append(signs.incorrect);//append the correct
        $("#sign").append(result);//link it back to html

        var answer = $("<p>");
        answer.append(signs.line,commonQuestions[questionNum].answer);
        $("#answer").append(answer);
        timer -= 10;
        score -= 5;
        questionNum++;
        
        setTimeout(displayCommonQuestions, 1500);
        

        //console.log(questionNum, commonQuestions.length);


        if(questionNum === commonQuestions.length){
            if(timer >50){
                score += 10;
            }
            else if (timer > 40 && time <49){
                score += 5;
            }
            wrongSound.play();
            setTimeout(finalPage, 1500);
            clearInterval(time);
        }
    }
})//main close tag
/////////////////////////////CommonQuestion///////////////////////////////

/////////////////////////////synQuestion///////////////////////////////
function displaySyntaxQuestions(){
    var questionRow = document.getElementById("synQuestions");
    var quizOption = document.getElementById("quizOption");
    var wrongSound = document.getElementById("wrongSound");
    var rightSound = document.getElementById("rightSound");

    quizOption.style.display = "block";
    if (quizOption.style.display  === "block"){
        quizOption.style.display = "none";
        questionRow.style.display = "block";
    }
    else{
        quizOption.style.display= "block";
        questionRow.style.display = "none";
    }

    $("#commonQuestions").hide();
    
    $("#synTitle").children().hide();
    $("#synChoices").children().hide();
    $("#synAnswer").children().hide();
    $("#synSign").children().hide();
    $("#timer").children().hide();
    
    
    

    var displayQuest = $("<h2>");
    displayQuest.attr("id", synQuestions[questionNum].choices2);
    displayQuest.append(synQuestions[questionNum].title2);
    $("#synTitle").append(displayQuest);
    //console.log("0",synQuestions.length);
    //console.log("1",questionNum);
    //console.log("2",synQuestions[questionNum].choices2);
    //console.log("3",synQuestions[questionNum].title2);
    //console.log("4",displayQuest);

    for (i = 0; i < 4; i++) {

        var choiceList = $("<button>");
        choiceList.attr("type", "button");
        choiceList.attr("value", synQuestions[questionNum].choices2[i]);
        choiceList.css("margin-top", "50px");
        choiceList.addClass("btn btn-secondary btn-lg btn-block synChoices");
        choiceList.append(synQuestions[questionNum].choices2[i]);
        $("#synChoices").append(choiceList);
    }

}//displaysynQuestions() close tag

$(document).on("click",".synChoices", function(){
    userGuess = $(this).attr("value");
    $("synAnswer").empty
    

    if(userGuess === synQuestions[questionNum].answer2 && timer > 0){
        rightSound.play();
        $("#synTitle").children().hide();
        $("#synChoices").children().hide();
        $("#synAnswer").children().hide();
        var result = $("<h3>");
        result.append(signs.correct);//append the correct
        $("#synAnswer").append(result)//link it back to html

        score+=10;
        console.log(score)
        questionNum++;
        
        setTimeout(displaySyntaxQuestions, 1100);


        //console.log(questionNum, commonQuestions.length);
        
        if(questionNum === synQuestions.length){
            if(timer >50){
                score += 10;
            }
            else if (timer > 40 && time <49){
                score += 5;
            }
            rightSound.play();
            setTimeout(finalPage, 1100);
            clearInterval(time);
        }
    }
    else if (userGuess != synQuestions[questionNum].answer2 && timer > 0){
        wrongSound.play();
        $("#synTitle").children().hide();
        $("#synChoices").children().hide();
        $("#synAnswer").children().hide();
        var result = $("<h5>");
        result.append(signs.incorrect);//append the correct
        $("#synSign").append(result);//link it back to html

        var answer = $("<p>");
        answer.append(signs.line,synQuestions[questionNum].answer2);
        $("#synAnswer").append(answer);

        timer -= 10;
        score -= 5;
        questionNum++;
        
        setTimeout(displaySyntaxQuestions, 1500);

        //console.log(questionNum, commonQuestions.length);


        if(questionNum === synQuestions.length){
            if(timer >50){
                score += 10;
            }
            else if (timer > 40 && time <49){
                score += 5;
            }
            wrongSound.play();
            setTimeout(finalPage, 1500);
            clearInterval(time);
        }
    }
})//main close tag
/////////////////////////////synQuestion///////////////////////////////

/////////////////////////////longQuestion///////////////////////////////
function displayLongQuestions(){
    var questionRow = document.getElementById("longQuestions");
    var quizOption = document.getElementById("quizOption");
    var wrongSound = document.getElementById("wrongSound");
    var rightSound = document.getElementById("rightSound");

    quizOption.style.display = "block";
    if (quizOption.style.display  === "block"){
        quizOption.style.display = "none";
        questionRow.style.display = "block";
    }
    else{
        quizOption.style.display= "block";
        questionRow.style.display = "none";
    }

    $("#commonQuestions").hide();
    $("#synQuestions").hide();
    $("#longTitle").children().hide();
    $("#longChoices").children().hide();
    $("#longAnswer").children().hide();
    $("#longSign").children().hide();
    $("#timer").children().hide();
    
    

    var displayQuest = $("<h2>");
    displayQuest.attr("id", longQuestions[questionNum].choices3);
    displayQuest.append(longQuestions[questionNum].title3);
    $("#longTitle").append(displayQuest);
    //console.log("0",longQuestions.length);
    //console.log("1",questionNum);
    //console.log("2",longQuestions[questionNum].choices3);
    //console.log("3",longQuestions[questionNum].title3);
    //console.log("4",displayQuest);
 
    for (i = 0; i < 4; i++) {

        var choiceList = $("<button>");
        choiceList.attr("type", "button");
        choiceList.attr("value", longQuestions[questionNum].choices3[i]);
        choiceList.css("margin-top", "50px");
        choiceList.addClass("btn btn-secondary btn-lg btn-block longChoices");
        choiceList.append(longQuestions[questionNum].choices3[i]);
        $("#longChoices").append(choiceList);
    }

}//displayLongQuestions() close tag

$(document).on("click",".longChoices", function(){
    userGuess = $(this).attr("value");
    $("longAnswer").empty
    

    if(userGuess === longQuestions[questionNum].answer3 && timer > 0){
        rightSound.play();
        $("#longTitle").children().hide();
        $("#longChoices").children().hide();
        $("#longAnswer").children().hide();
        var result = $("<h3>");
        result.append(signs.correct);//append the correct
        $("#longAnswer").append(result)//link it back to html

        score+=10;
        console.log(score)
        questionNum++;
        
        setTimeout(displayLongQuestions, 1100);


  
        
        if(questionNum === longQuestions.length){
            if(timer >50){
                score += 10;
            }
            else if (timer > 40 && time <49){
                score += 5;
            }
            rightSound.play();
            setTimeout(finalPage, 1100);
            clearInterval(time);
        }
    }
    else if (userGuess != longQuestions[questionNum].answer3 && timer > 0){
        wrongSound.play();
        $("#longTitle").children().hide();
        $("#longChoices").children().hide();
        $("#longAnswer").children().hide();
        var result = $("<h5>");
        result.append(signs.incorrect);//append the correct
        $("#longSign").append(result);//link it back to html

        var answer = $("<p>");
        answer.append(signs.line,longQuestions[questionNum].answer3);
        $("#longAnswer").append(answer);

        timer -= 10;
        score -= 5;
        questionNum++;
        
        setTimeout(displayLongQuestions, 1500);


        if(questionNum === longQuestions.length){
            if(timer >50){
                score += 10;
            }
            else if (timer > 40 && time <49){
                score += 5;
            }
            wrongSound.play();
            setTimeout(finalPage, 1500);
            clearInterval(time);
        }
    }
})//main close tag
/////////////////////////////longQuestion///////////////////////////////

function storeUser(){
    localStorage.setItem("userList", JSON.stringify(userList));//store the array
    }

function finalPage(){
            $("#commonQuestions").hide();
            $("#synQuestions").hide();
            $("#longQuestions").hide();
            $("#completeMsg").children().show();
            $("#finalScore").children().show();
            $("#initials").children().show();
            $("#resetButton").children().hide();
            //trigger the complete msg
            var comepleteMsg = $("<h5>");
            comepleteMsg.append(signs.done);
            $("#completeMsg").append(comepleteMsg);

            //final score
            var finalScoreMsg = $("<p>");
            finalScoreMsg = signs.finalScore + score;
            $("#finalScore").append(finalScoreMsg);

            //initials
            var initialMsg = $("<p>");
            initialMsg.append(signs.initials);
            var initialBox = $("<input>");
            initialBox.attr("type", "text");
            initialBox.attr("id", "initialBox");
            $("#initials").append(initialMsg,initialBox);

            //submit button
            var initialSubmit = $("<button>");
            initialSubmit.attr("type", "button");
            initialSubmit.attr("id", "submitButton");
            initialSubmit.css("margin-top", "50px");
            initialSubmit.addClass("btn btn-info btn-lg btn-block");
            initialSubmit.html("Submit");
            $("#submitButton").append(initialSubmit);

            //reset button
            var resetButton = $("<button>");
            resetButton.attr("type","button");
            resetButton.attr("id","resetButton");
            resetButton.css("margin-top", "50px");
            resetButton.addClass("btn btn-warning btn-lg btn-block");
            resetButton.html("Reset");
            $("#resetButton").append(resetButton);




            //submit action
            $("#submitButton").on("click", function(){
                var initialInput = document.getElementById("initialBox").value;
                var nameList = $("<p>");
                nameList.append(initialInput + " score is " + score);
                $("#nameList").append(nameList);

                $("#submitButton").children().hide();
                $("#resetButton").children().show();
                //console.log(initialInput);
                //console.log(nameList);
                if(initialInput === ""){
                    return;
                }

                userList.push(initialInput, score);//push to userList Array
                console.log(userList);
                
                

                storeUser();
                renPreviousUser();
                
            });

            //reset action
            $("#resetButton").on("click", function(){
                location.reload();
            })
}


////////////////////////////////////Timer///////////////////////////////
function countDown(){
    $("#timer").empty();
    timer = 75;
    var timeDiv = $("<h6>");
    timeDiv.append("Time remaining: " + timer + "seconds");
    $("#timer").append(timeDiv);
    time = setInterval(clock, 1000);

    }

function clock(){
    $("#timer").empty();
    timer--;
    var timeDiv = $("<h6>");
    timeDiv.append("Time remaining: " + timer + "seconds");
    $("#timer").append(timeDiv);
    
    if(timer < 1){
        $("#title").children().hide();
        $("#choices").children().hide();
        $("#answer").children().hide();
        $("#sign").children().hide();
        $("#timer").children().hide();

        setTimeout(finalPage, 1000);
        clearInterval(time);
        
    }
}
////////////////////////////////////Timer///////////////////////////////

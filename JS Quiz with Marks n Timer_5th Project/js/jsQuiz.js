/*JS Quiz JS File*/

var questions = [
				 "Inside which HTML element do we put the JavaScript code?", 
				 "Javascript is a _____ typed language", 
				 "Javascript is ruled by _____ script", 
				 "Boolean has how many values ?",
				 "What are Literals ?",
				 "Array is read by _____",
				 "Object is read by _____",
				 "Reach of variables are identified by its _____",
				 "JavaScript was first known as _____",
				 "Boolean default value is _____",
				];
var options = [
				["scripting", "js", "javascript", "script"],
				["Strictly", "Loosely", "Strongly", "Weakly"],
				["ECMA Script", "W3C", "Java", "W3schools"],
				["One", "Four", "Two", "Three"],
				["Objects", "Arrays", "Variables", "Both A and B"],
				["Numbers", "Keys", "Serials", "Index Values"],
				["Serials", "Keys", "Numbers", "Index Values"],
				["Case", "Numbers", "Scope", "Keywords"],
				["Java", "Javascript", "Only Script", "LiveScript"],
				["False", "True", "None of the above", "Both"],
			  ];
var answer = [
			  "script",
			  "Weakly",
			  "ECMA Script",
			  "Two",
			  "Both A and B",
			  "Index Values",
			  "Keys",
			  "Scope",
			  "LiveScript",
			  "False",
			];


	document.getElementById('startQuiz').onclick = function(){
		document.getElementById('questionCount').style.display = 'block';
		quizInitiate();
		onTimer();
	}

function quizInitiate(){
//	this.style.display = 'none';
	document.getElementById('startQuiz').style.display = 'none';
	var randomQuestion = Math.floor(Math.random()*9);
	var selectedQuest = questions[randomQuestion];
	var questionWrap = document.getElementById('questionBox');
	var answOptions = document.getElementById('optionBox');
	var rightAnswer = answer[randomQuestion];
	questionWrap.innerHTML = selectedQuest;
	var allOptions = options[randomQuestion];
	questCount();

	function showOptions(){
			var output;
			output = "<ul " + "id=\"questOptions\">";
			for(i = 0; i < allOptions.length; i++){
				output += "<li>" + "<input type = \"radio\" name = \"answerOptions\" value =\"" + allOptions[i] + "\" \> " + allOptions[i] + "</li>";
			}
			output += "</ul>";
			answOptions.innerHTML = output;
			//console.log(answer[randomQuestion]);
	}
	showOptions();

	function chkClicked(){
		var allAnsOptions = document.getElementsByName('answerOptions');
		for(j = 0; j < allAnsOptions.length; j++){
			allAnsOptions[j].onclick = function(){
				var clickedValue = this.value; 
				//alert(clickedValue);
				if(clickedValue == rightAnswer){
				quizInitiate();
				scoreAdd();
				}else{
				quizInitiate();	
				scoreMinus();
				}
			}
		}
	} 
	window.onload = chkClicked();






	/*for(i = 0; i < allOptions.length; i++){
		answOptions.innerHTML += "\<input type = \"radio\" name = \"answerOptions\" value =\"" + allOptions[i] + "\" \> " + allOptions[i] + "<br />";
		console.log("\<input type = \"radio\" name = \"answerOptions\" value =\"" + allOptions[i] + "\" \>" + allOptions[i]);
	}
	document.getElementById('questionCount').style.display = 'block'; 
	onTimer();
	questCount();
	var populatedOptions = document.getElementById('optionBox').innerHTML;
	console.log(answer[randomQuestion]);*/
	//alert(populatedOptions);
	//alert(populatedOptions.length);
}


/*Reverse Timer for 1 min*/

/*i = 60;
function onTimer() {
  document.getElementById('timerId').innerHTML = i;
  i--;
  if (i < 0) {
    alert('You loose!');
  }
  else {
    setTimeout(onTimer, 1000);
  }
}*/

/*Reverse Timer for 1 min Ends*/

var questionCount = 0;
function questCount(){
	if(questionCount < 15){
		questionCount++;
		document.getElementById('questionCount').innerHTML = 15;
	}else if(questionCount == 15){
		document.getElementById('innerWrapper').innerHTML = "Your Score after 15 questions is " + score + " and total time taken is " + totalTime.innerHTML;
		clearInterval(endTimer);
	}
	document.getElementById('questionCount').innerHTML = questionCount;	
}

var secs = 0;
var mins = 0;
var totalTime = document.getElementById('timerId');
function onTimer() {
  totalTime.innerHTML = mins + " : " + secs;
  secs++;
  if (secs == 60) {
    secs = 0;
    mins ++;
  }
  var endTimer = setTimeout(onTimer, 1000);
}

/*Scoring for right n wrong Answers*/

var score = 0;
function scoreAdd(){
	score += 100;
	document.getElementById('scoreId').innerHTML = score;
}

function scoreMinus(){
	score -= 100;
	document.getElementById('scoreId').innerHTML = score;
}

/*Scoring for right n wrong Answers Ends*/

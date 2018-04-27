var myQuestions = [
  "Method prompt() contains.....number of parameters?",
  "If button is clicked..... event handler is invocked?",
  "GetMonth() returns the months as?",
  "Event is used to check an empty text box?",
  "JavaScript file has an extension of?",
  "A function associated with an object is called?",
  "Inside which HTML element do we put the Javascript?",
  "Which of the dialog box display a messagea and a data entry field?",
  "Function is used to Parse a string to Int?",
  "IsNan() evalutes and argument to determine if given value?"
];

var myAnsweres = [
  ["One", "Two", 'Three', "Zero"], 
  ["OnSubmit()", "OnLoad()", "IsPostBack()", "OnClick()"],
  ["Int, Float, Char, String"],
  ["OnClick(), OnFocus(), Onblur(), None"],
  [".Java, .Js, .javascript, xml"],
  ["Function, Method, Link, None"],
  ["Js, Javascript, Script, Scripting"],
  ["Alert, Prompt, Confirm, Msg"],
  ["Interger.Parse, Int.Parse, Parse.Int, None"],
  ["Is Not a Null, Is Not a Number, Is Not a New Object, None Of The Above"]
];

var correctAnswers = [
  "Two",
  "OnClick()",
  "Int",
  "OnBlur()",
  ".Js",
  "Method",
  "JavaScript",
  "Prompt()",
  "Int.Parse",
  "is Not a"
];

var number = 60;
var correctTotal = 0;
var inCorrectAnswers = 0;
var unAnsweredQuestions = myQuestions.length;

//  Variable that will hold our interval ID when we execute
//  the "run" function
var intervalId;
$("#start").on("click", start);
//  When the stop button gets clicked, run the stop function.
$("#stop").on("click", stop);

//  When the resume button gets clicked, execute the run function.
// $("#resume").on("click", run);
function start() {
    $("#start").hide();
    run();
    getQuestions();
    $("#stop").append($('<input id="stop" type="button" class="w3-btn w3-round-xlarge" value="STOP">'));
}

//  The run function sets an interval
//  that runs the decrement function once a second.
//  *****BUG FIX******** 
//  Clearing the intervalId prior to setting our new intervalId will not allow multiple instances.

function run() {
//   clearInterval(intervalId);
  intervalId = setInterval(decrement, 1000);
}
function getQuestions() {
    for(var i = 0; i < myQuestions.length; i++){
    console.log(myQuestions + myAnsweres[i])
    };
}


//  The decrement function.
function decrement() {
  //  Decrease number by one.
  number--;
  //  Show the number in the #show-number tag.
  $("#show-number").html("<h2>" + number + "</h2>");
  //  Once number hits zero...
  if (number === 0) {
    //  ...run the stop function.
    stop();
    //  Alert the user that time is up.
    alert("Time Up!");
  }
}

//  The stop function
function stop() {
  //  Clears our intervalId
  //  We just pass the name of the interval
  //  to the clearInterval function.
  clearInterval(intervalId);
  $("#stop").hide();
  $("#show-number").hide();
  $("#questions").html("<br><h2>Times Up!</h2>");
  $("#message").html("Correct Answers: " + correctTotal + "<br>");
  $("#message").append("<br>Incorrect Answers: " + inCorrectAnswers + "<br>");
  $("#message").append("<br>unAnsweredQuestions: " + unAnsweredQuestions + "<br>")

}

//  Execute the run function.
run();
var panel = $("#quizArea");

// questions
var questions = [{
    question: "Method prompt() contains ______ number of parameters?",
    answers: ["One", "Two", "Three", "Zero"],
    correctAnswers: "Two"
  },{
    question: "If button is clicked _______ event handler is invocked?",
    answers: ["OnSubmit()", "OnLoad()", "IsPostBack()", "OnClick()"],
    correctAnswers: "OnClick()"
  },{
    question: "GetMonth() returns the months as?",
    answers: ["Int", "Float", "Char", "String"],
    correctAnswers: "Int"
  },{
    question: "Event is used to check an empty text box?",
    answers: ["OnClick()", "OnFocus()", "Onblur()", "None"],
    correctAnswers: "OnBlur()"
  },{
    question: "JavaScript file has an extension of?",
    answers: [".Java", ".Js", ".javascript", "xml"],
    correctAnswers: ".Js"
  },{
    question: "A function associated with an object is called?",
    answers: ["Function", "Method", "Link", "None"],
    correctAnswers: "Method"
  },{
    question: "Inside which HTML element do we put the Javascript?",
    answers: ["Js", "Javascript", "Script", "Scripting"],
    correctAnswers: "JavaScript"
  },{
    question:"Which of the dialog box display a messagea and a data entry field?",
    answers: ["Alert", "Prompt", "Confirm", "Msg"],
    correctAnswers: "Prompt()"
  },{
    question: "Function is used to Parse a string to Int?",
    answers: ["Interger.Parse", "Int.Parse", "Parse.Int", "None"],
    correctAnswers: "Int.Parse"
  },{
    question: "IsNan() evalutes and argument to determine if given value?",
    answers: ["Is Not a Null", "Is Not a Number", "Is Not a New Object","None Of The Above"],
    correctAnswers: "is Not a Null"
  }];

var timer;

var game = {
  correct: 0,
  incorrect: 0,
  counter: 120,

  countdown: function() {
    game.counter--;
    $("#counter").html(game.counter);
    if (game.counter <= 0) {
      console.log("Time is up!");
      game.done();
    }
  },

    start: function() {
    timer = setInterval(game.countdown, 1000);

    $("#subWrapper").prepend("<h2>Time Remaining: <span id='counter'>120</span> Seconds</h2>");

    $("#start").remove();
    $("#subWrapper").css("background-color", "#fff17a");
    $("#subWrapper").css("border", "2px solid blue");

    for (var i = 0; i < questions.length; i++) {
      panel.append("<h2>" + questions[i].question + "</h2>");
      for (var j = 0; j < questions[i].answers.length; j++) {
        panel.append("<input type='radio' name='question-" + i + "' value='" + questions[i].answers[j] + "''>" + questions[i].answers[j]);
      }
    }

    panel.append("<button id='done'>Done</button>");
  },

  done: function() {

    $.each($("input[name='question-0']:checked"), function() {
      if ($(this).val() === questions[0].correctAnswers) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-1']:checked"), function() {
      if ($(this).val() === questions[1].correctAnswers) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-2']:checked"), function() {
      if ($(this).val() === questions[2].correctAnswers) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-3']:checked"), function() {
      if ($(this).val() === questions[3].correctAnswers) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-4']:checked"), function() {
      if ($(this).val() === questions[4].correctAnswers) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-5']:checked"), function() {
      if ($(this).val() === questions[5].correctAnswers) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-6']:checked"), function() {
      if ($(this).val() === questions[6].correctAnswers) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-7']:checked"), function() {
      if ($(this).val() === questions[7].correctAnswers) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-8']:checked"), function() {
      if ($(this).val() === questions[8].correctAnswers) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-9']:checked"), function() {
      if ($(this).val() === questions[9].correctAnswers) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    this.result();

  },

  result: function() {

    clearInterval(timer);

    $("#sub-wrapper h2").remove();

    panel.html("<h2>All Done!</h2>");
    panel.append("<h3 style='color: green;'>Correct Answers: " + this.correct + "</h3>");
    panel.append("<h3 style='color: red;'>Incorrect Answers: " + this.incorrect + "</h3>");
    panel.append("<h3 style='color: orange;'>Unanswered: " + (questions.length - (this.incorrect + this.correct)) + "</h3>");
  }

};

// Click events

$(document).on("click", "#start", function() {
  game.start();
});


$(document).on("click", "#done", function() {
  game.done();
});

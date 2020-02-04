$(document).ready(function(){

	var magic8Ball = {};

	magic8Ball.listOfAnswers = ["It is possible", "No so sure", "Definitely yes", "It can be tricky", "There is a chance", "Just fine", "It can go wrong", "The best"];

	$("#answer").hide();

	magic8Ball.askQuestion = function (question)
{
	$("#answer").fadeIn(4000);
	var randomNumber = Math.random();
	var randomNumberForListOfAnswers = randomNumber * this.listOfAnswers.length;
	var randomIndex = Math.floor(randomNumberForListOfAnswers);
	var answer = this.listOfAnswers[randomIndex];
	$("#8ball").effect("shake");
	$("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");
	$("#answer").text(answer);

	console.log(question);

	setTimeout(
		function() {
			console.log(answer);
		}, 500);
};

	var onClick = function()
	{
		$("#answer").hide();

		$("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/8side.png");

		setTimeout(
			function() {
				var question = prompt("Ask me a YES/NO question!");

				magic8Ball.askQuestion();
			}, 500);

	};

	$("#questionButton").click(onClick);
});

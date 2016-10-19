$(document).ready(function() {
	
	var $procScore = 0;
	var $currentQuestion = 0;
	var $questions = $('.questions');
	var $options = $('.options');

	answers = new Object();
		$options.change(function(){
		    var answer = ($(this).attr('value'))
		    var question = ($(this).attr('name'))
		    var proc_val = ($(this).data("proc-val"))
		});

	$options.each(function() {
		$(this).on("click", function(){
			$calc = $procScore + parseInt(answers[proc_val]);
			console.log($calc);
	    })
	});


});

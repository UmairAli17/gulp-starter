$(document).ready(function() {
	
	var $procScore = 0;
	var $currentQuestion = 0;
	var $questions = $('.questions');
	var $options = $('.options');
    
    
	answers = new Object();
		$options.click(function(){
		    var answer = ($(this).attr('value'))
		    var question = ($(this).attr('name'))
		    var proc_val = ($(this).data("proc-val"))
            console.log(proc_val);
            //declare the "quest" (question) variable
            var quest;
            //If the item exisions withint he questions class elelemnt then do the following
            if(sessionStorage.getItem('question')){
                //parse values to jSON
                quest= JSON.parse(sessionStorage.getItem('question'));
            }else{
                quest=[];
            }
            //Send the value proc_val values to the jSOn array.
            quest.push(proc_val)
            sessionStorage.setItem('question', JSON.stringify(quest));
		});
    
});

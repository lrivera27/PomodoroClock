$(document).ready(function(){
	function updateTimer(minutes, seconds){
		minutes = (minutes < 10) ? "0" + minutes : minutes;
		seconds = (seconds < 10) ? "0" + seconds : seconds;
		$("#clock-timer").text(minutes + ":" + seconds);
	}
	
	function startTimer(minutes){
		var seconds = 60;
		updateTimer(minutes, 0);
		--minutes;
		var timer = setInterval(function(){
			console.log("Seconds:", seconds);
			
			if(seconds > 0){
				updateTimer(minutes, --seconds);
			} else if(minutes > 0){
				seconds = 60;
				updateTimer(--minutes, --seconds);
			} else {
				clearInterval(timer);
			}
		}, 1000);
	}
	
	startTimer(1);
	var mainSession;
	var breakSession;
	
	function setMainSession(){
		var minutes = prompt("Please enter the main session timer", "Type in the minutes");
	}
	
	function setBreakSession(){
		var minutes = prompt("Please enter the break session timer", "Type in the minutes");
	}
});
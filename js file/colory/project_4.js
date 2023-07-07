


let start = document.getElementById('start-btn');

let reset = document.getElementById('reset-btn');

let timer = document.getElementById('time');

let pause = document.getElementById("pause");

let timeInterval = null;
let status = "stop";

let seconds = 0;
let minutes = 0;
let hours  = 0;

//more varibles for zeros 
let zeroSeconds = 0;
let zeroMinutes = 0;
let zeroHours = 0;

function incTime(){

 seconds++;

 if(seconds == 60){

 	seconds = 0;

 	minutes++;
 	
 	if(minutes == 60){

 		minutes = 0;

 		hours++;

 	}
 }
 	if(seconds < 10){
 		zeroSeconds = "0" + seconds.toString();
 	}
 	if(minutes < 10){
 		zeroMinutes = "0" + minutes.toString();
 	}
 	if(hours < 10){
 		zeroHours = "0" + hours.toString();
 	}
 	 
 	 
 	 let displayTimer = timer.innerText = zeroHours + ":" + zeroMinutes + ":" + zeroSeconds


}


	start.addEventListener("click",function(){

		if(status === "stop"){
			timeInterval = window.setInterval(incTime,1000);
			start.innerHTML = `<i class="fa-solid fa-pause" id="pause"></i>`;
			status = "started"
			
		}else{
			window.clearInterval(timeInterval);
			document.getElementById('start-btn').innerHTML = `<i class="fa-solid fa-play" id="play"></i>`;
			status = "stop";

		}
		

	});
	reset.addEventListener('click',function(){
		window.clearInterval(timeInterval);
		document.getElementById('start-btn').innerHTML = `<i class="fa-solid fa-play" id="play"></i>`;
		seconds = 0;
		minutes = 0;
		hours = 0;
		timer.innerHTML = "00:00:00";
	});
	
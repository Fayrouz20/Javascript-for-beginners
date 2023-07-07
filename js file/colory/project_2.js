

let modal = document.getElementById('open-btn');

let close = document.getElementById('close');



modal.addEventListener("click", function(){

	document.getElementById('modal-container').style.display = "block";
	
});

close.addEventListener('click',function(){

	document.getElementById('modal-container').style.display = "none";
});


let container = document.getElementById('modal-container');

window.addEventListener('click',function(e){
	if(e.target === container)
	container.style.display = "none";
	
})



let acc = document.getElementsByClassName('conainer');

for(let i = 0;  i < acc.length; i++){

	acc[i].addEventListener("click", function(){
		this.classList.toggle('active');

	});
}
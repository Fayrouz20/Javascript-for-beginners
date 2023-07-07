

let newtask = document.querySelector('#add-task');

let btn = document.querySelector('#add-task-btn');

let input = document.querySelector('#input-task');

let container = document.querySelector('#task-container');


 btn.addEventListener('click',function(){

 	let task = document.createElement('div');
 	task.classList.add('task');

 	let li = document.createElement('li');
 	li.innerText = `${input.value}`;
 	task.appendChild(li);

 	let checkBtn = document.createElement('button');
 	checkBtn.innerHTML = `<i class="fa-solid fa-check"></i>`;
 	checkBtn.classList.add("checkTask");
 	task.appendChild(checkBtn);

 	let delBtn = document.createElement('button');
 	delBtn.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;
 	delBtn.classList.add("delBtn");
 	task.appendChild(delBtn);

 	if(input.value === ""){
 		alert("please enter somthing");
 	}else{
 		container.appendChild(task);
 	}
		input.value = "";


		checkBtn.addEventListener("click",function(){

 		li.style.textDecoration = 'line-through';
		 });

		delBtn.addEventListener('click',function(e){

			let target = e.target;
			task.remove();

		});
 });


 
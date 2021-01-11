let name = prompt("Your name?", "");
alert("Hello " + name);

let cloudEl = document.getElementById("cloud-pic");
let cloudMoEl = document.getElementById("cloud-chat");

let onCloudClick = function() {

	cloudMoEl.textContent = "Hello, My Dear Friend!";
}
cloudEl.addEventListener("click", onCloudClick);


let button = document.querySelector('button');
	function random(number) {
		return Math.floor(Math.random()*(number+1));
	}

	button.onclick = function() {
		  var rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
  document.body.style.backgroundColor = rndCol;
}
	

var rythm = new Rythm();

window.addEventListener('load', ()=>{

	rythm.addRythm('wok', 'color', 0, 10, {
		from: [255,255,0],
		to:[255,0,0]
	});

	document.querySelector('#btnPlay').addEventListener('click', ()=>{
		var labelBtnPlay = document.querySelector('#btnPlay>#label');

		if(labelBtnPlay.innerHTML=='PLAY'){
			play();
		}else{
			stop();
		}
	});

	document.querySelector('#btnCarregarAudio').addEventListener("click", (event)=>{
		document.querySelector('#fileCarregarAudio').click();
	});

	document.getElementById('fileCarregarAudio').addEventListener("change", (event)=>{
		var path = URL.createObjectURL(event.target.files[0]);
		document.querySelector('#nomeMusica').innerHTML = event.target.files[0].name;
		mudarMusica(path);
	});
});

function play(){
	togglePlayStop('#btnPlay');
	rythm.start();
	getAudioContext().resume();
}
function stop(){
	togglePlayStop('#btnPlay');
	rythm.stop();
}
function togglePlayStop(selector){
	if(typeof selector!=='undefined'){
		var labelBtnPlay = document.querySelector(selector+'>#label');
		var iconBtnPlay = document.querySelector(selector+'>#icon');

		if(labelBtnPlay.innerHTML=='PLAY'){
			labelBtnPlay.innerHTML='STOP';
			iconBtnPlay.classList.remove("fa-play");
			iconBtnPlay.classList.add("fa-pause");
		}else{
			labelBtnPlay.innerHTML='PLAY';
			iconBtnPlay.classList.remove("fa-pause");
			iconBtnPlay.classList.add("fa-play");
		}
	}
}
function mudarMusica(path){
	stop();
	rythm.setMusic(path);
	play();
}

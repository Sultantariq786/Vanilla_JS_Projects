/*Super Heroes JS File*/	

/*window.onload = rainFall;
function rainFall(){
	var rain = Math.floor(Math.random()*2);
	//alert(rain);
	if (rain == 0){
		document.getElementById('rainFall').style.display = 'none';
	}else if(rain == 1){
		document.getElementById('rainFall').style.display = 'block';
	}
}
document.getElementById('rainFall').onclick = function(){
	this.style.display = "none";
}
*/

var allLeftBttns = document.getElementById('leftBttnGroup').getElementsByTagName('a');
var allRightBttns = document.getElementById('rightBttnGroup').getElementsByTagName('a');
function themeChanger(bttnId){
//	var imageNo = Math.floor(Math.random()*2);
	var imageNo = 0;
	if(bttnId == 'spiderman'){
		document.getElementById('body').className = "spidermanBody";
		document.getElementById('spidermanTheme').style.display = "block";
		document.getElementById('batmanTheme').style.display = "none";
		document.getElementById('thorTheme').style.display = "none";
		document.getElementById('ironmanTheme').style.display = "none";
		document.getElementById('captamericaTheme').style.display = "none";
		document.getElementById('hulkTheme').style.display = "none";
		document.getElementById('allPrev').className = "spidermanPrev";
		document.getElementById('allNext').className = "spidermanNext";
			allLeftBttns[0].className = "themeBttn spidermanBttn";
			allLeftBttns[1].className = "themeBttn batmanBttn";
			allLeftBttns[2].className = "themeBttn ironmanBttn";
			allRightBttns[0].className = "themeBttn thorBttn";
			allRightBttns[1].className = "themeBttn captamericaBttn";
			allRightBttns[2].className = "themeBttn hulkBttn";
	}else if(bttnId == 'batman'){
		document.getElementById('body').className = "batmanBody";
		document.getElementById('spidermanTheme').style.display = "none";
		document.getElementById('batmanTheme').style.display = "block";
		document.getElementById('thorTheme').style.display = "none";
		document.getElementById('ironmanTheme').style.display = "none";
		document.getElementById('captamericaTheme').style.display = "none";
		document.getElementById('hulkTheme').style.display = "none";
		document.getElementById('allPrev').className = "batmanPrev";
		document.getElementById('allNext').className = "batmanNext";
			allLeftBttns[0].className = "themeBttn spidermanBttn";
			allLeftBttns[1].className = "themeBttn batmanBttn";
			allLeftBttns[2].className = "themeBttn ironmanBttn";
			allRightBttns[0].className = "themeBttn thorBttn";
			allRightBttns[1].className = "themeBttn captamericaBttn";
			allRightBttns[2].className = "themeBttn hulkBttn";
	}else if(bttnId == 'ironman'){
		document.getElementById('body').className = "ironmanBody";
		document.getElementById('spidermanTheme').style.display = "none";
		document.getElementById('batmanTheme').style.display = "none";
		document.getElementById('thorTheme').style.display = "none";
		document.getElementById('ironmanTheme').style.display = "block";
		document.getElementById('captamericaTheme').style.display = "none";
		document.getElementById('hulkTheme').style.display = "none";
			allLeftBttns[0].className = "themeBttn spidermanBttn";
			allLeftBttns[1].className = "themeBttn batmanBttn";
			allLeftBttns[2].className = "themeBttn ironmanBttn";
			allRightBttns[0].className = "themeBttn thorBttn";
			allRightBttns[1].className = "themeBttn captamericaBttn";
			allRightBttns[2].className = "themeBttn hulkBttn";
	}else if(bttnId == 'thor'){
		document.getElementById('body').className = "thorBody";
		document.getElementById('spidermanTheme').style.display = "none";
		document.getElementById('batmanTheme').style.display = "none";
		document.getElementById('thorTheme').style.display = "block";
		document.getElementById('ironmanTheme').style.display = "none";
		document.getElementById('captamericaTheme').style.display = "none";
		document.getElementById('hulkTheme').style.display = "none";
			allLeftBttns[0].className = "themeBttn spidermanBttn";
			allLeftBttns[1].className = "themeBttn batmanBttn";
			allLeftBttns[2].className = "themeBttn ironmanBttn";
			allRightBttns[0].className = "themeBttn thorBttn";
			allRightBttns[1].className = "themeBttn captamericaBttn";
			allRightBttns[2].className = "themeBttn hulkBttn";
	}else if(bttnId == 'captamerica'){
		document.getElementById('body').className = "captamericaBody";
		document.getElementById('spidermanTheme').style.display = "none";
		document.getElementById('batmanTheme').style.display = "none";
		document.getElementById('thorTheme').style.display = "none";
		document.getElementById('ironmanTheme').style.display = "none";
		document.getElementById('captamericaTheme').style.display = "block";
		document.getElementById('hulkTheme').style.display = "none";
			allLeftBttns[0].className = "themeBttn spidermanBttn";
			allLeftBttns[1].className = "themeBttn batmanBttn";
			allLeftBttns[2].className = "themeBttn ironmanBttn";
			allRightBttns[0].className = "themeBttn thorBttn";
			allRightBttns[1].className = "themeBttn captamericaBttn";
			allRightBttns[2].className = "themeBttn hulkBttn";
	}else if(bttnId == 'hulk'){
		document.getElementById('body').className = "hulkBody";
		document.getElementById('spidermanTheme').style.display = "none";
		document.getElementById('batmanTheme').style.display = "none";
		document.getElementById('thorTheme').style.display = "none";
		document.getElementById('ironmanTheme').style.display = "none";
		document.getElementById('captamericaTheme').style.display = "none";
		document.getElementById('hulkTheme').style.display = "block";
			allLeftBttns[0].className = "themeBttn spidermanBttn";
			allLeftBttns[1].className = "themeBttn batmanBttn";
			allLeftBttns[2].className = "themeBttn ironmanBttn";
			allRightBttns[0].className = "themeBttn thorBttn";
			allRightBttns[1].className = "themeBttn captamericaBttn";
			allRightBttns[2].className = "themeBttn hulkBttn";
	}
}/*Funct themeChanger Ends*/

var galName = 'spiderman';
for(i = 0; i < allLeftBttns.length; i++){
	//alert(buttonClicked[i].id);
	allLeftBttns[i].onclick = function bttnClickFn(){
		bttnId = this.id;
		galName = this.id;
		//alert(galName);
		themeChanger(this.id);
		document.getElementById('mainSlider').src = "images/" + bttnId + "/0.jpg";
		this.className = "themeBttn " + bttnId + "Bttn activeThemeClass";
		clearInterval(sidd);
		sidd = setInterval(nextFunct, 4000);
	}
}

for(i = 0; i < allRightBttns.length; i++){
	allRightBttns[i].onclick = function (){
		bttnId = this.id;
		galName = this.id;
		//alert(galName);		
		themeChanger(this.id);
		document.getElementById('mainSlider').src = "images/" + bttnId + "/0.jpg";
		this.className = "themeBttn " + bttnId + "Bttn activeThemeClass";
		clearInterval(sidd);
		sidd = setInterval(nextFunct, 4000);
	}
}

function nextFunct(bttnId){
	if(bttnId === undefined){
		bttnId = galName;
	}
	i++;
	if(i > 4){
		i = 0;	
	}
	document.getElementById('mainSlider').src = "images/" + bttnId + "/" + i + ".jpg";
	console.log(i);
}
var sidd = setInterval(nextFunct, 4000);

/*function prevFunct(bttnId){
	i--;
	if(i < 0){
	i = 4;	
}
document.getElementById('mainSlider').src = "images/" + bttnId + "/" + i + ".jpg";
}*/
//document.getElementById('allNext').onclick = nextFunct;
//document.getElementById('allPrev').onclick = prevFunct;

//precaching
/*var myimg = new Image();
myimg.src = 'bg.jpg';
*/
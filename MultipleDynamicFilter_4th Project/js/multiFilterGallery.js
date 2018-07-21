/*JS File Author = "Tariq Khan"*/

/*JS for initial Random Slider*/

	function runSlider(){
		var firstLvl = ['wildlife'];
		var secondLvl = ['birds'];
		var thirdLvl = ['huntingbirds', 'nonwaterbirds', 'fruiteatingbirds', 'waterbirds'];
		var indexLvl3 = Math.floor(Math.random()*4);
		var imageNo = Math.floor(Math.random()*10);
		var mainSlider = document.getElementById('randomSlider');
		mainSlider.src = "images/" + firstLvl[0] + "/" + secondLvl[0] + "/" + thirdLvl[indexLvl3] + "/" + imageNo + ".jpg";
	}
//	setInterval(runSlider, 3000);

window.onload = starter;
function starter(){
	var pauseSlider = setInterval(runSlider, 3000);
	var level1 = document.getElementById('mainCatId');
	var level2 = document.getElementById('subCatId');
	var level3 = document.getElementById('subSubCatId');
	var imgList = document.getElementById('catImgId');
	var imagesGroup = document.getElementById('selectedCatImg');
	var magGlass = document.getElementById('magGlass');
	var mainSlider = document.getElementById('randomSlider');
	/*var mainCatValue = document.getElementById('mainCatId').value;
	var subCatValue = document.getElementById('subCatId').value;*/
	level1.onchange = level1Populator;
	function level1Populator(){
		var filterId = this.value;
	//	alert(filterId);
		if(filterId == 'categories'){
			level2.innerHTML = "";
			level2.style.display = 'none';
			level3.innerHTML = "";
			level3.style.display = 'none';
			imgList.style.display = 'none';
			imagesGroup.innerHTML = "";
			magGlass.style.display = 'none';
			imagesGroup.innerHTML = "<img class=\"randomSlider\" id=\"randomSlider\" src=\"images/vehicles/domestic/cars/0.jpg\" title=\"Please select any category from above to view related images\"/>";
			clearInterval(pauseSlider);	
			starter();
		}else if(filterId == 'wildlife'){
			level2.style.display = 'block';
			magGlass.style.display = 'block';
			level2.innerHTML = "<option value=\"subCat\">SUB CATEGORIES</option>" + "<option value=\"birds\">BIRDS</option>" + "<option value=\"animals\">ANIMALS</option>"; 
		}else if(filterId == 'vehicles'){
			level2.style.display = 'block';
			magGlass.style.display = 'block';
			level2.innerHTML = "<option value=\"subCat\">SUB CATEGORIES</option>" + "<option value=\"commercial\">COMMERCIAL</option>" + "<option value=\"domestic\">DOMESTIC</option>"; 
		}
	}
	level2.onchange = level2Populator;
	function level2Populator(){
		var filterId = this.value;
	//	alert(filterId);
		if(filterId == 'subCat'){
			level3.innerHTML = "";
			level3.style.display = 'none';
			imgList.style.display = 'none';
			imagesGroup.innerHTML = "";
			magGlass.style.display = 'block';
			imagesGroup.innerHTML = "<img class=\"randomSlider\" id=\"randomSlider\" src=\"images/vehicles/domestic/cars/0.jpg\" title=\"Please select any category from above to view related images\"/>";
			clearInterval(pauseSlider);	
			starter();
		}else if(filterId == 'birds'){
			level3.innerHTML = "<option value=\"types\">TYPES</option>" + "<option value=\"fruiteatingbirds\">FRUIT EATING BIRDS</option>" + "<option value=\"huntingbirds\">HUNTING BIRDS</option>" + "<option value=\"nonwaterbirds\">NON WATER BIRDS</option>" + "<option value=\"waterbirds\">WATER BIRDS</option>"; 
			level3.style.display = 'block';
		}else if(filterId == 'animals'){
			level3.innerHTML = "<option value=\"types\">TYPES</option>" + "<option value=\"carnivorous\">CARNIVOROUS</option>" + "<option value=\"herbivorous\">HERBIVOROUS</option>"; 
			level3.style.display = 'block';
		}else if(filterId == 'commercial'){
			level3.innerHTML = "<option value=\"types\">TYPES</option>" + "<option value=\"heavy\">HEAVY</option>" + "<option value=\"small\">SMALL</option>"; 
			level3.style.display = 'block';
		}else if(filterId == 'domestic'){
			level3.innerHTML = "<option value=\"types\">TYPES</option>" + "<option value=\"bikes\">BIKES</option>" + "<option value=\"cars\">CARS</option>"; 
			level3.style.display = 'block';
		}			
	}
	level3.onchange = imagePopulator;
	function imagePopulator(){
		var i = 0;
		var j = 1;
		var filterId = this.value;
		var mainCatValue = document.getElementById('mainCatId').value;
		var subCatValue = document.getElementById('subCatId').value;
	//	alert(mainCatValue);
	//	alert(subCatValue);
	//	alert(filterId);
		clearInterval(pauseSlider);	
		imgList.innerHTML = "";
		for(i = 0; i < 10; i++, j++){
			imgList.innerHTML += "<option name=\"" + filterId + "\" value=\"" + i + "\">IMAGE" + j + "</option>";
		}
	//	alert(filterId);
		imgList.style.display = 'block';
		function showImg(){
			var output;
			output = "<ul " + "id=\"imgGroup\">";
			for(i = 0; i < 10; i++){
				output += "<li><a href=\"#\"><img src=\"images/" + mainCatValue + "/" + subCatValue + "/" + filterId + "/" + i + ".jpg\" /></a></li>";
			}
			output += "</ul>";
			magGlass.style.display = 'none';
			imagesGroup.innerHTML = output;
			imgList.onchange = lastLevelChange;
			function lastLevelChange(){
				var i = this.value;
			//	alert(this.value);
				document.getElementById('popupImg').src = "images/" + mainCatValue + "/" + subCatValue + "/" + filterId + "/" + i + ".jpg";
				document.getElementById('overlayWrap').style.display = 'block';
			}
			function nextFunc(){
				i++;
			//	imgList.value++;
				if(i > 9){
					i = 0;
				}
				imgList.value = i;
				console.log(imgList.value);
			document.getElementById('popupImg').src = "images/" + mainCatValue + "/" + subCatValue + "/" + filterId + "/" + i + ".jpg";
			}
			document.getElementById('nextId').onclick = nextFunc;
			function prevFunc(){
				i--;
			//	imgList.value--;
				if(i < 0){
					i = 9;
				}
				imgList.value = i;
			//	console.log(imgList.value);
			document.getElementById('popupImg').src = "images/" + mainCatValue + "/" + subCatValue + "/" + filterId + "/" + i + ".jpg";	
			}
			document.getElementById('prevId').onclick = prevFunc;
			document.onkeyup = function keyOperate(e){
				var getKey = e.which;
			//	console.log(getKey);
				if(getKey == 37){
					prevFunc();
				}
				else if(getKey == 39){
					nextFunc();
				}
				else if(getKey == 27){
					overlayClose();
				}
			}
		}
		showImg();
		var imgClick = document.getElementById('imgGroup').getElementsByTagName('img');	
		for(i = 0; i < imgClick.length; i++){
			imgClick[i].onclick = popupImg;
		}
		/*var e = this;*/
		function popupImg(e){
			/*for(i = 0; i < imgClick.length; i++){
				imgClick[i].style.position = "";
			}
			this.style.position = "relative";
			var getXPos = e.pageX;
			var getYPos = e.pageY;
			console.log(getXPos, getYPos);*/
			var getSrc = this.src;
			var getSlashPos = getSrc.lastIndexOf('/')+1;
			var getDotPos = getSrc.lastIndexOf('.');
			getImg = getSrc.substring(getSlashPos, getDotPos);
		//	console.log(getImg);
			document.getElementById('popupImg').src = this.src;
			document.getElementById('overlayWrap').style.display = 'block';
			magGlass.style.display = 'none';
			imgList.value = getImg;
			/*function relativeImgPopup(e){
				var imgPopup = document.getElementById('popupImg');
				imgPopup.style.left = getXPos + 'px';
				imgPopup.style.top = getYPos + 'px';
			}
			relativeImgPopup();*/
		}
	}
	function overlayClose(){
		imgList.value = 0;
		document.getElementById('overlayWrap').style.display = 'none';
	}
	document.getElementById('popupImg').onclick = overlayClose;
}
	
	



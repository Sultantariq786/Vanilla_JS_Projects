window.onload = function (){
	var filterGroup = document.getElementById('filterWrapId').getElementsByTagName('a');
	for(i = 0; i < filterGroup.length; i++){
		filterGroup[i].onclick = function(){
			filterGroup[0].className = "";
			filterGroup[1].className = "";
			filterGroup[2].className = "";
			filterGroup[3].className = "";
			filterGroup[4].className = "";
			var output;
			var filterBttn = this.id;
			this.className = "activeTab";
			//alert(filterBttn);
			if(filterBttn == 'fruits'){
				output = "<ul " + "id=\"imgGroup\">";
					for(var j=0; j < 5; j++){
						output += "<li><a href=\"javascript:void(0)\"><img src=\"images/" + filterBttn + "/" + j + ".jpg\" alt=\"fruits\"/></a></li>";
					}
				output += "</ul>";
			}else if(filterBttn == 'vegs'){
				output = "<ul " + "id=\"imgGroup\">";
					for(var j=0; j < 5; j++){
						output += "<li><a href=\"javascript:void(0)\"><img src=\"images/" + filterBttn + "/" + j + ".jpg\" alt=\"fruits\"/></a></li>";
					}
				output += "</ul>";
			}else if(filterBttn == 'drinks'){
				output = "<ul " + "id=\"imgGroup\">";
					for(var j=0; j < 5; j++){
						output += "<li><a href=\"javascript:void(0)\"><img src=\"images/" + filterBttn + "/" + j + ".jpg\" alt=\"fruits\"/></a></li>";
					}
				output += "</ul>";
			}else if(filterBttn == 'nonvegs'){
				output = "<ul " + "id=\"imgGroup\">";
					for(var j=0; j < 5; j++){
						output += "<li><a href=\"javascript:void(0)\"><img src=\"images/" + filterBttn + "/" + j + ".jpg\" alt=\"fruits\"/></a></li>";
					}
				output += "</ul>";
			}else if(filterBttn == 'all'){
				output = "<ul " + "id=\"imgGroup\">";
					//for( var j=0; j<myArr[0].length; j++){
					output += "<li><a href=\"javascript:void(0)\"><img src=\"images/fruits/0.jpg\" alt=\"fruits\"/></a></li>";
					output += "<li><a href=\"javascript:void(0)\"><img src=\"images/vegs/0.jpg\" alt=\"fruits\"/></a></li>";
					output += "<li><a href=\"javascript:void(0)\"><img src=\"images/drinks/0.jpg\" alt=\"fruits\"/></a></li>";
					output += "<li><a href=\"javascript:void(0)\"><img src=\"images/nonvegs/0.jpg\" alt=\"fruits\"/></a></li>";
					output += "<li><a href=\"javascript:void(0)\"><img src=\"images/fruits/1.jpg\" alt=\"nonvegs\"/></a></li>";
					output += "<li><a href=\"javascript:void(0)\"><img src=\"images/vegs/1.jpg\" alt=\"nonvegs\"/></a></li>";
					output += "<li><a href=\"javascript:void(0)\"><img src=\"images/drinks/1.jpg\" alt=\"nonvegs\"/></a></li>";
					output += "<li><a href=\"javascript:void(0)\"><img src=\"images/nonvegs/1.jpg\" alt=\"nonvegs\"/></a></li>";
					output += "<li><a href=\"javascript:void(0)\"><img src=\"images/fruits/2.jpg\" alt=\"fruits\"/></a></li>";
					output += "<li><a href=\"javascript:void(0)\"><img src=\"images/vegs/2.jpg\" alt=\"fruits\"/></a></li>";
					output += "<li><a href=\"javascript:void(0)\"><img src=\"images/drinks/2.jpg\" alt=\"fruits\"/></a></li>";
					output += "<li><a href=\"javascript:void(0)\"><img src=\"images/nonvegs/2.jpg\" alt=\"fruits\"/></a></li>";
					output += "<li><a href=\"javascript:void(0)\"><img src=\"images/fruits/3.jpg\" alt=\"nonvegs\"/></a></li>";
					output += "<li><a href=\"javascript:void(0)\"><img src=\"images/vegs/3.jpg\" alt=\"nonvegs\"/></a></li>";
					output += "<li><a href=\"javascript:void(0)\"><img src=\"images/drinks/3.jpg\" alt=\"nonvegs\"/></a></li>";
					output += "<li><a href=\"javascript:void(0)\"><img src=\"images/nonvegs/3.jpg\" alt=\"nonvegs\"/></a></li>";
					output += "<li><a href=\"javascript:void(0)\"><img src=\"images/fruits/4.jpg\" alt=\"nonvegs\"/></a></li>";
					output += "<li><a href=\"javascript:void(0)\"><img src=\"images/vegs/4.jpg\" alt=\"nonvegs\"/></a></li>";
					output += "<li><a href=\"javascript:void(0)\"><img src=\"images/drinks/4.jpg\" alt=\"nonvegs\"/></a></li>";
					output += "<li><a href=\"javascript:void(0)\"><img src=\"images/nonvegs/4.jpg\" alt=\"nonvegs\"/></a></li>";
				//}
				output += "</ul>";
				this.className = "activeTab";
			}
			document.getElementById('filterWrap').innerHTML = output;
			showPopup();
		}//click Ends
	}
	showPopup();
}

function showPopup(){
	var clickedImg = document.getElementById('imgGroup').getElementsByTagName('img');
	for(i = 0; i < clickedImg.length; i++){
		clickedImg[i].onclick = function(){
			var clickedImgSrc = this.src;
			//alert(clickedImgSrc);
			document.getElementById('popupImg').src = clickedImgSrc;
			document.getElementById('popupWrap').style.display = 'block';
			document.getElementById('overlayWrap').style.display = 'block';
		}
	}
}
document.getElementById('popupWrap').onclick = function(){
	this.style.display = 'none';
	document.getElementById('overlayWrap').style.display = 'none';
}
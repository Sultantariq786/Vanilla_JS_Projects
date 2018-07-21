/*JS for Gallery Change*/
	window.onload = gallerySelector;
	function gallerySelector(){
		var findTabs = document.getElementById('tabs').getElementsByTagName('li');
		var findGallery = ['firstGallery', 'secondGallery', 'thirdGallery', 'fourthGallery', 'fifthGallery'];
		for(i = 0; i < findTabs.length; i++){
			//findTabs[i].className = "";	
			findTabs[i].onclick = function(){
				var getTabId = this.id;
				document.getElementById('gallery1').className = "";
				document.getElementById('gallery2').className = "";
				document.getElementById('gallery3').className = "";
				document.getElementById('gallery4').className = "";
				document.getElementById('gallery5').className = "";
				this.className = 'tabActive';
				document.getElementById(findGallery[0]).style.display = "none";
				document.getElementById(findGallery[1]).style.display = "none";
				document.getElementById(findGallery[2]).style.display = "none";
				document.getElementById(findGallery[3]).style.display = "none";
				document.getElementById(findGallery[4]).style.display = "none";
				if(getTabId == 'gallery1'){
					document.getElementById(findGallery[0]).style.display = "block";
				}else if(getTabId == 'gallery2'){
					document.getElementById(findGallery[1]).style.display = 'block';
				}else if(getTabId == 'gallery3'){
					document.getElementById(findGallery[2]).style.display = 'block';
				}else if(getTabId == 'gallery4'){
					document.getElementById(findGallery[3]).style.display = 'block';
				}else if(getTabId == 'gallery5'){
					document.getElementById(findGallery[4]).style.display = 'block';
				}
			}
		}
	}

/*JS for Gallery Change Ends*/

/*==============================================================================
						JS for First Gallery Starts
===============================================================================*/

	function runGallery(){
		var imageNo = Math.floor(Math.random()*8);
		document.getElementById('galleryShow').src = "images/pic" + imageNo + ".jpg"; 
	}
	setInterval(runGallery, 3000);

/*==============================================================================
						JS for Second Gallery Starts
===============================================================================*/

	var i = 0;
	//var captionArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

	function nextFunc2(){
		i++;
		if(i > 7){
			i = 0;
		}
		document.getElementById('galleryShow2').src = "images/pic" + i + ".jpg";
		clearInterval(pause2);								// so that immidiately after next click setInterval gets refreshed to new 4 sec.
		pause2 = setInterval(nextFunc2, 4000);
	}
	document.getElementById('nextId2').onclick = nextFunc2;

	function prevFunc2(){
		i--;
		if(i < 0){
			i = 7;
		}
		document.getElementById('galleryShow2').src = "images/pic" + i + ".jpg";
		clearInterval(pause2);
		pause2 = setInterval(nextFunc2, 4000);
	}
	document.getElementById('prevId2').onclick = prevFunc2;

	var pause2 = setInterval(nextFunc2, 4000);
	document.getElementById('galleryShow2').onmouseover = function(){
		clearInterval(pause2);
	}

	document.getElementById('galleryShow2').onmouseout = function (){
		pause2 = setInterval(nextFunc2, 4000);
	}

/*==============================================================================
						JS for Third Gallery Starts
===============================================================================*/

	var allthumbs3 = document.getElementById('thumbId3').getElementsByTagName('img');
	function myFunc3(){		
		document.getElementById('galleryShow3').src = this.src;
		document.getElementById('captionId3').innerHTML = this.alt;
		for (var i = 0; i < allthumbs3.length; i++) {
			allthumbs3[i].className = "";
		}
		this.className = "activeThumb";
	}
	for (var i = 0; i < allthumbs3.length; i++) {
		allthumbs3[i].onclick = myFunc3;
	}

/*==============================================================================
						JS for Fourth Gallery Starts
===============================================================================*/
	var f = 0;
	//var captionArr = ['This is a Dummy text.', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
	function nextFunc4(){
		f++;
		if(f > 7){
			f = 0;
		}
		document.getElementById('galleryShow4').src = "images/pic" + f + ".jpg";
	//	document.getElementById('captionId4').innerHTML = captionArr[f];
		clearInterval(pause4);
		for (var a = 0; a < allthumbs4.length; a++) {
			allthumbs4[a].className = "";
		}
		allthumbs4[f].className = "activeThumb4";
	}
	document.getElementById('nextId4').onclick = nextFunc4;
		
	function prevFunc4(){
		f--;
		if(f < 0){
			f = 7;
		}
		document.getElementById('galleryShow4').src = "images/pic" + f + ".jpg";
	//	document.getElementById('captionId4').innerHTML = captionArr[f];
		clearInterval(pause4);
		for (var a = 0; a < allthumbs4.length; a++) {
			allthumbs4[a].className = "";
		}
		allthumbs4[f].className = "activeThumb4";
	}
	document.getElementById('prevId4').onclick = prevFunc4;
			
	var pause4 = setInterval(nextFunc4, 4000);
	document.getElementById('galleryShow4').onmouseover = function(){
		clearInterval(pause4);
	}
	document.getElementById('galleryShow4').onmouseout = function (){
		pause4 = setInterval(nextFunc4, 4000);
	}

	var allthumbs4 = document.getElementById('thumbId4').getElementsByTagName('img');
	function myFunc4(){		
		var getSrc = this.src;
		var getCPos = getSrc.lastIndexOf('c')+1;
		var getDotPos = getSrc.lastIndexOf('.');
		f = getSrc.substring(getCPos, getDotPos);
		//alert(f);
		document.getElementById('galleryShow4').src = getSrc;
		document.getElementById('captionId4').innerHTML = this.alt;
		for (var mm = 0; mm < allthumbs4.length; mm++) {
			allthumbs4[mm].className = "";
			allthumbs4[mm].onclick = myFunc4;
		}
		this.className = "activeThumb4";
		document.getElementById('nextId4').onclick = nextFunc4;
	}
	for (var mn = 0; mn < allthumbs4.length; mn++) {
		allthumbs4[mn].onclick = myFunc4;
	}

/*==============================================================================
						JS for Fifth Gallery Starts
===============================================================================*/
	var j = 0;
	var captionArr = ['This is a Dummy text.', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
	function nextFunc5(){
		j++;
		if(j > 9){
			j = 0;
		}
		document.getElementById('galleryShow5').src = "images/pic" + j + ".jpg";
		document.getElementById('captionId5').innerHTML = captionArr[j];
		clearInterval(pause5);
		for (var jj = 0; jj < allthumbs5.length; jj++) {
			allthumbs5[jj].className = "";
		}
		allthumbs5[j].className = "activeThumb4";
	}
	document.getElementById('nextId5').onclick = nextFunc5;
		
	function prevFunc5(){
		j--;
		if(j < 0){
			j = 9;
		}
		document.getElementById('galleryShow5').src = "images/pic" + j + ".jpg";
		document.getElementById('captionId5').innerHTML = captionArr[j];
		clearInterval(pause5);
		for (var jj = 0; jj < allthumbs5.length; jj++) {
			allthumbs5[jj].className = "";
		}
		allthumbs5[j].className = "activeThumb4";
	}
	document.getElementById('prevId5').onclick = prevFunc5;
			
	var pause5 = setInterval(nextFunc5, 4000);
	document.getElementById('galleryShow5').onmouseover = function(){
		clearInterval(pause5);
	}
	document.getElementById('galleryShow5').onmouseout = function (){
		pause5 = setInterval(nextFunc5, 4000);
	}

	var allthumbs5 = document.getElementById('thumbId5').getElementsByTagName('img');
	function myFunc5(){		
		var getSrc = this.src;
		var getCPos = getSrc.lastIndexOf('c')+1;
		var getDotPos = getSrc.lastIndexOf('.');
		j = getSrc.substring(getCPos, getDotPos);
		//alert(j);
		document.getElementById('galleryShow5').src = getSrc;
		document.getElementById('captionId5').innerHTML = this.alt;
		for (var jj = 0; jj < allthumbs5.length; jj++) {
			allthumbs5[jj].className = "";
			allthumbs5[jj].onclick = myFunc5;
		}
		this.className = "activeThumb4";
		document.getElementById('nextId5').onclick = nextFunc5;
	}
	for (var jn = 0; jn < allthumbs5.length; jn++) {
		allthumbs5[jn].onclick = myFunc5;
	}

/*JS for Thumbnail Scroll*/

	/*As per my Logic Static Code*/
	/*var innerDiv = document.getElementById('thumbInnerId');
	p = 0;
	function thumbPrev(){
		if(p < 0){
			p += 120;
		}else{
			p = 0;
		}
		innerDiv.style.left = p + "px";
		console.log(p);
	}

	function thumbNext(){
		if(p > -360){
			p -= 120;
		}
		else{
			p = -360;
		}
		innerDiv.style.left = p + "px";
		console.log(p);
	}

	document.getElementById('thumbPrevId').onclick = thumbPrev;
	document.getElementById('thumbNextId').onclick = thumbNext;
*/

	/*As per my Logic Dynamic Code*/
	var thumbWidth = 120;
	var visibleThumbs = 7;
	var hiddenThumbs = allthumbs5.length - visibleThumbs;
	var innerDiv = document.getElementById('thumbInnerId');
	var innerDivWdth = (allthumbs5.length - 1) * thumbWidth;
	var visibleThumbsWidth = thumbWidth * visibleThumbs;
	var hiddenThumbsWdth = thumbWidth * hiddenThumbs;
	var thumbPrevBttn = document.getElementById('thumbPrevId');
	var thumbNextBttn = document.getElementById('thumbNextId');
	//alert(innerDivWdth); // 1080
	//alert(hiddenThumbs); //3
	//alert(hiddenThumbsWdth); //360
	p = 0;
	function thumbPrev(){
		if(p < 0){
			p += thumbWidth;
			thumbPrevBttn.className = "thumbPrev";
			thumbNextBttn.className = "thumbNext";
		}else{
			thumbPrevBttn.className = "thumbPrev freezThumbScroll";
			p = 0;
		}
		innerDiv.style.left = p + "px";
		console.log(p);
	}

	function thumbNext(){
		if(p > -hiddenThumbsWdth){
			p -= thumbWidth;
			thumbPrevBttn.className = "thumbPrev";
			thumbNextBttn.className = "thumbNext";
		}
		else{
			thumbNextBttn.className = "thumbNext freezThumbScroll";
			p = -hiddenThumbsWdth;
		}
		innerDiv.style.left = p + "px";
		console.log(p);
	}

	document.getElementById('thumbPrevId').onclick = thumbPrev;
	document.getElementById('thumbNextId').onclick = thumbNext;



	/*As per given Logic Code*/

	/*var moveThumbs = 0;
	var visibleThumbs = 7;
	var thumbWidth = 121;
	var hiddenThumbs = allthumbs5.length-visibleThumbs;		
	var thumbsWrapperWidth = allthumbs5.length*thumbWidth;

	function scrollThumbsLeft(){
		moveThumbs += 121;
		hiddenThumbs++;
		if(hiddenThumbs > allthumbs5.length - visibleThumbs){
			hiddenThumbs = allthumbs5.length - visibleThumbs;
		}
		if(moveThumbs > 0){
			moveThumbs = 0;
		}
		document.getElementById('thumbInnerId').style.left = moveThumbs+"px";
	}

	function scrollThumbsRight(){
		moveThumbs -= 121;
		hiddenThumbs--;
		if( hiddenThumbs < 1 ){
			moveThumbs = -242;
			hiddenThumbs = 0;			
		}
		document.getElementById('thumbInnerId').style.left = moveThumbs+"px";
		//alert(hiddenThumbs);
	}

	document.getElementById('thumbPrevId').onclick = scrollThumbsLeft;
	document.getElementById('thumbNextId').onclick = scrollThumbsRight;*/
	
/*JS for Thumbnail Scroll*/

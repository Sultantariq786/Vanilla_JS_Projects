
	/*Board Color Changer*/

	document.getElementById('blackBoard').onclick = function(){
		document.getElementById('board').style.backgroundColor = "#212121";
	}

	document.getElementById('greenBoard').onclick = function(){
		document.getElementById('board').style.backgroundColor = "#1A522E";
	}

	/*Level Tab Changer*/

		window.onload = levelChanger();
		function levelChanger(){
		var allLevels = document.getElementById('levelTabsWrap').getElementsByTagName('li');
		var x = document.getElementById('selectedChar');
		var y = document.getElementById('selectedImg');
		for(i = 0; i < allLevels.length; i++){
			allLevels[i].onclick = function(){
				var levelId = this.id;
				for(j = 0; j < allLevels.length; j++){
					allLevels[j].className = "";
				}
				document.getElementById('levelFirst').style.display = "none";
				document.getElementById('levelSecond').style.display = "none";
				document.getElementById('levelThird').style.display = "none";
				document.getElementById('levelFourth').style.display = "none";
				document.getElementById('levelFifth').style.display = "none";
				this.className = "activeLevel";
				if(levelId == 'level1'){
					document.getElementById('levelFirst').style.display = "block";
					x.innerHTML = "";
					y.innerHTML = "";
					x.style.backgroundColor = "#212121";
					x.className = "selectedBox";
				}else if(levelId == 'level2'){
					document.getElementById('levelSecond').style.display = "block";
					x.innerHTML = "";
					y.innerHTML = "";
					x.style.backgroundColor = "#212121";
					x.className = "selectedBox";
					document.getElementById('forId').innerHTML = "=";
				}else if(levelId == 'level3'){
					colorMatch();
					document.getElementById('levelThird').style.display = "block";
					x.innerHTML = "";
					y.innerHTML = "";
					x.className = "selectedBox txtFit";
					document.getElementById('forId').innerHTML = "=";
					document.getElementById('forId').className = "for forFit";
				}else if(levelId == 'level4'){
					alphabetMatch();
					document.getElementById('levelFourth').style.display = "block";
					y.innerHTML = "";
					x.style.backgroundColor = "#212121";
				}else if(levelId == 'level5'){
					numberMatch();
					document.getElementById('levelFifth').style.display = "block";
					y.innerHTML = "";
					x.style.backgroundColor = "#212121";
				}
			}
		}
	}	


	function selector(charecter){
		var x = document.getElementById('selectedChar');
		var y = document.getElementById('selectedImg');
		var z = document.getElementById('soundsWrapperId');
		if(charecter == 'a'){
			x.innerHTML = "A";
			y.innerHTML="<img src='images/alphabetsImg/a.jpg' />";
			z.innerHTML="<audio controls autoplay><source src=\"sounds/a.mp3\" type=\"audio/mpeg\"></audio>";
		}else if(charecter == 'b'){
			x.innerHTML = "B";
			y.innerHTML="<img src='images/alphabetsImg/b.jpg' />";
			z.innerHTML="<audio controls autoplay><source src=\"sounds/b.mp3\" type=\"audio/mpeg\"></audio>";
		}else if(charecter == 'c'){
			x.innerHTML = "C";
			y.innerHTML="<img src='images/alphabetsImg/c.jpg' />";
			z.innerHTML="<audio controls autoplay><source src=\"sounds/c.mp3\" type=\"audio/mpeg\"></audio>";
		}else if(charecter == 'd'){
			x.innerHTML = "D";
			y.innerHTML="<img src='images/alphabetsImg/d.jpg' />";
			z.innerHTML="<audio controls autoplay><source src=\"sounds/d.mp3\" type=\"audio/mpeg\"></audio>";
		}else if(charecter == 'e'){
			x.innerHTML = "E";
			y.innerHTML="<img src='images/alphabetsImg/e.jpg' />";
			z.innerHTML="<audio controls autoplay><source src=\"sounds/e.mp3\" type=\"audio/mpeg\"></audio>";
		}else if(charecter == 'f'){
			x.innerHTML = "F";
			y.innerHTML="<img src='images/alphabetsImg/f.jpg' />";
			z.innerHTML="<audio controls autoplay><source src=\"sounds/f.mp3\" type=\"audio/mpeg\"></audio>";
		}else if(charecter == 'g'){
			x.innerHTML = "G";
			y.innerHTML="<img src='images/alphabetsImg/g.jpg' />";
			z.innerHTML="<audio controls autoplay><source src=\"sounds/g.mp3\" type=\"audio/mpeg\"></audio>";
		}else if(charecter == 'h'){
			x.innerHTML = "H";
			y.innerHTML="<img src='images/alphabetsImg/h.jpg' />";
			z.innerHTML="<audio controls autoplay><source src=\"sounds/h.mp3\" type=\"audio/mpeg\"></audio>";
		}else if(charecter == 'i'){
			x.innerHTML = "I";
			y.innerHTML="<img src='images/alphabetsImg/i.jpg' />";
			z.innerHTML="<audio controls autoplay><source src=\"sounds/i.mp3\" type=\"audio/mpeg\"></audio>";
		}else if(charecter == 'j'){
			x.innerHTML = "J";
			y.innerHTML="<img src='images/alphabetsImg/j.jpg' />";
			z.innerHTML="<audio controls autoplay><source src=\"sounds/j.mp3\" type=\"audio/mpeg\"></audio>";
		}else if(charecter == 'k'){
			x.innerHTML = "K";
			y.innerHTML="<img src='images/alphabetsImg/k.jpg' />";
			z.innerHTML="<audio controls autoplay><source src=\"sounds/k.mp3\" type=\"audio/mpeg\"></audio>";
		}else if(charecter == 'l'){
			x.innerHTML = "L";
			y.innerHTML="<img src='images/alphabetsImg/l.jpg' />";
			z.innerHTML="<audio controls autoplay><source src=\"sounds/l.mp3\" type=\"audio/mpeg\"></audio>";
		}else if(charecter == 'm'){
			x.innerHTML = "M";
			y.innerHTML="<img src='images/alphabetsImg/m.jpg' />";
			z.innerHTML="<audio controls autoplay><source src=\"sounds/m.mp3\" type=\"audio/mpeg\"></audio>";
		}else if(charecter == 'n'){
			x.innerHTML = "N";
			y.innerHTML="<img src='images/alphabetsImg/n.jpg' />";
			z.innerHTML="<audio controls autoplay><source src=\"sounds/n.mp3\" type=\"audio/mpeg\"></audio>";
		}else if(charecter == 'o'){
			x.innerHTML = "O";
			y.innerHTML="<img src='images/alphabetsImg/o.jpg' />";
			z.innerHTML="<audio controls autoplay><source src=\"sounds/o.mp3\" type=\"audio/mpeg\"></audio>";
		}else if(charecter == 'p'){
			x.innerHTML = "P";
			y.innerHTML="<img src='images/alphabetsImg/p.jpg' />";
			z.innerHTML="<audio controls autoplay><source src=\"sounds/p.mp3\" type=\"audio/mpeg\"></audio>";
		}else if(charecter == 'q'){
			x.innerHTML = "Q";
			y.innerHTML="<img src='images/alphabetsImg/q.jpg' />";
			z.innerHTML="<audio controls autoplay><source src=\"sounds/q.mp3\" type=\"audio/mpeg\"></audio>";
		}else if(charecter == 'r'){
			x.innerHTML = "R";
			y.innerHTML="<img src='images/alphabetsImg/r.jpg' />";
			z.innerHTML="<audio controls autoplay><source src=\"sounds/r.mp3\" type=\"audio/mpeg\"></audio>";
		}else if(charecter == 's'){
			x.innerHTML = "S";
			y.innerHTML="<img src='images/alphabetsImg/s.jpg' />";
			z.innerHTML="<audio controls autoplay><source src=\"sounds/s.mp3\" type=\"audio/mpeg\"></audio>";
		}else if(charecter == 't'){
			x.innerHTML = "T";
			y.innerHTML="<img src='images/alphabetsImg/t.jpg' />";
			z.innerHTML="<audio controls autoplay><source src=\"sounds/t.mp3\" type=\"audio/mpeg\"></audio>";
		}else if(charecter == 'u'){
			x.innerHTML = "U";
			y.innerHTML="<img src='images/alphabetsImg/u.jpg' />";
			z.innerHTML="<audio controls autoplay><source src=\"sounds/u.mp3\" type=\"audio/mpeg\"></audio>";
		}else if(charecter == 'v'){
			x.innerHTML = "V";
			y.innerHTML="<img src='images/alphabetsImg/v.jpg' />";
			z.innerHTML="<audio controls autoplay><source src=\"sounds/v.mp3\" type=\"audio/mpeg\"></audio>";
		}else if(charecter == 'w'){
			x.innerHTML = "W";
			y.innerHTML="<img src='images/alphabetsImg/w.jpg' />";
			z.innerHTML="<audio controls autoplay><source src=\"sounds/w.mp3\" type=\"audio/mpeg\"></audio>";
		}else if(charecter == 'x'){
			x.innerHTML = "X";
			y.innerHTML="<img src='images/alphabetsImg/x.jpg' />";
			z.innerHTML="<audio controls autoplay><source src=\"sounds/x.mp3\" type=\"audio/mpeg\"></audio>";
		}else if(charecter == 'y'){
			x.innerHTML = "Y";
			y.innerHTML="<img src='images/alphabetsImg/y.jpg' />";
			z.innerHTML="<audio controls autoplay><source src=\"sounds/y.mp3\" type=\"audio/mpeg\"></audio>";
		}else if(charecter == 'z'){
			x.innerHTML = "Z";
			y.innerHTML="<img src='images/alphabetsImg/z.jpg' />";
			z.innerHTML="<audio controls autoplay><source src=\"sounds/z.mp3\" type=\"audio/mpeg\"></audio>";
		}else if(charecter == 'no1'){
			x.innerHTML = "1";
			y.innerHTML="<img src='images/alphabetsImg/1.jpg' />";
			z.innerHTML="<audio controls autoplay><source src=\"sounds/1.mp3\" type=\"audio/mpeg\"></audio>";
		}else if(charecter == 'no2'){
			x.innerHTML = "2";
			y.innerHTML="<img src='images/alphabetsImg/2.jpg' />";
			z.innerHTML="<audio controls autoplay><source src=\"sounds/2.mp3\" type=\"audio/mpeg\"></audio>";
		}else if(charecter == 'no3'){
			x.innerHTML = "3";
			y.innerHTML="<img src='images/alphabetsImg/3.jpg' />";
			z.innerHTML="<audio controls autoplay><source src=\"sounds/3.mp3\" type=\"audio/mpeg\"></audio>";
		}else if(charecter == 'no4'){
			x.innerHTML = "4";
			y.innerHTML="<img src='images/alphabetsImg/4.jpg' />";
			z.innerHTML="<audio controls autoplay><source src=\"sounds/4.mp3\" type=\"audio/mpeg\"></audio>";
		}else if(charecter == 'no5'){
			x.innerHTML = "5";
			y.innerHTML="<img src='images/alphabetsImg/5.jpg' />";
			z.innerHTML="<audio controls autoplay><source src=\"sounds/5.mp3\" type=\"audio/mpeg\"></audio>";
		}else if(charecter == 'no6'){
			x.innerHTML = "6";
			y.innerHTML="<img src='images/alphabetsImg/6.jpg' />";
			z.innerHTML="<audio controls autoplay><source src=\"sounds/6.mp3\" type=\"audio/mpeg\"></audio>";
		}else if(charecter == 'no7'){
			x.innerHTML = "7";
			y.innerHTML="<img src='images/alphabetsImg/7.jpg' />";
			z.innerHTML="<audio controls autoplay><source src=\"sounds/7.mp3\" type=\"audio/mpeg\"></audio>";
		}else if(charecter == 'no8'){
			x.innerHTML = "8";
			y.innerHTML="<img src='images/alphabetsImg/8.jpg' />";
			z.innerHTML="<audio controls autoplay><source src=\"sounds/8.mp3\" type=\"audio/mpeg\"></audio>";
		}else if(charecter == 'no9'){
			x.innerHTML = "9";
			y.innerHTML="<img src='images/alphabetsImg/9.jpg' />";
			z.innerHTML="<audio controls autoplay><source src=\"sounds/9.mp3\" type=\"audio/mpeg\"></audio>";
		}else if(charecter == 'no10'){
			x.innerHTML = "10";
			y.innerHTML="<img src='images/alphabetsImg/10.jpg' />";
			z.innerHTML="<audio controls autoplay><source src=\"sounds/10.mp3\" type=\"audio/mpeg\"></audio>";
		}
	}

	var button = document.getElementById('topContainerId').getElementsByTagName('span');
	for(i = 0; i < button.length; i++){
		//alert(button[i].id);
		button[i].onclick = function(){
			selector(this.id);	
		} 
	}  // Short Code to write the Below Code :
	
	//document.getElementById('a').onclick = function (){ selector(this.id); /*document.getElementById('a').addClass('active');*/ }
	//document.getElementById('b').onclick = function (){ selector(this.id); }
	//document.getElementById('c').onclick = function (){ selector(this.id); }   // this.id or document.getElementById('c').id both are same here as both means same.
	/*document.getElementById('d').onclick = function (){ selector(this.id); }
	document.getElementById('e').onclick = function (){ selector(this.id); }
	document.getElementById('f').onclick = function (){ selector(this.id); }
	document.getElementById('g').onclick = function (){ selector(this.id); }
	document.getElementById('h').onclick = function (){ selector(this.id); }
	document.getElementById('i').onclick = function (){ selector(this.id); }
	document.getElementById('j').onclick = function (){ selector(this.id); }
	document.getElementById('k').onclick = function (){ selector(this.id); }
	document.getElementById('l').onclick = function (){ selector(this.id); }
	document.getElementById('m').onclick = function (){ selector(this.id); }
	document.getElementById('n').onclick = function (){ selector(this.id); }
	document.getElementById('o').onclick = function (){ selector(this.id); }
	document.getElementById('p').onclick = function (){ selector(this.id); }
	document.getElementById('q').onclick = function (){ selector(this.id); }
	document.getElementById('r').onclick = function (){ selector(this.id); }
	document.getElementById('s').onclick = function (){ selector(this.id); }
	document.getElementById('t').onclick = function (){ selector(this.id); }
	document.getElementById('u').onclick = function (){ selector(this.id); }
	document.getElementById('v').onclick = function (){ selector(this.id); }
	document.getElementById('w').onclick = function (){ selector(this.id); }
	document.getElementById('x').onclick = function (){ selector(this.id); }
	document.getElementById('y').onclick = function (){ selector(this.id); }
	document.getElementById('z').onclick = function (){ selector(this.id); }*/
	document.getElementById('no1').onclick = function (){ selector(this.id); }
	document.getElementById('no2').onclick = function (){ selector(this.id); }
	document.getElementById('no3').onclick = function (){ selector(this.id); }
	document.getElementById('no4').onclick = function (){ selector(this.id); }
	document.getElementById('no5').onclick = function (){ selector(this.id); }
	document.getElementById('no6').onclick = function (){ selector(this.id); }
	document.getElementById('no7').onclick = function (){ selector(this.id); }
	document.getElementById('no8').onclick = function (){ selector(this.id); }
	document.getElementById('no9').onclick = function (){ selector(this.id); }
	document.getElementById('no10').onclick = function (){ selector(this.id); }
	
	var parent = document.getElementById('topContainerId');
	var charCase =document.getElementById('selectedChar');
	document.getElementById('caps').onclick = function(){
		parent.className = "topContainer";
		charCase.className = 'selectedBox';
		this.className += ' activeClass';
		document.getElementById('small').className = 'small';
	}

	document.getElementById('small').onclick = function(){
		parent.className += " allSmall";
		charCase.className += ' allSmall';
		this.className += ' activeClass';
		document.getElementById('caps').className = 'caps';
	}

	window.onload = themeChanger();
	function themeChanger(){
		var themesTab = document.getElementById('themesTab').getElementsByTagName('li');
				for(i = 0; i < themesTab.length; i++){
					themesTab[i].onclick = function(){
					var themeId = this.id;
					/*document.getElementById('theme1').className = "";
					document.getElementById('theme2').className = "";
					document.getElementById('theme3').className = "";*/              /*Both ways r same but below one is dynamic*/
					for(j = 0; j < themesTab.length; j++){
						themesTab[j].className = "";
					}
					this.className = "activeTheme";
				if(themeId == 'theme1'){
					document.getElementById('bodyBackground').className = "themeOne";	
				}else if(themeId == 'theme2'){
					document.getElementById('bodyBackground').className = "themeTwo";
				}else if(themeId == 'theme3'){
					document.getElementById('bodyBackground').className = "themeThree";
				}	
			}
		}
	}

	/*Js for Color Level 3*/

	function colorMatch(){
		var randomColor = Math.floor(Math.random()*10);
		var colors = ['red', 'green', 'yellow', 'blue', 'brown', 'black', 'purple', 'orange', 'white', 'pink'];
		var selectedColor = colors[randomColor];
		var imageSrc = document.getElementById('selectedImg');
		var colorText = document.getElementById('selectedChar');
		colorText.style.backgroundColor = selectedColor;

		function refresh(){
			imageSrc.innerHTML = "";
			colorText.innerHTML = "";
			colorMatch();
		}

		document.getElementById('red').onclick = function(){
		colorClick = this.id;
			if(colorClick == selectedColor){
				imageSrc.innerHTML="<img src='images/alphabetsImg/right.jpg' />";
				colorText.innerHTML = "Red";
				setTimeout(refresh, 2000);
			}else{
				imageSrc.innerHTML="<img src='images/alphabetsImg/wrong.jpg' />";
			}
		}

		document.getElementById('green').onclick = function(){
		colorClick = this.id;
			if(colorClick == selectedColor){
				imageSrc.innerHTML="<img src='images/alphabetsImg/right.jpg' />";
				colorText.innerHTML = "Green";
				setTimeout(refresh, 2000);
			}else{
				imageSrc.innerHTML="<img src='images/alphabetsImg/wrong.jpg' />";
			}
		}

		document.getElementById('yellow').onclick = function(){
		colorClick = this.id;
			if(colorClick == selectedColor){
				imageSrc.innerHTML="<img src='images/alphabetsImg/right.jpg' />";
				colorText.innerHTML = "Yellow";
				setTimeout(refresh, 2000);
			}else{
				imageSrc.innerHTML="<img src='images/alphabetsImg/wrong.jpg' />";
			}
		}

		document.getElementById('blue').onclick = function(){
		colorClick = this.id;
			if(colorClick == selectedColor){
				imageSrc.innerHTML="<img src='images/alphabetsImg/right.jpg' />";
				colorText.innerHTML = "Blue";
				setTimeout(refresh, 2000);
			}else{
				imageSrc.innerHTML="<img src='images/alphabetsImg/wrong.jpg' />";
			}
		}

		document.getElementById('brown').onclick = function(){
		colorClick = this.id;
			if(colorClick == selectedColor){
				imageSrc.innerHTML="<img src='images/alphabetsImg/right.jpg' />";
				colorText.innerHTML = "Brown";
				setTimeout(refresh, 2000);
			}else{
				imageSrc.innerHTML="<img src='images/alphabetsImg/wrong.jpg' />";
			}
		}

		document.getElementById('black').onclick = function(){
		colorClick = this.id;
			if(colorClick == selectedColor){
				imageSrc.innerHTML="<img src='images/alphabetsImg/right.jpg' />";
				colorText.innerHTML = "Black";
				setTimeout(refresh, 2000);
			}else{
				imageSrc.innerHTML="<img src='images/alphabetsImg/wrong.jpg' />";
			}
		}

		document.getElementById('purple').onclick = function(){
		colorClick = this.id;
			if(colorClick == selectedColor){
				imageSrc.innerHTML="<img src='images/alphabetsImg/right.jpg' />";
				colorText.innerHTML = "Purple";
				setTimeout(refresh, 2000);
			}else{
				imageSrc.innerHTML="<img src='images/alphabetsImg/wrong.jpg' />";
			}
		}

		document.getElementById('orange').onclick = function(){
		colorClick = this.id;
			if(colorClick == selectedColor){
				imageSrc.innerHTML="<img src='images/alphabetsImg/right.jpg' />";
				colorText.innerHTML = "Orange";
				setTimeout(refresh, 2000);
			}else{
				imageSrc.innerHTML="<img src='images/alphabetsImg/wrong.jpg' />";
			}
		}

		document.getElementById('white').onclick = function(){
		colorClick = this.id;
			if(colorClick == selectedColor){
				imageSrc.innerHTML="<img src='images/alphabetsImg/right.jpg' />";
				colorText.innerHTML = "White";
				setTimeout(refresh, 2000);
			}else{
				imageSrc.innerHTML="<img src='images/alphabetsImg/wrong.jpg' />";
			}
		}

		document.getElementById('pink').onclick = function(){
		colorClick = this.id;
			if(colorClick == selectedColor){
				imageSrc.innerHTML="<img src='images/alphabetsImg/right.jpg' />";
				colorText.innerHTML = "Pink";
				setTimeout(refresh, 2000);
			}else{
				imageSrc.innerHTML="<img src='images/alphabetsImg/wrong.jpg' />";
			}
		}
	}

	/*JS for Level 4*/

	function alphabetMatch(){
		var randomAlphabets = Math.floor(Math.random()*24);
		var alphaImages = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
		var selectedAlpha = alphaImages[randomAlphabets];
		var firstBox = document.getElementById('selectedChar');
		var secondBox = document.getElementById('selectedImg');
		firstBox.innerHTML="<img src='images/alphabetsImg/" + selectedAlpha + ".jpg' />"

		function refresh(){
			//firstBox.innerHTML = "";
			secondBox.innerHTML = "";
			alphabetMatch();
		}

		document.getElementById('aa').onclick = function(){
		alphaClick = this.id;
		pickAlpha = alphaClick.charAt(alphaClick.length - 1);
			if(pickAlpha == selectedAlpha){
				secondBox.innerHTML="<img src='images/alphabetsImg/right.jpg' />";
				setTimeout(refresh, 2000);
			}else{
				secondBox.innerHTML="<img src='images/alphabetsImg/wrong.jpg' />";
			}
		}

		document.getElementById('bb').onclick = function(){
		alphaClick = this.id;
		pickAlpha = alphaClick.charAt(alphaClick.length - 1);
			if(pickAlpha == selectedAlpha){
				secondBox.innerHTML="<img src='images/alphabetsImg/right.jpg' />";
				setTimeout(refresh, 2000);
			}else{
				secondBox.innerHTML="<img src='images/alphabetsImg/wrong.jpg' />";
			}
		}

		document.getElementById('cc').onclick = function(){
		alphaClick = this.id;
		pickAlpha = alphaClick.charAt(alphaClick.length - 1);
			if(pickAlpha == selectedAlpha){
				secondBox.innerHTML="<img src='images/alphabetsImg/right.jpg' />";
				setTimeout(refresh, 2000);
			}else{
				secondBox.innerHTML="<img src='images/alphabetsImg/wrong.jpg' />";
			}
		}

		document.getElementById('dd').onclick = function(){
		alphaClick = this.id;
		pickAlpha = alphaClick.charAt(alphaClick.length - 1);
			if(pickAlpha == selectedAlpha){
				secondBox.innerHTML="<img src='images/alphabetsImg/right.jpg' />";
				setTimeout(refresh, 2000);
			}else{
				secondBox.innerHTML="<img src='images/alphabetsImg/wrong.jpg' />";
			}
		}

		document.getElementById('ee').onclick = function(){
		alphaClick = this.id;
		pickAlpha = alphaClick.charAt(alphaClick.length - 1);
			if(pickAlpha == selectedAlpha){
				secondBox.innerHTML="<img src='images/alphabetsImg/right.jpg' />";
				setTimeout(refresh, 2000);
			}else{
				secondBox.innerHTML="<img src='images/alphabetsImg/wrong.jpg' />";
			}
		}

		document.getElementById('ff').onclick = function(){
		alphaClick = this.id;
		pickAlpha = alphaClick.charAt(alphaClick.length - 1);
			if(pickAlpha == selectedAlpha){
				secondBox.innerHTML="<img src='images/alphabetsImg/right.jpg' />";
				setTimeout(refresh, 2000);
			}else{
				secondBox.innerHTML="<img src='images/alphabetsImg/wrong.jpg' />";
			}
		}

		document.getElementById('gg').onclick = function(){
		alphaClick = this.id;
		pickAlpha = alphaClick.charAt(alphaClick.length - 1);
			if(pickAlpha == selectedAlpha){
				secondBox.innerHTML="<img src='images/alphabetsImg/right.jpg' />";
				setTimeout(refresh, 2000);
			}else{
				secondBox.innerHTML="<img src='images/alphabetsImg/wrong.jpg' />";
			}
		}

		document.getElementById('hh').onclick = function(){
		alphaClick = this.id;
		pickAlpha = alphaClick.charAt(alphaClick.length - 1);
			if(pickAlpha == selectedAlpha){
				secondBox.innerHTML="<img src='images/alphabetsImg/right.jpg' />";
				setTimeout(refresh, 2000);
			}else{
				secondBox.innerHTML="<img src='images/alphabetsImg/wrong.jpg' />";
			}
		}

		document.getElementById('ii').onclick = function(){
		alphaClick = this.id;
		pickAlpha = alphaClick.charAt(alphaClick.length - 1);
			if(pickAlpha == selectedAlpha){
				secondBox.innerHTML="<img src='images/alphabetsImg/right.jpg' />";
				setTimeout(refresh, 2000);
			}else{
				secondBox.innerHTML="<img src='images/alphabetsImg/wrong.jpg' />";
			}
		}

		document.getElementById('jj').onclick = function(){
		alphaClick = this.id;
		pickAlpha = alphaClick.charAt(alphaClick.length - 1);
			if(pickAlpha == selectedAlpha){
				secondBox.innerHTML="<img src='images/alphabetsImg/right.jpg' />";
				setTimeout(refresh, 2000);
			}else{
				secondBox.innerHTML="<img src='images/alphabetsImg/wrong.jpg' />";
			}
		}

		document.getElementById('kk').onclick = function(){
		alphaClick = this.id;
		pickAlpha = alphaClick.charAt(alphaClick.length - 1);
			if(pickAlpha == selectedAlpha){
				secondBox.innerHTML="<img src='images/alphabetsImg/right.jpg' />";
				setTimeout(refresh, 2000);
			}else{
				secondBox.innerHTML="<img src='images/alphabetsImg/wrong.jpg' />";
			}
		}

		document.getElementById('ll').onclick = function(){
		alphaClick = this.id;
		pickAlpha = alphaClick.charAt(alphaClick.length - 1);
			if(pickAlpha == selectedAlpha){
				secondBox.innerHTML="<img src='images/alphabetsImg/right.jpg' />";
				setTimeout(refresh, 2000);
			}else{
				secondBox.innerHTML="<img src='images/alphabetsImg/wrong.jpg' />";
			}
		}

		document.getElementById('mm').onclick = function(){
		alphaClick = this.id;
		pickAlpha = alphaClick.charAt(alphaClick.length - 1);
			if(pickAlpha == selectedAlpha){
				secondBox.innerHTML="<img src='images/alphabetsImg/right.jpg' />";
				setTimeout(refresh, 2000);
			}else{
				secondBox.innerHTML="<img src='images/alphabetsImg/wrong.jpg' />";
			}
		}

		document.getElementById('nn').onclick = function(){
		alphaClick = this.id;
		pickAlpha = alphaClick.charAt(alphaClick.length - 1);
			if(pickAlpha == selectedAlpha){
				secondBox.innerHTML="<img src='images/alphabetsImg/right.jpg' />";
				setTimeout(refresh, 2000);
			}else{
				secondBox.innerHTML="<img src='images/alphabetsImg/wrong.jpg' />";
			}
		}

		document.getElementById('oo').onclick = function(){
		alphaClick = this.id;
		pickAlpha = alphaClick.charAt(alphaClick.length - 1);
			if(pickAlpha == selectedAlpha){
				secondBox.innerHTML="<img src='images/alphabetsImg/right.jpg' />";
				setTimeout(refresh, 2000);
			}else{
				secondBox.innerHTML="<img src='images/alphabetsImg/wrong.jpg' />";
			}
		}

		document.getElementById('pp').onclick = function(){
		alphaClick = this.id;
		pickAlpha = alphaClick.charAt(alphaClick.length - 1);
			if(pickAlpha == selectedAlpha){
				secondBox.innerHTML="<img src='images/alphabetsImg/right.jpg' />";
				setTimeout(refresh, 2000);
			}else{
				secondBox.innerHTML="<img src='images/alphabetsImg/wrong.jpg' />";
			}
		}

		document.getElementById('qq').onclick = function(){
		alphaClick = this.id;
		pickAlpha = alphaClick.charAt(alphaClick.length - 1);
			if(pickAlpha == selectedAlpha){
				secondBox.innerHTML="<img src='images/alphabetsImg/right.jpg' />";
				setTimeout(refresh, 2000);
			}else{
				secondBox.innerHTML="<img src='images/alphabetsImg/wrong.jpg' />";
			}
		}

		document.getElementById('rr').onclick = function(){
		alphaClick = this.id;
		pickAlpha = alphaClick.charAt(alphaClick.length - 1);
			if(pickAlpha == selectedAlpha){
				secondBox.innerHTML="<img src='images/alphabetsImg/right.jpg' />";
				setTimeout(refresh, 2000);
			}else{
				secondBox.innerHTML="<img src='images/alphabetsImg/wrong.jpg' />";
			}
		}

		document.getElementById('ss').onclick = function(){
		alphaClick = this.id;
		pickAlpha = alphaClick.charAt(alphaClick.length - 1);
			if(pickAlpha == selectedAlpha){
				secondBox.innerHTML="<img src='images/alphabetsImg/right.jpg' />";
				setTimeout(refresh, 2000);
			}else{
				secondBox.innerHTML="<img src='images/alphabetsImg/wrong.jpg' />";
			}
		}

		document.getElementById('tt').onclick = function(){
		alphaClick = this.id;
		pickAlpha = alphaClick.charAt(alphaClick.length - 1);
			if(pickAlpha == selectedAlpha){
				secondBox.innerHTML="<img src='images/alphabetsImg/right.jpg' />";
				setTimeout(refresh, 2000);
			}else{
				secondBox.innerHTML="<img src='images/alphabetsImg/wrong.jpg' />";
			}
		}

		document.getElementById('uu').onclick = function(){
		alphaClick = this.id;
		pickAlpha = alphaClick.charAt(alphaClick.length - 1);
			if(pickAlpha == selectedAlpha){
				secondBox.innerHTML="<img src='images/alphabetsImg/right.jpg' />";
				setTimeout(refresh, 2000);
			}else{
				secondBox.innerHTML="<img src='images/alphabetsImg/wrong.jpg' />";
			}
		}

		document.getElementById('vv').onclick = function(){
		alphaClick = this.id;
		pickAlpha = alphaClick.charAt(alphaClick.length - 1);
			if(pickAlpha == selectedAlpha){
				secondBox.innerHTML="<img src='images/alphabetsImg/right.jpg' />";
				setTimeout(refresh, 2000);
			}else{
				secondBox.innerHTML="<img src='images/alphabetsImg/wrong.jpg' />";
			}
		}

		document.getElementById('ww').onclick = function(){
		alphaClick = this.id;
		pickAlpha = alphaClick.charAt(alphaClick.length - 1);
			if(pickAlpha == selectedAlpha){
				secondBox.innerHTML="<img src='images/alphabetsImg/right.jpg' />";
				setTimeout(refresh, 2000);
			}else{
				secondBox.innerHTML="<img src='images/alphabetsImg/wrong.jpg' />";
			}
		}

		document.getElementById('xx').onclick = function(){
		alphaClick = this.id;
		pickAlpha = alphaClick.charAt(alphaClick.length - 1);
			if(pickAlpha == selectedAlpha){
				secondBox.innerHTML="<img src='images/alphabetsImg/right.jpg' />";
				setTimeout(refresh, 2000);
			}else{
				secondBox.innerHTML="<img src='images/alphabetsImg/wrong.jpg' />";
			}
		}

		document.getElementById('yy').onclick = function(){
		alphaClick = this.id;
		pickAlpha = alphaClick.charAt(alphaClick.length - 1);
			if(pickAlpha == selectedAlpha){
				secondBox.innerHTML="<img src='images/alphabetsImg/right.jpg' />";
				setTimeout(refresh, 2000);
			}else{
				secondBox.innerHTML="<img src='images/alphabetsImg/wrong.jpg' />";
			}
		}

		document.getElementById('zz').onclick = function(){
		alphaClick = this.id;
		pickAlpha = alphaClick.charAt(alphaClick.length - 1);
			if(pickAlpha == selectedAlpha){
				secondBox.innerHTML="<img src='images/alphabetsImg/right.jpg' />";
				setTimeout(refresh, 2000);
			}else{
				secondBox.innerHTML="<img src='images/alphabetsImg/wrong.jpg' />";
			}
		}
	}


/*JS for Level 5*/

	function numberMatch(){
		var randomAlphabets = Math.floor(Math.random()*10);
		var numberImages = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
		var selectedAlpha = numberImages[randomAlphabets];
		var firstBox = document.getElementById('selectedChar');
		var secondBox = document.getElementById('selectedImg');
		var audio = document.getElementById('soundsWrapperId');
		//alert(selectedAlpha);
		firstBox.innerHTML="<img src='images/alphabetsImg/" + selectedAlpha + ".jpg' />";

		function refresh(){
			//firstBox.innerHTML = "";
			secondBox.innerHTML = "";
			numberMatch();
		}

		document.getElementById('one1').onclick = function(){
		alphaClick = this.id;
		pickAlpha = alphaClick.charAt(alphaClick.length - 1);
			if(pickAlpha == selectedAlpha){
				secondBox.innerHTML="<img src='images/alphabetsImg/right.jpg' />";
				audio.innerHTML="<audio controls autoplay><source src=\"sounds/1.mp3\" type=\"audio/mpeg\"></audio>";
				setTimeout(refresh, 2000);
			}else{
				secondBox.innerHTML="<img src='images/alphabetsImg/wrong.jpg' />";
			}
		}

		document.getElementById('two2').onclick = function(){
		alphaClick = this.id;
		pickAlpha = alphaClick.charAt(alphaClick.length - 1);
			if(pickAlpha == selectedAlpha){
				secondBox.innerHTML="<img src='images/alphabetsImg/right.jpg' />";
				audio.innerHTML="<audio controls autoplay><source src=\"sounds/2.mp3\" type=\"audio/mpeg\"></audio>";
				setTimeout(refresh, 2000);
			}else{
				secondBox.innerHTML="<img src='images/alphabetsImg/wrong.jpg' />";
			}
		}

		document.getElementById('three3').onclick = function(){
		alphaClick = this.id;
		pickAlpha = alphaClick.charAt(alphaClick.length - 1);
			if(pickAlpha == selectedAlpha){
				secondBox.innerHTML="<img src='images/alphabetsImg/right.jpg' />";
				audio.innerHTML="<audio controls autoplay><source src=\"sounds/3.mp3\" type=\"audio/mpeg\"></audio>";
				setTimeout(refresh, 2000);
			}else{
				secondBox.innerHTML="<img src='images/alphabetsImg/wrong.jpg' />";
			}
		}

		document.getElementById('four4').onclick = function(){
		alphaClick = this.id;
		pickAlpha = alphaClick.charAt(alphaClick.length - 1);
			if(pickAlpha == selectedAlpha){
				secondBox.innerHTML="<img src='images/alphabetsImg/right.jpg' />";
				audio.innerHTML="<audio controls autoplay><source src=\"sounds/4.mp3\" type=\"audio/mpeg\"></audio>";
				setTimeout(refresh, 2000);
			}else{
				secondBox.innerHTML="<img src='images/alphabetsImg/wrong.jpg' />";
			}
		}

		document.getElementById('five5').onclick = function(){
		alphaClick = this.id;
		pickAlpha = alphaClick.charAt(alphaClick.length - 1);
			if(pickAlpha == selectedAlpha){
				secondBox.innerHTML="<img src='images/alphabetsImg/right.jpg' />";
				audio.innerHTML="<audio controls autoplay><source src=\"sounds/5.mp3\" type=\"audio/mpeg\"></audio>";
				setTimeout(refresh, 2000);
			}else{
				secondBox.innerHTML="<img src='images/alphabetsImg/wrong.jpg' />";
			}
		}

		document.getElementById('six6').onclick = function(){
		alphaClick = this.id;
		pickAlpha = alphaClick.charAt(alphaClick.length - 1);
			if(pickAlpha == selectedAlpha){
				secondBox.innerHTML="<img src='images/alphabetsImg/right.jpg' />";
				audio.innerHTML="<audio controls autoplay><source src=\"sounds/6.mp3\" type=\"audio/mpeg\"></audio>";
				setTimeout(refresh, 2000);
			}else{
				secondBox.innerHTML="<img src='images/alphabetsImg/wrong.jpg' />";
			}
		}

		document.getElementById('seven7').onclick = function(){
		alphaClick = this.id;
		pickAlpha = alphaClick.charAt(alphaClick.length - 1);
			if(pickAlpha == selectedAlpha){
				secondBox.innerHTML="<img src='images/alphabetsImg/right.jpg' />";
				audio.innerHTML="<audio controls autoplay><source src=\"sounds/7.mp3\" type=\"audio/mpeg\"></audio>";
				setTimeout(refresh, 2000);
			}else{
				secondBox.innerHTML="<img src='images/alphabetsImg/wrong.jpg' />";
			}
		}

		document.getElementById('eight8').onclick = function(){
		alphaClick = this.id;
		pickAlpha = alphaClick.charAt(alphaClick.length - 1);
			if(pickAlpha == selectedAlpha){
				secondBox.innerHTML="<img src='images/alphabetsImg/right.jpg' />";
				audio.innerHTML="<audio controls autoplay><source src=\"sounds/8.mp3\" type=\"audio/mpeg\"></audio>";
				setTimeout(refresh, 2000);
			}else{
				secondBox.innerHTML="<img src='images/alphabetsImg/wrong.jpg' />";
			}
		}

		document.getElementById('nine9').onclick = function(){
		alphaClick = this.id;
		pickAlpha = alphaClick.charAt(alphaClick.length - 1);
			if(pickAlpha == selectedAlpha){
				secondBox.innerHTML="<img src='images/alphabetsImg/right.jpg' />";
				audio.innerHTML="<audio controls autoplay><source src=\"sounds/9.mp3\" type=\"audio/mpeg\"></audio>";
				setTimeout(refresh, 2000);
			}else{
				secondBox.innerHTML="<img src='images/alphabetsImg/wrong.jpg' />";
			}
		}

		document.getElementById('ten10').onclick = function(){
		alphaClick = this.id;
		pickAlpha = alphaClick.charAt(alphaClick.length - 1);
			if(pickAlpha == selectedAlpha){
				secondBox.innerHTML="<img src='images/alphabetsImg/right.jpg' />";
				audio.innerHTML="<audio controls autoplay><source src=\"sounds/10.mp3\" type=\"audio/mpeg\"></audio>";
				setTimeout(refresh, 2000);
			}else{
				secondBox.innerHTML="<img src='images/alphabetsImg/wrong.jpg' />";
			}
		}
	}

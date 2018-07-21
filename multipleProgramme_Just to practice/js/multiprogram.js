/*JS for Calculator*/

	var r = document.getElementById('calcresultId');
	function calculator(number){
		if(number == 'oneId'){
			r.value += 1;
		}else if(number == 'twoId'){
			r.value += 2;
		}else if(number == 'threeId'){
			r.value += 3;
		}else if(number == 'fourId'){
			r.value += 4;
		}else if(number == 'fiveId'){
			r.value += 5;
		}else if(number == 'sixId'){
			r.value += 6;
		}else if(number == 'sevenId'){
			r.value += 7;
		}else if(number == 'eightId'){
			r.value += 8;
		}else if(number == 'nineId'){
			r.value += 9;
		}else if(number == 'zeroId'){
			r.value += 0;
		}else if(number == 'plusId'){
			r.value += ' + ';
		}else if(number == 'minusId'){
			r.value += ' - ';
		}else if(number == 'multiplyId'){
			r.value += ' * ';
		}else if(number == 'divideId'){
			r.value += ' / ';
		}else if((number == 'equalsId') && (r.value != "")){
			r.value = eval(r.value); 
		}else if((number == 'equalsId') && (r.value == "")){
			r.value = 0;
		}else if(number == 'clearId'){
			r.value = ""; 
		}
	}	


	document.getElementById('oneId').onclick = function (){ calculator(this.id);}
	document.getElementById('twoId').onclick = function (){ calculator(this.id);}
	document.getElementById('threeId').onclick = function (){ calculator(this.id);}
	document.getElementById('fourId').onclick = function (){ calculator(this.id);}
	document.getElementById('fiveId').onclick = function (){ calculator(this.id);}
	document.getElementById('sixId').onclick = function (){ calculator(this.id);}
	document.getElementById('sevenId').onclick = function (){ calculator(this.id);}
	document.getElementById('eightId').onclick = function (){ calculator(this.id);}
	document.getElementById('nineId').onclick = function (){ calculator(this.id);}
	document.getElementById('zeroId').onclick = function (){ calculator(this.id);}
	document.getElementById('plusId').onclick = function (){ calculator(this.id);}
	document.getElementById('minusId').onclick = function (){ calculator(this.id);}
	document.getElementById('multiplyId').onclick = function (){ calculator(this.id);}
	document.getElementById('divideId').onclick = function (){ calculator(this.id);}
	document.getElementById('clearId').onclick = function (){ calculator(this.id);}
	document.getElementById('equalsId').onclick = function (){ calculator(this.id);}
	/*document.getElementById('resultScreen').innerHTML = r;*/	//To show calc result in result screen

	/*JS for Calculator Ends*/

	/*Js to write Array in Database section with JS*/

	var myArray = ["Apple", "Mango", "Guava", "Pineapple", "Orange", "Custardapple", "Grapes", "Kiwi", "Strawberry", "Banana", "Peach", "Date", "Papaya", "Watermelon", "Sunmelon", "Cherry", "Fig", "Blueberry", "Coconut", "Pomegranate", "Appricot", "SweetLime", "Avocado", "Plum", "Dragonfruit", "Raspberry", "Pear", "Peanut", "Tomato"];
	//document.getElementById('dataBaseId').innerHTML = myArray;
	/*Js to write Array in Database section with JS Ends*/

	var myString = "Hello this is a dummy text to check and run few functions and find, search or even replace words or text which we type through the input fields. You can search for any word by typing it in the input fields1 or field2.";
	document.getElementById('dataBaseId').innerHTML = myString;

	/*Add JS*/
	document.getElementById('addId').onclick = function(){
		var field1 = document.getElementById('field1Id').value;
		var field2 = document.getElementById('field2Id').value;
		var result = Number(field1) + Number(field2);
		if(result !== NaN){
			document.getElementById('displayId').innerHTML = result;
		}
		else{
			result = "Please type correct numbers to be added.";
		}
	}
	/*Add JS Ends*/

	/*Concat JS*/
	document.getElementById('concatId').onclick = function(){
		var field1 = document.getElementById('field1Id').value;
		var field2 = document.getElementById('field2Id').value;
		var result = field1.concat(field2);
		document.getElementById('displayId').innerHTML = result;
	}
	/*Concat JS Ends*/

	/*JS for Reset Button*/
	document.getElementById('resetId').onclick = function(){
		document.getElementById('field1Id').value = "";
		document.getElementById('field2Id').value = "";
		document.getElementById('txtColorId').value = "";
		document.getElementById('displayId').innerHTML = "";
	}
	/*JS for Reset Button Ends*/

	/*JS for Add button*/
	/*document.getElementById('addId').onclick = function(){
		var field1 = document.getElementById('field1Id').value;
		var field2 = document.getElementById('field2Id').value;			// To Add string Still to write ?
		var result = field1 + field2;
		//var result = parseInt(field1) + parseInt(field2);


/*        if(!isNaN(result)){
          document.getElementById('displayId').innerHTML = result;
        }
	}*/
	/*JS for Add button Ends*/

	/*JS for Theme Change*/
	/*document.getElementById('themeId').onchange = function(){
		var theme = document.getElementById('themeId').value;
		document.getElementById('displayId').innerHTML = theme;				//This is also Correct way for theme change code
		if(theme == 'dark'){
			alert(dark);
		}else{
			alert(Light);
		}
	}*/

	function changeTheme(){
        var theme = document.getElementById("themeId");
        var option = theme.options[theme.selectedIndex].value;
        if (option == "dark"){
            document.getElementById('calcMainWrapperId').style.backgroundColor = '#000';
            document.getElementById('midWrapperId').style.backgroundColor = '#000';
            document.getElementById('inputWrapperId').style.backgroundColor = '#000';
            document.getElementById('databaseWrapperId').style.backgroundColor = '#000';
            document.getElementById('resultWrapperId').style.backgroundColor = '#000';
            document.getElementById('titleCalcId').style.color = '#fff';
            document.getElementById('titleMidId').style.color = '#fff';
            document.getElementById('titleInputId').style.color = '#fff';
            document.getElementById('titleDataId').style.color = '#fff';
            document.getElementById('titleResultId').style.color = '#fff';
            document.getElementById('input1Id').style.color = '#fff';
            document.getElementById('input2Id').style.color = '#fff';
            document.getElementById('dataBaseId').style.color = '#fff';
            document.getElementById('themeTxtId').style.color = '#fff';
            document.getElementById('textColorTxtId').style.color = '#fff';
            document.getElementById('inputSearchTextId').style.color = '#fff';
        }
        if (option == "light"){
            document.getElementById('calcMainWrapperId').style.backgroundColor = '#ececec';
            document.getElementById('midWrapperId').style.backgroundColor = '#ececec';
            document.getElementById('inputWrapperId').style.backgroundColor = '#ececec';
            document.getElementById('databaseWrapperId').style.backgroundColor = '#ececec';
            document.getElementById('resultWrapperId').style.backgroundColor = '#ececec';
            document.getElementById('titleCalcId').style.color = '#747474';
            document.getElementById('titleMidId').style.color = '#747474';
            document.getElementById('titleInputId').style.color = '#747474';
            document.getElementById('titleDataId').style.color = '#747474';
            document.getElementById('titleResultId').style.color = '#747474';
            document.getElementById('input1Id').style.color = '#747474';
            document.getElementById('input2Id').style.color = '#747474';
            document.getElementById('dataBaseId').style.color = '#747474';
            document.getElementById('themeTxtId').style.color = '#747474';
            document.getElementById('textColorTxtId').style.color = '#747474';
            document.getElementById('inputSearchTextId').style.color = '#747474';
        }
    }

    document.getElementById('themeId').onchange = function(){
    	changeTheme();
    }
	/*JS for Theme Change Ends*/

	/*JS for Text Color Change*/
	function colorChanger(color){
		if(color == "txtColor"){
			var txtColor = document.getElementById('txtColorId').value;
			if(txtColor != ""){																			//How to change this color below ?
				document.getElementById('dataBaseId').style.color = txtColor;
				document.getElementById('displayId').innerHTML = "You have chosen " + "<strong style=\"color:red; font-size:26px;\">" + txtColor + "</strong>" + " color for your database text.";
			}else{
				document.getElementById('dataBaseId').style.color = '#000';
			}
		}
	}

	document.getElementById('txtColorId').onkeyup = function (){ colorChanger('txtColor'); }
	/*JS for Text Color Change Ends*/

	/*JS for Control Panel*/

	/*Bold*/
	var databasevar = document.getElementById('dataBaseId');
	function boldFn(){
		var bttnChk = databasevar.style.fontWeight;
		var bttnClick = document.getElementById('boldId');
		if(bttnChk !== 'bold'){
			databasevar.style.fontWeight = 'bold';
			bttnClick.style.backgroundColor = "#d4d4d4";

		}else{
			databasevar.style.fontWeight = 'normal'
			bttnClick.style.backgroundColor = "#efefef";
		}
	}
	document.getElementById('boldId').onclick = function(){
		boldFn();
	}
	/*Bold Ends*/

	/*Italic*/
	var databasevar = document.getElementById('dataBaseId');
	function italicFn(){
		var bttnChk = databasevar.style.fontStyle;
		var bttnClick = document.getElementById('italicId');
		if(bttnChk !== 'italic'){
			databasevar.style.fontStyle = 'italic';
			bttnClick.style.backgroundColor = "#d4d4d4";

		}else{
			databasevar.style.fontStyle = 'normal'
			bttnClick.style.backgroundColor = "#efefef";
		}
	}
	document.getElementById('italicId').onclick = function(){
		italicFn();
	}
	/*Italic Ends*/

	/*Underline*/
	var databasevar = document.getElementById('dataBaseId');
	function underlineFn(){
		var bttnChk = databasevar.style.textDecoration;
		var bttnClick = document.getElementById('underlineId');
		if(bttnChk !== 'underline'){
			databasevar.style.textDecoration = 'underline';
			bttnClick.style.backgroundColor = "#d4d4d4";

		}else{
			databasevar.style.textDecoration = 'none'
			bttnClick.style.backgroundColor = "#efefef";
		}
	}
	document.getElementById('underlineId').onclick = function(){
		underlineFn();
	}
	/*Underline Ends*/

	/*Caps*/
	var databasevar = document.getElementById('dataBaseId');
	function uppercaseFn(){
		var bttnChk = databasevar.style.textTransform;
		var bttnClick = document.getElementById('capsId');
		if(bttnChk !== 'uppercase'){
			databasevar.style.textTransform = 'uppercase';
			bttnClick.style.backgroundColor = "#d4d4d4";
		}else{
			databasevar.style.textTransform = 'none'
			bttnClick.style.backgroundColor = "#efefef";
		}
	}
	document.getElementById('capsId').onclick = function(){
		uppercaseFn();
	}
	/*Caps Ends*/

	/*Lower Case*/
	var databasevar = document.getElementById('dataBaseId');
	function lowercaseFn(){
		var bttnChk = databasevar.style.textTransform;
		var bttnClick = document.getElementById('smallId');
		if(bttnChk !== 'lowercase'){
			databasevar.style.textTransform = 'lowercase';
			bttnClick.style.backgroundColor = "#d4d4d4";
		}else{
			databasevar.style.textTransform = 'none'
			bttnClick.style.backgroundColor = "#efefef";
		}
	}
	document.getElementById('smallId').onclick = function(){
		lowercaseFn();
	}
	/*Lower Case Ends*/

	/*Font Size +*/
	var fontSize = 16;
	function fontPlus(){
			fontSize++;
			document.getElementById('dataBaseId').style.fontSize = fontSize + "px";
	}
	document.getElementById('fontPlusId').onclick = function(){
		fontPlus();
	}
	/*Font Size + Ends*/

	/*Font Size -*/
	var fontSize = 16;
	function fontMinus(){
			fontSize--;
			document.getElementById('dataBaseId').style.fontSize = fontSize + "px";
	}
	document.getElementById('fontMinusId').onclick = function(){
		fontMinus();
	}
	/*Font Size - Ends*/

	/*JS for Control Panel Ends*/

	/*JS for Search*/
	function searchfn(){
		var textToSearch = document.getElementById('inputSearch').value;
		var contentTxt = myString;
		var result = contentTxt.search(textToSearch);										
		//alert(result);
		//alert(textToSearch);
		if(result !== -1){
		//	alert('Yes');
			document.getElementById('displayId').innerHTML = "Yes we do have this in the Data";
		}else{
		//	alert('No');
			document.getElementById('displayId').innerHTML = "Sorry we donot have this in the data."
		}
	}

	document.getElementById('searchBtnId').onclick = function(){
		var textToSearch = document.getElementById('inputSearch').value;
		if(textToSearch == ""){
			document.getElementById('displayId').innerHTML = "Please Enter a text in the search box to search it in the Database";
		}else{
		searchfn();
		}
	}
	/*JS for Search Ends*/


	/*Select Array/String with Button */
	var databaseContent = document.getElementById('dataBaseId');
	var displayContent = document.getElementById('displayId');
	document.getElementById('arrayBttnId').onclick = function(){
		databaseContent.innerHTML = myArray;
		displayContent.innerHTML = "You have selected " + "<strong>" + "\"Array\"" + "</strong>" + " to be printed in Database";
	}
	document.getElementById('stringBttnId').onclick = function(){
		databaseContent.innerHTML = myString;
		displayContent.innerHTML = "You have selected " + "<strong>" + "\"String\"" + "</strong>" + " to be printed in Database";
	}
	/*Select Array Ends*/
		
	/*Phone Book JS*/
	var records = [
		['Tariq','9718378636','Self'],
		['Aamir','9845663525','Brother'],
		['Sandeep','8545665541','Friend'],
		['Vyal','9585235614','Friend'],
		['Arshi','9501547863','Friend']
	]

	function retrieveInfo(){
		var getLen = records.length;
		var output = "<table width='600px' border='2px' align='center'><tr><th>S.No.</th><th>Name</th><th>Mobile No.</th><th>Category</th></tr>"	
		for(var i=0; i<getLen; i++){
			output += "<tr><td>" + (i+1) + "</td><td>" + records[i][0] + "</td><td>" + records[i][1] + "</td><td>" + records[i][2] + "</td></tr>";
		}
		output += "</table>";
		document.getElementById('displayId').innerHTML = output;
		document.getElementById('dataBaseId').innerHTML = records;
	}
	
	function changeName(){
		var getSn = (document.getElementById('phoneSnoId').value)-1;
		//alert(getSn);
		var getName = document.getElementById('phoneNameId').value;
		var getPhone = document.getElementById('phoneMobileNoId').value;
		var getCategory = document.getElementById('phoneCatId').value;

		//alert(records[getSn]);
		records[getSn] = [];
		records[getSn][0] = getName;
		records[getSn][1] = getPhone;
		records[getSn][2] = getCategory;
		//alert(records[getSn]);
		retrieveInfo();
	}

	document.getElementById('phoneBookAdd').onclick = function validator(){
	var getName = document.getElementById('phoneNameId').value;
	var getPhone = document.getElementById('phoneMobileNoId').value;
	var getCategory = document.getElementById('phoneCatId').value;
		if((getName == "") && (getPhone == "") && (getCategory == "")){
			retrieveInfo();
			alert("Please enter the details to be added in the Phone Book section.");
		}else if((getName !== "") && (getPhone == "") && (getCategory == "")){
			alert("Please enter a number and category to be added.");
		}else if((getName !== "") && (getPhone !== "") && (getCategory == "")){
			alert("Please enter a category to be added to the phone book.");
		}else if((getName !== "") && (getPhone !== "") && (getCategory !== "")){
		retrieveInfo();	
		changeName();
			alert("Your data has been added to the phone book records.");
		}
	}
	
	/*Phone Book JS Ends*/
/*JS File Author Tariq Khan*/

var activeFilter = document.getElementById('filterGroup');
var filterName = document.getElementById('filterGroup').getElementsByTagName('option');
var i = 0;
for(i = 0; i < 5; i++){
	activeFilter.onchange = myFunction; 
	function myFunction(){
		var filterId = this.value;
		//alert(filterId);
		document.getElementById('all').style.display = "none";
		document.getElementById('fruits').style.display = "none";
		document.getElementById('flowers').style.display = "none";
		document.getElementById('vegetables').style.display = "none";
		document.getElementById('drinks').style.display = "none";
		document.getElementById(filterId).style.display = "block";
	}
}
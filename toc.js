
var modal3= document.getElementById('div5');
var modal4= document.getElementById('div6');
function showOverlay1(){
	 modal3.style.display="block";
 }
 function hideOverlay1(){
	 modal3.style.display="none";
 }
 modal3.onclick = function(event) {
    if (event.target == modal3) {
		hideOverlay1();
	}
    }
	function showOverlay2(){
		modal4.style.display="block";
	}
	function hideOverlay2(){
		modal4.style.display="none";
	}
	modal4.onclick= function(event){
		if(event.target == modal4){
			hideOverlay2();
		}
	}
	
	/*QUIZ*/

function next(idName,nextId){
	var i,mainContent;
	mainContent=document.getElementsByClassName('main-content');
	for(i=0; i < mainContent.length; i++){
		mainContent[i].style.display = 'none';
	}
	document.getElementById(nextId).style.display = "block";
	var c = document.getElementById(idName).childNodes;
	if(idName==='d1' || idName==='d2' || idName==='d8' || idName==='d10' || idName==='d11'
	 || idName==='d12' || idName==='d13' || idName==='d15'){
	c[7].childNodes[4].innerHTML = '';
	c[9].childNodes[4].innerHTML = '';
	c[12].childNodes[4].innerHTML = '';
	c[14].childNodes[4].innerHTML = '';
	c[7].childNodes[0].style.color = 'black';
	c[9].childNodes[0].style.color = 'black';
	c[12].childNodes[0].style.color = 'black';
	c[14].childNodes[0].style.color = 'black';
	}
	else{
	c[3].childNodes[4].innerHTML = '';
	c[5].childNodes[4].innerHTML = '';
	c[8].childNodes[4].innerHTML = '';
	c[10].childNodes[4].innerHTML = '';
	c[3].childNodes[0].style.color = 'black';
	c[5].childNodes[0].style.color = 'black';
	c[8].childNodes[0].style.color = 'black';
	c[10].childNodes[0].style.color = 'black';
	}
	var d = document.getElementById(nextId).childNodes;
	if(nextId==='d1' || nextId==='d2' || nextId==='d8' || nextId==='d10' || nextId==='d11'
	 || nextId==='d12' || nextId==='d13' || nextId==='d15'){
	d[7].childNodes[4].innerHTML = '';
	d[9].childNodes[4].innerHTML = '';
	d[12].childNodes[4].innerHTML = '';
	d[14].childNodes[4].innerHTML = '';
	d[7].childNodes[0].style.color = 'black';
	d[9].childNodes[0].style.color = 'black';
	d[12].childNodes[0].style.color = 'black';
	d[14].childNodes[0].style.color = 'black';
	d[7].childNodes[2].checked = false;
	d[9].childNodes[2].checked = false;
	d[12].childNodes[2].checked = false;
	d[14].childNodes[2].checked = false;
	d[7].childNodes[2].disabled = false;
	d[9].childNodes[2].disabled = false;
	d[12].childNodes[2].disabled = false;
	d[14].childNodes[2].disabled = false;
	}
	else{
	d[3].childNodes[4].innerHTML = '';
	d[5].childNodes[4].innerHTML = '';
	d[8].childNodes[4].innerHTML = '';
	d[10].childNodes[4].innerHTML = '';
	d[3].childNodes[0].style.color = 'black';
	d[5].childNodes[0].style.color = 'black';
	d[8].childNodes[0].style.color = 'black';
	d[10].childNodes[0].style.color = 'black';
	d[3].childNodes[2].checked = false;
	d[5].childNodes[2].checked = false;
	d[8].childNodes[2].checked = false;
	d[10].childNodes[2].checked = false;
	d[3].childNodes[2].disabled = false;
	d[5].childNodes[2].disabled = false;
	d[8].childNodes[2].disabled = false;
	d[10].childNodes[2].disabled = false;
	}
}
function prev(idName){
	var i,mainContent;
	mainContent=document.getElementsByClassName('main-content');
	for(i=0; i < mainContent.length; i++){
		mainContent[i].style.display = 'none';
	}
	document.getElementById(idName).style.display = "block";
	var c = document.getElementById(idName).childNodes;
	if(idName==='d1' || idName==='d2' || idName==='d8' || idName==='d10' || idName==='d11'
	 || idName==='d12' || idName==='d13' || idName==='d15'){
	c[7].childNodes[2].disabled = false;
	c[9].childNodes[2].disabled = false;
	c[12].childNodes[2].disabled = false;
	c[14].childNodes[2].disabled = false;
	c[7].childNodes[2].checked = false;
	c[9].childNodes[2].checked = false;
	c[12].childNodes[2].checked = false;
	c[14].childNodes[2].checked = false;
	}
	else{
	c[3].childNodes[2].disabled = false;
	c[5].childNodes[2].disabled = false;
	c[8].childNodes[2].disabled = false;
	c[10].childNodes[2].disabled = false;
	c[3].childNodes[2].checked = false;
	c[5].childNodes[2].checked = false;
	c[8].childNodes[2].checked = false;
	c[10].childNodes[2].checked = false;
	}
}



function prev2(idName){
	var i,mainContent;
	mainContent=document.getElementsByClassName('main-content');
	for(i=0; i < mainContent.length; i++){
		mainContent[i].style.display = 'none';
	}
	document.getElementById(idName).style.display = "block";
	var c = document.getElementById(idName).childNodes;
	c[7].childNodes[2].disabled = false;
	c[9].childNodes[2].disabled = false;
	c[12].childNodes[2].disabled = false;
	c[14].childNodes[2].disabled = false;
	c[7].childNodes[2].checked = false;
	c[9].childNodes[2].checked = false;
	c[12].childNodes[2].checked = false;
	c[14].childNodes[2].checked = false;
}

var quizAnswer = ['',1,2,3,3,3,4,4,1,2,3,3,1,1,4,4,2,3,2,3,1];
function checkAnswer(i,idName){
		if(document.getElementById(idName).value===quizAnswer[i]){
			//document.getElementById(idName).innerHTML.style.color = 'green';
			document.getElementById(idName).nextElementSibling.innerHTML = '&#x2714';
			document.getElementById(idName).nextElementSibling.style.color = 'green';
			document.getElementById(idName).previousElementSibling.style.color = 'green';
		}
		else{
			document.getElementById(idName).nextElementSibling.innerHTML = 'X';
			document.getElementById(idName).nextElementSibling.style.color = 'red';
			/*document.getElementsByClassName('check')[2].innerHTML = '&#x2714';
			document.getElementsByClassName('check')[2].style.color = 'green';*/
			document.getElementsByClassName('true')[i-1].innerHTML = '&#x2714';
			document.getElementsByClassName('true')[i-1].style.color = 'green';
			document.getElementById(idName).previousElementSibling.style.color = 'red';
			//document.getElementById('q1o3').previousElementSibling.style.color = 'green';
			document.getElementsByClassName('true')[i-1].previousElementSibling.
			previousElementSibling.style.color = 'green';
			
		}
		document.getElementById('q'+i+'o1').disabled = true;
		document.getElementById('q'+i+'o2').disabled = true;
		document.getElementById('q'+i+'o3').disabled = true;
		document.getElementById('q'+i+'o4').disabled = true;
		
}
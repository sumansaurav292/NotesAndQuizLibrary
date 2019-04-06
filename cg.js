
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
/*var answer = ["Merge sort"];
for(var i=0; i<4; i++){
	console.log(i);
	
 }document.getElementsByClassName('container')[i].onclick = function(){
		
	for(var j=0; j<i ;j++){
	  if(document.forms[0].elements[j].value===answer[0]){
		alert('It is true');
	  }
	  else
		alert('It is false');
	}
}*/

/*for(var i=0; i<4; i++){
	document.getElementsByTagName('input')[i].onclick = function(){
		document.forms[0].submit();
	}
}*/
/*function next1(){
	document.getElementById('d1').outerHTML = document.getElementById('d2').
	innerHTML;
}
/*function prev1(){
	document.getElementById('d2').outerHTML = document.getElementById('d1').innerHTML;
}*/
/*function next2(){
	document.getElementsByTagName('main')[0].innerHTML = document.getElementById('d3').
	innerHTML;
}*/
/*function prev2(){
	document.getElementById('d3').outerHTML = document.getElementById('d2').innerHTML;
}*/
/*function next3(){
	document.getElementsByTagName('main')[0].innerHTML = document.getElementById('d4').innerHTML;
}*/
function next(idName,nextId){
	var i,mainContent;
	mainContent=document.getElementsByClassName('main-content');
	for(i=0; i < mainContent.length; i++){
		mainContent[i].style.display = 'none';
	}
	document.getElementById(nextId).style.display = "block";
	var c = document.getElementById(idName).childNodes;
	c[3].childNodes[4].innerHTML = '';
	c[5].childNodes[4].innerHTML = '';
	c[8].childNodes[4].innerHTML = '';
	c[10].childNodes[4].innerHTML = '';
	c[3].childNodes[0].style.color = 'black';
	c[5].childNodes[0].style.color = 'black';
	c[8].childNodes[0].style.color = 'black';
	c[10].childNodes[0].style.color = 'black';
	var d = document.getElementById(nextId).childNodes;
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
function prev(idName){
	var i,mainContent;
	mainContent=document.getElementsByClassName('main-content');
	for(i=0; i < mainContent.length; i++){
		mainContent[i].style.display = 'none';
	}
	document.getElementById(idName).style.display = "block";
	var c = document.getElementById(idName).childNodes;
	c[3].childNodes[2].disabled = false;
	c[5].childNodes[2].disabled = false;
	c[8].childNodes[2].disabled = false;
	c[10].childNodes[2].disabled = false;
	c[3].childNodes[2].checked = false;
	c[5].childNodes[2].checked = false;
	c[8].childNodes[2].checked = false;
	c[10].childNodes[2].checked = false;
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

var quizAnswer = ['',2,1,1,1,3,1,4,3,2,1,4,3,4,3,4,3,1,2,4,2];
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
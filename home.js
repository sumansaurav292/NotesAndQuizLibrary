
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
	
	function openCourse(evt, courseName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(courseName).style.display = "block";
    evt.currentTarget.className += " active";
}
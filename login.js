// Image Slideshow
var slideIndex=0;
slides();
function slides()
{
	var myslides= document.getElementsByClassName('myslides');
	var dot= document.getElementsByClassName('dot');
	var i;
	for(i=0;i<myslides.length;i++)
	{
		myslides[i].style.display= 'none';
	}
	
	slideIndex++;
	if(slideIndex>myslides.length)
	{
		slideIndex=1;
	}
	for(i=0;i<dot.length;i++)
	{
		dot[i].className=dot[i].className.replace("active","");
	}
	myslides[slideIndex-1].style.display= 'block';
	dot[slideIndex-1].className += " active";
	setTimeout(slides,4000);
}
// modal overlay
 var modal1= document.getElementById('div3');
 var modal2= document.getElementById('div4');
 var modal3= document.getElementById('div5');
 var modal4= document.getElementById('div6');
 function showLogInModal(){
	 modal1.style.display="block";
 }
 function hideLogInModal(){
	 modal1.style.display='none';
 }
 modal1.onclick = function(event) {
    if (event.target == modal1) {
		hideLogInModal();
	}
    }
	function showSignUpModal(){
	 modal2.style.display="block";
	}
	function hideSignUpModal(){
	 modal2.style.display='none';
 }
 modal2.onclick = function(event) {
    if (event.target == modal2) {
		hideSignUpModal();
	}
    }
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
	
	
var pass= document.getElementById('crtpass');
var cnfpass= document.getElementById('cnfpass');
var entenroll= document.getElementById('entenroll');
var max= crtpass.getAttribute('maxlength');
var min=8;
if((max) && (max > -1)){
	pass.onkeyup= function(){
		document.getElementById('rem2').style.display="inline";
		document.getElementById('rem2').innerHTML= (this.getAttribute('maxlength')- 
		this.value.length) + " Characters remaining"; 
		if((this.getAttribute('maxlength')- this.value.length) <= 8){
			document.getElementById('rem2').style.color="green";
		}
		if((this.getAttribute('maxlength')- this.value.length) > 8){
			document.getElementById('rem2').style.color="red";
		}
		return (this.value.length < this.getAttribute('maxlength'));
	};
}
/*if(pass.value.length < min){
	document.getElementById('rem').style.display="inline";
	document.getElementById('rem').innerHTML = "Password must be of atleast 8 characters.";
}*/
var form2= document.forms[1];
var flag1=0,flag2=0,flag3=0,flag4=0;
var a=['2015IMSCS001','2015IMSCS002','2015IMSCS003','2015IMSCS005','2015IMSCS006','2015IMSCS007'
,'2015IMSCS009','2015IMSCS010','2015IMSCS012','2015IMSCS014','2015IMSCS015','2015IMSCS016'
,'2015IMSCS017','2015IMSCS019','2015IMSCS020','2015IMSCS021','2015IMSCS022','2015IMSCS023',
'2015IMSCS024','2015IMSCS025','2015IMSCS026','2014IMSCS013','2014IMSCS021'];
    entenroll.onblur= function(){
		if(entenroll.value.length < 12){
			document.getElementById('rem1').style.display = "inline";
			document.getElementById('rem1').innerHTML= "Invalid Enrollment Number!";
			flag3=1;
		}
		else
			flag3=0;
		if(entenroll.value.toUpperCase()===a[0] || entenroll.value.toUpperCase()===a[1] 
		|| entenroll.value.toUpperCase()===a[2] ||entenroll.value.toUpperCase()===a[3] 
		|| entenroll.value.toUpperCase()===a[4] || entenroll.value.toUpperCase()===a[5] ||
		entenroll.value.toUpperCase()===a[6] || entenroll.value.toUpperCase()===a[7] 
		|| entenroll.value.toUpperCase()===a[8] ||entenroll.value.toUpperCase()===a[9] 
		|| entenroll.value.toUpperCase()===a[10] 
		|| entenroll.value.toUpperCase()===a[11] ||entenroll.value.toUpperCase()===a[12] 
		|| entenroll.value.toUpperCase()===a[13] 
		|| entenroll.value===a[14] || entenroll.value.toUpperCase()===a[15] || 
		entenroll.value.toUpperCase()===a[16] || entenroll.value.toUpperCase()===a[17] ||
		entenroll.value.toUpperCase()===a[18] || entenroll.value.toUpperCase()===a[19] 
		|| entenroll.value.toUpperCase()===a[20] ||
		entenroll.value.toUpperCase()===a[21] || entenroll.value.toUpperCase()===a[22]){
	      flag4=0;
	    }
	    else{
			document.getElementById('rem1').style.display = "inline";
			document.getElementById('rem1').innerHTML= "Invalid Enrollment Number!";
		    flag4=1;
		}
	  }
	pass.onblur= function(){
		if(pass.value.length < min){
			document.getElementById('rem2').innerHTML= "Password must be of atleast 8 characters!";
			flag1=1;
		}
		else
			flag1=0;
		
	} 
	cnfpass.onblur= function(){
	    if(pass.value!==cnfpass.value){
			document.getElementById('rem3').style.display="inline";
			document.getElementById('rem3').innerHTML="Passwords don't match!";
		    flag2=1;
	    }
		else
			flag2=0;
	}
	entenroll.onfocus= function(){
		document.getElementById('rem1').style.display = "none"; 
	}
	pass.onfocus= function(){
		document.getElementById('rem2').style.display = "none";
	}
	cnfpass.onfocus= function(){
		document.getElementById('rem3').style.display = "none";
	}
	form2.elements[5].onclick= function(){
		if(flag1==1 || flag2==1 || flag3==1 || flag4==1){
			return false;
		}
		else
			return true;
	}
	form2.elements[4].onclick= function(){
		document.getElementById('rem1').style.display = "none";
		document.getElementById('rem2').style.display='none';
	}

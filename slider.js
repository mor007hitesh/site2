// JavaScript Document
var a=['Images/slider1.jpg','Images/slider2.jpg','Images/slider3.png','Images/slider4.jpg'];
var b=0;
function slider()
{
	document.getElementById('image').src=a[b];
	b++;
	if(b>3)
		{
			b=0;
		}
}
setInterval('slider()',3000);
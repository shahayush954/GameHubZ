var a = document.getElementById("smallimg1").src;
var b = document.getElementById("smallimg2").src;
var c = document.getElementById("smallimg3").src;
var d = document.getElementById("smallimg4").src;
var e = document.getElementById("smallimg5").src;
var f = document.getElementById("smallimg6").src;
var g = document.getElementById("smallimg7").src;
var h = document.getElementById("smallimg8").src;
var img = document.getElementById("bigimg");

document.getElementById("smallimg1").onclick = function()
{
	img.src = a;
}

document.getElementById("smallimg2").onclick = function()
{
	img.src = b;
}

document.getElementById("smallimg3").onclick = function()
{
	img.src = c;
}

document.getElementById("smallimg4").onclick = function()
{
	img.src = d;
}

document.getElementById("smallimg5").onclick = function()
{
	img.src = e;
}

document.getElementById("smallimg6").onclick = function()
{
	img.src = f;
}

document.getElementById("smallimg7").onclick = function()
{
	img.src = g;
}

document.getElementById("smallimg8").onclick = function()
{
	img.src = h;
}
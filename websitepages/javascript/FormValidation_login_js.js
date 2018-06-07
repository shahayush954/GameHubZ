function validateForm()
{
	var a = document.forms["Login"]["username"].value;
	var b = document.forms["Login"]["passw"].value;

	if(a == "")
	{
		alert("You need to enter a Username");
		return false;
	}

	else if( b == "")
	{
		alert("Please enter your Password");
		return false;
	}

}
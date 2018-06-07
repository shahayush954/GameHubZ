function validate()
{
	var a = document.forms["sell"]["pname"].value;
	var b = document.forms["sell"]["pmodel"].value;
	var c = document.forms["sell"]["category"].value;
	var d = document.forms["sell"]["age"].value;
	var e = document.forms["sell"]["damage"].value;
	var f = document.forms["sell"]["gurantee"].value;
	var g = document.forms["sell"]["price"].value;
	var h = document.forms["sell"]["pmobile"].value;
	var i = document.forms["sell"]["palt"].value;
	var j = document.forms["sell"]["email"].value;
	if(a == "")
	{
		alert("Please Enter Product name");
		return false;
	}
	else if(b == "")
	{
		alert("Please enter a Model Number");
		return false;
	}
	else if(c == "")
	{
		alert("Please choose a category");
		return false;
	}
	else if(d == "")
	{
		alert("Please enter amount of use");
		return false;
	}
	else if(e == "")
	{
		alert("Please enter whether product was damaged or not");
		return false;
	}
	else if(f == "")
	{
		alert("Please enter whether product is under gurantee or not");
		return false;
	}
	else if(g == "")
	{
		alert("Please enter price of the product");
		return false;
	}
	else if(isNaN(g))
	{
		alert("Price cannot contain letters");
		return false;
	}
	else if(h == "")
	{
		alert("Please enter your mobile number");
		return false;
	}
	else if(isNaN(h))
	{
		alert("Mobile Number cannot contain letters");
		return false;
	}
	else if(i == "")
	{
		alert("Please enter your alternate mobile number");
		return false;
	}
	else if(isNaN(i))
	{
		alert("Alternate Mobile Number cannot contain letters");
		return false;
	}
	else if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(sell.email.value)))
	{
		alert("Please enter a valid email id");
	}
}
function validateForm() {
    var a = document.forms["Signup"]["firstname"].value;
	var b = document.forms["Signup"]["lastname"].value;
	var c = document.forms["Signup"]["pincode"].value;
	var d = document.forms["Signup"]["address"].value;
	var e = document.forms["Signup"]["contact"].value;
	var f = document.forms["Signup"]["gender"].value;
	var g = document.forms["Signup"]["password"].value;
	var h = document.forms["Signup"]["conpassword"].value;
	if (a == "") {
        alert("First Name cannot be empty");
        return false;
    }
	else if (b == "") {
        alert("Last Name cannot be empty");
        return false;
    }
	else if (c == "") {
        alert("Pincode must be filled out");
        return false;
    }
	else if(isNaN(c))
	{
		alert("Pincode cannot contain letters");
		return false;
	}
	else if(d == "")
	{
		alert("Address cannot be empty");
		return false;
	}
	else if(e == "")
	{
		alert("Please Enter a Valid Contact No.");
		return false;
	}
	else if(isNaN(e))
	{
		alert("Contact Number cannot contain Letters")
		return false;
	}
	else if(f == "")
	{
		alert("Please select your Gender");
		return false;
	}
	else if(g == "")
	{
		alert("Please select a Password for your Account");
		return false;
	}
	else if(h == "")
	{
		alert("Please Confirm your Password");
		return false;
	}
	else if(g != h)
	{
		alert("Passwords are not matching.Try retyping both Passwords");
		return false;
	}
	else if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(Signup.email.value)))
	{
		alert("Please enter a valid email id");
	}
}
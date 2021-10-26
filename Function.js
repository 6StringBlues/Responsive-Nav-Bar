/* Toggle between adding and removing the "responsive" class to nav when the user clicks on the icon */
function myFunction() {
	var a = document.getElementById("myNav");
	if (a.className === "nav") {
		a.className += " responsive";
		} else {
		a.className = "nav";
	}
}
function User(login, pass, tel) {
	this.log = log;
	this.pass = pass;
	this.tel = tel
}
var btn = document.getElementById('bt');
btn.onclick = function() {
	var inlog = getElementById('login');
	var inpass = getElementById('pass');
	var intel = getElementById('tel');
	var registr = new User(inlog.value, inpass.value, intel.value);
	console.log(registr);
}
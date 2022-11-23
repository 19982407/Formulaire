const form = document.getElementById('form');
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const email = document.getElementById('email');
const phonenumber = document.getElementById('phonenumber');
const Genre = document.getElementsByName('M');
const mis1 = document.querySelector('.mis1');
const mis2 = document.querySelector('.mis2');
const mis3 = document.querySelector('.mis3');
const boutton = document.querySelector('.btn');
const clubs = document.querySelector('#club-select').selectedOptions;
let arr = [];
form.addEventListener('submit', (e) => {
	checkInputs();
	if(arr.length != 7) e.preventDefault();
});
function validatefname (fname){
	if (fname.value.trim() === '') {
		setErrorFor(fname, 'First name is required');
	}else if(fname.value.length <= 2 | fname.value.length > 30  ){
		setErrorFor(fname, 'First name is invalid');
	}
	 else{
		setSuccessFor(fname, 'Valide!');
	}
}function validatelname (lname){
	if (lname.value.trim() === '') {
		setErrorFor(lname, 'Last name is required');
	}else if(lname.value.length <= 2 | lname.value.length > 30  ){
	
		setErrorFor(lname, 'Last name is invalid');
	}
	 else{
		setSuccessFor(lname, 'Valide!');
	}
}
	function validateemail (ema){
		if (ema.value.trim() === '') {
			setErrorFor(ema, 'Email  is required');
		}else if(ema.value.match(/^\w+([\.-]?\w+)*@*(ofppt)*(\.ma)+$/g)){
			setSuccessFor(ema, 'Valide!');
		}
		 else{
			setErrorFor(ema, 'Email non valide');
			
		}
	}
		function validatephone (phone){
			if (phone.value.trim() === '') {
				setErrorFor(phone, 'Phone number  is required');
			}else if(phone.value.match(/^((\+212)?[ -])?(06|05|07)(\d{1})[ -]?(\d{3})[ -]?(\d{4})+$/)){
				setSuccessFor(phone, 'Valide!');
			}else{
				setErrorFor(phone, 'Le numéro de téléphone non valide');
			}
			}
firstname.addEventListener("keyup",function(){
	validatefname(firstname);
})
lastname.addEventListener("keyup",function(){
	validatelname(lastname);
})
email.addEventListener("keyup",function(){
	validateemail(email);
})
phonenumber.addEventListener("keyup",function(){
	validatephone(phonenumber);
})
function checkInputs() {
	const firstnameValue = firstname.value.trim();
	const lastnameValue = lastname.value.trim();
	const emailValue = email.value.trim();
	const phonenumberValue = phonenumber.value.trim();
	if (firstnameValue === '') {
		setErrorFor(firstname, 'Remplir le nom');
	} else {
		setSuccessFor(firstname, 'Valide!');
		arr.push(true)
	}
	
	if (lastnameValue === '') {
		setErrorFor(lastname, 'Remplir le prénom');
	} else {
		setSuccessFor(lastname, 'Valide!');
		arr.push(true)
	}
	if (emailValue === '') {
		setErrorFor(email, 'Remplir email');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'email non valide');
	} else {
		setSuccessFor(email, 'Valide!');
		arr.push(true)
	}
	
	if (phonenumberValue === '') {
		setErrorFor(phonenumber, 'Remplir votre numéro de téléphone');
	} else if (!isPhonenumber(phonenumberValue)) {
		setErrorFor(phonenumber, 'Numéro de téléphone non valide');
	} else {
		setSuccessFor(phonenumber, 'Valide!');
		arr.push(true)
	}
	//////////Genre///////
	var gen =!Genre[0].checked && !Genre[1].checked;
	if (gen) {
		mis1.innerHTML = "<b>*Choisir une obligatoire</b>";
		mis1.style.color = "red";
	}
	else {
		mis1.innerHTML = "";
		arr.push(true)
	}
	////////Groupe///////
	const checkGroupe = () => {
    let selectedGroupe = document.querySelector("#pet-select").value;
	if (selectedGroupe == "") return false;
	else return true;
};
	if (checkGroupe())	{
		mis2.innerHTML = "";
		arr.push(true)
	}	
	else {
		mis2.innerHTML = "<b>*Choisir une obligatoire</b>";
		mis2.style.color = "red";
		
	}	
	////////////Clubs////////////
	if(clubs.length > 3) {
		mis3.innerHTML = "Sélectionné 3";
		mis3.style.color = "red";
	}
	else if(clubs.length == 0) {
		mis3.innerHTML = "Selectionné au moins une"
		mis3.style.color = "red";
	}
	else 
	{
		mis3.innerHTML = "";
		arr.push(true)
	}
}
function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}
function setSuccessFor(input, message) {
	const formControl = input.parentElement;
	const samp = formControl.querySelector('samp');
	formControl.className = 'form-control success';
	samp.innerText = message;
}
function isEmail(email) {
	return /^((\w+).(\w+).(\w+)@(gmail|hotmail|yahoo|ofppt).(com|org|net|ma))$/
	.test(email);
}
function isPhonenumber(phonenumber) {
	var phoneRe = /^((\+212)?[ -])?(06|05|07)(\d{1})[ -]?(\d{3})[ -]?(\d{4})+$/;
	return phoneRe.test(phonenumber);
}

///^ expr regular $/
//nombre usuario + @ + servidor + dominio
//\w+([\.-]?\w+)*

///expresion regular final
//^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/

// const email = document.getElementById('email')

// email.addEventListener('input', (e) => {
//     const emailValue = e.target.value;
    
//     if (!email)
//     return console.warn("No ingresaste un email");
    
//     if (typeof email !== "string")
//     return console.error(`El valor "${email}" ingresado, NO es un texto`);

//     let emailExpReg = /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test(email);
//     //console.log(emailExpReg);
//     if(emailExpReg){

//     return (expReg)
//     ? console.info(`${email}, es un email válido`)
//     : console.warn(`${email}, NO es un email válido`);

    
    
//     /*/[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i*/
// /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}
// 	[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/


function validateEmail(){
                
	// Get our input reference.
	var emailField = document.getElementById('email');
	
	// Define our regular expression.
	var validEmail =  /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i;

	// Using test we can check if the text match the pattern
	if(validEmail){

            return (validEmail)
             ? console.info(`${email}, es un email válido`)
             : console.warn(`${email}, NO es un email válido`);
    }
	emailField.oninvalid = function(event) { 
		event.target.setCustomValidity('Email invalido');
	 }
}
console.log(validateEmail());
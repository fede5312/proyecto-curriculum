const nombre = document.getElementById("nombre")
const email = document.getElementById("email")
const mensaje = document.getElementById("mensaje")
const form = document.getElementById("formulario")
const parrafo = document.getElementById("warnings")

form.addEventListener("submit", e=>{
	e.preventDefault()
	let warnings = ""
	let entrar = false
	let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2.3})+$/
	parrafo.innerHTML = ""

	if(nombre.value.length <1){
		warnings += 'El nombre es invalido <br>'
		entrar = true
	}
	
	if (email.value.length <2){
		warnings += 'El correo es invalido <br>'
		entrar = true
	}

	if (mensaje.value.length <1){
		warnings += 'Por favor escriva un mensaje <br>'
		entrar = true
	}

	

	if (entrar) {
		parrafo.innerHTML = warnings
	}
	else{
		parrafo.innerHTML = "Enviado"
	}
	


})
















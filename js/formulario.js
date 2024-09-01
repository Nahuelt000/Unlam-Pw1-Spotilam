function validar_envio() {


if(document.form.Usuario.value.length==0) {
    alert("Tienes que escribir su nombre")
    document.form.Usuario.focus()
    return 0;
}

if(document.form.pass.value.length==0) {
    alert("Tienes que escribir una contraseña")
    document.form.pass.focus()
    return 0;
}

document.form.submit();

}


function validar_registro() {

    let usuario = document.formregistro['registrar-usuario'].value;
    let contrasena = document.formregistro['registrar-pass'].value;
    let contrasena2 = document.formregistro['registrar-pass2'].value;
    let fechaNacimientoRegistro = document.formregistro['registrar-fecha-nacimiento'].value;
    let edadRegistro = calcularEdad(fechaNacimientoRegistro);
    let regexp = /^[0-9a-zA-Z._.-]+\@[0-9a-zA-Z._.-]+\.[0-9a-zA-Z]+$/;

    if(usuario.length<4 || usuario.lenght>8) {
        alert("El nombre tiene que tener entre 4 y 8 caracteres");
        document.formregistro['registrar-usuario'].focus();
        return 0;
    }

    if(contrasena.length == 0) {
        alert("La contraseña no puede estar vacia");
        document.formregistro.contrasena.focus();
        return 0;
    } else if(contrasena !== contrasena2 ) {
        alert("Las contraseñas deben ser iguales");
        document.formregistro.contrasena.focus();
        return 0;
    }

    if(contrasena !== contrasena2 ) {
        alert("Las contraseñas deben ser iguales");
        document.formregistro.contrasena2.focus();
        return 0;
    }
    
	if ((regexp.test(document.formregistro.email.value) == 0) || (document.formregistro.email.value.length = 0))
	{
		alert("Introduzca una direccion de email valida");
		document.formregistro.email.focus();
		return 0;
	} 
	else 
	{
		var c_email=true;
	}

    if(isNaN(edadRegistro)){
        alert("Ingrese su fecha de nacimiento");
        document.formPerfil['registrar-fecha-nacimiento'].focus();
        return 0;
    }

    if(edadRegistro < 18){
        alert("Debes ser mayor de edad");
        document.formPerfil['registrar-fecha-nacimiento'].focus();
        return 0;
    }  


    document.formregistro.submit();
    
    }
    
    function validar_modificacion_perfil() {
        
        let usuario = document.formPerfil['perfil-usuario'].value;
        let contrasena = document.formPerfil['perfil-pass'].value;
        let contrasena2 = document.formPerfil['perfil-pass2'].value;
        let fechaNacimientoPerfil = document.formPerfil['perfil-fecha-nacimiento'].value;
        let edadPerfil = calcularEdad(fechaNacimientoPerfil);
        let regexp = /^[0-9a-zA-Z._.-]+\@[0-9a-zA-Z._.-]+\.[0-9a-zA-Z]+$/;
    
        if(usuario.length<4 || usuario.lenght>8) {
            alert("El nombre tiene que tener entre 4 y 8 caracteres");
            document.formPerfil['perfil-usuario'].focus();
            return 0;
        }
    
        if(contrasena.length == 0) {
            alert("La contraseña no puede estar vacia");
            document.formPerfil['perfil-pass'].focus();
            return 0;
        }
    
        if(contrasena !== contrasena2 ) {
            alert("Las contraseñas deben ser iguales");
            document.formPerfil['perfil-pass2'].focus();
            return 0;
        }

        if(isNaN(edadPerfil)){
            alert("Ingrese su fecha de nacimiento");
            document.formPerfil['perfil-fecha-nacimiento'].focus();
            return 0;
        }

        if(edadPerfil < 18){
            alert("Debes ser mayor de edad");
            document.formPerfil['perfil-fecha-nacimiento'].focus();
            return 0;
        }   
        
        if ((regexp.test(document.formPerfil.perfilEmail.value) == 0) || (document.formPerfil.perfilEmail.value.length = 0))
        {
            alert("Introduzca una direccion de email valida");
            document.formPerfil["perfilEmail"].focus();
            return 0;
        } 
        else 
        {
            var c_email=true;
        }
    
    
        document.formPerfil.submit();
        
        }
    
       let botonPagar = document.querySelector("#botonDos");
        botonPagar.addEventListener("click", function validar_pago() {
        
            let nombreYApellido = document.formPagar['nombreYApellido'].value;
            let tarjeta = document.formPagar['tarjeta'].value;
            let cvc = document.formPagar['cvc'].value;
            let fechaVencimiento = document.formPagar['fechaVencimiento'].value;
            let fechaVencimientoCalculada = calcularEdad(fechaVencimiento);
        
            if(!(/^[a-zA-Z]+\s[a-zA-Z]+$/.test(nombreYApellido))) {
                alert("Ingrese su nombre y apellido correctamente");
                document.formPagar['nombreYApellido'].focus();
                return 0;
            }
        
            if(!(/^\d{4}-\d{4}-\d{4}-\d{4}$/.test(tarjeta))) {
                alert("Ingrese el numero de su tarjeta correctamente");
                document.formPagar['tarjeta'].focus();
                return 0;
            }
    
            if(!(/^\d{3}$/.test(cvc))){
                alert("Ingrese el codigo de seguridad correctamente");
                document.formPagar['cvc'].focus();
                return 0;
            }

            if(isNaN(fechaVencimientoCalculada)){
                alert("Ingrese la fecha de vencimiento de su tarjeta");
                document.formPagar['fechaVencimiento'].focus();
                return 0;
            }
    
            if(fechaVencimientoCalculada >= 0){
                alert("Su tarjeta esta caducada");
                document.formPagar['fechaVencimiento'].focus();
                return 0;
            }   

            window.location.href = "./home.html";
            })    
           
        function calcularEdad(fecha_nacimiento) {
            let hoy = new Date();
            let cumpleanos = new Date(fecha_nacimiento);
            let edad = hoy.getFullYear() - cumpleanos.getFullYear();
            let m = hoy.getMonth() - cumpleanos.getMonth();
            if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
                edad--;
            }
            return edad;
        }

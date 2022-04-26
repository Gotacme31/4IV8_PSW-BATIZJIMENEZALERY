function validar(){
    let nombre,appat,apmat,tel,boleta,regnombre,regnum;

    nombre = document.getElementById('nombre').value;
    appat = document.getElementById('appat').value;
    apmat = document.getElementById('apmat').value;
    tel = document.getElementById('tel').value;
    boleta = document.getElementById('boleta').value;

    regnombre = /^[a-zA-Z ]*$/;
    regnum = /^[0-9]*$/;

    if(nombre === "" || appat ==="" || apmat === "" || tel === "" || boleta === ""){
        alert("No puedes enviar campos vacios")
        return false;
    }
    else if(nombre.length < 3){
        alert("El nombre es demasiado corto")
        return false;
    }
    else if (!regnombre.test(nombre)){
        alert("El nombre solo puede contener letras sin acentos.")
        console.log(nombre)
        return false;
    }
    else if(appat.length < 3){
        alert("El apellido paterno es demasiado corto")
        return false;
    }
    else if (!regnombre.test(appat)){
        alert("El apellido paterno solo puede contener letras sin acentos.")
        return false;
    }
    else if(apmat.length < 3){
        alert("El apellido materno es demasiado corto")
        return false;
    }
    else if (!regnombre.test(apmat)){
        alert("El apellido materno solo puede contener letras sin acentos.")
        return false;
    }
    else if(tel.length < 10){
        alert("El telefono es demasiado corto")
        return false;
    }
    else if (!regnum.test(tel)){
        alert("El telefono solo acepta números.")
        return false;
    }
    else if(boleta.length < 10){
        alert("La boleta es demasiado corta")
        return false;
    }
    else if (!regnum.test(boleta)){
        alert("La boleta solo acepta números.")
        return false;
    }
}
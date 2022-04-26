function validar(e){
    var datos = (document.all)?e.keycode : e.which
    if (datos==8) return true;  
    var caracteres=/[0-9\d .]/

    var probar = String.fromCharCode(datos);
    return caracteres.test(probar);
}
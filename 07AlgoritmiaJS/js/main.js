function validar2(){
    let  p3, uno, dos, tres, four, five, six, seven, eight, nine, p2;

    uno = document.getElementById('p2-x1').value;
    dos = document.getElementById('p2-x2').value;
    tres = document.getElementById('p2-x3').value;
    four = document.getElementById('p2-x4').value;
    five = document.getElementById('p2-x5').value;
    six = document.getElementById('p2-y1').value;
    seven = document.getElementById('p2-y2').value;
    eight = document.getElementById('p2-y3').value;
    nine =  document.getElementById('p2-y4').value;
    p2 = document.getElementById('p2-y5').value;

    regnum = /^[0-9]*$/;

    if(uno === "" || dos === "" || tres === "" || four==="" || five==="" || six==="" ||
        seven==="" || eight==="" || nine==="" || p2===""){
        alert("No puedes enviar campos vacios")
        return false;
    }
    else if (regnum.test(uno)){
        alert("los caracteres no son validos")
        return false;
    }
    else if (regnum.test(dos)){
        alert("los caracteres no son validos")
        return false;
    }
    else if (regnum.test(tres)){
        alert("los caracteres no son validos")
        return false;
    }
    else if (regnum.test(p2)){
        alert("los caracteres no son validos")
        return false;
    }
    else if (regnum.test(four)){
        alert("los caracteres no son validos")
        return false;
    }
    else if (regnum.test(five)){
        alert("los caracteres no son validos")
        return false;
    }
    else if (regnum.test(six)){
        alert("los caracteres no son validos")
        return false;
    }
    else if (regnum.test(seven)){
        alert("los caracteres no son validos")
        return false;
    }
    else if (regnum.test(eight)){
        alert("los caracteres no son validos")
        return false;
    }
    else if (regnum.test(nine)){
        alert("los caracteres no son validos")
        return false;
    }

 }

function validar1(){
    let p1;

    p1= document.getElementById('p1').value;
    regnombre = /^[a-zA-Z ]*$/;

    if( p1==="" ){
        alert("no ingresaste ningun dato")
        return false;
    }
    else if (!regnombre.test(p1)){
        alert("los caracteres no son validos")
        return false;
}
}
function validar3(){
    let p3_input;

    p3_input= document.getElementById('p3_input').value;
    regnombre = /^[a-zA-Z ]*$/;

    if( p3_input==="" ){
        alert("no ingresaste ningun dato")
        return false;
    }
    else if (!regnombre.test(p3_input)){
        alert("los caracteres no son validos")
        return false;
    }
}

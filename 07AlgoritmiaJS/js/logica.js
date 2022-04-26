// problema 1

function problema1(){

    //definir variables

    // guardamos toda la cadena de entrada
    let str = document.getElementById('p1').value;
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
    // creamos un arreglo de cada parada separada por un espacio
    let arr = str.split('');

    //invertimos la cadena
    let invertir= arr.reverse();

    let unidos=invertir.join("");

    //regresamos a la salida y quitamos las comas del reverse()
    document.getElementById('p1-output').textContent = textContent=unidos;
}

//problema 2

function problema2(){
    
    // definir variables

    //primer vector
    var x1 = parseFloat(document.getElementById('p2-x1').value);
    var y1 = parseFloat(document.getElementById('p2-y1').value);
    //segundo vector
    var x2 = parseFloat(document.getElementById('p2-x2').value);
    var y2 = parseFloat(document.getElementById('p2-y2').value);
    //tercer vector
    var x3 = parseFloat(document.getElementById('p2-x3').value);
    var y3 = parseFloat(document.getElementById('p2-y3').value);
    //cuarto vector
    var x4 = parseFloat(document.getElementById('p2-x4').value);
    var y4 = parseFloat(document.getElementById('p2-y4').value);
    //quinto vector
    var x5 = parseFloat(document.getElementById('p2-x5').value);
    var y5 = parseFloat(document.getElementById('p2-y5').value);

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

    regnum = /^[0-9]-*$/;

    if(uno === "" || dos === "" || tres === "" || four==="" || five==="" || six==="" ||
        seven==="" || eight==="" || nine==="" || p2===""){
        alert("No puedes enviar campos vacios")
        return false;
    }
    else if (!regnum.test(uno)){
        alert("los caracteres no son validos")
        return false;
    }
    else if (!regnum.test(dos)){
        alert("los caracteres no son validos")
        return false;
    }
    else if (!regnum.test(tres)){
        alert("los caracteres no son validos")
        return false;
    }
    else if (!regnum.test(p2)){
        alert("los caracteres no son validos")
        return false;
    }
    else if (!regnum.test(four)){
        alert("los caracteres no son validos")
        return false;
    }
    else if (!regnum.test(five)){
        alert("los caracteres no son validos")
        return false;
    }
    else if (!regnum.test(six)){
        alert("los caracteres no son validos")
        return false;
    }
    else if (!regnum.test(seven)){
        alert("los caracteres no son validos")
        return false;
    }
    else if (!regnum.test(eight)){
        alert("los caracteres no son validos")
        return false;
    }
    else if (regnum.test(nine)){
        alert("los caracteres no son validos")
        return false;
    }


    //se multiplican los vectores
    var res1 = x1*y1;
    var res2 = x2*y2;
    var res3 = x3*y3;
    var res4 = x4*y4;
    var res5 = x5*y5;

    //se suman los vectores
    var resF = res1+res2+res3+res4+res5

    //se imprime el resultado
    document.getElementById('p2-output').innerHTML =    ' Escalar 1 ' + res1 +
                                                        '<br> Escalar 2 ' + res2 +
                                                        '<br> Escalar 3 ' + res3 +
                                                        '<br> Escalar 4 ' + res4 +
                                                        '<br> Escalar 5 ' + res5 +
                                                        '<br> Resultado final ' + resF;

}

//problema 3

function problema3(){

    let p3_input;

    p3_input= document.getElementById('p3_input').value;
    regnombre = /^[a-zA-Z, ]*$/;

    if( p3_input==="" ){
        alert("no ingresaste ningun dato")
        return false;
    }
    else if (!regnombre.test(p3_input)){
        alert("los caracteres no son validos")
        return false;
    }

    
    //definir un alfabeto
    var alfabeto = ['A', 'B', 'C','D','E',
        'F','G','H','I','J','K','L','M',
        'N','Ñ', 'O', 'P','Q','R','S','T',
        'U','V','W','X','Y','Z']

    //vamos a obtener la entrada de los datos

    var p3_palabras = p3_input.split(',');
    

    //tengo que eliminar los espacios

    p3_palabras = p3_palabras.map(function (palabra){
        //crear una expresion que me recupere la palabra
        return palabra.replace(/\s/g, '').toUpperCase();
    });

    //tengo que calcular cuantos caraacteres unicos hay
    var p3_res = '';
    
    p3_palabras.forEach(function (palabra, i){
        //separar las palabras actuales del array que 
        //contiene cada letra de dicha palabra
        var letras_unicas = [];
        var palabra_array = palabra.split('');

        //iteraccion
        alfabeto.forEach(function (letra, j){
            //itero la palabra
            palabra_array.forEach(function (letras_palabras, k){

                //comprobara que la letra este dentro del alfabeto
                if(letras_palabras == letra){
                    //si la letra no la hemos contado, la agregamos
                    // a un array para contar las letras unicas

                    if(letras_unicas.indexOf(letra)<0){
                        letras_unicas.push(letra);
                    }
                }
            });
        });
        p3_res += 'Palabra: ' + palabra + ' = ' + letras_unicas.length + '\n';
    });
    document.querySelector('#p3-output').textContent = p3_res;

}
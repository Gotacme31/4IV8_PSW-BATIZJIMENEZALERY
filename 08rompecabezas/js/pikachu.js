//obtener las piezas

var piezas=document.getElementsByClassName('movil');

var tamWidth=[134,192,134,163,134,1637,134,192,134];

var tamHeight=[163,134,163,134,192,134,163,134,163];

for( var i=0; i<piezas.length; i++){
    piezas[i].setAttribute("width", tamWidht);
    piezas[i].setAttribute("heigth", tamHeight);
    piezas[i].setAttribute("x", Math.floor((Math.random()*10)+i));
    piezas[i].setAttribute("y", Math.floor((Math.random()*400)+i));
    piezas[i].setAttribute("onmousedown", "seleccionarElemento(evt");
}

var elementSelect= 0;
var currentY= 0;
var currentX= 0;
var currentPosY= 0;
var currentPosX= 0;

function seleccionarElemento(evt){
    elementSelect=reordenar(evt);
    currentX= evt.clientX;
    currentY= evt.clientY;
    currentPosX= parsefloat(elementSelect.getAttribute("x"));
    currentPosY= parsefloat(elementSelect.getAttribute("y"));
    elementSelect.setAttribute("onmousemove","moverElemento");
}

function moverElemento(evt){
    var dx= evt.clientX - currentX;
    var dy= evt.clientY - currentY;

    currentPosX= currentPosX + dx;
    currentPosY= currentPosY + dy;

    elementSelect = evt.clientX;
    elementSelect = evt.clientY;

    elementSelect.setAttribute("onmoseout", "desseleccionarElemento(evt");
    elementSelect.setAttribute("onmoseup", "desseleccionarElemento(evt");
    iman();

}

    function desseleccionarElemento(evt){
        //saber si ya esta en donde debe de estar la pieza
        testing();
        if(elementSelect!=0){
            elementSelect.removeAttribute("onmouseup");
            elementSelect.removeAttribute("onmouseout");
            elementSelect.removeAttribute("onmousemove");
            elementSelect = 0;
        }
    }

    var entorno = document.getElementById('entorno');

    function reordenar(evt){
        var padre  = evt.target.parentNode;
        var clone = padre. CloneNode(true);
        var id= padre.getAttribute('id');

        entorno.removeChild(document.getElementById(id));
        entorno.appendChild(clone);

        return entorno.lastChild.firstChild;
    }

    var origX= [200,304,466,200,333,437,200,304,466];
    var origY= [100,100,100,233,204,233,337,366,337];
    function iman(){
        for(var i=0; i<piezas.length; i++){
        if(Math.abs(currentPosX-origX[i])<15 
        && Maath.abs(currentPosY-origY[i])<15){
            elementSelect.setAttribute("x", origX[i]);
            elementSelect.setAttribute("y", origY[i]);
            }
        }
    }
    var win = document.getElementById("win");
    function testing(){
        var bien_ubicada=0
        var padres = document.getElementsByClassName('padre');

        for ( var i=0; i< piezas.lenght; i++){
            var posx=parseFloat(padres[i].firstChild.getAttribute("x"));
            var posy=parseFloat(padres[i].firstChild.getAttribute("y"));

            var ide = padres[i].getAttribute("id");
            if (origX[ide] == posx && origY[ide] == posy){
                bien_ubicada = bien_ubicada + 1;
            }
        }

        if ( bien_ubicada == 9){ 
            win.onplay();

        }
    }
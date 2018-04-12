
//document.body.appenChild(nod);}
var padre =document.getElementById("padre");
var nod=document.createElement("li");
var texto= document.createTextNode("cuatro");
nod.appendChild(texto);
padre.appendChild(nod);
document.body.appendChild(padre);
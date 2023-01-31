//documento javascript
function ejecucion(){
    document.getElementsByTagName("p")[0].onclick=saludo;    
}
function saludo(){
alert("esto es un aviso previo");

}
window.onload=saludo;
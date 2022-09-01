// // const like = document.querySelectorAll("#BtnLike");
// var suma = 0;

function maslike(){
    contador = document.querySelector(".bloque2 #gusta");
    suma = parseInt(contador.innerHTML);
    suma = suma +1;
    contador.innerText = suma + " " + "like(s)";
    console.log(suma);
    
    // like.innerHtml = `${contador}`;
    
// }
}

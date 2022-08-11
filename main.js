// lekérem a szükséges elementeket, hogy fűszerezzem egy kicsit az oldalt

var modal = document.getElementById("alapModal");
var modalButton = document.getElementById("modalButton");
var xButton = document.getElementsByClassName("closeButton")[0];  //itt ennél a résznél meggyűlt vele a bajom ,mivel tömbként kezeli, ha lenne több gomb is akkor meg kellene modanom, hogy melyik elemre reagáljon, ezért állítottam be az elsőt ami a "0" indexű
var greenButton = document.getElementsByClassName("greenButton")[0];
var redButton = document.getElementsByClassName("redButton")[0];





//alap dolgok megvannak, írok pár függvényt, hogy a display-t állítsa különböző klikkek e

function opening(){
    modal.style.display = 'block';
}
function closing(){
    modal.style.display = 'none';
    modal.classList.toggle('fading')
}
function outsideBox(i){ //random "i" indexet adtam
    if(i.target == modal){
        modal.style.display ='none';
    }
}

//megnyitas
modalButton.addEventListener("click", opening);
//bezaras
xButton.addEventListener("click", closing);
//boxon kívüli klikk
window.addEventListener("click", outsideBox);

 //további két gomb

 greenButton.addEventListener("click", closing);
 redButton.addEventListener("click", closing);

 
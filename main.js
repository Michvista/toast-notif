const btn = document.querySelector('.btn');
const card = document.querySelector('.cardCont');
const card2 = document.querySelector('.cardCont2');
const input = document.querySelector('input');
input.placeholder = "Marker"

const closebtn = document.querySelectorAll('.flex button');

let boolean = false;
function call() {

boolean ? card.style.right = '3%' : card2.style.right = '3%'

}

//let elem = Array.from(closebtn);
closebtn.forEach((x) => {
  x.addEventListener( 'click', () => {
    boolean ? card.style.right = '100%' :
      card2.style.right = '100%';
            
  })
})


/*function go() {
  boolean ? card.style.right = '100%' :
    card2.style.right = '100%';
}*/

// creo l'array contenente le immagini
const msImgContainer = ["img/01.webp","img/02.webp","img/03.webp","img/04.webp","img/05.webp",];

console.log(msImgContainer);

// creo il ciclo for per inserire le immagini nello slider







// creo la costante per richimare le immagini dello slider
const imgSlider = document.getElementsByClassName("ms_img");
console.log(imgSlider);

// creo la costante che mi permetterà di switchare tra le varie immagini la classe ms_active
// do alla costante un valore iniziale di 0 poichè al caricamento della pagina si trova all'elemento 0
let msActive = 0;

// creo la costante e le condizioni per il next
let msNext = document.querySelector(".ms_next");

msNext.addEventListener('click',

    function() {

        if (msActive < imgSlider.length -1) {
            // togli la classe ms_active all'immagine iniziale
            imgSlider[msActive].classList.remove('ms_active');

            // poi faccio incrementare msActive
            msActive++

            // così posso aggiungere la classe ms_active all'immagine successiva
            imgSlider[msActive].classList.add('ms_active')
        }

    }

)

// creo la costante e le condizioni per il prev
let msPrev = document.querySelector(".ms_prev");

msPrev.addEventListener('click',

    function() {

        if (msActive > imgSlider.length - imgSlider.length) {
            // togli la classe ms_active all'immagine attuale
            imgSlider[msActive].classList.remove('ms_active');

            // poi faccio decrementare msActive
            msActive--

            // così posso aggiungere la classe ms_active all'immagine precedente
            imgSlider[msActive].classList.add('ms_active')
        }

    }

)
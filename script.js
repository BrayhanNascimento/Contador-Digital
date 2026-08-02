let contador = 0;

const numero = document.querySelector("#numero");
const textominimo = document.querySelector("#mensagem");

const btndimiuir = document.querySelector("#btnDiminuir");
const btnreset = document.querySelector("#btnReset");
const btnaumentar = document.querySelector("#btnAumentar");

    btndimiuir.addEventListener("click", () => {
        if (contador > 0 ) {
            contador--;
            numero.textContent = contador;
            textominimo.textContent = "";               
            
            if (contador <= 5) {
                numero.style.color = "#f75a68";
            } else {
                numero.style.color = "#00b37e";
            }
        } 
    });

    btnreset.addEventListener("click", () => {
        contador = 0;
        numero.textContent = contador;
        textominimo.textContent = "";
        numero.style.color = "#f75a68";
    });

    btnaumentar.addEventListener("click", () => {
        if (contador < 10 ) {
            contador++;
            numero.textContent = contador;
            textominimo.textContent = "";

            if (contador <= 5) {
                numero.style.color = "#f75a68";
            } else {
                numero.style.color = "#00b37e";
            }
           
        } else {
            textominimo.textContent = "você só pode ir até 10";
            
        }

});

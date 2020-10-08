const Clock = document.querySelector(".clock");
const TimerStart = document.querySelector(".timerStart");
const TimerStop = document.querySelector(".timerStop");

numero = 0;
cada = 1000;

function Segundos() {
    function Temporizador() {
        Clock.innerHTML = numero;
        numero++;
    }

    Intervalo = setInterval(() => {
        Temporizador();
    }, cada);

    TimerStart.addEventListener("click", function () {
        Segundos();
        console.log("Clock Initiated")
    });

    TimerStop.addEventListener("click", function () {
        clearInterval(Intervalo);
    });
};


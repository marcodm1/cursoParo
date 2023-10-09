const fnSumar = (() => {
    let suma = 0;
    const sumar = () => {
        suma = document.getElementById("resultado").textContent;
        suma++;
        document.getElementById("resultado").textContent = suma;
    };

    return sumar;
})();
 
const fnRestar = (() => {
    let resta = 0;
    const restar = () => {
        resta = document.getElementById("resultado").textContent;
        resta--;
        document.getElementById("resultado").textContent = resta;
    };

    return restar;
})();

document.getElementById("sumarBoton").addEventListener("click", () => {
    fnSumar();
});
document.getElementById("restarBoton").addEventListener("click", () => {
    fnRestar();
});
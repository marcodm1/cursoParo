const fnSumar = (() => {
    let resultado = 0;
    const sumar = () => {
        resultado = document.getElementById("resultado").textContent;
        resultado ++;
        document.getElementById("resultado").textContent = resultado;
    };

    return sumar;
})();
 
const fnRestar = (() => {
    let resultado = 0;
    const restar = () => {
        resultado = document.getElementById("resultado").textContent;
        resultado--;
        document.getElementById("resultado").textContent = resultado;
    };

    return restar;
})();

document.getElementById("sumarBoton").addEventListener("click", () => {
    fnSumar();
});
document.getElementById("restarBoton").addEventListener("click", () => {
    fnRestar();
});
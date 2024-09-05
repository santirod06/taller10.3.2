addEventListener("DOMContentLoaded", function() {
const boton = document.getElementById("agregar");           /**************************************************************************/
const item = document.getElementById("item");               /************* guardamos en constantes los elementos del html *************/
const contenedor = document.getElementById("contenedor");   /******** para mas facilidad cuando los llamemos en las funciones *********/
const botonLimpiar = document.getElementById("limpiar");    /**************************************************************************/



function mostrarItems() {
    const nuevoItem = item.value.trim();    
    const lista = JSON.parse(localStorage.getItem("items")) || []; /* obtiene los items del localStorage, si no hay nada guardado usa una lista vacia y convierte el JSON a un array */
    if(nuevoItem !== '') /* comprueba si el valor del nuevo item no está vacío */ {
        lista.push(nuevoItem);  // agrega un nuevo item a la lista
        localStorage.setItem("items", JSON.stringify(lista));
        item.value = "";
    }
    
    contenedor.innerHTML = ""; /* limpia la lista para evitar que quede duplicado */
    lista.forEach /* recorre cada item en la lista */((item, index) => {
        const li = document.createElement("li");
        li.classList.add("list-group-item"); /* agrega una classe css a li para aplicarle un estilo de bootstrap */
        li.textContent = item;
        contenedor.appendChild(li); /* le pone el texto del item al contenido de li */                 
    });
}

boton.addEventListener("click", mostrarItems);    // al hacer click en el boton de agregar, se ejecuta la funcion mostrarItems

botonLimpiar.addEventListener('click', function() {
    localStorage.removeItem("items");       // borramos la lista del localStorage
    mostrarItems();     // actualiza la lista para mostrar los items guardados
});

mostrarItems(); /* llamamos a mostrarItems para actualizar la lista visible que ahora va a estar vacía */   

});     


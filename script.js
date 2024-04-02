/* Declaración de variables y funciones:

1)Se declara la variable menu_visible con el valor inicial false, que se utilizará para controlar la visibilidad del menú lateral.
2)Se obtiene una referencia al elemento del menú lateral utilizando document.getElementById("nav") y se almacena en la variable menu.
3)Se define la función mostrarOcultarMenu() para mostrar u ocultar el menú lateral cuando se hace clic en un botón.
4)Se recorren todos los enlaces del menú (<a> dentro de <nav>) y se les asigna un evento click que oculta el menú cuando se hace clic en ellos.
5)Se define la función crearBarra(id_barra) que crea barras de progreso para habilidades específicas identificadas por su ID.
6)Se seleccionan todas las barras de habilidades específicas (html, javascript, wordpress, photoshop, php, ilustrator) y se les aplican barras de progreso utilizando la función crearBarra(id_barra).
Animación de habilidades:

7)Se define la función efectoHabilidades() que se activa cuando el usuario hace scroll.
8)Se calcula la distancia de la parte superior de la ventana al elemento con ID habilidades.
9)Si la distancia es mayor o igual a 300 píxeles y la animación aún no se ha ejecutado (entro == false), se activa la animación.
10)Se utiliza setInterval para llamar repetidamente a la función pintarBarra() con un intervalo de 100 milisegundos para cada habilidad específica.
Función para pintar la barra de progreso:

11)La función pintarBarra(id_barra, cantidad, indice, interval) incrementa el contador correspondiente al índice de habilidad y pinta la siguiente barra de la habilidad específica.
Cuando se alcanza la cantidad total de barras de la habilidad, se detiene el intervalo asociado.
Evento de scroll:

12)Se asigna un evento onscroll a la ventana que llama a la función efectoHabilidades() cuando el usuario hace scroll, activando la animación de las barras de progreso de habilidades.
*/ 


//Menu lateral
var menu_visible = false;/* : Esta línea declara una variable llamada menu_visible y le asigna el valor false. Esta variable se utiliza para rastrear si el menú lateral está visible o no*/ 

let menu = document.getElementById("nav"); /* Esta línea selecciona el elemento del DOM con el ID "nav" y lo asigna a la variable menu. Este elemento representa el menú lateral en el HTML.*/ 

function mostrarOcultarMenu(){ /* Esta línea define una función llamada mostrarOcultarMenu. Esta función se encarga de mostrar u ocultar el menú lateral cuando se llama.*/
    if(menu_visible==false){//Esta línea verifica si la variable menu_visible es igual a false, lo que significa que el menú está oculto.
        menu.style.display = "block"; /*Si el menú está oculto, esta línea cambia el estilo CSS del menú para que se muestre cambiando su propiedad display a "block", lo que lo hace visible.*/ /*El elemento se convierte en un elemento de bloque: comienza en una nueva línea y ocupa todo el ancho.*/
        menu_visible = true; /*Después de mostrar el menú, esta línea actualiza la variable para indicar que ahora el menú está visible. */ 
    }
    else{
        menu.style.display = "none"; /*en este caso, esta línea cambia el estilo CSS del menú para ocultarlo estableciendo su propiedad display en "none" El elemento se elimina por completo, como si no estuviera en el código HTML en primer lugar.
        menu_visible = false;: Después de ocultar el menú, esta línea*/ 
        menu_visible = false;   //para indicar que el menú ahora está oculto.
    }
}

//oculto el menu una vez que selecciono una opción
/*La función querySelectorAll es un método de JavaScript que se utiliza para seleccionar todos los elementos en un documento HTML */ 
let links = document.querySelectorAll("nav a"); /* Esta línea selecciona todos los elementos <a> que están dentro de un elemento <nav> en el DOM y los almacena en la variable links. Estos enlaces representan las opciones del menú.*/
for(var x = 0; x <links.length;x++){ /* Este es un bucle for que recorre todos los elementos seleccionados en la variable links*/ /*length se utiliza en este contexto para obtener la cantidad de elementos seleccionados*/ /* links.length devuelve el número de enlaces que se han seleccionado en el documento. */
    links[x].onclick = function(){ /*Para cada enlace del menú, se asigna un evento onclick que se activa cuando se hace clic en él.*/
        menu.style.display = "none"; /* uando se hace clic en un enlace del menú, esta línea oculta el menú estableciendo su propiedad display en "none", lo que hace que desaparezca de la pantalla.*/ 
        menu_visible = false; /*  También se actualiza la variable menu_visible a false para indicar que el menú está oculto después de hacer clic en un enlace.*/
    }
}
/* En resumen, este fragmento de código JavaScript agrega un evento de clic a cada enlace del menú. Cuando se hace clic en un enlace, el menú se oculta y se actualiza la variable menu_visible para reflejar este cambio.*/


//Creo las barritas de una barra particular identificada por su id
//no se crea visualmente una barra de progreso en la página web de manera automática. Lo que hace esta función es crear los elementos HTML necesarios que representan la barra de progreso en el código subyacente de la página. Estos elementos se crearán dinámicamente en la estructura del DOM (Modelo de Objetos del Documento), pero para que sean visibles en la página, necesitarías algún tipo de estilo CSS para darles formato y posición adecuados.
//Entonces, cuando llamamos a la función crearBarra(id_barra), pasamos un elemento HTML existente como argumento. Este elemento actuará como el contenedor al que se agregarán las barras creadas dinámicamente utilizando appendChild()
function crearBarra(id_barra){ // pasamos como parametro id_barra id_barra es solo un nombre de variable y puede ser cualquier nombre que elijas
for(i=0;i<=16;i++){ /* Esto inicia un bucle for que se ejecutará 17 veces, comenzando desde 0 y terminando en 16. Esto se debe a que queremos crear 17 barras de progreso.*/
let div= document.createElement("div"); // En cada iteración del bucle, se crea un nuevo elemento HTML <div>  Este elemento <div> servirá como una de las barras de progreso.
div.className = "e"; //div.className = "e";: Se asigna la clase "e" al elemento <div> recién creado. La clase "e"  define los estilos específicos para las barras de progreso, como su apariencia visual. La cual creamos en CSS como  "habilidades .contenido-seccion .barra .e" 
id_barra.appendChild(div); /* 
appendChild es un método en JavaScript que se utiliza para agregar un nodo hijo al final de la lista de hijos de un nodo padre especificado.*/ /* id_barra.appendChild(div) agrega el elemento div como hijo del elemento identificado por id_barra. Esto significa que el nuevo elemento div se coloca como el último hijo dentro del elemento id_barra*/ 
}

/*
ej: DE COMO SE VERÍA:
<div id="html" class="barra"> PADRE
   HIJO <div class="e"></div> <!-- Primer div creado por el bucle for -->
    <div class="e"></div> <!-- Segundo div creado por el bucle for -->
    <!-- ... y así sucesivamente hasta el div número 17 -->
</div>
*/
}


//selecciono todas las barras generales par aluego manipularlas
//asignando cada elemento de barra de progreso a una variable utilizando document.getElementById(), y luego se llama a la función crearBarra() para cada uno de estos elementos.
let html = document.getElementById("html");
crearBarra(html);
let javascript = document.getElementById("javascript");
crearBarra(javascript);
let LenguajeC = document.getElementById("LenguajeC");
crearBarra(LenguajeC );
let FlexboxCSS= document.getElementById("FlexboxCSS");
crearBarra(FlexboxCSS);
let GridCSS = document.getElementById("GridCSS");
crearBarra(GridCSS);
let Bootstrap= document.getElementById("Bootstrap");
crearBarra(Bootstrap);





//Ahora voy a guardar la cantidad de barritas que se van a ir pintando por cada barar
//para eso utilizo un arreglo, cada posiciòn pertenece a un elemento
// Cada posición del array corresponde a una habilidad diferente Se inicializa en -1 para indicar que ninguna barra ha sido pintada aún
let contadores = [-1,-1,-1,-1,-1,-1];
//esta variable la voy a utilizar de bandera para saber si ya ejecuto la animación
let entro = false;

//función que aplica las animaciones de la habilidades
function efectoHabilidades(){
    var habilidades = document.getElementById("habilidades");
    var distancia_skills = window.innerHeight - habilidades.getBoundingClientRect().top; // window.innerHeight es una propiedad del objeto window que devuelve la altura interior del área de contenido visible del navegador en píxeles. Es decir, representa la altura del área visible del navegador en la ventana del usuario, excluyendo barras de desplazamiento, barras de herramientas y otros elementos de la interfaz del navegador.
    // window es el objeto global en el entorno de ejecución del navegador, y innerHeight es una de las propiedades de este objeto que proporciona información sobre la ventana del navegador. Cuando se utiliza la expresión window.innerHeight, se obtiene la altura del área de visualización del navegador en píxeles
      // habilidades.getBoundingClientRect().top calcula la distancia vertical entre la parte inferior de la ventana del navegador y la parte superior del elemento habilidades. Esto se puede interpretar como la distancia desde la parte superior del elemento habilidades hasta la parte inferior de la ventana del navegador.
      /* 
    getBoundingClientRect() es un método de JavaScript que se utiliza para obtener el tamaño y la posición de un elemento relativo a la ventana del navegador. Este método devuelve un objeto DOMRect con las siguientes propiedades:

    x: La coordenada x del borde izquierdo del rectángulo.
    y: La coordenada y del borde superior del rectángulo.
    width: El ancho del rectángulo.
    height: La altura del rectángulo.
    top: La distancia desde la parte superior del rectángulo hasta el borde superior del viewport.
    right: La distancia desde el borde izquierdo del rectángulo hasta el borde derecho del viewport.
    bottom: La distancia desde el borde superior del rectángulo hasta el borde inferior del viewport.
    left: La distancia desde el borde izquierdo del rectángulo hasta el borde izquierdo del viewport.
    Este método es útil para calcular la posición de un elemento en relación con la ventana del navegador y determinar si está dentro del área visible de la ventana o no.  */
    
    if(distancia_skills>=300 && entro==false){
        entro = true; // banedera cambia de estado a verdadero
        const intervalHtml = setInterval(function(){
            pintarBarra(html, 8, 0, intervalHtml);
        },100); 
        /* setInterval es una función de JavaScript que se utiliza para ejecutar repetidamente una función o un fragmento de código con un intervalo de tiempo específico entre cada ejecución.

        Se llama con dos argumentos:

        La primera es la función que se ejecutará en cada intervalo.
        La segunda es el tiempo, en milisegundos, que debe transcurrir entre cada ejecución de la función.
        Por ejemplo:

        javascript
        Copy code
        setInterval(funcion, tiempo);
        */
        
    /*
    Este código establece un intervalo de tiempo para ejecutar repetidamente una función específica. En este caso, la función pintarBarra() se ejecutará cada 100 milisegundos (0.1 segundos) dentro del intervalo.

    La función pintarBarra() se llama con los siguientes argumentos:

    html: es el identificador del elemento HTML al que se le aplicará la función.
    16: es la cantidad total de barras que se pintarán.
    0: es el índice de la barra que se pintará en este intervalo (en este caso, la primera barra).
    intervalHtml: es el identificador del intervalo de tiempo, que se utiliza para poder detener el intervalo cuando sea necesario.
    Entonces, este código ejecutará la función pintarBarra() cada 100 milisegundos, pintando una barra adicional en el elemento identificado como "html" en cada llamada, hasta que se pinten todas las barras o se detenga el intervalo.
        */ 
        const intervalJavascript = setInterval(function(){
            pintarBarra(javascript, 6, 1, intervalJavascript);
        },100);
        const intervalLenguajeC  = setInterval(function(){
            pintarBarra(LenguajeC , 10, 2, intervalLenguajeC);
        },100);
        const intervalFlexboxCSS = setInterval(function(){
            pintarBarra(FlexboxCSS, 8, 3, intervalFlexboxCSS);
        },100);
        const intervalGridCSS = setInterval(function(){
            pintarBarra(GridCSS, 5, 4, intervalGridCSS);
        },100);
        const intervalBootstrap = setInterval(function(){
            pintarBarra(Bootstrap, 6, 5, intervalBootstrap);
        },100);
    }
}



//lleno una barra particular con la cantidad indicada

/*id_barra: Es el identificador de la barra de progreso a la que se va a añadir una barra. Este identificador se utiliza para obtener los elementos HTML que representan las barras de progreso.
cantidad: Es la cantidad total de barras que se deben pintar en la barra de progreso.
indice: Es el índice que indica qué posición del arreglo contadores corresponde a esta barra de progreso en particular. Este índice se utiliza para seguir la pista del progreso de esta barra específica.
interval: Es el identificador del intervalo que se utiliza para la animación de la barra de progreso. Se pasa como argumento para poder detener el intervalo cuando se haya alcanzado la cantidad deseada de barras pintadas.
En cada llamada a esta función, el contador correspondiente al índice dado se incrementa en uno. Luego, se verifica si el contador es menor que la cantidad total de barras a pintar. Si es así, se seleccionan los elementos HTML de clase "e" dentro de la barra de progreso especificada por id_barra, y se pinta el siguiente elemento (determinado por el valor actual del contador) con un color específico. Este proceso continúa hasta que se hayan pintado todas las barras. Si se ha alcanzado la cantidad total de barras, se detiene el intervalo de animación utilizando clearInterval(interval).*/
function pintarBarra(id_barra, cantidad, indice, interval){
    contadores[indice]++;
    x = contadores[indice];
    if(x < cantidad){
        let elementos = id_barra.getElementsByClassName("e");
        elementos[x].style.backgroundColor = "#940253";
    }else{
        clearInterval(interval)
    }
}


//detecto el scrolling del mouse para aplicar la animación de la barra

/*window.onscroll: Esto establece un evento que se dispara cada vez que el usuario hace scroll en la ventana del navegador.
function() { efectoHabilidades(); }: Se define una función anónima que se ejecutará cada vez que ocurra el evento de scroll. Esta función llama a efectoHabilidades(), la cual se encarga de aplicar la animación de las barras de progreso cuando se cumplan ciertas condiciones.*/ 
window.onscroll = function(){
    efectoHabilidades();
}

/*Una función anónima es una función que no tiene nombre asociado. En JavaScript, se puede definir una función sin asignarle un nombre específico, lo que la convierte en una función anónima.

En este caso, function() es una función anónima que se asigna directamente a window.onscroll. No tiene un nombre específico, pero aún así puede ser utilizada como cualquier otra función. Las funciones anónimas son útiles cuando solo necesitas una función temporalmente o cuando deseas pasar una función como argumento a otra función.
*/ 






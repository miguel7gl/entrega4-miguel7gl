# Práctica 4: Consume un API REST JSON y visualizalo en un documento web


En esta práctica se va a crear una página web utilizando HTML, CSS y Javascript (vistos en las sesiones de clase) con la cuál se podrá interaccionar con una API REST y ver en el documento su información. A su vez también se utilizará el Framework CSS Bootstrap.

Para la realización de la práctica se ha decidido hacer una página que te diga el tiempo que hace en la ciudad que insertes en el buscador.

Se ha decidido utilizar la siguiente API: https://openweathermap.org/. 

En este caso se ha mejorado la página web creada para la anterior practica sobre una tematica relativa a una empresa del Indice Bursátil IBEX 35. En este caso se ha elegido realizar la de Caixabank.

El site contiene los siguientes elementos:

- Títulos

- Párrafos

- Imágenes

- Navbar

- Footer


El link de la página es la siguiente: https://miguel7gl.github.io/entrega4-miguel7gl/.

## Funcionamiento

Una vez entras en la página debes de intrducir el nombre de la ciudad que deseas buscar. Si introduces un nombre incorrecto saltará una alerta diciendo: Nombre incorrecto de la ciudad!

Si se introduce un lugar válido, al pulsar el botón se llamara a una función fetch que almacenará toda la información en una variable data. Apartir de ahi se van eligiendo y almacenando los diferentes valores que posteriormente aparecen en la página:

- Nombre de la ciudad
- Icono
- Temperatura
- Temperatura máxima
- Temperatura mínima
- Descripción
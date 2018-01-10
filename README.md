# <H1> LUNAR LANDING JAVASCRIPT

## Página web con hoja de estilos /css y aplicación javascript. 

En este ejercicio hemos realizado una página web donde podemos jugar a un juego creado con **_javascript_**.

En mi caso he basado el aspecto gráfico de la web, en el diseño realizado para el ejercicio anterior, además he solucionado los problemas de adaptación al móvil que tenia.

El problema era que al visualizar la web en el móvil, la imagen de la parte inferior no se veia en su lugar apropiado. Esto lo he solucionado moficiado el "**_height_**" de la división "**_D_**". Height en inglés significa altura, por lo tanto ese comando lo que hace es modificar la altura a la cual quedará la imagen y ahora ya si, la versión para móvil está bien adaptada.

El apartado de javascript lo he iniciado en base al esqueleto aportado en el enunciado del ejercicio, a partir de ahí he ido modificando funciones para lograr que la nave se comporte como se demanda. Ha sido un quebradero de cabezas dar con las soluciones a cada evento, pero al final pensando con lógica es más sencillo de lo que parece. Para conseguir una acción por ejemplo al tocar la nave el suelo, por lógica he modificado la función que le dice a la nave donde está el suelo, para temas de combustible lo mismo, tocar la función referente al combustible... y así con el resto.

El único problema que veo y del cual no estoy seguro de que sea fallo mío, es que al pasar el repositorio por rawgit para que sea visible en internet, la página da un error cuando entro en uno de los links y pulso el link creado para volver al inicio, es decir, entro al link "**_Instrucciones_**" sin problema, pero una vez ahi cuando pulso en el link que he creado yo de volver al inicio, la página tira un error "**_404 not found_**". El link está bien creado (<a href="index.html">Volver al inicio</a>) ya que es un enlace que apunta a otro html dentro de la misma ubicación, asique imagino que será un problema de rawgit.

Aquí está la validación de la página.

https://validator.w3.org/nu/?doc=https%3A%2F%2Frawgit.com%2FEdennn%2FLunar-javascript%2Fmaster%2Findex.html

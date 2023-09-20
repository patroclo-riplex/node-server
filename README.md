1. ¿Qué sucedio al usar async y await?
RTA: async y await hacen que el código asíncrono se vea y se comporte de manera similar al código síncrono, facilitando la legibilidad y mantenimiento del código. Al usar await, la ejecución espera a que la promesa se resuelva antes de pasar a la siguiente instrucción. Esto permite un estilo de programación más sincrónico en una función asíncrona.

2. ¿Qué sucedio al usar el método then()?
RTA:Al usar el método then(), estamos manejando la promesa usando una estructura de estilo de callback. La función dentro de then() se ejecuta cuando la promesa se resuelve correctamente, en otras palabras, usaremos then cuando se quiera manejar el resultado de una promesa o encadenar operaciones adicionales después de que la promesa se resuelva.

3. ¿Qué diferencias encontraste entre async, await y el método then()?
RTA: async/await es más legible y se asemeja a la programación síncrona, mientras que then() sigue un estilo de programación basado en callbacks. async/await es más conveniente y legible para trabajar con operaciones asincrónicas, especialmente cuando se necesita encadenar múltiples operaciones. then() es útil y ampliamente utilizado, pero puede llevar a un estilo de código más anidado.La elección entre ellos dependerá de la preferencia del usuario y de la estructura y complejidad del código. 

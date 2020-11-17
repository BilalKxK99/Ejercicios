# Ejercicio 2


## Tomar alguna de las funciones de prueba de Vercel, y hacer despliegues de prueba con el mismo


Como nuestro proyecto [GameStore](https://github.com/biilal1999/GameStore) está implementado con **Ruby**, usaremos dicho lenguaje para la función de prueba.


La función la hemos sacado de un ejemplo de *vercel*, como pueden comprobar [aquí](https://vercel.com/docs/serverless-functions/supported-languages#ruby), y está en el archivo [date.rb](https://github.com/biilal1999/Ejercicios/blob/master/api/date.rb).


Una vez implementada la función, habiendo hecho **push** a nuestro repositorrio y desplegado con `vercel --prod`, vemos los detalles de la función



![Detalles](https://github.com/biilal1999/Ejercicios/blob/master/tema5/img/VercelFunctionDetails.png)



Y el **log** del despliegue



![log](https://github.com/biilal1999/Ejercicios/blob/master/tema5/img/VercelLog.png)



En la siguiente imagen podemos ver una prueba del funcionamiento de la función



![prueba](https://github.com/biilal1999/Ejercicios/blob/master/tema5/img/VercelPrueba.png)




[Aquí](https://ejercicios-seven.vercel.app/api/date.rb) pueden acceder ustedes mismos al resultado de la función en **tiempo real**, además de comprobar con varias **peticiones HTTP**, que la hora se va actualizando correctamente.





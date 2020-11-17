# Ejercicio 1


## Darse de alta en Vercel y Firebase, y descargarse los SDKs para poder trabajar con ellos localmente.


### Firebase

 
En la web oficial de [Firebase](https://firebase.google.com/?hl=es-419) nos damos de alta creando un proyecto, como se puede ver en la siguiente imagen


![AltaFirebase](https://github.com/biilal1999/Ejercicios/blob/master/tema5/img/Firebaseprimera.png)


Instalamos el **SDK de Firebase** localmente con el comando `npm install -g firebase-tools` 


![Tools](https://github.com/biilal1999/Ejercicios/blob/master/tema5/img/FireBaseStarted.png)


Y con el comando `firebase login` iniciamos sesión localmente con nuestro correo electrónico.


![Login](https://github.com/biilal1999/Ejercicios/blob/master/tema5/img/FirebaseLogin.png)



Ahora, vemos como hemos enlazado nuestra cuenta de *Firebase* con la de **GitHub**


![GitHub](https://github.com/biilal1999/Ejercicios/blob/master/tema5/img/FirebaseGitHub.png)



[Aquí](https://console.firebase.google.com/project/ejercicios-99/overview?hl=es-419) tienen nuestro perfil de **Firebase**


### Vercel


Primero, nos damos de alta en **Vercel**, enlazando nuestra cuenta con la de **GitHub**


![AltaPrimera](https://github.com/biilal1999/Ejercicios/blob/master/tema5/img/VercelAlta.png)



![AltaSegunda](https://github.com/biilal1999/Ejercicios/blob/master/tema5/img/VercelAltaSegunda.png)



Ahora, elegimos importar este mismo [repositorio](https://github.com/biilal1999/Ejercicios)


![importar](https://github.com/biilal1999/Ejercicios/blob/master/tema5/img/VercelAltaTercera.png)



Lo siguiente, **localmente** hablando, será instalar *vercel* con el comando `npm i -g vercel` , para acto seguido poner en marcha vercel con el comando `vercel`


![vercel](https://github.com/biilal1999/Ejercicios/blob/master/tema5/img/VercelCorreo.png)



Una vez aceptamos el correo electrónico de **confirmación de nuestra cuenta**, volvemos a poner en marcha *Vercel* para especificar la **carpeta local de trabajo**, y desplegamos con `vercel --prod`



![Desplegar](https://github.com/biilal1999/Ejercicios/blob/master/tema5/img/VercelDeploy.png)



Por último, confirmamos en nuestro **Dashboard**, que hemos desplegadp Vercel correctamente


![Dashboard](https://github.com/biilal1999/Ejercicios/blob/master/tema5/img/VercelDashboard.png)



[Aquí](https://vercel.com/biilal1999) tienen nuestro perfil de **Vercel**

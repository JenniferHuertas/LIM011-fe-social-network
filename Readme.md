# Creando una Red Social

Bienvenida a tu primer proyecto del track de Frontend en Laboratoria.

En este proyecto construirás una red social, cuya temáticas dejaremos a tu elección.

Aquí algunas ideas para inspirarte:

- Alimentación

Para implementar tu aplicación usarás *HTML5*, *CCS3* o *SASS*, *Vanilla JavaScript(ES6+)*, *Firebase* o *LocalStogarge*

## Objetivo

El objetivo de este proyecto es construir una Red Social, Single-Page Application (SPA), responsiva en la que podamos escribir, leer, actualizar y eliminar datos.

### Planificación

* Te recomendamos utilizar *projects*, *issues* y *milestones* de GitHub para gestionar la planificación de tu proyecto. Estos recursos serán la fuente de organización de tu equipo y a través de estas herramientas tus coaches podrán ver el avance del proyecto y darte feedback.

* Adquirir la disciplina de la completitud, terminando una historia de usuario antes de pasar a la siguiente (es decir, que cumple con *Definición de Terminado* y *Criterios de Aceptación* contemplando todos los puntos que son objetivos de aprendizaje para este proyecto).

### Desarrollo frontend

#### Arquitectura de la aplicación

- Diseñar la arquitectura de tu aplicación, modularizando tu código a través de *es modules* ([`import`](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/import) y [`export`](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/export))

- Familiarizarte con el patrón modelo - vista - controlador ([MVC](https://es.wikipedia.org/wiki/Modelo%E2%80%93vista%E2%80%93controlador)).

#### Tecnologías HTML5 y CSS3/SASS

* Aplicar HTML5 semántico en tu proyecto.
* Aplicar y reforzar los conceptos fundamentales de CSS3.
* Implementar selectores de clase evitando la redundancia de estilos en CCS3.
* Utilizar `flexbox` para lograr un diseño `mobile first`, implementando un layout que te permita crear un diseño adaptativo para **mobile y desktop**

A continuación te proporcionamos el layout (diseño) de la vista mobile y desktop que deberás replicar visualmente y cuyo contenido, colores y fuentes de texto, dejaremos a tu elección.

* Vista mobile

![mobile](https://user-images.githubusercontent.com/32286663/56174616-ec9f6100-5fb8-11e9-9edb-d5ef7c251d9c.png)

* Vista Desktop

![desktop](https://user-images.githubusercontent.com/32286663/56174626-fcb74080-5fb8-11e9-8854-26e8d9c4e25f.png)

#### JavaScript (ES6+)

* Utilizar modulos de ES6 para poder modularizar tu código JavaScript.
* Reforzar tu conocimiento sobre el uso de Template literals (Template strings).
* Reforzar tu conocimiento de la manipulacion de los elementos del DOM a traves JavaScript.
* Implementar un sistema de rutas para cambiar de una vista a otra de manera dinámica (SPA).
* Testear la lógica de tu aplicación, con Jest cuidando que el coverage pase el 90% de statements (sentencias), functions (funciones), lines (líneas), y branches (ramas).

### Persistencia de datos

En los proyectos anteriores solo has consumido (leído) datos, por ejemplo, a través de un archivo `json` o utilizando `fetch`.

En este proyecto diseñarás la estructura de esos datos, la forma de consultarlos, actualizarlos, modificarlos y eliminarlos según los requerimiento del usuario. Para llevarlo a cabo utilizaras `Firestore` de `Firebase` o `LocalStogarge` una `Web Storage API`

#### Firebase

El objetivo de usar Firestore en este proyecto, es que aprendes a manejar y persistir datos a traves de una base de datos no relacional, en tiempo real y puedas implementar operaciones CRUD (Creación, Lectura, Actualización y eliminación) de datos.

* La **planificación es vital**, para ello te recomendamos utilizar el flujo de trabajo colaborativo que nos ofrecen los projects de GitHub, para que puedas **escribir tus definiciones de terminado** y **criterios de aceptación** por cada historia de usuario con el objetivo que determinen, en equipo, **qué hacer** en el sprint y **cómo se realizará**.

* Para que todas las miembros de tu equipo puedan lograr los objetivos de aprendizaje, deberán determinar cuál será la estrategia de desarrollo que utilizarán: división por sub-historias, pair programming, code reviews, etc.

## Restricciones Técnicas

* Debes utilizar `flexbox` para posicionar tus elementos. No está permitido el uso de frameworks de CCS (bootstrap), ni de componentes flotantes.

* Ya te damos un diseño (layout) de la vista mobile y desktop, queremos que lo repliques a nivel *pixel perfect*, el contenido, paleta de colores y fuentes, depende de la temática que van a elegir como equipo. La implementación de ese layout deberá formar parte de la *definición de terminado* de tus historias de usuario.

* Los test son **fundamentales** y deberán formar parte de tu definición de terminado, te recomendamos que comiences a implementarlos desde el comienzo.

## Objetivos de Aprendizaje

Antes de empezar el proyecto, recuerda agregar tus objetivos de aprendizaje pendientes de tu proyecto anterior en la siguiente sección.

## Objetivos de Aprendizaje Pendientes

[ ] Manipular arrays (filter | map | sort | reduce). 
[ si ] Entender el uso de bucles (for | forEach). 
[ ] Entender la diferencia entre expression y statements. 
[ ] Utilizar funciones (parámetros | argumentos | valor de retorno). 
[ si ] Utilizar ES Modules (import | export).

## HTML y CSS

[ si ] HTML semántico
[ ] CSS flexbox
[ si ] Construir tu aplicación respetando el diseño realizado (maquetación).

## DOM y Web APIs

[ si ] Manipulación dinámica del DOM
[ ] History API

## Javascript

[ si] Uso de callbacks
[ si] Consumo de Promesas
[ si ] Uso ES modules (import | export)

## Firebase

[si ] Firestore
[si ] Firebase Auth
[ ] Firebase security rules
[ si] Uso de onSnapshot | onAuthStateChanged

## Testing

[si ] Testeo de tus funciones
[si ] Testeo asíncrono
[si ] Mocking

## Colaboración en Github

[ si ] Branches
[ si ] Pull Requests
[ ] Tags

## Organización en Github

[ si ] Projects
[ si ] Issues
[ ] Labels
[ ] Milestones

## Buenas prácticas de desarrollo

[ si ] Modularización
[ si ] Nomenclatura / Semántica
[ si ] Linting



contenido original del readmde partenece a Tutor: Gorka Villar:

	** Javascript - Introducción - Sesión 1

	- ES UN LENGUAJE INTERPRETADO

		> a diferencia como otros lenguajes se interpreta en el momento de la eJecución, hay lenguajes como java, .net, C++ etc que son lenguajes compilados, es decir que se procesan previamente antes de la ejecución y dan como resultado código compilado, como son algunas librerías, ejecutables, etc

		> los lenguajes compilados tienen una depuración de errores previa a la ejecución (en la compilación) y los interpretados no.

		> la ventaja de un lenguaje interpretado es que es más fácil de mantener, depurar y desarrollar en multiplataforma

		> los lenguajes compilados suelen tener una ejecución más rápida

	- FULL STACK: tenemos intérpretes a ambos lados del servidor web, por lo tanto es un lenguaje que se usa tanto en servidor como en Cliente
		> en CLIENTE (FRONT) lo interpretan los navegadores
		> en SERVIDOR (BACK) necesitaremos un interprete que tenemos que instalar, un software o entorno de producción como nodeJS
		> Vemos como es una estructura cliente - servidor (imagen 1)

	- SE ESCRIBE Y SE EDITA EN FICHEROS DE TEXTO CON EXTENSIÓN .js
		> Podemos editar un archivo con un bloc de notas o nuestro IDE preferido, nosotros en este curso vamos a usar Visual Studio Code, que es un IDE de código abierto desarrollado por Microsoft y que tiene muchos usuarios, extensiones y una gran comunidad.

		> Instalamos VSC y las principales extensiones

		Dentro de estas librerías que podríamos instalarnos para optimizar nuestro desarrollo con JS, las podríamos dividir en las siguientes categorías:

		* Snippets: nos ayudará a acelerar nuestro desarrollo mediante el uso de abreviaturas
		* Syntax Highlighting: nos facilitará la detección de cierto código por cambios en su formato, como por ejemplo el color
		* Linter: detección de errores predefinidos en nuestro código
		* Formatting: formateo de nuestro código
		* Browser: relacionados con el navegador y nuestro editor
		* Framework/librería: referentes a frameworks y librerías específicas como react, vue, angular, node…
		* Testing: nos facilitará la creación y depuración con tests


	Creamos un archivo .js para que lo interprete un navegador

	1. Crearemos una carpeta curso-javascript/sesion1/frontend y dentro de ella un archivo hola.js
	2. Abriremos VSC y la carpeta, escribiremos console.log(“hola mundo”);
	3. Crearemos un archivo index.html y le añadiremos el <script src=”holamundo.js”></script>
	4. Vemos como el navegador interpreta el JS, primero console>alert luego alert>console

	DEFINICIÓN DE JS
	https://es.wikipedia.org/wiki/JavaScript

	JavaScript (abreviado comúnmente JS) es un lenguaje de programación
	> interpretado
	> dialecto del estándar ECMAScript
	> Se define como orientado a objetos,2​ basado en prototipos
	> imperativo
	> débilmente tipado y dinámico.

	-- Dialecto de ECMAScript

	> Otro punto importante es que JS es un dialecto del estándar ECMAScript, hasta 2015 se usaba normalmente la versión ES5 y desde 2015 se ha ido incorporando la versión ES6 que permite una serie de funcionalidades que iremos viendo a lo largo del curso.

	> NodeJS y Chrome interpretan ES6 (casi en su totalidad) 
		-- Ver tabla de compatibilidades EN https://kangax.github.io/compat-table/es6/

	> Analizamos algunas de las diferencias en RunJS
		-- Nos instalamos RUNJS y vemos alguna diferencias entre ES5 y ES6
		-- Vemos rápidamente como usar RunJS
	

	Otra cosa interesante es que es un lenguaje imperativo
	Las instrucciones se ejecutan unas tras otras, de manera secuencial, salvo cuando se encuentran estructuras de control condicionales o bucles.

	Es un lenguaje débilmente tipado
	Porque no se controla el tipo de variables que se declaran, y una función podría recibir como parámetro un número o una cadena de texto.....

	Es un lenguaje con un tipado dinámico
	Quiere decir que el tipo está asociado al valor no a la variable!
	Una variable “cosa” puede estar ligada a un número y posteriormente a una cadena de texto.

	Una forma de saber qué es, o qué tipo tiene una variable es vía Duck Typing... con la palabra clave typeof.

	“Cuando veo un ave que camina como un pato, nada como un pato y suena como un pato, a esa ave yo la llamo un pato."

	Esto lo veremos en la siguiente sesión de manera más completa.

Utiliza prototipos para el uso de la herencia.
JavaScript usa prototipos en vez de clases para el uso de herencia.

Javascript es un lenguaje estructurado
La programación estructurada se define como una técnica para escribir lenguajes de programación que permite sólo el uso de tres tipos de sentencias o estructuras de control:
* Sentencias secuenciales.
* Sentencias selectivas (condicionales).
* Sentencias repetitivas (iteraciones o bucles).

Javascript corre en un solo hilo y permite conexiones asíncronas

Es parte del motor de imlementación de Javascript como el V8 Chrome y nodeJS

no es importante conocer estos motores pero si es importante saber que existe más de uno
cuales??????

Javascript se ejecuta en un solo hilo, esto significa que solo se puede ejecutar una instrucción a la vez.

Pero.... como puede ser que la ejecución sea en un solo hilo y asíncrona?

el event loop es al parte del motor de JS que se encarga de ordenar y en qué posición se ejecutan todas las peticiones

el lenguaje de javascript está dirigido por eventos, el event loop espera y si ve alguna tarea la ejecuta, la termina y va a por otra tarea, es un ciclo sin fin que ejecuta tareas.

 Introducción a NodeJS y NPM
  * ¿Qué es NodeJS?
	> NodeJS es un entorno de ejecución multiplataforma Windows, Mac, Linux de código abierto y gratuito para desarrollar aplicaciones web, tanto en servidor como en cliente, y sobre todo para la interacción entre ambas (Full Stack Development)

Ahora que le hemos dado una vuelta a JS en cliente y servidor, y hemos instalado NODEJS podemos afirmar que node es un intérprete de JS?

Si, nodeJS es un intérprete de JS, pero es algo más es un entorno de tiempo de ejecución de Javascript. Este entorno de tiempo de ejecución en tiempo real incluye todo lo que se necesita para ejecutar un programa escrito en JavaScript

Es nodeJS un lenguaje de programación ? NONONONO
Es un framework? NONONONO

Es un software instalable que permite ejecutar JS en Servidor, crear un servidor web y servir código al cliente. Es un entorno completo para el desarrollo Full Stack

* La compilación de Node.js se realiza en tiempo de ejecución, Just In Time (JIT), esto trae consigo una mayor optimización a las funciones que más veces sean llamadas.
* Mediante clusters permite tener una escalabilidad alta.
* Podemos expandir nuestro código añadiendo módulos de forma fácil gracias al Node Package Manager (NPM).
* Un alto rendimiento en proyectos donde necesitemos ejecución en tiempo real.
* En startups o equipos pequeños podremos realizar front-end, back-end y hasta una aplicación móvil con un mismo lenguaje.

  * ¿Qué es NPM y qué competencia tiene?
  > es el gestor de módulos/paquetes de nodeJS

  * Instalación de NodeJS y NPM


Vamos a instalar nodeJS, se descarga de la web la versión TLS, en Windows es un ejecutable.
Se ejecuta, es posible que se tenga que reiniciar, y es posible que se tenga que añadir el PATH porque a veces no lo añade la instalación.

Consola (vemos que está inslalado pidiendo la versión en la consola)

node -v
v14.17.6

npm -v

¿Qué es un archivo JSON?
JSON (JavaScript Object Notation) es un formato ligero de intercambio de datos. JSON es de fácil lectura y escritura para los usuarios

npm init,
node index.js >> 'hola mundo'


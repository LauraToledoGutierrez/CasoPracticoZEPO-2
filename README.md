# CasoPracticoZEPO-2

## Proposito y alcance del proyecto

Haciendo uso de TypeScript dentro de un framework de backend basado en JavaScript, realizar un desarrollo que haga uso del patrón Singleton. Realice también una prueba que identifique el correcto funcionamiento del patrón, creando dos variables que escriban por consola si ambas instancias son iguales o no.

## Herramientas y tecnologías utilizadas

- Typescript
- Express
- Axios

## Entorno de desarrollo

- src/  
    - singletonConfig.ts
    - index.ts
- package.lock.json
- package.json
- tsconfig.json 

## Implementación

Se ha optado por la implementacion de la clase "singletonConfig" dentro del archivo singletonConfig.ts, esta clase es la encargada de replicar el patron Singleton. Este es un patrón que restringe la instanciacion de una clase a un solo objeto. Esto es importante para la hora de coordinar acciones a traves de una aplicacion. 

Por último en index.ts simula un caso de como implementar y utilizar el patron Singleton en una aplicacion Express. Se crean dos instancias y se verifican si son iguales o no, mostrando por consola el resultado. Si sale que son iguales, es que ha funcionado correctamente. 

Adicionalmente dentro del "tsconfig.json" se han descomentado algunos metodos que he considerado importantes para facilitar el desarrollo. 

## Manual de usuario

### Requisitos previos

Hay que tener instalado en nuestra maquina Node.js y npm.

### Configuracion y ejecucion

#### Instalar dependencias

Una vez tengamos clonado el repositorio en nuestra maquina local, debemos situarnos dentro del directorio y realizar la instalacion de las dependecias definidas en el archivo package.json haciendo uso del comando 'npm install'.

### Iniciar

Para iniciar la aplicación, hay que ejecutar el comando 'npm start'. Una vez iniciado el programa a podemos acceder a la URL "http://localhost:3000/api/config"
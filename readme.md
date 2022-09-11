# Tabla de contenido

- [Tabla de contenido](#tabla-de-contenido)
- [Descripción](#descripci-n)
- [Clases](#clases)
  * [Clase 01](#clase-01)
    + [Notas](#notas)
    + [Resultado](#resultado)
- [Notas importantes](#notas-importantes)
- [Problemas frecuentes](#problemas-frecuentes)
- [Referencias](#referencias)




# Descripción
Proyecto para probar las nociones del curso de react

# Clases

## Clase 01
### Notas
- React no es una framework, es una librería
- package.json tiene todoa la configuración del proyecto
- En package.json tambien estan las dependencias
- todo lo que esta en node_modules es lo que se indico en las dependencias
- browserList, indica si el uso es mayor a 0.2% es donde funcionara
```json
# file: package.json>browserlist
...
 "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
...
```
- el archivo package-lock.json, recaba la ultima información de como se configuró el proyecto
- no es necesario subir node_modulos, en si lo que este indicado en .gitignore que se crea a crear el proyecto react
- index.js mete la aplicación con react en root el cual se definio en el archivo index.html del public, pero en donde se trabajara es en App.js
- Para el curso solo se usará los componentes por clases
- Los componentes en react esta hechos con funciones, entonces se puede crear una función que regrese el html separandolo despues

```js
...
function App() {
  return (
    <div className="App">
      {/*lo que se extraera*/}
      Hola Mundo
      <br/>
      <img src={holamundo} />
      {/*lo que se extraera*/}
    </div>
  );
}
...
```

```js
//se separo el contenido en esta función
...
const createContent=()=>{
  return (
    <>
    Hola Mundo
    <br/>
    <img src={holamundo} />
    </>
  )
}

function App() {
  return (
    <div className="App">
      {createContent()}
    </div>
  );
}
...
```
### Resultado
<img src="captures_web_preview/clase01.png">

# Notas importantes
- Para agregar comentario en el html 
```js
 {/*comentario*/}
```
- Para agregar imágenes se importa indicando su ruta y luego se usa lo que se importó

```js
import holamundo from './holamundo.jpeg'
...
  return (
    ...
    <img src={holamundo} />
    ...
  );
...
```
- React site https://es.reactjs.org/


```cmd
## Crear aplicación
npx create-react-app curso-reat-v18

## Lanzar
npm start
```


# Problemas frecuentes

- 

# Referencias

- Documentación de react 
https://es.reactjs.org
- TOC para Markdowm 
http://ecotrust-canada.github.io/markdown-toc/

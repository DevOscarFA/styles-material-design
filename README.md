# Estilos de Material Design

El proyecto de Estilos de Material Design esta creado para generar los archivos css y js minificados y organizados en las carpetas
correspondientes, el objetivo es poder integrar los estilos de material con otros estilos en un solo archivos para que al momento
de cargar la pagina, este lo mas optimizada.

En esta descripción estan los pasos básicos para ejecutar el proyecto.

## Configuración

Antes de trabajar con los estilos de material vamos a requerir de siertas herramientas de trabajo como es npm, gulp y de las dependencias 
necesarias para poder hacer la compilación de los archivos.


### Instalación de NodeJS

Primero necesitamos antes de todo instalar en nuestros equipos [nodejs](https://nodejs.org/en/), el cual se va a encargar de realizar 
la compilación con las liberias que usaremos más adelante.

### Instalación de gulp

Gulp.js es un build system(sistema de construcción) que permite automatizar tareas comunes de desarrollo, tales como la minificación de 
código JavaScript, recarga del navegador, compresión de imágenes, validación de sintaxis de código y un sin fin de tareas más.

Para instalar gulp, en nuestra terminal de comandos colocamos los siguiete.

```
npm install gulp -g
```

#### Instalar el proyecto

Vamos a clonar el proyecto, para ello debemos tener [instalado git](https://git-scm.com/) y ejecutanos las siguientes lienas de código.

```
git clone https://github.com/oscarfedezal/material-design-styles
```

Una vez que termine  la descarga del proyecto procedemos a instalar las dependencias necesarias para ejecutar gulp, para ello realizamos 
lo siguiente.

```
npm install
```

Con esto ya podemos correr gulp y asi generara los archivos minificadorn dentro de la arpera *public_html*

```
gulp
```

Si tiene comentarios preguntas o se presento un problema, usa los issues de este proyecto y con gusto de responderemos.

## Autor

Oscar Fernandez Alzate [@oscar_fedezal](https://twitter.com/oscar_fedezal)

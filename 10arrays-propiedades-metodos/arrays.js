// https://www.youtube.com/watch?v=CEsW5ws700k&list=PLROIqh_5RZeBAnmi0rqLkyZIAVmT5lZxG&index=11
// Array
//      

let array1 = [1,2,3,4,5]

const numbers = document.getElementById('numbers');
const result = document.getElementById('result');

numbers.textContent = (`let array1 = [1,2,3,4,5]`)
result.textContent = (`nuestro array es: nums = ${array1} `)


/*     Propiedad

    array1.lenght        devuelve el numero de objetos del array
 */

/*     Métodos

    array1.isArray      devuelve true si la variable es un array
 */
/*  array1     -----    Eliminar elementos
          .shift()  -   Elimina el primer elemento del array y devuelve ese elemento
          .pop      -   Elimina el ultimo elemento i devuelve ese elemento
 */
/*  array1     -----    Añadir elementos
          .push(ele1, ele2, ele3, ...)  -   Añade 1 o mas elementos al final del array
          .unshift(ele1, ele2, ele3, ...)  -  añade 1 o mas elementos al inicio del array
 */
/*  array1     -----    Añadir elementos
          .indexOf(valor)  -   devuelve el inice del primer elemento del array que coincida con el valor o -1 si no encuentra nada
 */
/*  array1     -----    Añadir elementos
          .lasrIndexOf(valor)  -   devuelve el inice del ultimo elemento del array que coincida con el valor o -1 si no encuentra nada
 */
/*  array1     -----    Añadir elementos
          .reverse()  -   invierte el orden de los elementos del array
 */
/*  array1     -----    Añadir elementos
          .join('separador')  -   devuelve un string que separa los elementos con el separador, por defecto coma
 */
/*  array1     -----    Añadir elementos
          .splice(a,b,item)  -   modifica el contenido de un array cambiando unos elementos por otros
          a - indice inicio para eliminar
          b - numero de elementos a eliminar (opcional)
          item - elementos añadidos (opcional)     
 */
/*  array1     -----    Añadir elementos
          .slice(a,b)  -   extrae los elementos de un array desde el indice a al indice b
 */

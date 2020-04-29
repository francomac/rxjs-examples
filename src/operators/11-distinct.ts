import { of, from } from 'rxjs';
import { distinct } from 'rxjs/operators';


const numeros$ = of<number | string>(1,1,'1',2,3,4,5,5,1,6,2,'1');

numeros$.pipe(
    distinct()
)
.subscribe(console.log)

interface Personaje {
    nombre: string
}

const personajes: Personaje[] = [
    { nombre: 'Goku'},
    { nombre: 'Picolo'},
    { nombre: 'Vegeta'},
    { nombre: 'Vegeta'},
    { nombre: 'Picolo'},
    { nombre: 'Goku'},
    { nombre: 'Krilin'},
    { nombre: 'Picolo'},
    { nombre: 'Vegeta'}
]

from(personajes).pipe(
    distinct( p => p.nombre)
)
.subscribe(console.log)
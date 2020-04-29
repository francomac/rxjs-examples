import { of, from } from 'rxjs';
import { distinctUntilChanged, distinctUntilKeyChanged, distinct } from 'rxjs/operators';


const numeros$ = of<number | string>(1,'1',1,2,2,3,3,4,5,5,1,6,2,'1');

numeros$.pipe(
    distinctUntilChanged()
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
    { nombre: 'Goku'},
    { nombre: 'Picolo'},
    { nombre: 'Vegeta'}
]

from(personajes).pipe(
    distinctUntilChanged( (ant, act) => ant.nombre === act.nombre)
)
.subscribe(console.log)
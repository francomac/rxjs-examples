import { from } from 'rxjs';
import { distinctUntilKeyChanged } from 'rxjs/operators';


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
    distinctUntilKeyChanged('nombre')
)
.subscribe(console.log)
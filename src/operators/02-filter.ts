import { range, from, fromEvent } from 'rxjs';
import { filter, pluck, map } from 'rxjs/operators';

// range(1,10).pipe(
//     filter(val => val % 2 === 1)
// )
// .subscribe(console.log)


range(20,30).pipe(
    filter((val, index) => {
        console.log('idx', index)
        return val % 2 === 1
    })
)
// .subscribe(console.log)

interface Personaje {
    tipo: string;
    nombre: string;
}

const personajes: Personaje[] = [
    {
        tipo: 'heroe',
        nombre: 'Wolverine'
    },
    {
        tipo: 'heroe',
        nombre: 'Magneto'
    },
    {
        tipo: 'antiheroe',
        nombre: 'DeadPool'
    },
    {
        tipo: 'villano',
        nombre: 'Loki'
    }
]

from(personajes).pipe(
    filter(personaje => personaje.tipo !== 'heroe')
).subscribe(console.log)


const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup')
.pipe(
    map(event => event.code),
    filter(key => key === 'Enter')
)

keyup$.subscribe(console.log);
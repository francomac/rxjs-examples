import { from } from "rxjs";
import { reduce, tap, scan, map } from "rxjs/operators";

const numeros = [1, 2, 3, 4, 5];

// const totalAcumulador = (acumulador, actual) => {
//     return acumulador + actual;
// }

const totalAcumulador = (acumulador, actual) => acumulador + actual;

// Reduce
console.log("Inicio Reduce");
from(numeros).pipe(reduce(totalAcumulador, 0)).subscribe(console.log);

// Scan
console.log("Inicio Scan");
from(numeros).pipe(scan(totalAcumulador, 0)).subscribe(console.log);

// Redux
interface Usuario {
  id?: string;
  autenticado?: boolean;
  token?: string;
  edad?: number;
}

const user: Usuario[] = [
  { id: "franco", autenticado: false, token: null },
  { id: "franco", autenticado: true, token: "ABC" },
  { id: "franco", autenticado: true, token: "ABC123" },
];

const state$ = from(user).pipe(
  scan<Usuario>(
    (acc, cur) => {
      return { ...acc, ...cur };
    },
    { edad: 33 }
  )
);

const token$ = state$.pipe(
    map( state => state.token)
)

console.log("Inicio Redux");
token$.subscribe(console.log)
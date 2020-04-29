import { fromEvent } from "rxjs";
import { map, takeWhile } from "rxjs/operators";

const click$ = fromEvent<MouseEvent>(document, 'click');

click$.pipe(
    map(({x, y}) => ({x, y})),
    // no incluye último dato
    takeWhile( ({y}) => y <= 150),
    // incluye último dato
    takeWhile( ({y}) => y <= 150, true)
)
.subscribe({
    next: val => { console.log('next', val )},
    complete: () => console.log('completado')
});


import { of, range, asyncScheduler } from 'rxjs';

// const source1$ = of(1,2,3,4,5);
const source1$ = range(1,5);
const source2$ = range(-5,10);
const source3$ = range(15,21, asyncScheduler); // pasa de sync a async

console.log('inicio')
source1$.subscribe(console.log)
source2$.subscribe(console.log)
source3$.subscribe(console.log)
console.log('fin')
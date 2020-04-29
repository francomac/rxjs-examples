import { fromEvent } from 'rxjs';
import { first, tap, map } from 'rxjs/operators';


const click$ = fromEvent<MouseEvent>(document, 'click');

click$.pipe(
    map(({clientX, clientY}) => ({ clientY, clientX })),
    tap(event => console.log(event)),
    first(clientY => clientY.clientY > 150)
)
.subscribe({
    next: val => console.log('next', val),
    complete: () => console.log('complete')
})
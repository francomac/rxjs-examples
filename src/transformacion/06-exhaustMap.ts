import { interval, fromEvent } from 'rxjs';
import { take, exhaustMap, tap } from 'rxjs/operators';

const interval$ =  interval(500).pipe( take(3));
const click$ = fromEvent(document, 'click');

click$.pipe(
    tap(() => console.log('click!')),
    exhaustMap( () => interval$)
).subscribe(console.log)
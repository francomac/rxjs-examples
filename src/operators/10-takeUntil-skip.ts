import { interval, fromEvent } from 'rxjs';
import { takeUntil, skip } from 'rxjs/operators';

const button = document.createElement('button');
button.innerHTML = 'Detener Timer';
document.querySelector('body').append(button);

const counter$ = interval(1000);
// const clickBtn$ = fromEvent(button, 'click');
const clickBtn$ = fromEvent(button, 'click').pipe(
    skip(1) // will complete emtis after second click
)


counter$.pipe(
    takeUntil(clickBtn$)
)
.subscribe({
    next: val => console.log('next', val),
    complete: () => console.log('complete')
})
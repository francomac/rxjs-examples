import { interval, timer } from 'rxjs';

const observer = {
    next: val => console.log('next', val),
    complete: () => console.log('completado')
}

// el primer valor siempre es cero para interval y timer
const interval$ = interval(1000); // es async


// const timer$ = timer(2000); // es async
// const timer$ = timer(2000, 1000); // es async

const hoyEn5 = new Date(); // esto sirve para NOTIFICACIONES
hoyEn5.setSeconds( hoyEn5.getSeconds() + 5)
const timer$ = timer(hoyEn5); // es async

console.log('inicio');
// interval$.subscribe(observer)
timer$.subscribe(observer);
console.log('fin');
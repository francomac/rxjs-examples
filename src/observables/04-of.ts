import { of } from 'rxjs';

// const obs$ = of<number>(1,2,3,4,5,6,7);
const obs$ = of<any>( [1,2], {a:1, b:2}, function(){}, Promise.resolve(true));

console.log('obs$ Iniciado');
obs$.subscribe( 
    next => console.log('next', next),
    null,
    () => console.log('obs$ Terminado')
);
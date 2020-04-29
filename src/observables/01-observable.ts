import { Observable, Observer } from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log('next:', value),
    error: error => console.warn('error:', error),
    complete: () => console.info('Completed')
}

// const obs$ = Observable.create();
const obs$ = new Observable<string>( subs => {
    subs.next('Hola');
    subs.next('Mundo');
    subs.next('Hola');
    subs.next('Mundo');

    //forzar un error
    // const a = undefined;
    // a.nombre = 'Franco';

    subs.complete();

    subs.next('Hola'); // estos no van a ser emitidos
    subs.next('Mundo');
});

// una forma de manejar el subscribe

// obs$.subscribe(
//     valor => console.log('next', valor),
//     error => console.warn('error', error),
//     () => console.info('Completed')
// )

// otra forma de manejar el subscribe

obs$.subscribe( observer );
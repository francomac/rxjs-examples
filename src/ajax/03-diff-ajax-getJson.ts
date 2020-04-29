

import { ajax, AjaxError } from 'rxjs/ajax';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';

const url = 'https://http4bin.org/delay/1';

const atrapaError = (error: AjaxError) => {
    console.warn('error en', error);
    return of({
        ok: false,
        usuarios: []
    })
}

const obs$ = ajax.getJSON( url).pipe(
    catchError(atrapaError)
);
const obs2$ = ajax( url).pipe(
    catchError(atrapaError)
);

obs$.subscribe( data => console.log('getJSON', data))
obs2$.subscribe( data => console.log('ajax', data))


const obs3$ = ajax.getJSON( url).pipe(
    catchError(atrapaError)
);
obs3$.subscribe({
    next: val => console.log('next', val),
    error: err =>  console.warn('error en subs', err),
    complete: () => console.log('complete')
})
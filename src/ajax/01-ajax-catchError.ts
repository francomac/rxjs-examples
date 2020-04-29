import { ajax, AjaxError } from 'rxjs/ajax';
import { map, pluck, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

const url = "https://api.github.com/users?per_page=5";

// const manejaErrores = (response: Response) => {
//     if (!response.ok) {
//         throw new Error(response.statusText);
//     }
//     return response;
// }

// const fetchPromesa = fetch(url);

// fetchPromesa
// .then( response => response.json())
// .then( data => console.log('data', data))
// .catch( err => console.warn('error', err))

// con maneja errores para evitar los siguientes .then
// fetchPromesa
// .then(manejaErrores)
// .then( response => response.json())
// .then( data => console.log('data', data))
// .catch( err => console.warn('error', err))


// USANDO ajax y AjaxError
const atrapaError = (error: AjaxError) => {
    console.warn('error en', error);
    return of([])
}

ajax(url).pipe(
    pluck('response'),
    catchError(atrapaError)
)
.subscribe(console.log)
import { fromEvent, of } from 'rxjs';
import { tap, map, mergeMap, pluck, catchError, switchMap, exhaustMap } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

// helper
const peticionHttpLogin = ( userPass ) => 
    ajax.post('https://reqres.in/api/login?delay=1', userPass)
    .pipe(
        pluck('response', 'token'),
        catchError( error => of('token-no-valid'))
    );

// creando un formulario
const form = document.createElement('form');
const inputEmail = document.createElement('input');
const inputPass = document.createElement('input');
const btnSubmit = document.createElement('button');

// configuraciones
inputEmail.type = 'email';
inputEmail.placeholder = 'Email';
inputEmail.value = 'eve.holt@reqres.in';

inputPass.type = 'password';
inputPass.placeholder = 'Password';
inputPass.value = 'cityslicka';

btnSubmit.innerHTML = 'Ingresar';
form.append(inputEmail, inputPass, btnSubmit);

document.querySelector('body').append(form);

// streams
const submitForm$ = fromEvent<Event>(form, 'submit');

submitForm$.pipe(
    tap((event) => event.preventDefault()),
    map( event => (
        {
            email: event.target[0].value,
            password: event.target[1].value
        }
    )),
    // use one of this operators and check your network tab from dev tools
    // mergeMap(peticionHttpLogin)
    // switchMap(peticionHttpLogin)
    exhaustMap(peticionHttpLogin)
).subscribe(token => console.log(token))
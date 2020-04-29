import { forkJoin, of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { catchError } from 'rxjs/operators';


const GITHUB_API_URL = 'https://api.github.com/users';
const GITHUB_USER = 'francomac';

forkJoin({
    usuario: ajax.getJSON(`${GITHUB_API_URL}/${GITHUB_USER}`),
    gists: ajax.getJSON(`${GITHUB_API_URL}/${GITHUB_USER}/gissts`)
    .pipe(
        catchError(err => of(err))
    ),
    repos: ajax.getJSON(`${GITHUB_API_URL}/${GITHUB_USER}/repos`),
})
.subscribe(console.log)
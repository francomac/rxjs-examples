import { range, fromEvent } from 'rxjs';
import { map, pluck, mapTo } from 'rxjs/operators';


// range(1,5).pipe(
//     map<number, number>(val => val * 10)
// )
// .subscribe(console.log);


const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup');
keyup$.subscribe(console.log);


const keyupCode$ = keyup$.pipe(
    map(event => event.code)
)
keyupCode$.subscribe(code => console.log('map:', code));
    

const keyupPluck = keyup$.pipe(
    pluck('target','baseURI')
);
keyupPluck.subscribe(code => console.log('pluck:', code));

const keyMapTo$ = keyup$.pipe(
    mapTo('tecla presionada')
);
keyMapTo$.subscribe(code => console.log('mapTo:', code));
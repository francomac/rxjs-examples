import { interval, Subject } from 'rxjs';
import { take, map } from 'rxjs/operators';
/**
 * Ejercicio: Realizar que los dos observables finales, 
 * emitan exactamente el mismo valor
 * 
 * Tip: Hot Observable? subjects?
 */

(() =>{

  // == NO TOCAR este bloque ====================
  const reloj$ = interval(1000).pipe(
    take(5),
    map( val => Math.round(Math.random() * 100) )
  );
  // No tocar la creación del observable
  // ============================================

  const mySubject$ = new Subject();
    
  reloj$.subscribe(mySubject$)
  
  // Estos dos observables deben de emitir exactamente los mismos valores
  mySubject$.subscribe( val => console.log('obs1', val) );
  mySubject$.subscribe( val => console.log('obs2', val) );


})();

		
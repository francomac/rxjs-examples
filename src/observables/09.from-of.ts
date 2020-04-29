import { of, from } from 'rxjs';

/**
 * of = toma argumento y genera una secuencia
 * from = crea un observable en base al argumento, cualquier argumento
 */

 const obs$ = {
     next: val => console.log('next', val),
     complete: () => console.log('complete')
 }

//  const source$ = from([1,2,3,4,5,6]);
//  const source$ = of(...[1,2,3,4,5,6]);

 const source$ = from('Franco');
 
 source$.subscribe( obs$ );
 
// const source$ = from(fetch('https://api.github.com/users/klerith'))
//  source$.subscribe( async(response) => {
//      console.log(response)

//      const dataResp = await response.json();
     
//      console.log(dataResp)
//  })

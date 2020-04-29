import { Observer, Observable } from "rxjs";

const observer: Observer<any> = {
  next: (value) => console.log("next:", value),
  error: (error) => console.warn("error:", error),
  complete: () => console.info("Completed"),
};

const intervalo$ = new Observable<number>((subscriber) => {
  // Crear contador -> 1,2,3,4,5...
  let num = 0;
  const interval = setInterval(() => {
    subscriber.next(num++);
  }, 1000);

  setTimeout(() => {
    subscriber.complete();
  }, 2500);

  return () => {
    // esto se ejecuta al ejecutar el complete del Observer
    // esto se ejecuta 1 vez al ser encadanadas las Unsubscriptions
    clearInterval(interval);
    console.log("Intervalo Unsubscribed");
  };
});

const subsIntervalo1 = intervalo$.subscribe(observer);
const subsIntervalo2 = intervalo$.subscribe(observer);
const subsIntervalo3 = intervalo$.subscribe(observer);

subsIntervalo1.add(subsIntervalo2).add(subsIntervalo3);
setTimeout(() => {
  subsIntervalo1.unsubscribe(); // cancela la subscription
  //   subsIntervalo2.unsubscribe(); // cancela la subscription
  //   subsIntervalo3.unsubscribe(); // cancela la subscription

  console.log("Completed timeout");
}, 3000);

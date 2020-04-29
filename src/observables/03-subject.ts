import { Observer, Observable, Subject } from "rxjs";

const observer: Observer<any> = {
  next: (value) => console.log("next:", value),
  error: (error) => console.warn("error:", error),
  complete: () => console.info("Completed"),
};

const intervalo$ = new Observable<number>((subscriber) => {
  const myInterval = setInterval(() => {
    subscriber.next(Math.random());
  }, 4000);

  return () => {
      clearInterval(myInterval)
      console.log('Intervalo Destruido')
    };
});

// Subject maneja MUTLIPLES Subscriptions
// Subject es un observer , osea tiene next, error, y complete
// Subject emite el mismo valor para todos los subscritos
const subject$ = new Subject()
const subscription1 = subject$.subscribe(observer);
const subscription2 = subject$.subscribe(observer);

// Esta forma emite diferentes valores en cada subscription
// const subscription1 = intervalo$.subscribe((rnd) => console.log("subs1", rnd));
// const subscription2 = intervalo$.subscribe((rnd) => console.log("subs2", rnd));
const intervalSubs = intervalo$.subscribe(subject$)

setTimeout( () => {
    subject$.next('Finalizado');
    subject$.complete();
    intervalSubs.unsubscribe();
}, 5500)
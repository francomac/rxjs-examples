import { interval } from "rxjs";
import { take, reduce, tap } from "rxjs/operators";

const totalReducer = ( acumulador: number, valorActural: number) => {
    return acumulador + valorActural;
}

interval(1000).pipe(
    take(4),
    tap(console.log),
    reduce( totalReducer, 5 )
)
.subscribe({
    next: val => console.log('next:', val),
    complete: () => console.log('completado')
}
)
import { fromEvent } from 'rxjs';
import { map, tap } from 'rxjs/operators';

const texto = document.createElement('div');
texto.innerHTML = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ultricies tincidunt dapibus. Proin rhoncus placerat tincidunt. Aenean volutpat tellus nisi, id vehicula justo bibendum non. Nam venenatis iaculis lorem id semper. Sed lacus diam, ultricies tristique felis eu, eleifend malesuada arcu. Ut quis nisi tortor. Phasellus dignissim lectus augue, eu ornare massa condimentum id. Cras a turpis ligula. Vivamus varius gravida arcu. Aenean pellentesque sit amet lorem quis suscipit. Praesent volutpat tortor at tortor varius interdum at eu magna. Vivamus varius risus id sapien ornare suscipit. Curabitur sit amet eleifend nisi. Maecenas feugiat dui at dolor elementum, eu blandit libero hendrerit. Cras vel magna ex.
<br/><br/>
Curabitur eros nisi, eleifend ut nibh tempor, pulvinar congue eros. Morbi in ex vel nisl tempor feugiat. In hac habitasse platea dictumst. Pellentesque congue dolor est, sit amet euismod nisi tristique non. Vestibulum molestie mauris eget diam scelerisque tristique. Nullam mattis elit nec vulputate efficitur. Quisque dictum molestie quam, nec facilisis sapien condimentum ut. Proin tincidunt mollis enim, non finibus nisl placerat a. Duis id velit suscipit, dignissim metus vel, vulputate diam. Praesent non ullamcorper metus, id suscipit ligula. Integer non rutrum mauris. Vivamus efficitur mi vel orci sollicitudin, ut finibus lacus dapibus. Fusce odio dui, accumsan non pharetra eu, malesuada cursus metus. Integer egestas ut est in sollicitudin. In sagittis ipsum eget risus pellentesque varius.
<br/><br/>
Curabitur congue turpis id quam rhoncus, a dictum tellus sagittis. Sed eu leo magna. Sed vulputate turpis nec elit bibendum, volutpat ultricies sem egestas. Morbi rutrum augue ac justo imperdiet condimentum. Nunc eu facilisis urna. Suspendisse porta pharetra feugiat. Curabitur nulla mauris, vestibulum et interdum sed, lacinia ac leo. Phasellus at auctor leo. Donec rutrum nisi a porttitor cursus. Vestibulum vulputate mollis mi ut tincidunt. Aliquam a eros ante. Nulla eget nisi suscipit, blandit augue nec, vehicula leo.
<br/><br/>
Donec dolor quam, interdum a semper a, aliquam eget neque. Duis sed orci laoreet, aliquet orci a, feugiat neque. Sed tristique felis id tellus eleifend ullamcorper. Aenean sed orci lorem. Sed vehicula mauris quis orci commodo, quis blandit neque elementum. Nunc efficitur ullamcorper ornare. Aenean congue turpis ex, id rutrum mi scelerisque sit amet.
<br/><br/>
Nullam a libero et enim gravida congue et at mi. Praesent posuere magna ut purus tempor consequat. In semper eu nibh ac mattis. Nulla in ipsum vel lorem suscipit egestas. Phasellus sodales maximus tortor quis vestibulum. Nulla ut efficitur urna. Donec vestibulum finibus sem, a ornare enim imperdiet ut. Nunc ut ligula fermentum, sollicitudin nunc sit amet, iaculis erat. Donec consectetur posuere diam sit amet luctus.`;

const body = document.querySelector('body');
body.append(texto);

const progressBar = document.createElement('div');
progressBar.setAttribute('class', 'progress-bar');

body.append(progressBar);


// funcion que haga el calculo
const calcularPorcentajeScroll = (event) => {
    const {
        scrollTop,
        scrollHeight,
        clientHeight
    } = event.target.documentElement;

    return ( scrollTop / ( scrollHeight -  clientHeight )) * 100;
}

// streams
const scroll$ = fromEvent(document, 'scroll');

const progress$ = scroll$.pipe(
    map( event => calcularPorcentajeScroll(event)),
    tap( console.log)
);

progress$.subscribe(porcentaje => {
    progressBar.style.width = `${porcentaje}%`
})
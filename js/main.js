import 'babel-polyfill';
import Rx from 'rxjs/Rx';

var count = 0;
var button = document.querySelector('button');
// button.addEventListener('click', () => console.log(`点击 ${++count} 次`));


Rx.Observable.fromEvent(button, 'click')
    .scan(count => count + 1, 0)
    .do((count)=>{console.log(count)})
    .subscribe(count => console.log(`RX点击 ${count} 次`));
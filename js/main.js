import 'babel-polyfill';
import Rx from 'rxjs/Rx';

// var count = 0;
// var rate = 1000;
// var lastClick = Date.now() - rate;
// var button = document.querySelector('button');
// button.addEventListener('click', () => {
//     if (Date.now() - lastClick >= rate) {
//         console.log(`点击第 ${++count} 次`);
//         lastClick = Date.now();
//     }
// });

//
var button = document.querySelector('button');
Rx.Observable.fromEvent(button, 'click')
    // .throttleTime(1000)
    // .scan(count => count + 1, 0)
    .map(x => x + 1)
    .fiter
    .subscribe(count => console.log(`点击第 ${count} 次`));
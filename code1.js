var Rx = require('rxjs/Rx');
/**
 * Observables 是使用 Rx.Observable.create 或创建操作符创建的，并使用观察者来订阅它
 * ，然后执行它并发送 next / error / complete 通知给观察者，而且执行可能会被清理。
 */



// 1、 创建
var observable = Rx.Observable.create(function subscribe(observer) {
    var id = setInterval(() => {
        console.log(112312312)
        observer.next('hi')
    }, 1000);
});

//
// // 2、订阅
// // 订阅 Observable 像是调用函数, 并提供接收数据的回调函数。
// //
// observable.do((x) => console.log('---' + x))
var subscription = observable.subscribe(x => console.log(x));

// 3、执行
// Observable 执行可以传递三种类型的值：
// "Next" 通知： 发送一个值，比如数字、字符串、对象，等等。
// "Error" 通知： 发送一个 JavaScript 错误 或 异常。
// "Complete" 通知： 不再发送任何值。

//  var observable = Rx.Observable.create(function subscribe(observer) {
//             observer.next(1);
//             observer.next(2);
//             observer.next(3);
//             observer.complete();
//             observer.next(4); // 因为违反规约，所以不会发送
//   });
// observable.subscribe(console.log)
//


// 4、 清除
// 当你订阅了 Observable，你会得到一个 Subscription ，它表示进行中的执行。只要调用 unsubscribe() 方法就可以取消执行。

//
// var observable = Rx.Observable.from([10, 20, 30]);
// var subscription = observable.subscribe(x => console.log(x));
// 稍后：
subscription.unsubscribe();
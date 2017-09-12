var Rx = require('rxjs/Rx');

//- 观察者是由 Observable 发送的值的消费者。
// 观察者只是有三个回调函数的对象，每个回调函数对应一种 Observable 发送的通知类型。
// 每个回调函数对应一种 Observable 发送的通知类型：next、error 和 complete
// 当我们调用Observable的subscribe()函数时，一个Observer就被创建出来
// 当订阅 Observable 时，你可能只提供了一个回调函数作为参数，而并没有将其附加到观察者对象上，例如这样：
// observable.subscribe(x => console.log('Observer got a next value: ' + x));
// 在 observable.subscribe 内部，它回创建一个观察者对象并使用第一个回调函数参数作为 next 的处理方法。所有三种类型的回调函数都可以直接作为参数来提供：




var observable = Rx.Observable.create(function (observer) {
    observer.next(1);
    observer.next(2);
    observer.next(3);
    setTimeout(() => {
        observer.next(4);
        observer.complete();
    }, 1000);
});

console.log('在订阅前');
observable.subscribe({
    next: x => console.log('得到的值 ' + x),
    error: err => console.error('错误: ' + err),
    complete: () => console.log('执行完毕'),
});
console.log('在订阅之后');

//create()函数接收一个函数作为参数，这个参数函数实际就是observable这个对象的subscribe函数，
// 我们看到使用的时候传给subscribe函数的并不是一个observer，
// 而是一个函数，在RxJS内部，subscribe函数的重载会自动为我们创建observer，并把console.log这个函数赋值给了next函数，
// 也就是说，observer.next(1)这个操作实际就是调用的console.log(1)，即在控制台打印数字1。这里值得注意的地方就是，
// 如果一个observable包装的数据源是有限个数的，那么你可以调用complete()函数表明所有数据(事件)都发送完毕了。


/**
 Rx.Observable是Observable
 Rx.Observable.create创建序列源source，创建source的方法有多个，比如of, from, fromPromise等
 observer是Observer观察者，只有在Rx.Observable.create创建方法可以获取，其他创建方法内置了observer且不可访问
 observer.next发射数据更新
 subscription.next立即响应（不同于发射）静态数据，此时不会经过`Operators`处理
 ! Rx.Observable.create或者Rx.Subject.create创建的source不会自动关闭，其他方式则当检测到没有序列发生变更会自动销毁source.
 */

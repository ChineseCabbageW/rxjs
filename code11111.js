var Rx = require('rxjs/Rx');

/**
 Rx.Observable是Observable
 Rx.Observable.create创建序列源source，创建source的方法有多个，比如of, from, fromPromise等
 observer是Observer观察者，只有在Rx.Observable.create创建方法可以获取，其他创建方法内置了observer且不可访问
 observer.next发射数据更新
 subscription.next立即响应（不同于发射）静态数据，此时不会经过`Operators`处理
 ! Rx.Observable.create或者Rx.Subject.create创建的source不会自动关闭，其他方式则当检测到没有序列发生变更会自动销毁source.
 */


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
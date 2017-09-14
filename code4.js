var Rx = require('rxjs/Rx');

// 1、
// const source = Rx.Observable.of(1,2,3,4,5);
// // 使用 do 透明地打印 source 中的值
// const example = source
//     .do(val => console.log(`MAP 之前: ${val}`))
//     .map(val => val + 10)
//     .do(val => console.log(`MAP 之后: ${val}`));
// // 'do' 并不转换值
// // 输出: 11...12...13...14...15
// const subscribe = example.subscribe(val => console.log(val));
//


// 2、
const one = new Promise((resolve, reject) => {
    setTimeout(() => {

        resolve(1);
    }, 3000);//模拟3秒延迟
});
// // 这个时候Promise中的代码已经在运行了
//
//
// one.then(function (data) {
//     console.log(data)
// })


//
Rx.Observable.fromPromise(one)
    .map(value => value = value + 1)
    .subscribe(result => {
        console.log(result);
    });

console.log("程序结束");


// 3、
// Rx.Observable.from([1, 2, 3, 4, 5, 6, 7, 8])
//     .scan((a, b) => a + b, 0)
//     .subscribe((x) => console.log(x));

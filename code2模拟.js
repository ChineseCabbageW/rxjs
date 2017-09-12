const observable = dataSource => {
    const INTERVAL = 1000;
    let schedulerId;

    return {
        subscribe: observer => {//接受一个observer作为参数
            schedulerId = setInterval(() => {
                if(dataSource.length === 0) {
                    observer.complete();//通知observer数据(事件)全部发送完毕
                    clearInterval(schedulerId);
                    schedulerId = undefined;
                } else {
                    observer.next(dataSource.shift());//把数据(事件)传递给observer
                }
            }, INTERVAL);

            return {//返回一个对象，我们可以称之为subscription，包含一个取消订阅的函数
                unsubscribe: () => {//取消订阅，将不再发送数据(事件)给observer
                    if(schedulerId) {
                        clearInterval(schedulerId);
                    }
                }
            };
        }
    }
};

let subscription = observable([1, 2, 3]).subscribe({//传递给subscribe函数observer对象
    next: console.log,//包含next函数
    complete: () => console.log('事件全部发送完毕')//包含complete函数
});



setTimeout( subscription.unsubscribe,3000)
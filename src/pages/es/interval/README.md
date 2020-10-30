实现 setInterval、clearInterval
=================
Q:
  1.利用 setTimeout 实现 setInterval;  
  2.利用 clearTimeout 实现 clearInterval  
 A:
  1.通过递归调用自身实现  
  2.难点是如何获取到最新的定时器setTimeout的id  
```javascript
  // 我的方法：
  function mySetInterval(callback, duration) {
    let timer = window.setTimeout(() => {
      callback();
      mySetInterval(callback, duration);
    }, duration);
  }
  mySetInterval(() => {console.info(444)}, 500)
  /** 
   * 但是这个方法是否合适呢？因为每次执行 mySetInterval 都会把callback方法和duration再传一次。会不会再开辟其他的空间呢？
   * 前端红包书P66页中写到：ECMAScript中所有参数传递都是值，不可能通过引用传递参数。（但是如果遇到obj，复制的是obj的对象地址）
   * 所以对代码进行一个改造
   **/
```
```javascript
  // 改进后.不需要一直传参。节省空间
  function mySetInterval(callback, duration) {
    function fn() {
      callback();
      setTimeout(fn, duration);
    }
    setTimeout(fn, duration);
  }
  mySetInterval(() => {console.info(new Date())}, 500)
```
```javascript
  const timerMap = {};
  let id = 0;
  function mySetInterval(callback, duration) {
    let timerId = id;
    id ++;
    function fn() {
      callback();
      timerMap[timerId] = setTimeout(fn, duration);
    }
    timerMap[timerId] = setTimeout(fn, duration);
    return timerId;
  }
  function myClearInterval(id) {
    window.clearTimeout(timerMap[id]);
    delete timerMap[id];
  }
  const timer = mySetInterval(() => {console.info(new Date())}, 500);
  setTimeout(() => {
    console.info("will clear");
    myClearInterval(timer);
  }, 8000);
  /**
   * 尝试过使用 let id: number 的形式。但是由于里面的setTimeout是动态变化的，执行完后 mySetInterval ，这个id就不会再变化了
   * 后面执行的setTimeout返回的id，就不能够被追踪到。
   * 所以定义了一个对象，用来存储一个id，这个id作为key值返回。动态的修改key值对应的value值（定时器返回的id）。当需要执行clear的时候。
   * 通过返回的id（也就是key）。获取到对应的value值。就可以通过clearTimeout方法把当前定时器的id给取消掉
   * **/
```
---------

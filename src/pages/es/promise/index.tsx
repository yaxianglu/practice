import React, { FunctionComponent, useEffect } from "react";

interface YPromiseProps {}
let count = 0;

/**
 * promise 练习
 *
 * @class Promise
 * @extends {React.Component}
 */
const YPromise: FunctionComponent<YPromiseProps> = () => {
  console.info("在YPromise方法里");
  return (
    <>
      <div>
        <h1>1.Promise如何使用？</h1>
        {usePromise()}
        <h1>2.实现一个Promise</h1>
        <h1>3.实现一个Promise.all</h1>
      </div>
    </>
  );
}

/** 
 * 使用Promise
 * 一开始（没有useEffect这个hooks包裹）这里setTimeout响应，会莫名出现两次。问题请看 other/qa 的问题1
 * 后来加入了useEffect，解决了这个问题
 * */
const usePromise = () =>  {
  useEffect(() => {
      const myPromise = new Promise((resolve, reject) => {
      const timeoutInstance = setTimeout(() => {
        resolve("2秒后执行成功");
      }, 2000);
      console.info(timeoutInstance);
    });
    console.info(myPromise);
    const thenPromise = myPromise.then((res) => {
      console.info(res, count++);
      return 123;
    })
    thenPromise.then((res) =>  {
      console.info(res);
    })
    console.info(thenPromise);
  }, []);
  return (
    <div>
      <p>特点：</p>
      <p>1.对象的状态不受外界影响:pending、fulfilled、rejected</p>
      <p>2.一旦状态改变，就不会再变，任何时候都可以得到这个结果。Promise 对象的状态改变，只有两种可能：从 Pending 变为 Resolved 和从 Pending 变为 Rejected。只要这两种情况发生，状态就凝固了，不会再变了。</p>
      <p>会一直保持这个结果。就算改变已经发生了，你再对 Promise 对象添加回调函数，也会立即得到这个结果</p>
      <p>这与事件（Event）完全不同，事件的特点是，如果你错过了它，再去监听，是得不到结果的。</p>
      <p>优点：</p>
      <p>就可以将异步操作以同步操作的流程表达出来，避免了层层嵌套的回调函数</p>
      <p>缺点：</p>
      <p>1.无法取消 Promise</p>
      <p>2.如果不设置回调函数，Promise 内部抛出的错误，不会反应到外部</p>
      <p>3.当处于 Pending 状态时，无法得知目前进展到哪一个阶段</p>
      <p>使用：</p>
      <p>1.new Promise，接受一个function，包含两个参数（resolve, rejected），分别用来改边promise的状态。resolve方法参数（resolve(“then方法你可以看到我吗？”)），是这个promise实例then方法的res值（promise.then((res)=>console.log(res); /\/ then方法你可以看到我吗？)）</p>
      <p>2.Promise.then（promise1）返回一个Promise（promise2），如果promise1的then方法返回的是常量，或者undefined，则promise2的then就是返回的值。如果返回的是一个新的Promise，则需要等待新的Promise执行resolve方法，才会进入到promise2.then方法</p>
    </div>
  );
}

export default YPromise;
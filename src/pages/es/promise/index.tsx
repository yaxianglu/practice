import React, { FunctionComponent } from "react";
import moment from "moment";

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
      {usePromise()}
      <div>
        <h1>1.Promise如何使用？</h1>
        <h1>2.实现一个Promise</h1>
        <h1>3.实现一个Promise.all</h1>
      </div>
    </>
  );
}

/** 使用Promise */
const usePromise = () =>  {
    console.info("进入这个方法");
    const myPromise = new Promise((resolve, reject) => {
    console.info("new 了一个");
    const timeoutInstance = setTimeout(() => {
      // resolve("2秒后执行成功");
      console.info(moment().format("mm:ss"));
      console.info("2秒到了");
    }, 2000);
    console.info(timeoutInstance);
  });
  // myPromise.then((res) => {
  //   console.info(res, count++);
  // })
}

export default YPromise;
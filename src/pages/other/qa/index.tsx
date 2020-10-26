import { Divider } from "antd";
import React, { FunctionComponent } from "react";

import { domain } from "../../../config";

const list = [
  "React.StrictMode模式下render里面setTimeout2次执行的问题（正常应该是1次）",
];

/**
 * 开发遇到的一些问题
 *
 */
const QA: FunctionComponent = () => {
  const showDetail =() => { window.open(`${domain}/other/qa/README.md`) };
  return (
    <div>
      <h1>本页主要记录一些开发中遇到的问题和解决方法</h1>
      <div>请点击查看： <button onClick={showDetail}>详情</button></div>
      <Divider/>
      {
        list.map((item, index) => {
          return <div key={item}>{index + 1}.{item}</div>
        })
      }
    </div>
  );
}

export default QA;
import { Divider } from "antd";
import React, { FunctionComponent } from "react";

import { domain } from "../../../config";

const list = [
  {
    title: "React.StrictMode模式下render里面setTimeout2次执行的问题（正常应该是1次）",
    path: "https://github.com/yaxianglu/practice/tree/master/src/pages/other/qa#1reactstrictmode%E6%A8%A1%E5%BC%8F%E4%B8%8Brender%E9%87%8C%E9%9D%A2settimeout2%E6%AC%A1%E6%89%A7%E8%A1%8C%E7%9A%84%E9%97%AE%E9%A2%98%E6%AD%A3%E5%B8%B8%E5%BA%94%E8%AF%A5%E6%98%AF1%E6%AC%A1",
  },
  {
    title: "实现 setInterval:1.利用 setTimeout 实现 setInterval;2.利用 clearTimeout 实现 clearInterval",
    path: "#",
  }
];

/**
 * 开发遇到的一些问题
 *
 */
const QA: FunctionComponent = () => {
  return (
    <div>
      <h1>本页主要记录一些开发中遇到的问题和解决方法</h1>
      <div>请点击查看： <a href={`${domain}/other/qa/README.md`} target="_blank">详情</a></div>
      <Divider/>
      {
        list.map((item, index) => {
          return <div key={item.title}><a href={item.path} target="_blank">{index + 1}.{item.title}</a></div>
        })
      }
    </div>
  );
}

export default QA;
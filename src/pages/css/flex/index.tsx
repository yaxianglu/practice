import React, { FunctionComponent } from "react";
import "./index.less";
/**
 * 测试flex
 * 尤其是flex-shrink是如何计算的
 */
const YFlex: FunctionComponent = () => {
  return (
    <>
      <YFlexShink/>
    </>
  );
}

const YFlexShink: FunctionComponent = () => {
  return (
    <div className="parent">
      <div className="child-1">1</div>
      <div className="child-2">2</div>
      <div className="child-3">3</div>
    </div>
  );
}

export default YFlex;
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
    <>
      <div className="parent">
        <div className="child-1">180px</div>
        <div className="child-2">160px</div>
        <div className="child-3">60px</div>
      </div>
      <div>
        <p>问</p>
        <p>1.flex-shrink 计算规则</p>
        <p>2.父子元素的 margin、padding、border 会对结果有影响吗?</p>
      </div>
      <br />
      <div>
        <p>答</p>
        <p>我们先看结果：上面里面的内容是实际的宽度。如果是根据flex-shrink来计算，应该是 160px 80px 160px才对。实际上不是这样</p>
        <p>子元素的总长度是600，父元素的长度是400.就是有200的负空间。如何把这200的负空间压缩分配给三个字元素呢？</p>
        <br />
        <p>1.<a href="https://www.w3.org/TR/css-flexbox-1/#valdef-flex-flex-shrink">w3c的文档</a>上写的是会收到flex base size的影响。所以他不是根据自身的flex-shrink的值来计算的。它是根据计算因子(factor).来计算的</p>
        <p>flex-shrink * flex-basis = factor</p>
        <p>2 * 300 = 600</p>
        <p>1 * 200 = 200</p>
        <p>2 * 100 = 200</p>
        <p>所以总的因子是 600 + 200 + 200 = 1000</p>
        <p>第一个子元素：200 * (600 / 1000) = 120; 300 - 120 = 180; // 120是分配给它的压缩宽度，300是它自身basis的宽度。180是计算后的宽度</p>
        <p>第二个子元素：200 * (200 / 1000) = 40; 200 - 40 = 160; // 40是分配给它的压缩宽度，200是它自身basis的宽度。160是计算后的宽度</p>
        <p>第三个子元素：200 * (200 / 1000) = 40; 100 - 40 = 60; // 40是分配给它的压缩宽度，100是它自身basis的宽度。60是计算后的宽度</p>
        <br />
        <p>2.padding等影响</p>
        <div className="parent-1">
          <div className="child-4">230</div>
          <div className="child-5">170</div>
        </div>
        <p><a href="https://www.w3.org/TR/css-flexbox-1/#line-sizing">line-sizing</a></p>
        <p>和预想的一样吗？</p>
        <p>我们可用看到其实计算主轴可以用长度的计算是要去除 margin, border, and padding 的</p>
        <p>计算</p>
        <p>400 - 50*2 - 20*2 = 260（可用空间）</p>
        <p>flex-basis 为 0，flex-grow 都为 1；260*（1/2）= 130</p>
        <p>130 + 20 + 20 = 170(真实空间)</p>
        <p>结论：padding、margin等是固定的，可分配计算空间是减去这些值的情况下再计算分配的</p>
        <p>这里需要知道可分配的空间是怎么计算的</p>
        <br />
        <br />
        <br />
        <br />
      </div>
    </>
  );
}

export default YFlex;
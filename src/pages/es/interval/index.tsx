import React, { FunctionComponent } from "react";

import { domain } from "../../../config";

/**
 * 1.利用 setTimeout 实现 setInterval;
 * 2.利用 clearTimeout 实现 clearInterval
 */
const Interval: FunctionComponent = () => {
  return (
    <div>
      <h1>
        1.利用 setTimeout 实现 setInterval;
      </h1>
      <h1>
        2.利用 clearTimeout 实现 clearInterval
      </h1>
      <div>请点击查看： <a href={`${domain}/es/interval/README.md`} target="_blank">详情</a></div>
    </div>
  );
}

export default Interval;
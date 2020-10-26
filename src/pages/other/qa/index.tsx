import React, { FunctionComponent } from "react";
import { domain } from "../../../config";

/**
 * 开发遇到的一些问题
 *
 */
const QA: FunctionComponent = () => {
  return (
    <iframe src={`${domain}/other/qa/README.md`} title="qa" width="100%" height="100%" />
  );
}

export default QA;
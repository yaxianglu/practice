import { RouterConfig } from "../model/common";
/** es */
import YPromise from "../pages/es/promise";
import Interval from "../pages/es/interval";
import YSet from "../pages/es/Set";

/** qa */
import QA from "../pages/other/qa";

/** css */
import YFlex from "../pages/css/flex";

export const ES_PATH = "/es";
export const REACT_PATH = "/react";
export const CSS_PATH = "/css";
export const OTHER_PATH = "/other";

export const es_config: RouterConfig[] = [
  { path: `${ES_PATH}/promise`, name: "promise", component: YPromise },
  { path: `${ES_PATH}/interval`, name: "实现setInterval和clearInterval", component: Interval },
  { path: `${ES_PATH}/Set`, name: "Set", component: YSet },
];

export const react_config: RouterConfig[] = [
  { path: `${REACT_PATH}/promise`, name: "promise", component: YPromise },
];

export const css_config: RouterConfig[] = [
  { path: `${CSS_PATH}/flex`, name: "flex", component: YFlex },
];

export const other_config: RouterConfig[] = [
  { path: `${OTHER_PATH}/qa`, name: "qa", component: QA },
];

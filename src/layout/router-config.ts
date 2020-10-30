import { RouterConfig } from "../model/common";
import Promise from "../pages/es/promise";
import Interval from "../pages/es/interval";
import QA from "../pages/other/qa";

export const ES_PATH = "/es";
export const REACT_PATH = "/react";
export const CSS_PATH = "/css";
export const OTHER_PATH = "/other";

export const es_config: RouterConfig[] = [
  { path: `${ES_PATH}/promise`, name: "promise", component: Promise },
  { path: `${ES_PATH}/setTimeout-setInterval`, name: "实现setInterval和clearInterval", component: Interval },
];

export const react_config: RouterConfig[] = [
  { path: `${REACT_PATH}/promise`, name: "promise", component: Promise },
];

export const css_config: RouterConfig[] = [
  { path: `${CSS_PATH}/promise`, name: "promise", component: Promise },
];

export const other_config: RouterConfig[] = [
  { path: `${OTHER_PATH}/qa`, name: "qa", component: QA },
];

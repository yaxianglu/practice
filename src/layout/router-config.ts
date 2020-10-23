import { RouterConfig } from "../model/common";
import Promise from "../pages/es/promise";

export const ES_PATH = "/es";
export const REACT_PATH = "/react";
export const CSS_PATH = "/css";
export const OTHER_PATH = "/other";

export const es_config: RouterConfig[] = [
  { path: `${ES_PATH}/promise`, name: "promise", component: Promise },
];

export const react_config: RouterConfig[] = [
  { path: `${REACT_PATH}/promise`, name: "promise", component: Promise },
];

export const css_config: RouterConfig[] = [
  { path: `${CSS_PATH}/promise`, name: "promise", component: Promise },
];

export const other_config: RouterConfig[] = [
  { path: `${OTHER_PATH}/promise`, name: "promise", component: Promise },
];

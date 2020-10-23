import React from "react";
import { RouteComponentProps } from "react-router-dom";

/** 路由配置 */
export interface RouterConfig {
  /** 路径 */
  path: string;
  /** 模块 */
  component?: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>;
  /** 名称 */
  name: string;
}
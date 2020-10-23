import React, { useState, FunctionComponent } from 'react';
import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';

import './App.css';
import {
  ES_PATH, es_config,
  REACT_PATH, react_config,
  CSS_PATH, css_config,
  OTHER_PATH, other_config,
} from "../layout/router-config";
import { Link, Route, withRouter, RouteComponentProps, Switch } from "react-router-dom";
const { Sider, Content } = Layout;
const { SubMenu } = Menu;
type AppProps = RouteComponentProps;

const App: FunctionComponent<AppProps> = (props) => {
  const [collapsed, toggle] = useState(false);
  return (
    <Layout style={{ width: "100%", height: "100%" }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={[es_config[0].path]}>
          {renderMenuItem()}
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: () => { toggle(!collapsed) },
          })}
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }}
        >
          {renderContent()}
        </Content>
      </Layout>
    </Layout>
  );
}

function renderMenuItem() {
  return (
    <>
      <SubMenu key={ES_PATH} icon={<FileOutlined/>} title="ES特性">
        {
          es_config.map(item => {
            return (<Menu.Item key={item.path}>
              <Link to={item.path}>{item.name}</Link>
            </Menu.Item>);
          })
        }
      </SubMenu>
      <SubMenu key={REACT_PATH} icon={<TeamOutlined/>} title="React特性">
        {
          react_config.map(item => {
            return (<Menu.Item key={item.path}>
              <Link to={item.path}>{item.name}</Link>
            </Menu.Item>);
          })
        }
      </SubMenu>
      <SubMenu key={CSS_PATH} icon={<UserOutlined/>} title="css特性">
        {
          css_config.map(item => {
            return (<Menu.Item key={item.path}>
              <Link to={item.path}>{item.name}</Link>
            </Menu.Item>);
          })
        }
      </SubMenu>
      <SubMenu key={OTHER_PATH} icon={<UserOutlined/>} title="其他">
        {
          other_config.map(item => {
            return (<Menu.Item key={item.path}>
              <Link to={item.path}>{item.name}</Link>
            </Menu.Item>);
          })
        }
      </SubMenu>
    </>
  );
}

function renderContent() {
  return (
    <Switch>
      {[
        ...es_config,
        ...react_config,
        ...css_config,
        ...other_config,
      ].map(item => {
        return (<Route path={item.path} component={item.component} />);
      })}
    </Switch>
  );
}

export default withRouter(App);

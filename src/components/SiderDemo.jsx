import React from 'react';
import 'antd/dist/antd.css';
import tw from 'tailwind.macro';

import {
  Layout, Menu, Breadcrumb, Icon,
} from 'antd';
import styled from 'styled-components'

const {
  Header, Content, Footer, Sider,
} = Layout;
const SubMenu = Menu.SubMenu;

const NuHeader = styled(Header)`
    ${tw`ml-2 font-sans focus:outline-none list-reset text-white text-center font-black text-lg p`};
    :focus {
  background: #000000;
`

class SiderDemo extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  }

    
  
  render() {
    return (
      <div style={{ background: 'rgb(4, 20, 39)'}}>
        <NuHeader style={{ background: 'rgb(4, 20, 39)', padding: 0, minHeight: 40, color:'white'}}>
            Tracking
        </NuHeader>
      <Layout style={{ minHeight: '100vh' }}>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1">
              <Icon type="pie-chart" />
              <span>Option 1</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="desktop" />
              <span>Option 2</span>
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={<span><Icon type="user" /><span>User</span></span>}
            >
              <Menu.Item key="3">Tom</Menu.Item>
              <Menu.Item key="4">Bill</Menu.Item>
              <Menu.Item key="5">Alex</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={<span><Icon type="team" /><span>Team</span></span>}
            >
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>
            <Menu.Item key="9">
              <Icon type="file" />
              <span>File</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout >
              <Content style={{ background: 'rgb(4, 20, 39)'}}>
                <div style={{background: 'rgb(4, 20, 39)', minHeight: 720 }}>
                    {this.props.children}
                </div>
              </Content>
              <Footer style={{ textAlign: 'center', background: 'rgb(4, 20, 39)' }}>
              </Footer>
        </Layout>
      </Layout>
      </div>
    );
  }
}

export default SiderDemo
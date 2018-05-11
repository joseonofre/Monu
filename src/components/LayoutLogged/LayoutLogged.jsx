import React, { Component } from 'react';

import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { SubMenu } = Menu;
const { Header, Content, Sider, Footer } = Layout;

class LayoutLogged extends Component {
    constructor() {
        super();
        this.state = {
            site: null
        }
    }
    componentWillMount() {
        fetch(`config/site.json`)
            .then((resp) => resp.json())
            .then((resp) => {
                this.setState(
                    { site: resp.site }
                );
            });
    }
    render() {
        return (
            <Layout>
                <Sider width={200} theme="dark">
                    <div className="logo" style={{ minHeight: '32px', background: 'rgba(255,255,255,.2)', margin: '14px 15px' }} />
                    <Menu
                        mode="inline"
                        theme="dark"
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}

                        style={{ height: '100%', borderRight: 0 }}>
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
                            title={<span><Icon type="user" /><span>User</span></span>}>
                            <Menu.Item key="3">Tom</Menu.Item>
                            <Menu.Item key="4">Bill</Menu.Item>
                            <Menu.Item key="5">Alex</Menu.Item>
                        </SubMenu>
                        <SubMenu
                            key="sub2"
                            title={<span><Icon type="team" /><span>Team</span></span>} >
                            <Menu.Item key="6">Team 1</Menu.Item>
                            <Menu.Item key="8">Team 2</Menu.Item>
                        </SubMenu>
                    </Menu>
                </Sider>
                <Layout>
                    <Header className="header">
                        <Menu
                            theme="dark"
                            mode="horizontal"
                            defaultSelectedKeys={['2']}
                            style={{ lineHeight: '64px' }}
                        >
                            <Menu.Item key="1">nav 1</Menu.Item>
                            <Menu.Item key="2">nav 2</Menu.Item>
                            <Menu.Item key="3">nav 3</Menu.Item>
                        </Menu>
                    </Header>
                    <Breadcrumb style={{ margin: '16px 24px' }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>
                    <Content style={{ background: '#fff', padding: 24, margin: '0 24px 24px', minHeight: 280 }}>
                        Content
                        </Content>
                    <Footer style={{ textAlign: 'center' }}>
                        {this.state.site && this.state.site.copyright}
                    </Footer>
                </Layout>
                {/* </Layout> */}
            </Layout>
        );
    }
}

export default LayoutLogged;
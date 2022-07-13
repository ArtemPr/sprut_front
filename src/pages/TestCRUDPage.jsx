import React from 'react'
import { UserOutlined } from '@ant-design/icons';
import { Layout, Menu, Typography } from 'antd';
import CrudTable from '../components/CrudTable';
const { Content, Sider } = Layout;

const TestCRUDPage = () => {
    return (<>
        <Layout style={{
            padding: '20px 0',
        }}>

            <Sider
                theme="light"
                style={{ paddingTop: '60px' }}
                breakpoint="lg"
                collapsedWidth="0"
                onBreakpoint={broken => {
                    console.log(broken);
                }}
                onCollapse={(collapsed, type) => {
                    console.log(collapsed, type);
                }}
            >
                <div className="logo" />
                <Menu theme="light" mode="inline" defaultSelectedKeys={['4']}>
                    <Menu.Item key="1">
                        <UserOutlined />
                        <span className="nav-text">nav 1</span>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <UserOutlined />
                        <span className="nav-text">nav 2</span>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <UserOutlined />
                        <span className="nav-text">nav 3</span>
                    </Menu.Item>
                    <Menu.Item key="4">
                        <UserOutlined />
                        <span className="nav-text">nav 4</span>
                    </Menu.Item>
                </Menu>
            </Sider>

            <Layout
                style={{
                    padding: '0 24px 24px',
                }}
            >

                <Content
                    className="site-layout-background"
                    style={{
                        paddingTop: 65,
                        margin: 0,
                        minHeight: 280,
                    }}
                >

                    <Typography.Title
                        level={3}
                    >Test CRUD</Typography.Title>
                    <CrudTable />

                </Content>
            </Layout>
        </Layout>
    </>
    )
}

export default TestCRUDPage
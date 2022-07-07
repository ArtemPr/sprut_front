import React from 'react'
import { UserOutlined } from '@ant-design/icons';
import { Layout, Menu, Typography, Table } from 'antd';
import { useState, useEffect } from 'react';
const { Content, Sider } = Layout;

const columns2 = [
    {
        title: 'id',
        dataIndex: 'program_id',
        key: 'program_id',
    },
    {
        title: 'Название',
        dataIndex: 'program_name',
        key: 'program_name',
        sorter: (a, b) => a.program_name.localeCompare(b.program_name)
    },
    {
        title: 'Длительность',
        dataIndex: 'length_hour',
        key: 'length_hour',
        sorter: (a, b) => a.length_hour - b.length_hour
    },

    {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
            <span>
                <a>Delete</a>
            </span>
        ),
    },
];

const urlSprutData = 'http://sprut.niidpo.ru/api/program?page=1&max_result=4000&t=a78c9bd272533646ae84683a2eabb817';


const ProgramPage = () => {

    const [sprutData, setSprutData] = useState(null);

    useEffect(() => {
        (async function () {
            let data = await fetch(urlSprutData).then((result) => result.json());
            setSprutData(data);
            console.log('useEffect works');
            console.log(sprutData);
        })();
    }, []);

    console.log(sprutData);

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
                        style={{
                            margin: 0,
                        }}
                    >Программы</Typography.Title>

                    <Table style={{ marginTop: '20px' }}
                        columns={columns2}
                        dataSource={sprutData}
                        rowKey='program_id' />

                </Content>
            </Layout>
        </Layout>
    </>
    )
}

export default ProgramPage
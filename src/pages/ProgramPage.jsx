import React from 'react'
import TablePanel from '../components/TablePanel';
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
        // title: 'Название',
        title: () =>
            <div>
                <span class="ant-table-column-sorter ant-table-column-sorter-full">
                    <span class="ant-table-column-sorter-inner">
                        <span role="img" aria-label="caret-up" class="anticon anticon-caret-up ant-table-column-sorter-up">
                            <svg viewBox="0 0 1024 1024" focusable="false" data-icon="caret-up" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                                <path d="M858.9 689L530.5 308.2c-9.4-10.9-27.5-10.9-37 0L165.1 689c-12.2 14.2-1.2 35 18.5 35h656.8c19.7 0 30.7-20.8 18.5-35z">
                                </path>
                            </svg>
                        </span>
                        <span role="img" aria-label="caret-down" class="anticon anticon-caret-down ant-table-column-sorter-down">
                            <svg viewBox="0 0 1024 1024" focusable="false" data-icon="caret-down" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z">
                            </path>
                            </svg>
                        </span>
                    </span>
                </span>

                Название</div>
        ,
        dataIndex: 'program_name',
        key: 'program_name',
        sorter: (a, b) => a.program_name.localeCompare(b.program_name)
    },
    {
        title: 'Длительность',
        dataIndex: 'length_hour',
        key: 'length_hour',
        sorter: (a, b) => a.length_hour - b.length_hour
    }
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
                    <TablePanel />

                    <Table style={{ marginTop: '20px' }}
                        columns={columns2}
                        dataSource={sprutData}
                        rowKey='program_id'

                        onRow={(record, rowIndex) => {
                            return {
                                onDoubleClick: event => {
                                    alert('table double click')
                                }, // double click row
                                onClick: event => {
                                    //   alert('table click')
                                }, // click row
                            };
                        }}

                    />

                </Content>
            </Layout>
        </Layout>
    </>
    )
}

export default ProgramPage
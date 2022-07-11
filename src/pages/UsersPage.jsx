import React from 'react'
import { Link } from 'react-router-dom';
import { UserOutlined } from '@ant-design/icons';
import { Layout, Menu, Typography, Table, Divider } from 'antd';
import ReactDragListView from "react-drag-listview";
import ExelBtn from '../components/ExelBtn';
import { useState } from 'react';
const { Content, Sider } = Layout;




// test drag table https://codesandbox.io/s/qz20y44449?file=/index.js:1559-1760
// const columns = [
//     {
//         title: "Name",
//         dataIndex: "name",
//         key: "name",
//         //    render: text => <a href="javascript:;">{text}</a>
//         render: text => <a href="javascript:;">{text}</a>
//     },
//     {
//         title: "Age",
//         dataIndex: "age",
//         key: "age",
//         // render: text => <Link to={`/users/${text}`}>{text}</Link>
//     },
//     {
//         title: "Address",
//         dataIndex: "address",
//         key: "address"
//     },
//     {
//         title: "Action",
//         key: "action",
//         render: (text, record) => (
//             <span>
//                 <a href="javascript:;">Action 一 {record.name}</a>
//                 <Divider type="vertical" />
//                 <a href="javascript:;">Delete</a>
//                 <Divider type="vertical" />
//                 <a href="javascript:;" className="ant-dropdown-link">
//                     More actions
//                 </a>
//             </span>
//         )
//     }
// ];

// const data = [
//     {
//         key: "1",
//         name: "John Brown",
//         age: 32,
//         address: "New York No. 1 Lake Park"
//     },
//     {
//         key: "2",
//         name: "Jim Green",
//         age: 42,
//         address: "London No. 1 Lake Park"
//     },
//     {
//         key: "3",
//         name: "Joe Black",
//         age: 32,
//         address: "Sidney No. 1 Lake Park"
//     }
// ];
// test drag table


const UsersPage = () => {

    // const [columnState, setColumnState] = useState(columns);

    // const onDragEnd = (fromIndex, toIndex) => {
    //     const columnsCopy = columnState.slice();
    //     const item = columnsCopy.splice(fromIndex, 1)[0];
    //     columnsCopy.splice(toIndex, 0, item);
    //     setColumnState(columnsCopy);
    // };

    return (
        <>
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
                        >Пользователи</Typography.Title>

                        {/* // test drag table */}
                        {/* <div className='dragTableTest'>
                            <ReactDragListView.DragColumn
                                onDragEnd={onDragEnd}
                                nodeSelector="th"
                            >
                                <Table columns={columnState} dataSource={data} />
                            </ReactDragListView.DragColumn>
                        </div> */}

                        {/* // test drag table */}
                        <ul>
                            <li>
                                <Link to='John Brown'>John Brown</Link>
                            </li>
                            <li>
                                <Link to='John Doe'>John Doe</Link>
                            </li>
                            <li>
                                <Link to='Jane Brown'>Jane Brown</Link>
                            </li>
                        </ul>
                        <ExelBtn>dsdsd</ExelBtn>
                    </Content>
                </Layout>
            </Layout>
        </>
    )
}

export default UsersPage
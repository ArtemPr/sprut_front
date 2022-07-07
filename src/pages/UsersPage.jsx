import React from 'react'
import { UserOutlined } from '@ant-design/icons';
import { Layout, Menu, Typography, Table } from 'antd';
import ReactDragListView from "react-drag-listview";
import { useState, useEffect } from 'react';
const { Content, Sider } = Layout;



// test drag table https://codesandbox.io/s/qz20y44449?file=/index.js:1559-1760
// const columns = [
//     {
//         title: "Name",
//         dataIndex: "name",
//         key: "name",
//         render: text => <a href="javascript:;">{text}</a>
//     },
//     {
//         title: "Age",
//         dataIndex: "age",
//         key: "age"
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



// const items1 = ['1', '2', '3'].map((key) => ({
//     key,
//     label: `nav ${key}`,
// }));
// const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map((icon, index) => {
//     const key = String(index + 1);
//     return {
//         key: `sub${key}`,
//         icon: React.createElement(icon),
//         label: `subnav ${key}`,
//         items: new Array(4).fill(null).map((_, j) => {
//             const subKey = index * 4 + j + 1;
//             return {
//                 key: subKey,
//                 label: `option${subKey}`,
//             };
//         }),
//     };
// });



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
    },
    {
        title: 'Длительность',
        dataIndex: 'length_hour',
        key: 'length_hour',
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

const data2 = [
    // {
    //     key: 'program_id',
    //     name: 'John Brown',
    //     age: 32,
    //     address: 'New York No. 1 Lake Park',
    //     tags: ['nice', 'developer'],
    // },
    // {
    //     key: '2',
    //     name: 'Jim Green',
    //     age: 42,
    //     address: 'London No. 1 Lake Park',
    //     tags: ['normal'],
    // },
    // {
    //     key: '3',
    //     name: 'Joe Black',
    //     age: 32,
    //     address: 'Sidney No. 1 Lake Park',
    //     tags: ['cool', 'teacher'],
    // },
];



const urlSprutData = 'http://sprut.niidpo.ru/api/program?page=1&max_result=4000&t=a78c9bd272533646ae84683a2eabb817';


const UsersPage = () => {

    //    const [columnState, setColumnState] = useState(columns);

    // const onDragEnd = (fromIndex, toIndex) => {
    //     const columnsCopy = columnState.slice();
    //     const item = columnsCopy.splice(fromIndex, 1)[0];
    //     columnsCopy.splice(toIndex, 0, item);
    //     setColumnState(columnsCopy);
    // };

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

    return (
        <>

            <Layout style={{
                padding: '20px 0',
            }}>


                {/* <Sider style={{
                    backgroundColor: '#fff',
                    height: '100vh',
                    paddingTop: '60px'
                }}>
                    <Menu
                        theme="light"
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        style={{
                            height: '80vh',
                            borderRight: 0,
                        }}
                        items={items2}
                    />

                </Sider> */}

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

                        <Table style={{ marginTop: '20px' }} columns={columns2} dataSource={sprutData} rowKey='program_id' />

                    </Content>
                </Layout>
            </Layout>


        </>
    )
}

export default UsersPage
import React, { useState, useEffect } from 'react'
import { UserOutlined } from '@ant-design/icons';
import { Layout, Menu, Typography, Table, Image, Button, Drawer, Popconfirm, Form, Input } from 'antd';
const { Content, Sider } = Layout;

const TestCRUD = () => {
    const columns = [
        {
            title: 'id',
            dataIndex: 'id',
            key: 'id',
            sorter: (a, b) => a.id - b.id
        },
        {
            title: 'FirstName',
            dataIndex: 'firstName',
            key: 'firstName',
            sorter: (a, b) => a.firstName.localeCompare(b.firstName)
        },
        {
            title: 'LastName',
            dataIndex: 'lastName',
            key: 'lastName',
            sorter: (a, b) => a.lastName.localeCompare(b.lastName)
        },
        {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
            sorter: (a, b) => a.age - b.age
        },
        {
            title: 'email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'phone',
            dataIndex: 'phone',
            key: 'phone',
        },
        {
            title: 'ip',
            dataIndex: 'ip',
            key: 'ip',
        },
        // {
        //     title: 'Address',
        //     dataIndex: 'address',
        //     key: 'address',
        //     render: (item) => item['address']
        // },
        {
            title: 'photo',
            dataIndex: 'image',
            key: 'image',
            render: (image) => <Image style={{ height: '70px' }} src={image} />
        }
    ];

    const [form] = Form.useForm();
    const [visible, setVisible] = useState(false);
    const [dataSource, setDataSource] = useState([]);
    const [selectedId, setSelectedId] = useState(null);
    const [userData, setUserData] = useState('');

    const onClose = () => {
        setVisible(false);
    };

    let baseUrl = `http://localhost:5000/users`;

    // Get all data
    useEffect(() => {
        (async function () {
            let data = await fetch(baseUrl).then((result) => result.json());
            setDataSource(data);
            setSelectedId(data[0]['id'])
        })();
    }, []);

    // Delete Row
    const deleteRow = async () => {
        console.log('deleteRow selectedId ', selectedId);
        const res = await fetch(`http://localhost:5000/users/${selectedId}`, {
            method: 'DELETE',
        })
        console.log(res)
        res.status === 200
            ? setDataSource(dataSource.filter((user) => user.id !== selectedId))
            : alert('Error Deleting This User')
    }

    const showDrawer = async () => {
        const userDataRaw = await fetch(`http://localhost:5000/users/${selectedId}`).then((result) => result.json());
        console.log('userDataRaw ', userDataRaw);
        setUserData(userDataRaw);
        console.log('userData ', userData);
        setVisible(true);
    };


    const changeSelectedUser = (target, record) => {
        // console.log('changeSelectedUser record ', record.id)
        // setSelectedId(record.id);
        // console.log(selectedId);

        let activeRow = document.querySelector('.is-selected');
        if (activeRow) {
            if (selectedId === record.id) {
                setSelectedId(null);
                activeRow.classList.remove('is-selected');
            } else {
                setSelectedId(record.id);
                activeRow.classList.remove('is-selected');
                target.classList.add('is-selected');
            }
        } else {
            setSelectedId(record.id);
            target.classList.add('is-selected');
        }
    }


    const onFinish = async (values) => {
        console.log('onFinish', values);
        //   console.log('on F userData', userData);
        const userToEdit = await fetch(`http://localhost:5000/users/${selectedId}`)
        console.log('userToEdit ', userData)
        //  const updatedUser = { ...userToEdit, values } /*хрень какая-то*/
        const updatedUser = Object.assign(userToEdit, values);
        console.log('updatedUser ', updatedUser)

        const res = await fetch(`http://localhost:5000/users/${selectedId}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(updatedUser),
        })

        const dataUpd = await res.json()


        let data = await fetch(baseUrl).then((result) => result.json());
        setDataSource(data);
        setSelectedId(data[0]['id'])

        if (res.status === 200) {
            setVisible(false)
        }
    }


    return (<>
        <Layout style={{
            padding: '20px 0',
        }}>

            <Sider
                theme="light"
                style={{ paddingTop: '60px', height: '100vh' }}
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
                    // style={{
                    //     margin: 0,
                    // }}
                    >Test CRUD</Typography.Title>

                    <div className='buttons' style={{ marginBottom: '40px' }}>
                        <Button onClick={showDrawer}>
                            Edit
                        </Button>
                        <Popconfirm onConfirm={deleteRow} title="Are you sure？" okText="Yes" cancelText="No">
                            <Button danger>
                                Delete
                            </Button>
                        </Popconfirm>
                        {/* <Button danger onClick={deleteRow}>
                            Delete
                        </Button> */}
                    </div>

                    <Drawer width="80%" title={`Edit user: id ${selectedId}`} placement="right" onClose={onClose} visible={visible}>

                        <Form
                            onFinish={onFinish}
                            name="wrap"
                            labelCol={{
                                flex: '110px',
                            }}
                            labelAlign="left"
                            labelWrap
                            wrapperCol={{
                                flex: 1,
                            }}
                            colon={false}

                            initialValues={{
                                firstName: userData ? userData.firstName : '',
                                lastName: userData ? userData.lastName : '',
                                age: userData ? userData.age : '',
                                email: userData ? userData.email : '',
                                phone: userData ? userData.phone : '',
                            }}
                        >
                            <Form.Item
                                label="firstName"
                                name="firstName"
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                label="lastName"
                                name="lastName"
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                label="age"
                                name="age"
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                label="email"
                                name="email"
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                label="phone"
                                name="phone"
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item label=" ">
                                <Button type="primary" htmlType="submit">
                                    Submit
                                </Button>
                            </Form.Item>
                        </Form>
                    </Drawer>

                    <Table
                        dataSource={dataSource}
                        columns={columns}
                        rowKey='id'

                        onRow={(record) => {
                            return {
                                onClick: event => {
                                    console.log('record ', record);
                                    //    setSelectedId(record.id);
                                    changeSelectedUser(event.currentTarget, record)
                                    //    changeSelectedUser(event.currentTarget, record)
                                    //  changeSelected(event.currentTarget, record)
                                },
                            };
                        }}
                    />

                </Content>
            </Layout>
        </Layout>
    </>
    )
}

export default TestCRUD
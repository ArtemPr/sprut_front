import React, { useState, useEffect } from 'react'
import { Input, Button, Drawer, Popconfirm, Form } from 'antd';

const CrudPanel = ({ selectedId, deleteRow, onClose, onFinish, visible, setVisible }) => {

    const [form] = Form.useForm();
    const [rowServerData, setRowServerData] = useState('');

    let selectedItemUrl = `http://localhost:5000/users/${selectedId}`;

    useEffect(() => {
        form.setFieldsValue({
            firstName: rowServerData ? rowServerData.firstName : '',
            lastName: rowServerData ? rowServerData.lastName : '',
            age: rowServerData ? rowServerData.age : '',
            email: rowServerData ? rowServerData.email : '',
            phone: rowServerData ? rowServerData.phone : ''
        })
    }, [rowServerData])


    const showDrawer = async () => {
        let userDataRaw = await fetch(selectedItemUrl).then((result) => result.json());
        setRowServerData(userDataRaw);
        setVisible(true);

        // console.log('drawer selectedId ', selectedId)
        // console.log('rowServerData ', rowServerData);
    };


    return (
        <>
            <div className='buttons' style={{ marginBottom: '40px' }}>
                <Button onClick={showDrawer}>
                    Edit
                </Button>
                <Popconfirm onConfirm={deleteRow} title="Are you sure？" okText="Yes" cancelText="No">
                    <Button danger>
                        Delete
                    </Button>
                </Popconfirm>
            </div>
            <Drawer width="80%" title={`Edit user: id ${selectedId}`} placement="right" onClose={onClose} visible={visible} forceRender={true}>

                <Form
                    /*fix error 
                    Instance created by `useForm` is not connected to any Form element. 
                    Forget to pass `form` prop?, 
                    начали подставляться необходимые поля каждый раз, помогло  form={form} + forceRender={true}*/
                    form={form}
                    name="form"
                    labelCol={{
                        flex: '110px',
                    }}
                    labelAlign="left"
                    labelWrap
                    wrapperCol={{
                        flex: 1,
                    }}
                    autoComplete="off"
                    initialValues={{
                        firstName: rowServerData ? rowServerData.firstName : '',
                        lastName: rowServerData ? rowServerData.lastName : '',
                        age: rowServerData ? rowServerData.age : '',
                        email: rowServerData ? rowServerData.email : '',
                        phone: rowServerData ? rowServerData.phone : ''
                    }}
                    onFinish={onFinish}
                >
                    <Form.Item
                        label="firstName"
                        name="firstName"
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="lastName"
                        name="lastName"
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="age"
                        name="age"
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="email"
                        name="email"
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="phone"
                        name="phone"
                    >
                        <Input />
                    </Form.Item>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form>
            </Drawer>
        </>
    )
}

export default CrudPanel
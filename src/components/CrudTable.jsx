import React, { useState, useEffect } from 'react'

import { Image } from 'antd';

import CrudBody from './CrudBody'
import CrudPanel from './CrudPanel'

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
    // title: 'Address',
    // dataIndex: 'address',
    // key: 'address',
    // render: (item) => item['address']
    // },
    {
        title: 'photo',
        dataIndex: 'image',
        key: 'image',
        render: (image) => <Image style={{ height: '70px' }} src={image} />
    }
];

const CrudTable = () => {
    const [dataSource, setDataSource] = useState([]);
    const [selectedId, setSelectedId] = useState(null);
    const [visible, setVisible] = useState(false);

    const onClose = () => {
        setVisible(false);
    };

    let baseUrl = `http://localhost:5000/users`;
    let selectedItemUrl = `http://localhost:5000/users/${selectedId}`

    // Get all data
    useEffect(() => {
        (async function () {
            let data = await fetch(baseUrl).then((result) => result.json());
            setDataSource(data);
            setSelectedId(data[0]['id'])
        })();
    }, []);

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

    const onFinish = async (values) => {
        console.log('onFinish', values);
        const userToEdit = await fetch(selectedItemUrl).then((result) => result.json())
        console.log('userToEdit ', userToEdit)
        //   const updatedUser = { ...userToEdit, values } /*хрень какая-то*/
        const updatedUser = Object.assign(userToEdit, values);
        console.log('updatedUser ', updatedUser)
        const res = await fetch(selectedItemUrl, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(updatedUser),
        })
        const dataUpd = await res.json()

        let data = await fetch(`http://localhost:5000/users`).then((result) => result.json());

        setDataSource(data);
        setSelectedId(data[0]['id'])
        if (res.status === 200) {
            setVisible(false)
        }
    }

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

    return (<>
        <CrudPanel visible={visible} setVisible={setVisible}
            onClose={onClose} selectedId={selectedId}
            deleteRow={deleteRow} onFinish={onFinish} />

        <CrudBody selectedId={selectedId}
            changeSelectedUser={changeSelectedUser}
            columns={columns}
            dataSource={dataSource} />
    </>
    )
}

export default CrudTable
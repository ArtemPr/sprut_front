import React from 'react'
import { Table } from 'antd';

const CrudBody = ({ columns, dataSource, changeSelectedUser, selectedId }) => {
    return (
        <Table style={{ marginTop: '20px' }}
            dataSource={dataSource}
            columns={columns}
            rowKey='id'

            onRow={(record, rowIndex) => {
                return {
                    onClick: event => {
                        console.log('record ', record);
                        changeSelectedUser(event.currentTarget, record)
                    },
                };
            }}

        />
    )
}

export default CrudBody
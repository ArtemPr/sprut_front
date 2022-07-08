import React, { useState } from 'react'
import { Table } from 'antd';

const TableBody = ({ columns, sprutData, selectedRow, changeSelected }) => {
    // const [selectedRow, setSelectedRow] = useState(null);

    // function changeSelected(target, record) {
    //    // console.log('toggle');
    //     setSelectedRow(record.program_id);
    //     let activeRow = document.querySelector('.is-selected');
    //     if (activeRow) {
    //         activeRow.classList.remove('is-selected');
    //     }

    //     target.classList.add('is-selected');
    // }

    return (
        <Table style={{ marginTop: '20px' }}
            columns={columns}
            dataSource={sprutData}
            rowKey='program_id'

            onRow={(record, rowIndex) => {
                return {
                    onDoubleClick: event => {
                        console.log('table double click');
                    }, // double click row
                    onClick: event => {
                        console.log('record ', record);
                        changeSelected(event.currentTarget, record)
                    },
                };
            }}

        />
    )
}

export default TableBody
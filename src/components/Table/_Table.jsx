import React, { useState, useEffect } from 'react'

import TableBody from './TableBody'
import TablePanel from './TablePanel'

const columns = [
    {
        title: 'id',
        dataIndex: 'program_id',
        key: 'program_id',
    },
    {
        title: 'Название',
        // title: () =>
        //     <div>
        //         <span class="ant-table-column-sorter ant-table-column-sorter-full">
        //             <span class="ant-table-column-sorter-inner">
        //                 <span role="img" aria-label="caret-up" class="anticon anticon-caret-up ant-table-column-sorter-up">
        //                     <svg viewBox="0 0 1024 1024" focusable="false" data-icon="caret-up" width="1em" height="1em" fill="currentColor" aria-hidden="true">
        //                         <path d="M858.9 689L530.5 308.2c-9.4-10.9-27.5-10.9-37 0L165.1 689c-12.2 14.2-1.2 35 18.5 35h656.8c19.7 0 30.7-20.8 18.5-35z">
        //                         </path>
        //                     </svg>
        //                 </span>
        //                 <span role="img" aria-label="caret-down" class="anticon anticon-caret-down ant-table-column-sorter-down">
        //                     <svg viewBox="0 0 1024 1024" focusable="false" data-icon="caret-down" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z">
        //                     </path>
        //                     </svg>
        //                 </span>
        //             </span>
        //         </span>

        //         Название</div>
        // ,
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


const _Table = () => {

    const [sprutData, setSprutData] = useState(null);
    const [selectedRow, setSelectedRow] = useState(null);

    useEffect(() => {
        (async function () {
            let data = await fetch(urlSprutData).then((result) => result.json());
            setSprutData(data);
        })();
    }, []);

    function changeSelected(target, record) {
        // console.log('toggle');
        let activeRow = document.querySelector('.is-selected');
        if (activeRow) {
            if (selectedRow === record.program_id) {
                setSelectedRow(null);
                activeRow.classList.remove('is-selected');
            } else {
                setSelectedRow(record.program_id);
                activeRow.classList.remove('is-selected');
                target.classList.add('is-selected');
            }
        } else {
            setSelectedRow(record.program_id);
            target.classList.add('is-selected');
        }
    }

    return (
        <>
            <TablePanel selectedRow={selectedRow} />
            <TableBody
                selectedRow={selectedRow}
                changeSelected={changeSelected}
                columns={columns}
                sprutData={sprutData} />
        </>
    )
}

export default _Table
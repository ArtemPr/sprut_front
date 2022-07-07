import React from 'react'
import { Input } from 'antd';
const { Search } = Input;

const onSearch = (value) => console.log(value);

const TablePanel = () => {
    return (
        <div style={{ marginTop: '20px' }}>
            <Search placeholder="Поиск" allowClear onSearch={onSearch} style={{ width: 500 }} />
        </div>
    )
}

export default TablePanel
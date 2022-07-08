import React, { useState, useEffect } from 'react'
import FgosType from '../FgosType';
import { useLocation } from 'react-router-dom';
import { Input, Button, Drawer, Tabs, Form, Select } from 'antd';
const { Search } = Input;
const { Option } = Select;
const { TabPane } = Tabs;

const TablePanel = ({ selectedRow }) => {
    const [form] = Form.useForm();

    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const location = useLocation();
    //    let selectedItemUrl = `${location.protocol}//${location.host}/form/program/${selectedRow}`;
    let selectedItemUrl = `http://sprut.niidpo.ru/api/program/${selectedRow}?t=a78c9bd272533646ae84683a2eabb817`;
    // console.log(selectedItemUrl);

    const [rowServerData, setRowServerData] = useState('');

    console.log('rowServerData ', rowServerData);

    const [visible, setVisible] = useState(false);

    const onSearch = (value) => console.log(value);

    const showDrawer = async () => {
        let data = await fetch(selectedItemUrl).then((result) => result.json());
        setRowServerData(data);
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };

    const onChange = (key) => {
        console.log(key);
    };


    return (
        <div className='table-panel' style={{ marginTop: '20px' }}>
            <Search placeholder="Поиск" size='large' allowClear onSearch={onSearch} style={{ width: 500 }} />
            <div className="btn-group">
                <Button size='large' onClick={showDrawer} disabled={selectedRow === null ? 'disabled' : ''} >
                    Просмотр
                </Button>
                <Button size='large' onClick={showDrawer}>
                    Создать
                </Button>
                <Button size='large' onClick={showDrawer} disabled={selectedRow === null ? 'disabled' : ''}>
                    Изменить
                </Button>
                <Button size='large' onClick={showDrawer} disabled={selectedRow === null ? 'disabled' : ''}>
                    Удалить
                </Button>
            </div>
            <Drawer title="Модальное окно Программы" width="80%" placement="right" onClose={onClose} visible={visible}>
                <Form
                    layout='vertical'
                    name="basic"
                    labelCol={{
                        span: 3,
                    }}
                    wrapperCol={{
                        span: 14,
                    }}
                    initialValues={{

                        name: rowServerData ? rowServerData.name : '',
                        type: rowServerData ? rowServerData.program_type.name_type : '',
                        // type: rowServerData.program_type.id
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Tabs onChange={onChange} type="card">
                        <TabPane tab="Основное" key="1">
                            <Form.Item
                                labelAlign="left"
                                label="Название"
                                name="name"
                            // rules={[
                            //     {
                            //         required: true,
                            //         message: 'Введите название',
                            //     },
                            // ]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item labelAlign="left" name="type" label="Тип программы"
                            // rules={[{ required: true }]}
                            >
                                <Select
                                    placeholder="Выберите тип программы"
                                    allowClear

                                // defaultValue={rowServerData ? rowServerData.program_type.name_type : '2'}
                                >
                                    <Option value="1">Повышение квалификации</Option>
                                    <Option value="2">Профессиональная переподготовка</Option>
                                    <Option value="3">Профессиональное обучение</Option>
                                </Select>
                            </Form.Item>
                            <p>Кликнули по {selectedRow}</p>
                        </TabPane>
                        <TabPane tab="ФГОС" key="2">
                            Content of Tab Pane 2
                            {/* <FgosType /> */}
                        </TabPane>
                    </Tabs>

                    <Button type="primary" htmlType="submit">
                        Сохранить
                    </Button>


                </Form>
            </Drawer>
        </div >
    )
}

export default TablePanel
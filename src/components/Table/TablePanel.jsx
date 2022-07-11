import React, { useState, useEffect } from 'react'
import FgosType from '../FgosType';
import { useLocation } from 'react-router-dom';
import { Input, Button, Drawer, Tabs, Form, Select, AutoComplete } from 'antd';
const { Search } = Input;
const { Option } = Select;
const { TabPane } = Tabs;

const TablePanel = ({ selectedRow }) => {
    const [form] = Form.useForm();
    const options = [
        {
            "id": 1,
            "value": "Страховое дело"
        },
        {
            "id": 2,
            "value": "Банковское дело"
        },
        {
            "id": 3,
            "value": "Экономика"
        },
        {
            "id": 4,
            "value": "Менеджмент"
        },
        {
            "id": 5,
            "value": "Управление персоналом"
        },
        {
            "id": 6,
            "value": "Государственное и муниципальное управление (уровень бакалавриата)"
        },
        {
            "id": 7,
            "value": "Экономическая безопасность (уровень специалитета)"
        },
        {
            "id": 8,
            "value": "Социальная работа"
        },
        {
            "id": 9,
            "value": "Право и организация социального обеспечения"
        },
        {
            "id": 10,
            "value": "Правоохранительная деятельность"
        }
    ]

    async function getH() {
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            // body: JSON.stringify({
            //     title: 'foo',
            //     body: 'bar',
            //     userId: 1,
            // }),
            body: JSON.stringify({
                id: '5016', name: '1111', type: 'Повышение квалификации', hidden: '15000'
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => console.log('fakeserver', json));
    }
    getH();

    const onFinish = async (values) => {
        console.log('onFinish')
        // var formValues = { ...values, hidden: hiddenInputValue, id: selectedRow };
        // console.log('form data:', formValues);
        //    var formValues = { id: '5016', name: '1111', type: 'Повышение квалификации', hidden: '15000' }
        fetch(`http://sprut.niidpo.ru/api/update_program?t=a78c9bd272533646ae84683a2eabb817`, {
            method: "POST",
            body: JSON.stringify({
                id: '5016', name: '1111', type: 'Повышение квалификации', hidden: '15000'
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        }).then((response) => response.json())
            .then((json) => console.log('sprut', json));
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const location = useLocation();
    //    let selectedItemUrl = `${location.protocol}//${location.host}/form/program/${selectedRow}`;
    let selectedItemUrl = `http://sprut.niidpo.ru/api/program/${selectedRow}?t=a78c9bd272533646ae84683a2eabb817`;
    // console.log(selectedItemUrl);

    const [rowServerData, setRowServerData] = useState('');
    const [fgosSelectVisible, setFgosSelectVisible] = useState(false);
    const [hiddenInputValue, setHiddenInputValue] = useState(100500);

    const setHiddenInput = (data) => {
        let filteredArr = options.filter(option => option.value === data);
        let filteredId = null;
        if (filteredArr.length > 0) {
            filteredId = filteredArr[0]['id'];
            //  setHiddenInputValue(filteredId);
            setHiddenInputValue(filteredId)
        }
        console.log(filteredId);
        console.log(hiddenInputValue);
    }


    //    console.log('rowServerData ', rowServerData);

    const [visible, setVisible] = useState(false);

    const onSearch = (value) => console.log(value);

    const showFgosSelect = (key) => {
        console.log(key);
        if (key === 2 || 3) {
            setFgosSelectVisible(true);
        }

    }

    const showDrawer = async () => {
        let data = await fetch(selectedItemUrl).then((result) => result.json());
        setRowServerData(data);
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };

    const onChange = (key) => {
        //   console.log(key);
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
                        hidden: hiddenInputValue
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
                            <Form.Item labelAlign="left" name="fgos" label="Тип образования"
                            // rules={[{ required: true }]}
                            >
                                <Select onChange={showFgosSelect}
                                    placeholder="Выберите тип образования"
                                    allowClear

                                // defaultValue={rowServerData ? rowServerData.program_type.name_type : '2'}
                                >

                                    <Option value="2">Среднее</Option>
                                    <Option value="3">Высшее</Option>
                                </Select>
                            </Form.Item>

                            <>
                                {fgosSelectVisible ? <>
                                    <Form.Item
                                        labelAlign="left"
                                        label="Выберите образование"
                                        name="fgos-ed-f"
                                    >
                                        <AutoComplete
                                            style={{
                                                width: '100%'
                                            }}
                                            options={options}
                                            placeholder="Выберите образование"
                                            filterOption={(inputValue, option) =>
                                                option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
                                            }
                                            onSelect={(data) => setHiddenInput(data)}
                                        />
                                    </Form.Item>

                                    <input type="hidden" name='hidden' value={hiddenInputValue} />
                                </> : ''}

                            </>


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
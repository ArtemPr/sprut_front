import React from 'react'
import './App.css';
import logo from './assets/images/logo.svg';
import HomePage from './pages/HomePage';
import UsersPage from './pages/UsersPage';
import NotFoundPage from './pages/NotFoundPage';

import { UserOutlined } from '@ant-design/icons';

import { Routes, Route, Link } from 'react-router-dom';

import { Layout, Menu, Space } from 'antd';
const { Header } = Layout;





function App() {


    return (
        <>
            <Layout>
                <Header className="header" style={{
                    position: 'fixed',
                    zIndex: 1,
                    width: '100%',
                    background: '#fff'
                }}>

                    <div className="navbar">
                        <Link to="/">
                            <span className="logo">
                                <img height='30' alt='logo' src={logo} />
                            </span>
                        </Link>


                        <Menu theme="light"
                            mode="horizontal" style={{
                                width: '415px'
                            }}>
                            <Menu.Item key='1'>
                                <Link to="/">Рабочий стол</Link></Menu.Item>
                            <Menu.SubMenu title="Курсы" key='10'>
                                <Menu.Item key='2'>
                                    <a href='/program'>Программы</a></Menu.Item>
                                <Menu.Item key='3'>Дисциплины</Menu.Item>
                            </Menu.SubMenu>
                            <Menu.SubMenu title="Панель управления" key='12'>
                                <Menu.Item key='4'><Link to='/users'>Пользователи</Link></Menu.Item>
                                <Menu.Item key='5'>Справочники</Menu.Item>
                                <Menu.Item key='6'>Журнал событий</Menu.Item>
                            </Menu.SubMenu>
                        </Menu>
                    </div>

                    <div className='navbar__user'>
                        <Space size='small' >
                            <UserOutlined />

                            <span>Ivan Pupkin</span>
                        </Space>
                    </div>
                </Header>

                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/users' element={<UsersPage />} />
                    <Route path='*' element={<NotFoundPage />} />
                </Routes>


            </Layout >
        </>
    )
}

export default App;

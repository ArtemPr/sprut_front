import React from 'react'
import './App.css';

import { Routes, Route } from 'react-router-dom';

import PageLayout from './components/PageLayout';
import HomePage from './pages/HomePage';
import UsersPage from './pages/UsersPage';
import ProgramPage from './pages/ProgramPage';
import NotFoundPage from './pages/NotFoundPage';
import UsersSinglePage from './pages/UsersSinglePage';
import TestCRUDPage from './pages/TestCRUDPage';

import logo from './assets/images/logo.svg';

import { NavLink, Outlet } from 'react-router-dom';

import { UserOutlined } from '@ant-design/icons';
import { Layout, Menu, Space } from 'antd';
const { Header } = Layout;

function App() {
    return (
        <>

            <Layout style={{ minHeight: '100vh' }}>
                <Header className="header" style={{
                    position: 'fixed',
                    zIndex: 1,
                    width: '100%',
                    background: '#fff'
                }}>

                    <div className="navbar">

                        <span className="logo">
                            <img height='30' alt='logo' src={logo} />
                        </span>

                        <Menu theme="light"
                            mode="horizontal" style={{
                                width: '415px'
                            }}>
                            <Menu.Item key='1'>
                                <NavLink to="/">Рабочий стол</NavLink>
                            </Menu.Item>
                            <Menu.SubMenu title="Курсы" key='10'>
                                <Menu.Item key='2'>
                                    <NavLink to='/program'>Программы</NavLink>
                                </Menu.Item>
                                <Menu.Item key='3'>Дисциплины</Menu.Item>
                                <Menu.Item key='7'>
                                    <NavLink to="/test">Test CRUD</NavLink></Menu.Item>
                            </Menu.SubMenu>
                            <Menu.SubMenu title="Панель управления" key='12'>
                                <Menu.Item key='4'><NavLink to='/users'>Пользователи</NavLink></Menu.Item>
                                <Menu.Item key='5'>
                                    <NavLink to='/fgos'>
                                        Справочники
                                    </NavLink>
                                </Menu.Item>
                                <Menu.Item key='6'>Журнал событий</Menu.Item>
                            </Menu.SubMenu>
                        </Menu>
                    </div>

                    <div className='navbar__user'>
                        <Space size='small' >
                            <UserOutlined />

                            <span>Ivan Ivanov</span>
                        </Space>
                    </div>
                </Header>

                <Routes>

                    <Route path='/' element={<HomePage />} />
                    <Route path='/users' element={<UsersPage />} />
                    <Route path='/users/:name' element={<UsersSinglePage />} />
                    <Route path='/program' element={<ProgramPage />} />
                    <Route path='/test' element={<TestCRUDPage />} />
                    <Route path='*' element={<NotFoundPage />} />

                </Routes>

            </Layout >
        </>
    )
}

export default App;

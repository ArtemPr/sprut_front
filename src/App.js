import React from 'react'
import './App.css';

import { Routes, Route } from 'react-router-dom';

import PageLayout from './components/PageLayout';
import HomePage from './pages/HomePage';
import UsersPage from './pages/UsersPage';
import ProgramPage from './pages/ProgramPage';
import NotFoundPage from './pages/NotFoundPage';
import UsersSinglePage from './pages/UsersSinglePage';

function App() {
    return (
        <>
            <Routes>
                <Route path='/' element={<PageLayout />}>
                    <Route index element={<HomePage />} />
                    <Route path='/users' element={<UsersPage />} />
                    <Route path='/users/:name' element={<UsersSinglePage />} />
                    <Route path='/program' element={<ProgramPage />} />
                    <Route path='*' element={<NotFoundPage />} />
                </Route>
            </Routes>
        </>
    )
}

export default App;

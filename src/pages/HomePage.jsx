import React from 'react'
import MasonryDesktop from '../components/MasonryDesktop'
import { Layout } from 'antd';
const { Header } = Layout;

const HomePage = () => {
    return (
        <Layout style={{
            height: '100%',
            paddingTop: '120px',
            paddingBottom: '120px',
            backgroundColor: '#f5f7fb;'
        }}>
            <div className="container">
                <MasonryDesktop />
            </div>
        </Layout>
    )
}

export default HomePage
import React from 'react'
import { Layout } from 'antd';
import { Link } from 'react-router-dom'
const { Content } = Layout;


const NotFoundPage = () => {
  return (
    <Layout
      style={{
        padding: '0 24px 24px',
      }}
    >

      <Content
        className="site-layout-background"
        style={{
          textAlign: 'center',
          paddingTop: 65,
          margin: 0,
          minHeight: 280,
        }}
      >
        <h1>notFoundPage 404</h1>
        <p>
          <Link to="">Рабочий стол</Link>
        </p>
      </Content>
    </Layout>
  )
}

export default NotFoundPage
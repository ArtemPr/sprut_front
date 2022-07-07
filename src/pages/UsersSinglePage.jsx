import React from 'react'
import { useParams } from 'react-router-dom';
import { Layout } from 'antd';


const UsersSinglePage = () => {
    //   console.log(useParams());
    // деструктурировать
    const { name } = useParams();
    //    console.log(name);


    return (
        <Layout style={{
            paddingTop: '120px',
        }}>UsersSinglePage {name}
        </Layout>
    )
}

export default UsersSinglePage
import React from 'react'
import { Col, Divider, Row } from 'antd';

//description = 'lorem ipsum'

const DesktopItem = ({ name, link, picture }) => {
    return (
        <Col span={6}>
            <a className="desktop-item" href={link}>
                {picture}
                <p className="desktop-item__name">{name}</p>
                {/* <p>{description}</p> */}
            </a>
        </Col>
    )
}

export default DesktopItem
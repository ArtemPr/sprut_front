import React from 'react'
import { Col, Divider, Row } from 'antd';

const DesktopItem = ({ name, link, picture, description = 'lorem ipsum' }) => {
    return (
        <Col span={6}>
            <a className="desktop-item" href={link}>
                {picture}
                <p className="desktop-item__name">{name}</p>
                <p>{description}</p>
            </a>
        </Col>
    )
}

export default DesktopItem
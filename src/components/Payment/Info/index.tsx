import React from 'react'
import { Row, Col, Typography, Divider } from 'antd'

import { Icon } from './styles'

const Info: React.FC = () => {
  const { Title, Text } = Typography
  return (
    <Row>
      <Col span={6}>
        <Icon />
      </Col>
      <Col span={18}>
        <Row>
          <Col span={24}>
            <Title level={3}>R$ 10,00</Title>
          </Col>
        </Row>

        <Row>
          <Col span={12}>
            <Text>Comission</Text>
          </Col>

          <Col span={12}>
            <Text>1.99</Text>
          </Col>
        </Row>

        <Row>
          <Col span={12}>
            <Text>Total</Text>
          </Col>

          <Col span={12}>
            <Text>600.99</Text>
          </Col>
        </Row>

        <Divider />

        <Row>
          <Col span={12}>
            <Text>Invoice ID:</Text>
          </Col>

          <Col span={12}>
            <Text>Next payment:</Text>
          </Col>
        </Row>

        <Row>
          <Col span={12}>
            <Title level={5}>ASDFKIOOAIP!@$4123</Title>
          </Col>

          <Col span={12}>
            <Title level={5}>{new Date().toLocaleDateString()}</Title>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default Info

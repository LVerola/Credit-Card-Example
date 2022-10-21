import React, { useState } from 'react'
import { Row, Col, Form, Input, Radio, Typography } from 'antd'
import Cards, { Focused } from 'react-credit-cards'
import 'react-credit-cards/es/styles-compiled.css'

// import { Container } from './styles';

const Card: React.FC = () => {
  const [form] = Form.useForm()
  const [cvc, setCvc] = useState('')
  const [expiry, setExpiry] = useState('')
  const [focus, setFocus] = useState<Focused | undefined>()
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')

  const { Text } = Typography

  return (
    <Row>
      <Col
        span={12}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Cards
          cvc={cvc}
          expiry={expiry}
          focused={focus}
          name={name}
          number={number}
        />
      </Col>

      <Col span={12}>
        <Form form={form} layout="vertical">
          <Row gutter={12}>
            <Form.Item
              label={<Text strong>NÚMERO DO CARTÃO</Text>}
              name="number"
              style={{ width: '100%' }}
            >
              <Input
                maxLength={16}
                type="number"
                onChange={(e) => setNumber(e.target.value)}
                onFocus={(e) => setFocus('number')}
              />
            </Form.Item>
          </Row>

          <Row gutter={12}>
            <Col span={12}>
              <Form.Item
                label={<Text strong>DATA DE VALIDADE</Text>}
                name="expiry"
              >
                <Input
                  maxLength={4}
                  type="number"
                  onChange={(e) => setExpiry(e.target.value)}
                  onFocus={(e) => setFocus('expiry')}
                />
              </Form.Item>
            </Col>

            <Col span={12}>
              <Form.Item label={<Text strong>CVC</Text>} name="cvc">
                <Input
                  maxLength={3}
                  type="number"
                  onChange={(e) => setCvc(e.target.value)}
                  onFocus={(e) => setFocus('cvc')}
                />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={12}>
            <Form.Item
              label={<Text strong>NOME DO TITULAR DO CARTÃO</Text>}
              name="name"
              style={{ width: '100%' }}
            >
              <Input
                onChange={(e) => setName(e.target.value)}
                onFocus={(e) => setFocus('name')}
              />
            </Form.Item>
          </Row>

          <Row gutter={12}>
            <Col span={12}>
              <Form.Item label={<Text strong>CPF</Text>} name="cpf">
                <Input maxLength={11} type="number" />
              </Form.Item>
            </Col>

            <Col span={12}>
              <Form.Item
                label={<Text strong>OPÇÃO DO PAGAMENTO</Text>}
                name="card_opt"
              >
                <Radio.Group>
                  <Radio value="debit">Débito</Radio>
                  <Radio value="credit">Crédito</Radio>
                </Radio.Group>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Col>
    </Row>
  )
}

export default Card

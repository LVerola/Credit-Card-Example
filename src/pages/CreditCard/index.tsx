import React, { useState } from 'react'
import { Layout, Menu, Card, Steps, Button, message } from 'antd'
import { InfoCircleOutlined, CreditCardOutlined } from '@ant-design/icons'
// import LeftContent from '../../components/LeftContent'
// import RightContent from '../../components/RightContent'

import { Container, StepContent, StepAction } from './styles'
import Info from '../../components/Payment/Info'
import PaymentTab from '../../components/Payment/PaymentTab'

const CreditCard: React.FC = () => {
  const [current, setCurrent] = useState(0)

  const next = () => {
    setCurrent(current + 1)
  }

  const prev = () => {
    setCurrent(current - 1)
  }

  const { Header, Content, Footer } = Layout
  const { Step } = Steps

  const menuOptions = [{ label: 'Pagamento', key: 'payment' }]

  const steps = [
    {
      title: 'Informações',
      icon: <InfoCircleOutlined />,
      content: <Info />,
    },
    {
      title: 'Pagamento',
      icon: <CreditCardOutlined />,
      content: <PaymentTab />,
    },
  ]

  return (
    <Container>
      <Layout className="layout">
        <Header>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['payment']}
            items={menuOptions}
          />
        </Header>
        <Content style={{ padding: '50px' }}>
          <Card title="Pagamento">
            <Steps current={current}>
              {steps.map((item) => (
                <Step key={item.title} title={item.title} icon={item.icon} />
              ))}
            </Steps>

            <StepContent>{steps[current].content}</StepContent>

            <StepAction>
              {current < steps.length - 1 && (
                <Button type="primary" onClick={() => next()}>
                  Próximo
                </Button>
              )}
              {current === steps.length - 1 && (
                <Button
                  type="primary"
                  onClick={() => message.success('Processing complete!')}
                >
                  Finalizar
                </Button>
              )}
              {current > 0 && (
                <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
                  Voltar
                </Button>
              )}
            </StepAction>
          </Card>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Exemplo de footer</Footer>
      </Layout>
    </Container>
  )
}

export default CreditCard

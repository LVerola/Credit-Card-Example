import React from 'react'
import { Tabs } from 'antd'

import Card from '../Card'
import Pix from '../Pix'
import Ticket from '../Ticket'

// import { Container } from './styles';

const PaymentTab: React.FC = () => {
  const items = [
    { label: 'Cartão', key: 'card', children: <Card /> },
    { label: 'Pix', key: 'pix', children: <Pix /> },
    { label: 'Boleto', key: 'ticket', children: <Ticket /> },
  ]
  return <Tabs items={items} />
}

export default PaymentTab

import React from 'react'
import './Diagram.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const FactoryIcon = () => (
  <div className="diagram__factory-container">
    <FontAwesomeIcon icon="industry" size="lg" />
  </div>
)

const BillingDiagram = () => {
  return (
    <div className="diagram-container">
      <FactoryIcon />
      <FactoryIcon />
      <FactoryIcon />
      <FactoryIcon />
      <FactoryIcon />
      <FactoryIcon />
      <FactoryIcon />
    </div>
  )
}

export default BillingDiagram

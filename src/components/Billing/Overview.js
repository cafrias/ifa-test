import React from 'react'

import f from '../../utils/filters'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Card from 'react-bootstrap/lib/Card'
import Col from 'react-bootstrap/lib/Col'
import Row from 'react-bootstrap/lib/Row'

const BillingOverview = ({ overview }) => {
  return (
    <Card>
      <Card.Header>
        <h2 className="text-uppercase card__title">Overview</h2>
      </Card.Header>
      <Card.Body>
        <Row>
          <Col xs={12} md={6} className="card__cell">
            <dl className="inline-dl">
              <dt>Status</dt>
              <dd>{renderStatus(overview.status)}</dd>
              <dt>Method</dt>
              <dd>{f.capitalize(overview.method)}</dd>
              <dt>Capacity</dt>
              <dd>{f.upper(overview.capacity)}</dd>
              <dt>Drayage</dt>
              <dd>{f.list(overview.drayage)}</dd>
            </dl>
          </Col>
          <Col xs={12} md={6} className="card__cell">
            <dl className="inline-dl">
              <dt>Incoterms</dt>
              <dd>{f.capitalize(overview.incoterms)}</dd>
              <dt>Service Options</dt>
              <dd>{f.list(overview.serviceOptions)}</dd>
              <dt>Hazardous or forbidden commodities</dt>
              <dd>{f.list(overview.hazardous)}</dd>
            </dl>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  )
}

const renderStatus = status => {
  switch (status) {
    case 'active':
      return (
        <span className="text-success">
          <FontAwesomeIcon icon="check" /> Active
        </span>
      )
    default:
      return f.status(status)
  }
}

export default BillingOverview

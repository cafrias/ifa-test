import React from 'react'

import f from '../../utils/filters'

import Card from 'react-bootstrap/lib/Card'
import Col from 'react-bootstrap/lib/Col'
import Row from 'react-bootstrap/lib/Row'

const BillingOverview = ({ overview }) => {
  return (
    <Card>
      <Card.Header>
        <h2 className="text-uppercase">Overview</h2>
      </Card.Header>
      <Card.Body>
        <Row>
          <Col>
            <dl>
              <dt>Status</dt>
              <dd>{overview.status}</dd>
              <dt>Method</dt>
              <dd>{overview.method}</dd>
              <dt>Capacity</dt>
              <dd>{overview.capacity}</dd>
              <dt>Drayage</dt>
              <dd>{f.list(overview.drayage)}</dd>
            </dl>
          </Col>
          <Col>
            <dl>
              <dt>Incoterms</dt>
              <dd>{overview.incoterms}</dd>
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

export default BillingOverview

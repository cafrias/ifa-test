import React from 'react'

import f from '../../utils/filters'

import Card from 'react-bootstrap/lib/Card'
import Col from 'react-bootstrap/lib/Col'
import Row from 'react-bootstrap/lib/Row'

const BillingInvoice = ({ invoice }) => {
  return (
    <section>
      <h1 className="mr-2 mb-0">
        Invoice <small className="text-muted">{invoice.number}</small>
      </h1>
      <Card>
        <Card.Header>
          <h2 className="text-uppercase">Invoice - Revision</h2>
        </Card.Header>
        <Card.Body>
          <Row>
            <Col>
              <dl>
                <dt>Invoice #</dt>
                <dd>{invoice.number}</dd>
                <dt>Date</dt>
                <dd>{invoice.date}</dd>
                <dt>Due Date</dt>
                <dd>{invoice.dueDate}</dd>
                <dt>Terms</dt>
                <dd>{invoice.terms}</dd>
              </dl>
            </Col>
            <Col>
              <h3>Bill To</h3>
            </Col>
            <Col>
              <h3>New Balance upon Re-booking</h3>
              <span>${f.money(invoice.balance)}</span>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </section>
  )
}

export default BillingInvoice

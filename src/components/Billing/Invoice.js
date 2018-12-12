import React from 'react'
import './Invoice.scss'

import f from '../../utils/filters'

import Card from 'react-bootstrap/lib/Card'
import Col from 'react-bootstrap/lib/Col'
import Row from 'react-bootstrap/lib/Row'

const BillingInvoice = ({ invoice }) => {
  return (
    <section>
      <h2 className="mb-3 ml-1">
        Invoice <small className="text-muted">{invoice.number}</small>
      </h2>
      <Card>
        <Card.Header className="card__header">
          <h3 className="text-uppercase card__title">Invoice - Revision</h3>
        </Card.Header>
        <Card.Body>
          <Row>
            <Col className="card__cell" xs={12} md={4}>
              <dl className="inline-dl">
                <dt>Invoice #</dt>
                <dd>{invoice.number}</dd>
                <dt>Date</dt>
                <dd>{f.date(invoice.date)}</dd>
                <dt>Due Date</dt>
                <dd>{f.date(invoice.dueDate)}</dd>
                <dt>Terms</dt>
                <dd>{invoice.terms}</dd>
              </dl>
            </Col>
            <Col className="card__cell" xs={12} md={4}>
              <h5>Bill To</h5>
            </Col>
            <Col className="card__cell" xs={12} md={4}>
              <h5 className="mb-4">New Balance upon Re-booking</h5>
              <p class="invoice__balance">${f.money(invoice.balance)}</p>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </section>
  )
}

export default BillingInvoice

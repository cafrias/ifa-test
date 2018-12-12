import React from 'react'
import './Billing.scss'

import data from './data.json'

import Container from 'react-bootstrap/lib/Container'
import Col from 'react-bootstrap/lib/Col'
import Row from 'react-bootstrap/lib/Row'

import BillingInvoice from '../../components/Billing/Invoice'
import BillingDetails from '../../components/Billing/Details/Details'
import BillingOverview from '../../components/Billing/Overview'

import UISpinner from '../../components/UI/Spinner'

class Billing extends React.Component {
  state = {
    info: null,
  }

  componentDidMount() {
    // We simulate fetching data from a service,
    // here we should use prop `invoiceNumber`
    setTimeout(() => {
      this.setState({
        ...this.state,
        info: data,
      })
    }, 1000)
  }

  render() {
    if (!this.state.info) {
      return (
        <Container>
          <Row className="justify-content-center">
            <Col xs="auto">
              <UISpinner />
            </Col>
          </Row>
        </Container>
      )
    }
    return (
      <Container className="billing">
        <Row className="billing__section">
          <Col>
            <BillingInvoice invoice={this.state.info.invoice} />
          </Col>
        </Row>
        <Row className="billing__section">
          <Col>
            <BillingDetails />
          </Col>
        </Row>
        <Row className="billing__section">
          <Col>
            <BillingOverview overview={this.state.info.overview} />
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Billing

import React from 'react'

import data from './data.json'

import Container from 'react-bootstrap/lib/Container'
import Col from 'react-bootstrap/lib/Col'
import Row from 'react-bootstrap/lib/Row'

import BillingInvoice from '../../components/Billing/Invoice'
import BillingDetails from '../../components/Billing/Details/Details'

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
          <Row>
            <Col>
              <UISpinner />
            </Col>
          </Row>
        </Container>
      )
    }
    return (
      <Container>
        <Row>
          <Col>
            <BillingInvoice invoice={this.state.info.invoice} />
          </Col>
        </Row>
        <Row>
          <Col>
            <BillingDetails />
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Billing

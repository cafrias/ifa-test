import React from 'react'

import BillingDiagram from './Diagram'
import BillingMap from './Map'

import Card from 'react-bootstrap/lib/Card'
import Col from 'react-bootstrap/lib/Col'
import Nav from 'react-bootstrap/lib/Nav'
import Row from 'react-bootstrap/lib/Row'
import Tab from 'react-bootstrap/lib/Tab'

const BillingDetails = () => {
  return (
    <section>
      <Tab.Container id="left-tabs-example" defaultActiveKey="diagram">
        <Row className="justify-items-end">
          <Col>
            <Nav variant="pills">
              <Nav.Item>
                <Nav.Link eventKey="diagram">Diagram</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="map">Map</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card body>
              <Tab.Content>
                <Tab.Pane eventKey="diagram">
                  <BillingDiagram />
                </Tab.Pane>
                <Tab.Pane eventKey="map">
                  <BillingMap />
                </Tab.Pane>
              </Tab.Content>
            </Card>
          </Col>
        </Row>
      </Tab.Container>
    </section>
  )
}

export default BillingDetails

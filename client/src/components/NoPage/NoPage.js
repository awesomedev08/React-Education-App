import React, {Component} from 'react';
import { Grid,Row,Col } from 'react-bootstrap';
import './NoPage.css';



class NoPage extends Component {

  render() {
    return (
      <Grid fluid>
        <Row className="show-grid">
          <Col md={12}>
            <h2>This Page as not found 404</h2>
          </Col>
        </Row>
      </Grid>)
  }
}


export default NoPage

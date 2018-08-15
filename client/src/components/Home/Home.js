import React, {Component} from 'react';
import { Grid,Row,Col,Panel } from 'react-bootstrap';
import { connect } from 'react-redux';

import './Home.css';



class Home extends Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }


  handleClick(name){
    this.props.history.push(name);
  }


  render() {
    let role = this.props.auth.role


    return (
      <Grid fluid>
       <h2>Home</h2>
         <div className="component-divider-sub"></div>

        <Row className="show-grid">


´            <Col md={3}>
              <Panel onClick={(e) => this.handleClick('/all-courses', e)}>
                  <Panel.Body className="panelPointer">See All Courses</Panel.Body>
              </Panel>
            </Col>


        { role === 1 &&
              <Col md={3}>
                <Panel onClick={(e) => this.handleClick('/create-course', e)}>
                    <Panel.Body className="panelPointer">Create Course</Panel.Body>
                </Panel>
              </Col>
          }

          { role === 1 &&
                <Col md={3}>
                  <Panel onClick={(e) => this.handleClick('/all-users', e)}>
                      <Panel.Body className="panelPointer">All Users</Panel.Body>
                  </Panel>
                </Col>
            }



        </Row>


      </Grid>)
  }
}








const reduxProps = state => {
  return ({
    auth: state.user.authUser
  })
};

export default connect(reduxProps)(Home);

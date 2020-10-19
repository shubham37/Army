import React, { Component } from 'react';
import { Card } from 'react-bootstrap'

class TeamPsych extends Component {
  render() {
    return (
      <div className='container-fluid'>
        <Card>
          <Card.Header>PSYCH Dept.</Card.Header>
          <Card.Body>
          <div className='row'>
            <div className='col'>
              <Card style={{ width: '18rem' }}>
                  {/* <Card.Img variant="top" src="holder.js/100px180?text=Image cap" /> */}
                  <Card.Body>
                    <Card.Title>HOD - COL  Mr. MP Singh</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the bulk of
                      the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
            </div>

            <div className='col'>
              <Card style={{ width: '18rem' }}>
                  {/* <Card.Img variant="top" src="holder.js/100px180?text=Image cap" /> */}
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the bulk of
                      the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
            </div>

            <div className='col'>
              <Card style={{ width: '18rem' }}>
                  {/* <Card.Img variant="top" src="holder.js/100px180?text=Image cap" /> */}
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the bulk of
                      the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </Card.Body>
        </Card>
      </div>
      );
  }
}

export default TeamPsych;

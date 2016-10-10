import React, { Component } from 'react';
import { Grid, Navbar, Jumbotron, Button } from 'react-bootstrap';
import axios from 'axios'

class App2 extends Component {
  componentDidMount() {
        axios.get('/api/snapshot')
            .then(function(response) {
                console.log(response.data);
            })
  }
  render() {
    return (
        <div>
            <Navbar inverse fixedTop>
                <Grid>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="/">React App</a>
                        </Navbar.Brand>
                        <Navbar.Toggle/>
                    </Navbar.Header>
                </Grid>
            </Navbar>
            <Jumbotron>
                <Grid>
                    <h1>Welcome to React!</h1>
                    <p>
                        <Button
                            bsStyle="success"
                            bsSize="large"
                            href="http://react-bootstrap.github.io/components.html"
                            target="_blank">
                            View React Bootstrap Docs
                        </Button>
                    </p>
                </Grid>
            </Jumbotron>
        </div>
    );
  }
}

export default App2;

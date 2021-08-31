import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class HornedBeasts extends React.Component {

  constructor(props) {
    super(props);
    this.state = { favaretCounter: 0, }
  }

  favoriteFunctions = () => {

    this.setState({
      favaretCounter: this.state.favaretCounter + 1,
    });
    this.props.handleShow();

  }
  
  render() {
    // console.log('props: ', this.props);

    return (
      
        <Card style={{ width: '18rem', }}>
          <Card.Img  variant="top" src={this.props.imageUrl} />
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>
            {this.props.description}
            </Card.Text>
            <Card.Text>
            {this.props.keyword}
            </Card.Text>
            <Card.Text>
            {this.props.horns}
            </Card.Text>
            <Button onClick={this.favoriteFunctions} variant="primary">favorite</Button>
            <Card.Text>
            💙 {this.state.favaretCounter}
            </Card.Text>
          </Card.Body>
        </Card>
       

      
    )
  }
}

export default HornedBeasts;
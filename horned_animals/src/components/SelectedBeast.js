import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


class SelectedBeast  extends React.Component {

  render() {

    return (

   
        <Modal show={this.props.show} onHide={this.props.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.SelectedBeast.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Card style={{ width: '100%',height:'100%' }}>
          <Card.Img   variant="top" src={this.props.SelectedBeast.image_url} />
          
       
            </Card>
            
            {this.props.SelectedBeast.description}
            
          </Modal.Body>
          <Modal.Footer>
           
            <Button variant="primary" onClick={this.props.handleClose}>
            Close
            </Button>
          </Modal.Footer>
        </Modal>
    );
  }
}


export default SelectedBeast ;


  
import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

class SelectedBeast  extends React.Component {

  render() {
console.log(this.props.dataArray);
    return (
      <div>
        
        <Modal show={this.props.show} onHide={this.props.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>dds</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
           
            <Button variant="primary" onClick={this.props.handleClose}>
            Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}


export default SelectedBeast ;


  
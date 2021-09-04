import React from 'react';
import HornedBeasts from './HornedBeasts';
import alldata from "../assets/data.json";
import Form from 'react-bootstrap/Form';



class Main extends React.Component {
 


  saveNewName = (e) => {

    let horns = e.target.value;
    const tempSelectedBeast = alldata.filter((item) => {
      

      return item.horns === parseInt(horns);


    });
    this.props.updatingFilterData(tempSelectedBeast);

  }






  render() {
    return (

      <div>

        
        <Form.Control as='select' onChange={this.saveNewName} aria-label="Default select example">
        <option value="0">all data</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
        <option value="100">onehundred</option>
        
        </Form.Control>
        
      {this.props.dataArray.map((elemant) => {

        return (

        <HornedBeasts
        imageUrl={elemant.image_url}
        title={elemant.title}

        description={elemant.description}
        keyword={elemant.keyword}
        horns={elemant.horns}
        displayModel={this.props.displayModel}

        />

      );
      }
      )
      };



      </div>

    );
  }
}






export default Main;

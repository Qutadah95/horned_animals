import React from "react";
import Form from 'react-bootstrap/Form';
import dataArrayy from "../assets/data.json";
class FormData extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          data: dataArrayy,
        };
      }
      

      saveNewName = (e) => {
        // console.log(e.target.value);
        this.setState({ data:e.target.value });
        console.log(this.state.data);
        this.displayForm(this.state.data);
        
      }

      displayForm=(horns)=>{
        //   console.log(dataArrayy);
        
        const tempSelectedBeast=dataArrayy.filter((item)=>{
            
            return item.horns===horns;
            
        });
       console.log(tempSelectedBeast);
      }

render(){
     
    return(

        <>

{/* <select onChange={this.saveNewName } class="form-select" aria-label="Default select example">
  <option selected>all data </option>
  <option value="1">one</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
  <option value="100">onehundred</option>
  
</select> */}

<Form.Select onChange={this.saveNewName } aria-label="Default select example">
  <option>all data</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
  <option value="100">onehundred</option>
</Form.Select>

        </>
        
    );
}

}

export default FormData ;

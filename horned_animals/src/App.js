import React from "react";
import Main from "./components/Main";
import Head from "./components/Head"
import Footer from "./components/footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import dataArray from './assets/data.json';
import SelectedBeast from "./components/DataModel";

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      state:false,
    }
  }
  handleClose= () =>{
    this.setState({show:false})
  }
  handleShow= () =>{
    this.setState({show:true})
  }
  render() {
    return (

      <div>
        
      
      <Head/> 
        
        
      
      <Main 
      dataArray={dataArray}
      handleShow={this.handleShow}

      />

        
        
      
      <Footer/>
        < SelectedBeast
        handleClose={this.handleClose}
        handleShow={this.handleShow}
        show={this.state.show}
        dataArray={dataArray}

        />
        
      </div>
     
      
    );
  }
}

export default App;

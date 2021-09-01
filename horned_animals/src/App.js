import React from "react";
import Main from "./components/Main";
import Head from "./components/Head"
import Footer from "./components/footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import dataArray from './assets/data.json';
import SelectedBeast from "./components/SelectedBeast";

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      SelectedBeast:{},
      state:false,
    }
  }
  displayModel=(title)=>{
    const tempSelectedBeast=dataArray.filter((item)=>{
      return (item.title===title);
    });
    this.setState({
      show:true,
      SelectedBeast:tempSelectedBeast[0],
    })
  }
  
  handleClose= () =>{
    this.setState({show:false})
  }

  render() {
    console.log(this.state);
    return (

      <div>
        
      
      <Head/> 
        
        
      
      <Main 
      dataArray={dataArray}
      displayModel={this.displayModel}

      />
    < SelectedBeast
       SelectedBeast={this.state.SelectedBeast}
       show={this.state.show}
       handleClose={this.handleClose}
        

        />
        
        
      
      <Footer/>
    
        
      </div>
     
      
    );
  }
}

export default App;

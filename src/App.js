import React from "react";
import Main from "./components/Main";
import Head from "./components/Head";
import Footer from "./components/footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import dataArray from './assets/data.json';
import SelectedBeast from "./components/SelectedBeast";



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      SelectedBeast: {},
      state: false,
      hornsData: dataArray,
    };
  }

  displayModel = (title) => {
    const tempSelectedBeast = dataArray.filter((item) => {
      return (item.title === title);
    });
    this.setState({
      show: true,
      SelectedBeast: tempSelectedBeast[0],
    });
  }

  handleClose = () => {
    this.setState({ show: false });
  }

  updatingFilterData = (filteredData) => {
    if (filteredData.length > 0) {
      this.setState({
        hornsData: filteredData,
  
      });
  
    }else{
      this.setState({
        hornsData: dataArray,
  
      });
    }
    

  }

  render() {
    console.log('hello', this.state.hornsData);
   

    return (

      <div>


        <Head />


       
        <Main
          dataArray={this.state.hornsData}
          displayModel={this.displayModel}
          updatingFilterData={this.updatingFilterData}
          

        />
        < SelectedBeast
          SelectedBeast={this.state.SelectedBeast}
          show={this.state.show}
          handleClose={this.handleClose}


        />
       

        <Footer />


      </div>


    );
  }
}

export default App;

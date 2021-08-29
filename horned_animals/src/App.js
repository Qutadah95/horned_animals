import React from "react";
import Main from "./components/Main";
import Head from "./components/Head"
import Footer from "./components/footer";

class App extends React.Component {
  render() {
    return (

      <div>
        
      <div>
      <Head/> 
        </div>
        
      <div>
      <Main />
        </div>
        
      <div>
      <Footer/>
        </div>
      </div>
     
      
    );
  }
}

export default App;

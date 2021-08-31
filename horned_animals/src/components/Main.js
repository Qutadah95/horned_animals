import React from 'react';
import HornedBeasts from './HornedBeasts';


class Main extends React.Component {
  newDataArray = this.props.dataArray.map((elemant) => {
    return <HornedBeasts
      imageUrl={elemant.image_url}
      title={elemant.title}
  
      description={elemant.description}
      keyword={elemant.keyword}
      horns={elemant.horns}
      handleShow={this.props.handleShow}
      
    />
  }
  )
  test=()=>{
    alert('Hello');
  }
  render() {
    return (

      <div>
   
   {this.newDataArray}

      </div>





    )
  }
}

export default Main;
// function filterdBest(name){
//   const filterdBestArray=this.props.dataArray.filter(beast =>{
//    return(beast.Title===name);
//  })
//  return filterdBestArray;
//  console.log(filterdBestArray);
//   }
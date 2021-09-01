import React from 'react';
import HornedBeasts from './HornedBeasts';


class Main extends React.Component {
  

  render() {
    return (

      <main>
   
   { this.props.dataArray.map((elemant) => {
    return (
      
    <HornedBeasts
      imageUrl={elemant.image_url}
      title={elemant.title}
  
      description={elemant.description}
      keyword={elemant.keyword}
      horns={elemant.horns}
      displayModel={this.props.displayModel}
      
    />
    
    )
  }
  )}

</main>





    )
  }
}

export default Main;

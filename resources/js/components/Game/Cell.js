import React from 'react';



class Cell extends React.Component {

  handleClick = (target) => {
  
  }

  render() {
   
        return (<span onClick={this.handleClick} >?</span>)
     
  }

}


export default Cell;
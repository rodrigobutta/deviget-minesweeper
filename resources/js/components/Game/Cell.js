import React from 'react';
import PropTypes from 'prop-types';

import icoMine from '../../../assets/images/box-mine.svg';


class Cell extends React.Component {

  handleClick = (target) => {  
    let { y, x } = this.props;
    this.props.onClick(target,y,x);
  }

  render() {
      const { val, clicked } = this.props;

      if(clicked){
        if(val===0) return (<span>·</span>)
        else if(val===-1) return (<img src={icoMine} />)        
        else return (<span>{val}</span>)       
      }
      else{
        return (<span onClick={this.handleClick} className="unknown">?</span>)
      }

  }

}

Cell.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  val: PropTypes.number,
  onClick: PropTypes.func.isRequired,
  clicked: PropTypes.bool
};

Cell.defaultProps = {
  clicked: false
};

export default Cell;
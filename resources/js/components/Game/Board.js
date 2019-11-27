import React from 'react';
import PropTypes from 'prop-types';

import Cell from './Cell';


import './Board.scss';

const emptyVal = 0;
const mineVal = -1;

class Board extends React.Component {

    state = {
        grid: []
    }
  

    buildGridArray = (cols, rows, mines) => {
     
      // build the grid as a nested array

      let grid = [];
      for (let i = 0; i < rows; i++) {

        let subArray = [];
        for (let j = 0; j < cols; j++) {
          subArray.push({
            value: emptyVal,
            clicked: false,
          });
        }

        grid.push(subArray);
      }


      this.setState({'grid':grid})

    }

    handleCellClick = (target, y, x) => {
      
     

    }
  
    componentDidMount(nextProps) {
      console.log('ssss')
    
      this.buildGridArray(10, 10, 4)

    }



    render() {
     
        const { grid } = this.state;

        return (
            <table className="Board">
              <tbody>
              {
                grid.map((item, y) => {
                  return (
                    
                    <tr key={y}>
                    {
                      item.map((subitem, x) => {
                        return (
                          <td key={`${y}_${x}`} >
                            <Cell                               
                              x={x} 
                              y={y} 
                              val={subitem.value} 
                              onClick={this.handleCellClick} 
                              clicked={subitem.clicked}                                  
                            />
                          </td>
                        )
                      })
                    }
                    </tr>
                    
                  )
                })
              }
              </tbody>
            </table>
        )
    }

}

Board.propTypes = { 
  level: PropTypes.object, 
  onGameEnds: PropTypes.func
};

export default Board;

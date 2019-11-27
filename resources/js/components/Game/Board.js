import React from 'react';
import PropTypes from 'prop-types';

import Cell from './Cell';

import './Board.scss';

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
            value: 0,
            clicked: false,
          });
        }

        grid.push(subArray);
      }


      // populate the empty grid with mines

      while (mines > 0) {
        
        let y = Math.floor(Math.random() * rows);
        let x = Math.floor(Math.random() * cols);

        if (grid[y][x].value === 0) { // 0 is nothing
          
          grid[y][x].value = -1; // -1 is a mine
        
          mines--;
        }

      }


      // put the context numbers of the mines, adding in the same grid

      for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {

          if (grid[i][j].value === -1) {
            grid = this.mineSurroundingSum(grid, i, j, -1);
          }

        }
      }


      this.setState({'grid':grid})

    }


    mineSurroundingSum = (grid,i,j,val) => {

      let iList = [i - 1, i, i + 1];
      let jList = [j - 1, j, j + 1];

      for (let a of iList) {
        if (grid[a]) {

          for (let b of jList) {
            if (grid[a][b] !== undefined && grid[a][b].value !== val) {
              
              if (typeof grid[a][b].value !== "number"){
                grid[a][b].value = 0;
              }
              
              grid[a][b].value++;

            }
          }

        }
      }

      return grid;

    }

    handleCellClick = (target, y, x) => {
    
    }
  
    componentDidMount(nextProps) {
      
      const { cols, rows, mines } = this.props.level;
      this.buildGridArray(cols, rows, mines)

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

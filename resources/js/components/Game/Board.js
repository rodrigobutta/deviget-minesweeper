import React from 'react';

import Cell from './Cell';

import './Board.scss';


class Board extends React.Component {

    state = {
        grid: []
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
                            <Cell />
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

export default Board;

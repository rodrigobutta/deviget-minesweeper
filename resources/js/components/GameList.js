import React from 'react';
import PropTypes from 'prop-types';

import './GameList.scss';


class GameList extends React.Component {

    renderRow = (item) => {

        return(
            <tr key={item.id}>
                <td>{item.user.name}</td>
                <td>{item.level.name}</td>
                <td>{item.won?'WON':'LOST'}</td> 
                <td>{item.ended_at}</td>                            
                <td>{!item.ended_at && <button onClick={() => this.props.onGameClick(item)}>Resume Game</button>}</td>                            
            </tr>
        );

    } 

    render () {

        const { games } = this.props;

        return (
            <table className="GameList-table">
            <thead>
                <tr>
                    <th>Player</th>
                    <th>Level</th>
                    <th>Result</th>  
                    <th>Ended At</th>                         
                </tr>
            </thead>
                <tbody>
                    {games.map((game) => this.renderRow(game))}
                </tbody>
            </table>
        )
    }

}


GameList.propTypes = {
    games: PropTypes.array,
    onGameClick: PropTypes.func,
};
  

export default GameList;
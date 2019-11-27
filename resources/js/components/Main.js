import React from 'react';
import ReactDOM from 'react-dom';

import Board from './Game/Board';
import GameList from './GameList';

class Main extends React.Component {

    state = {                  
        game: null,
        levels: [],
        games: []
    };

    componentDidMount(){

        const user = this.getSessionUser();

        fetch('/api/levels', {
            headers: { "Content-Type": "application/json; charset=utf-8" },
            method: 'GET'            
        })
        .then(response => response.json())
        .then(data => this.setState({levels: data.items}))
        
        fetch('/api/games/user/' + user.id, {
            headers: { "Content-Type": "application/json; charset=utf-8" },
            method: 'GET'            
        })
        .then(response => response.json())
        .then(data => this.setState({games: data.items}))

    }

    getSessionUser = () =>{
        return JSON.parse(this.props.user); 
    }

    handleNewGameClick = (levelId) => {

        const user = this.getSessionUser();

        fetch('/api/games', {
            headers: { "Content-Type": "application/json; charset=utf-8" },
            method: 'POST',
            body: JSON.stringify({
                user_id: user.id,
                level_id: levelId,
            })
        })
        .then(response => response.json())
        .then(data => {
            data.object.grid = [];
            this.setState({game: data.object})
        })

    }

    handleOnGameEnds = (result) => {

        const { game } = this.state;

        fetch('/api/games/' + game.id, {
            headers: { "Content-Type": "application/json; charset=utf-8" },
            method: 'PUT',
            body: JSON.stringify({
                result: result,
            })
        })
        .then(response => response.json())
        .then(data => {

            if(result){
                alert('You WIN!!')
            }
            else{
                alert('You Loose')
            }

        })

    }

    render(){
        
        const { game, levels, games } = this.state;

        return (                              
            <React.Fragment>

                {game?
                    <Board level={game.level} onGameEnds={this.handleOnGameEnds} />                    
                :
                    <ul>
                        {levels.map((level) => {
                            return (<li key={level.id}><button onClick={() => this.handleNewGameClick(level.id)}>{level.name}</button></li>)
                        })}
                    </ul>
                }

                <h2>Your Past Games</h2>
                {games?
                    <GameList games={games} />
                :
                    <h4>You havent played any games yet</h4>
                }

            </React.Fragment>
        );
    
    }

}

if(document.getElementById('main')){

    // inherit session user from blade so i don't have a dirty ajax call to get it  
    const component = document.getElementById('main');
    const props = Object.assign({}, component.dataset);
    ReactDOM.render(<Main {...props} />, component);

}
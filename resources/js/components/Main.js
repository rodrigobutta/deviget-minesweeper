import React from 'react';
import ReactDOM from 'react-dom';

import Board from './Game/Board';

class Main extends React.Component {

    state = {                  
        game: null,
        levels: []
    };

    componentDidMount(){

        const user = this.getSessionUser();

        fetch('/api/levels', {
            headers: { "Content-Type": "application/json; charset=utf-8" },
            method: 'GET'            
        })
        .then(response => response.json())
        .then(data => this.setState({levels: data.items}))
        
    }

    getSessionUser = () =>{
        return JSON.parse(this.props.user); 
    }

    render(){
        
        const { game, levels } = this.state;

        return (                              
            <React.Fragment>

                {game?
                    <Board />                    
                :
                    <ul>
                        {levels.map((level) => {
                            return (<li key={level.id}><button onClick={() => this.handleNewGameClick(level.id)}>{level.name}</button></li>)
                        })}
                    </ul>
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
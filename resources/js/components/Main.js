import React from 'react';
import ReactDOM from 'react-dom';

class Main extends React.Component {

    
    getSessionUser = () =>{
        return JSON.parse(this.props.user); 
    }

    render(){
        
        
        return (                              
            <React.Fragment>
                Session user coming from outside to props

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
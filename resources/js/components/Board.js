import React from 'react';
import ReactDOM from 'react-dom';

class Board extends React.Component {
    
    constructor(props) {

        super(props);
        this.state = {
            user: "",
        };

    }

    componentDidMount(){

        let token = document.querySelector("meta[name='csrf-token']").getAttribute("content");

        $.ajax({
            url: '/user',
            type: 'POST',
            data: {_token: token , message: "bravo"},
            dataType: 'JSON',
    
            success: (response) => { 

                console.log("success");
                console.log(response);
                this.setState({
                    user: response,
                });
    
            },
            error: (response) => {

                console.log("error");
                console.log(response);
                
            }

        });
        
    }

    render(){
        
        const { user } = this.state;
        
        return (                              
            <div>
                Session user: {user.name}
            </div>
        );
    
    }

}

if(document.getElementById('board')){

    ReactDOM.render(<Board/>, document.getElementById('board'));

}
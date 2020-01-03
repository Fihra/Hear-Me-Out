import React from 'react';

class MusicianCard extends React.Component{
    render(){
        const { name, email } = this.props.musician;
        return(
            <div>
                <p><b>{name}</b></p>
                <p>Email: {email}</p>
            </div>
        )
    }
}

export default MusicianCard;
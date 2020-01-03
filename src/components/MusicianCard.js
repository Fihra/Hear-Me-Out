import React from 'react';

class MusicianCard extends React.Component{
    render(){
        const { name } = this.props.musician;
        return(
            <div>
                {name}
            </div>
        )
    }
}

export default MusicianCard;
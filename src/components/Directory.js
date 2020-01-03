import React from 'react';
import MusicianCard from './MusicianCard';

class Directory extends React.Component {

    showAllMusicians = (musicians) => {
        return musicians.map((musician, i) => {
            return <MusicianCard key={i} musician={musician}/>
        })
    }
    render(){
        const { musicians } = this.props;
        console.log(musicians);
        return(
            <div>
                <h1>Directory</h1>
                {this.showAllMusicians(musicians)}
            </div>
        )
    }
}

export default Directory;
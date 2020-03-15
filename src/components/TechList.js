import React, { Component } from 'react';

class TechList extends Component {
    state = {
        techs: [
            'NodeJS',
            'ReactJS',
            'React Native'
        ]
    };
    
    render() {

        console.log(this.state);
            
        return(
            <ul>
                <li>NodeJs</li>
                <li>ReactJS</li>
                <li>React Native</li>
            </ul>
        )
    }
}

export default TechList;
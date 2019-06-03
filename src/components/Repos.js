import React from 'react';
import avatar from './../avatar.png';

import './../App.css';

const Repos = ({ Repos }) =>{
    return (
        <div className="container">
            <img src={avatar} alt="avatar" width="100" height="100" />
            <div className="wrapper">
                <h1 className="header">test</h1>
                <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsum</p>
                <span className="indicators">Stars: 11k</span>
                <span className="indicators">Issues: 23</span>
                <span className="information">Submitted 30 days ago by test</span>
            </div>
        </div>
    );
}

export default Repos;

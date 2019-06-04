import PropTypes from 'prop-types';
import React, { Component } from 'react';
import moment from 'moment';
import './../App.css';

export class Repos extends Component {
getDuration = (date) => {
    return moment(date).diff(moment([2017, 11, 22]), 'days') ? 30 : '';
}
   render() {   
       console.log(this.props.repos)
    return (
        this.props.repos.map((rep)=> 
           <div className="container">
                <img src={rep.owner.avatar_url} alt="avatar" width="100" height="100" />
            <div className="wrapper">
                <h1 className="header">{rep.name}</h1>
                <p>{rep.description}</p>
                    <span className="indicators">Stars: {rep.stargazers_count}</span>
                    <span className="indicators">Issues: {rep.open_issues}</span>
                    <span className="information">Submitted {this.getDuration(rep.created_at)} days ago by {rep.owner.login}</span>
            </div>
        </div>  
        )
       
    );
    }
}
Repos.propTypes = {
  repos: PropTypes.array,
}
export default Repos;

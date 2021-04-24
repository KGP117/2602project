import React, { Component } from "react";
import Button from '@material-ui/core/Button';
import history from './../history';
import "./Home.css";

export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="lander">
          <h1>Welcome To AniWatchList</h1>
          <p>Go Search For An Anime</p>
          <form>
           <h4> <Button variant="outlined" onClick={() => history.push('/Search')}>Click button to search</Button> </h4>
          </form>
        </div>
      </div>
    );
  }
}

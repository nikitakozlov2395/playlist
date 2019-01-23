import React, { Component } from 'react';

import { connect } from 'react-redux'

import * as actions from './actions/playlist'

class App extends Component {
  constructor(props) {
    super(props);
      this.state = {
          input: ''
      };
  }

  onChangeInput = (event) => {
    this.setState({
        input: event.target.value
    })
  };

  onClickBtn = () => {
    this.props.addTrack(this.state.input);
      this.setState({
          input: ''
      })
  };

  onClickBtnDelete = (id) => {
    this.props.deleteTrack(id);
  };

  render() {
    return (
      <div>
        <input value={this.state.input} onChange={this.onChangeInput} />
        <button onClick={this.onClickBtn}>ADD</button>

        <ul>
          {this.props.tracks.map((item, id) =>
              <li key={id} style={{listStyleType: "none"}}>{item} <span onClick={(event) => this.onClickBtnDelete(id)} style={{color: "red", cursor: "pointer"}}>DELETE</span></li>)}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    tracks: state.playlistReducer.tracks
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTrack: track => {
      dispatch(actions.addTrack(track))
    },
    deleteTrack: id => {
      dispatch(actions.deleteTrack(id))
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

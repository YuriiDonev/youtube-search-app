import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { getDataFromGitHub as _getDataFromGitHub } from '../actions/github-actions.js';

class Search extends Component {

  state = {
    search: '',
    inputErr: ''
  }

  setInputData = (event) => {
    if (event.target.name === 'search') {
      (event.target.value === '') ? this.setState({ inputErr: 'Input shouldn`t be emty' }) : this.setState({ inputErr: '' });
      this.setState({ search: event.target.value });
    }
  }

  getDataFromGitHub = () => {
    const user = this.state.search.replace(/\s+/g,"");
    if (!this.state.search || !user) return;
    this.props._getDataFromGitHub(this.state.search);
  }

  renderGithubData = () => {
    const data = [];
    for (let key in this.props.githubData) {
      data.push(<div key={key} className='item'>{`${key}: ${this.props.githubData[key]}`}</div>)
    }
    return data;
  }

  render() {
    return (
      <div className='wrapper'>
        <div className="search">
          <input type="text" name="search" value={this.state.search} placeholder='Search...'
            maxLength='30'
            onChange={this.setInputData} />
            <button onClick={this.getDataFromGitHub}>{'Search'}</button>
            {
              (this.state.inputErr) ? <div className='input-error'>{this.state.inputErr}</div> : null
            }
        </div>
        <div><hr /></div>
        <div>
          {
            (_.isEmpty(this.props.githubData)) ? <div>{'Keep searching...'}</div> :
            <div>{this.renderGithubData()}</div>
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ githubData }) => ({
  githubData
});

const actions = {
  _getDataFromGitHub
};

export default connect(mapStateToProps, actions)(Search);

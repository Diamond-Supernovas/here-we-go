import React, { Component } from 'react';
import { Link } from 'react-router';
import { createStore } from 'redux';
import DatePicker from 'react-bootstrap-date-picker';
// import { expediaInfo } from '../actions/actionCreators';


const Splash = React.createClass({

  getInitialState() {
    let date = new Date().toISOString().substring(0, 10);
    return {
            city: '',
            startDate: date,
            endDate: date
          };

  },
  handleChangeValue(event) {
    this.setState({
      city: event.target.value
    });
  },

  handleChangeStart(startDate) { 
    this.setState({
      startDate: startDate.substring(0, 10),
      startValue: startDate
    })
  },

  handleChangeEnd(endDate) {
    this.setState({
      endDate: endDate.substring(0, 10),
      endValue: endDate
    })
  },

  componentDidMount() {
    document.body.classList.toggle('splashClass')
  },

  componentWillUnmount(){
    document.body.classList.toggle('splashClass')
  },

  onSubmit(e) {
    e.preventDefault();
<<<<<<< HEAD
<<<<<<< 2415d603c1d8601290028943cbeaa22c83102176
<<<<<<< 21aa11db6000c3cbee7ac247f81fe5274e0b2adc
    document.getElementById("loading-icon").style.display = 'block';
=======
    this.props.getFlightCode(this.state.city);
>>>>>>> feat(): API request for airport codes receiving data
=======
    this.props.getFlightCode(this.state.city);
>>>>>>> feat(): API request for airport codes receiving data
=======
    this.props.getFlightCode(this.state.city);
>>>>>>> 11c1660695ee6a40495cb0cfb4a2fcd474e338ec
    this.props.postHotelExpedia(this.state.city, this.state.startDate, this.state.endDate)

    // this.props.postFlightExpedia(this.state.city, this.state.startDate, this.state.endDate)
  },

  render() {
    // <form method="POST" action={this.post} className="splashForm">
    
    return (
      <div>
      <a href='/api/auth/google'>Login</a>
        <div>
        <h1 id='logo'>
          Here We Go!
        </h1>
        </div>
        <div>
          <form className="splashForm" onSubmit={this.onSubmit}>
            <div className="input-group">
              <input
              type="text"
              placeholder='City and State'
              value={this.state.value}
              onChange={this.handleChangeValue}
              />
              <DatePicker value={this.state.startValue} startDate={this.state.startDate} onChange={this.handleChangeStart}/>
              <DatePicker value={this.state.endValue} endDate={this.state.endDate} onChange={this.handleChangeEnd}/>          
              <button type="submit" className="btn btn-secondary">Let's Go!</button>
              <div id='loading-icon'>Loading...</div>
            </div>
          </form>
        </div>
      </div>
    );
  }
});
export default Splash;
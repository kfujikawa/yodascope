import React from 'react';
import { connect } from 'react-redux';

import { fetchHoroscope, fetchYodascope } from '../actions/index';

export class Horoscope extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    if (this.state.value) {

      this.props.dispatch(fetchHoroscope(this.state.value.toLowerCase()));
    }

    let message = 'You selected ' + this.state.value + " ";

    return (
      <div>
        <select
          className="select"
          onChange={this.handleChange}
          value={this.state.value}>
          <option value="Aquarius">Aquarius</option>
          <option value="Pisces">Pisces</option>
          <option value="Aries">Aries</option>
          <option value="Taurus">Taurus</option>
          <option value="Gemini">Gemini</option>
          <option value="Leo">Leo</option>
          <option value="Virgo">Virgo</option>
          <option value="Libra">Libra</option>
          <option value="Scorpio">Scorpio</option>
          <option value="Sagittarius">Sagittarius</option>
        </select>
        <p>{this.props.horoscope}</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(Horoscope);

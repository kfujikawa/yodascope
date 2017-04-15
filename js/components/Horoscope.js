import React from 'react';
import { connect } from 'react-redux';

// import addSign from '../actions/index';
import fetchHoroscope from '../actions/index';

export class Horoscope extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
    this.props.dispatch(fetchHoroscope(this.state.value));
  }

    render(){
      let message='You selected '+ this.state.value;
        return (
            <div id="signContainer">
                <h1>Yodascope</h1>
                <select value={this.state.value} onChange={this.handleChange}>
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
                <p>{message}</p>
            </div>
        );
    }
}


const mapStateToProps = (state, props) => {
  return state;
};

export default connect(mapStateToProps)(Horoscope);
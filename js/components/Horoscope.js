import React from 'react';
import { connect } from 'react-redux';

export class Horoscope extends React.Component {
  constructor(props) {
    super(props);
    // this.guessNumber = this.guessNumber.bind(this);
  }

    render(){
        return (
            <div>
                <p>Hello World!</p>
            </div>
        );
    }
}


const mapStateToProps = (state, props) => {
  return state;
};

export default connect(mapStateToProps)(Horoscope);
import React, { Component } from 'react';
import moment from 'moment';

export default class HomePage extends Component {
  constructor() {
    super();
    const initialDate = new Date('01/25/2020 22:00:00');
    this.state = {
      initialDate,
      diff: moment.duration(moment().diff(moment(initialDate)))
    };
  }

  componentDidMount() {
    this.startClock();
  }

  startClock = () => {
    this.setState(
      prevState => ({
        diff: moment.duration(moment().diff(moment(prevState.initialDate)))
      }),
      () => setTimeout(this.startClock, 1000)
    );
  };

  render() {
    const { diff } = this.state;
    return (
      <div>
        <span className="counter">{diff.days() + diff.months() * 30} days</span>
        <span className="counter">{diff.hours() < 10 ? `0${diff.hours()}` : diff.hours()}</span>

:
<span className="counter">{diff.minutes() < 10 ? `0${diff.minutes()}` : diff.minutes()}</span>:
        <span className="counter">{diff.seconds() < 10 ? `0${diff.seconds()}` : diff.seconds()}</span>
      </div>
    );
  }
}

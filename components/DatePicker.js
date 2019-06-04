import React, { Component } from 'react';
import DatePicker from 'react-native-datepicker';

 
export default class MyDatePicker extends Component {
  constructor(props){
    super(props)
    const { isCalender } = this.props;
    this.state = {date: isCalender ? "2016-05-15" : "12:10"}
  }
 
  render(){
    const { format, min, max, isCalender} = this.props;
    const CalenderIcon = require("../assets/Icon/calender.png"); 
    const DateIcon = require("../assets/Icon/clock.png"); 
    return (
      <DatePicker
        style={{width: 120}}
        date={this.state.date}
        mode={(isCalender) ? 'date' : 'time'}
        placeholder="select date"
        format={format}
        minDate={min}
        maxDate={max}
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        iconSource={(isCalender) ? CalenderIcon : DateIcon}
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0,
          },
          dateInput: {
            marginLeft: 36,
          }
          // ... You can check the source to find the other keys.
        }}
        onDateChange={(date) => {this.setState({date: date})}}
      />
    )
  }
}
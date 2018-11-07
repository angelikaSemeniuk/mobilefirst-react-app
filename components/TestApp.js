import React from 'react';
import { connect } from "react-redux";
import Calendar from "react-calendar/dist/entry.nostyle";
import { onChangeOnCalendar, onClickDay} from "../actions/actions";
import DisplayContent from "../container/DisplayContent";

class TestApp extends React.Component {

    render() {
        const typeOfCalendar = "US";
        const localeOfCalendar = "en";
        console.error("current Date",this.props.currentDate);
        return (
            <div>
                <Calendar
                    onChange={this.props.onChange.bind(this)}
                    value={this.props.currentDate}
                    calendarType={typeOfCalendar}
                    onClickDay={this.props.onClickDay.bind(this)}
                    locale={localeOfCalendar}
                />
                <DisplayContent/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        currentDate: state.currentDate,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onChange: (event) => {
            dispatch(onChangeOnCalendar(event));
        },
        onClickDay: (event) => {
            dispatch(onClickDay(event));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TestApp);
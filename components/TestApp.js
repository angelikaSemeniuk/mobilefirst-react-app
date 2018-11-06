import React from 'react';
import Calendar from "react-calendar/dist/entry.nostyle";
import { connect } from "react-redux";
import { onChangeOnCalendar, onClickDay} from "../actions/actions";

class TestApp extends React.Component {

    render() {
        console.error("Date", this.props.selectedDate);
        return (
            <div>
                <Calendar
                    onChange={this.props.onChange.bind(this)}
                    value={this.props.selectedDate}
                    calendarType={this.props.type}
                    onClickDay={this.props.onClickDay.bind(this)}
                    locale={this.props.locale}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        selectedDate: state.selectedDate,
        type: state.typeOfCalendar,
        locale: state.localeOfCalendar
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onChange: (event) => {
            dispatch(onChangeOnCalendar(event));
        },
        onClickDay: () => {
            dispatch(onClickDay());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TestApp);
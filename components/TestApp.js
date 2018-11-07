import React from 'react';
import { connect } from "react-redux";
import Calendar from "react-calendar/dist/entry.nostyle";
import DisplayContent from "../container/DisplayContent";
import { onChangeOnCalendar, onClickDay} from "../actions/actions";


class TestApp extends React.Component {

    render() {
        const typeOfCalendar = "US";
        const localeOfCalendar = "en";
        return (
            <div>
                {!this.props.selectedDay &&
                    <Calendar
                        value={this.props.currentDate}
                        calendarType={typeOfCalendar}
                        onClickDay={this.props.onClickDay.bind(this)}
                        locale={localeOfCalendar}
                    />
                }
                <DisplayContent />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        currentDate: state.currentDate,
        selectedDay: state.selectedDay,
        receiveOriginalImage: state.receiveOriginalImage
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onClickDay: (event) => {
            dispatch(onClickDay(event));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TestApp);
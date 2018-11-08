import React from 'react';
import { connect } from "react-redux";
import Calendar from "react-calendar/dist/entry.nostyle";
import DisplayContent from "../container/DisplayContent";
import { onChangeOnCalendar, onClickDay, handleActionForDisplayContent } from "../actions/actions";


class TestApp extends React.Component {

    render() {
        const typeOfCalendar = "US";
        const localeOfCalendar = "en";
        return (
            <>
                <div className="header">
                    {
                        this.props.selectedDay &&
                        <i className="fa fa-angle-left fa-5x"
                           onClick={this.props.handleActionForDisplayContent.bind(this)}
                        />
                    }
                    <p>Super Film</p>
                </div>
                <div className="body">
                    {!this.props.selectedDay ? (
                        <>
                        <div className="top">
                            <img src= "../image/stasera-in-tv-programmi.jpg"/>
                            <p>To get a list of episodes, please select necessary year, month and day.</p>
                        </div>
                        <div className="bottom">
                            <Calendar
                                value={this.props.currentDate}
                                calendarType={typeOfCalendar}
                                onClickDay={this.props.onClickDay.bind(this)}
                                locale={localeOfCalendar}
                            />
                        </div>
                        </>
                    ) : (<DisplayContent />)}
                </div>
            </>
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
        },
        handleActionForDisplayContent: () => {
            dispatch(handleActionForDisplayContent());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TestApp);
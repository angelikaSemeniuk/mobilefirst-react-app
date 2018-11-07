import React from "react";
import { connect } from "react-redux";
import { handleActionForDisplayContent, makeRequestByImdbId } from "../actions/actions";

class DisplayContent extends React.Component {

    render() {
        console.error("action- in DisplayContent-episodes", this.props.episodes);
        const listOfItems = this.props.episodes.map((item, index) => (
            <li key={index}>
                <div>
                    <p>{item.title}</p>
                    {item.image.medium ?
                        <img src={item.image.medium} onClick={this.props.makeRequestByImdbId.bind(this, item.imdbId)}/> :
                        <p>No image</p>
                    }
                    <p>{item.premiered}</p>
                    <p>Season: {item.season}</p>
                    <p>Episode: {item.episode}</p>
                </div>
            </li>
        ));
        return(
            <div>
                { this.props.selectedDay &&
                    <button onClick={this.props.handleActionForDisplayContent.bind(this)}>Back to calendar</button>
                }
                <ul>{listOfItems}</ul>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        episodes: state.episodes,
        selectedDay: state.selectedDay
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        handleActionForDisplayContent: () => {
            dispatch(handleActionForDisplayContent());
        },
        makeRequestByImdbId: (id, event) => {
            event.preventDefault();
            dispatch(makeRequestByImdbId(id))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(DisplayContent);
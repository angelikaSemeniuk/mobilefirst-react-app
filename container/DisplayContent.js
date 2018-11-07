import React from "react";
import { connect } from "react-redux";
import { handleActionForDisplayContent } from "../actions/actions";

class DisplayContent extends React.Component {

    componentWillUnmount() {
        this.props.handleActionForDisplayContent();


    }

    render() {
        console.error("action- in DisplayContent-episodes", this.props.episodes);
        const listOfItems = this.props.episodes.map((item, index) => (
            <li key={index}>
                <div>
                    <p>{item.title}</p>
                    {
                        item.image.medium &&
                        <img src={item.image.medium}/>
                    }
                    <p>{item.premiered}</p>
                    <p>Season: {item.season}</p>
                    <p>Episode: {item.episode}</p>
                </div>
            </li>
        ));
        return(
            <ul>{listOfItems}</ul>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        episodes: state.episodes
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        handleActionForDisplayContent: () => {
            dispatch(handleActionForDisplayContent());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(DisplayContent);